import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Award, Clock, Download, ExternalLink, FolderKanban, ThumbsUp } from "lucide-react";
import { useState } from "react";
import { activities as seed, type Activity } from "@/data/activities";
import { currentUser as u } from "@/data/profiles";
import { ActivityForm } from "@/components/ActivityForm";
import { Avatar, Btn, Tag, Verified } from "@/components/ui-kit";

export const Route = createFileRoute("/profile")({
  head: () => ({
    meta: [
      { title: "Profile & Activities — LeoConnect Hub" },
      { name: "description", content: "Showcase your service portfolio, log new experience and track impact badges." },
      { property: "og:title", content: "Profile & Activities — LeoConnect Hub" },
      { property: "og:description", content: "Your professional and service portfolio as a Leo or Lion." },
    ],
  }),
  component: ProfilePage,
});

const tabs = ["Professional & Service Portfolio", "Log New Activity / Experience", "Impact Metrics & Badges"];
const kindTone = { "Service Project": "sage", Startup: "crimson", Professional: "navy" } as const;

function ProfilePage() {
  const [tab, setTab] = useState(0);
  const [items, setItems] = useState<Activity[]>(seed);

  return (
    <>
      <div className="bg-hero">
        <div className="mx-auto max-w-7xl px-4 pb-10 pt-14 sm:px-6">
          <div className="flex flex-col gap-6 rounded-3xl bg-card p-6 shadow-lift sm:flex-row sm:items-center sm:p-8">
            <Avatar initials={u.initials} size="xl" />
            <div className="flex-1">
              <h1 className="flex items-center gap-2 text-2xl font-extrabold text-primary-deep sm:text-3xl">{u.name}<Verified className="h-6 w-6" /></h1>
              <p className="mt-1 font-semibold text-primary">{u.title}</p>
              <p className="text-sm text-muted-foreground">{u.club}</p>
              <div className="mt-3 flex flex-wrap gap-2"><Tag tone="gold">Verified Member</Tag><Tag tone="navy">{u.memberType}</Tag></div>
            </div>
            <Btn variant="gold"><Download className="h-4 w-4" />Download CV</Btn>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <div className="mb-8 flex gap-1 overflow-x-auto rounded-xl border border-border bg-card p-1">
          {tabs.map((t, i) => (
            <button key={t} onClick={() => setTab(i)} className="relative min-h-11 flex-1 whitespace-nowrap rounded-lg px-4 text-sm font-semibold">
              {tab === i && <motion.span layoutId="tab" className="absolute inset-0 rounded-lg bg-primary" />}
              <span className={`relative ${tab === i ? "text-primary-foreground" : "text-muted-foreground"}`}>{t}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={tab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>
            {tab === 0 && (
              <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
                <div className="grid gap-5 sm:grid-cols-2">
                  {items.map((a) => (
                    <motion.div key={a.id} whileHover={{ y: -4 }} className="rounded-2xl border border-border bg-card p-5 shadow-card hover:shadow-lift">
                      <div className="flex items-center justify-between"><Tag tone={kindTone[a.kind]}>{a.kind}</Tag><span className="text-xs text-muted-foreground">{a.year}</span></div>
                      <h3 className="mt-3 font-bold text-primary-deep">{a.name}</h3>
                      <p className="text-sm text-primary">{a.role} · {a.org}</p>
                      <p className="mt-2 text-sm text-muted-foreground">{a.description}</p>
                      <div className="mt-3 flex flex-wrap gap-1.5">{a.skills.map((s) => <Tag key={s}>{s}</Tag>)}</div>
                      {a.link && <a href={a.link} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-crimson">View portfolio<ExternalLink className="h-3.5 w-3.5" /></a>}
                    </motion.div>
                  ))}
                </div>
                <aside className="h-fit rounded-2xl border border-border bg-card p-5 shadow-card">
                  <h3 className="font-bold text-primary-deep">Core Skills</h3>
                  <div className="mt-3 flex flex-wrap gap-2">{u.skills.map((s) => <Tag key={s}>{s}</Tag>)}</div>
                </aside>
              </div>
            )}
            {tab === 1 && <div className="mx-auto max-w-3xl"><ActivityForm onAdd={(a) => { setItems([a, ...items]); setTab(0); }} /></div>}
            {tab === 2 && (
              <div className="grid gap-8">
                <div className="grid gap-5 sm:grid-cols-3">
                  {[
                    { icon: Clock, v: u.metrics.serviceHours, l: "Service Hours", c: "bg-primary text-primary-foreground" },
                    { icon: FolderKanban, v: u.metrics.projectsLed, l: "Projects Led", c: "bg-crimson text-crimson-foreground" },
                    { icon: ThumbsUp, v: u.metrics.endorsements, l: "Verified Skill Endorsements", c: "bg-sage text-primary-foreground" },
                  ].map((m) => (
                    <div key={m.l} className={`rounded-2xl p-6 shadow-card ${m.c}`}>
                      <m.icon className="h-7 w-7 opacity-80" /><p className="mt-4 text-4xl font-extrabold">{m.v}</p><p className="text-sm opacity-85">{m.l}</p>
                    </div>
                  ))}
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {u.badges.map((b) => (
                    <motion.div key={b.name} whileHover={{ scale: 1.03 }} className="rounded-2xl border border-gold/50 bg-card p-5 text-center shadow-card">
                      <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-gold text-gold-foreground"><Award className="h-7 w-7" /></span>
                      <p className="mt-3 font-bold text-primary-deep">{b.name}</p><p className="text-xs text-muted-foreground">{b.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}
