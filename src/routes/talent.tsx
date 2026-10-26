import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { districts, profiles, skillOptions, type Profile } from "@/data/profiles";
import { CandidateCard } from "@/components/CandidateCard";
import { SlideOver } from "@/components/Modal";
import { Btn, PageHeader, inputCls } from "@/components/ui-kit";

export const Route = createFileRoute("/talent")({
  head: () => ({
    meta: [
      { title: "Talent Directory — LeoConnect Hub" },
      { name: "description", content: "Discover Leos and Lions by skill for hiring, co-founding and collaboration." },
      { property: "og:title", content: "Talent Directory — LeoConnect Hub" },
      { property: "og:description", content: "Find fellow Leos and Lions by skill, club or district." },
    ],
  }),
  component: Talent,
});

function Talent() {
  const [skill, setSkill] = useState("All");
  const [district, setDistrict] = useState("All");
  const [type, setType] = useState("All");
  const [msg, setMsg] = useState<Profile | null>(null);
  const [sent, setSent] = useState(false);

  const list = useMemo(() => profiles.filter((p) =>
    (skill === "All" || p.skills.some((s) => s.toLowerCase().includes(skill.toLowerCase()))) &&
    (district === "All" || p.district === district) && (type === "All" || p.memberType === type),
  ), [skill, district, type]);

  return (
    <>
      <PageHeader title="Talent Directory & Network" sub="Find fellow Leos and Lions for hiring, startup co-founding or project collaboration.">
        <div className="mt-8 grid gap-3 rounded-2xl bg-card p-3 shadow-lift md:grid-cols-3">
          <select value={skill} onChange={(e) => setSkill(e.target.value)} className={inputCls} aria-label="Skill"><option value="All">All skills</option>{skillOptions.map((s) => <option key={s}>{s}</option>)}</select>
          <select value={district} onChange={(e) => setDistrict(e.target.value)} className={inputCls} aria-label="District"><option value="All">All districts</option>{districts.map((d) => <option key={d}>{d}</option>)}</select>
          <select value={type} onChange={(e) => setType(e.target.value)} className={inputCls} aria-label="Member type"><option value="All">All members</option><option>Leo</option><option>Lion</option><option>Leo-Lion</option></select>
        </div>
      </PageHeader>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <p className="mb-5 text-sm text-muted-foreground">{list.length} members found</p>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <AnimatePresence mode="popLayout">{list.map((p) => <CandidateCard key={p.id} p={p} onMessage={(x) => { setSent(false); setMsg(x); }} />)}</AnimatePresence>
        </div>
        {list.length === 0 && <p className="py-16 text-center text-muted-foreground">No members match these filters.</p>}
      </div>
      <SlideOver open={!!msg} onClose={() => setMsg(null)} title={`Message ${msg?.name ?? ""}`}>
        {sent ? (
          <div className="py-16 text-center"><CheckCircle2 className="mx-auto h-14 w-14 text-sage" /><p className="mt-4 font-bold text-primary-deep">Message sent</p></div>
        ) : (
          <form className="grid gap-4" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
            <label className="grid gap-1.5 text-sm font-medium">Subject<input required className={inputCls} defaultValue="Let's collaborate" /></label>
            <label className="grid gap-1.5 text-sm font-medium">Message<textarea required rows={6} className={inputCls + " py-2"} /></label>
            <Btn type="submit">Send Message</Btn>
          </form>
        )}
      </SlideOver>
    </>
  );
}
