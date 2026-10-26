import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence } from "framer-motion";
import { LayoutGrid, List, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { jobs, posterTypes, roleTypes, type Job } from "@/data/jobs";
import { JobCard } from "@/components/JobCard";
import { ApplicationModal } from "@/components/ApplicationModal";
import { PageHeader, inputCls } from "@/components/ui-kit";

export const Route = createFileRoute("/opportunities")({
  head: () => ({
    meta: [
      { title: "Opportunity Board — LeoConnect Hub" },
      { name: "description", content: "Browse startup roles, Lion enterprise jobs, internships and club micro-tasks." },
      { property: "og:title", content: "Opportunity Board — LeoConnect Hub" },
      { property: "og:description", content: "Jobs, startup hiring and micro-tasks for Leos and Lions." },
    ],
  }),
  component: Board,
});

function Board() {
  const [q, setQ] = useState("");
  const [role, setRole] = useState("All");
  const [poster, setPoster] = useState("All");
  const [loc, setLoc] = useState("All");
  const [view, setView] = useState<"grid" | "list">("grid");
  const [applying, setApplying] = useState<Job | null>(null);

  const filtered = useMemo(() => jobs.filter((j) =>
    (!q || `${j.title} ${j.company} ${j.skills.join(" ")}`.toLowerCase().includes(q.toLowerCase())) &&
    (role === "All" || j.roleType === role) &&
    (poster === "All" || j.posterType === poster) &&
    (loc === "All" || (loc === "Remote" ? j.mode === "Remote" : j.mode !== "Remote")),
  ), [q, role, poster, loc]);
  const featured = jobs.filter((j) => j.featured);

  return (
    <>
      <PageHeader title="Opportunity Board" sub="Startup teams, enterprise roles, internships and micro-tasks — posted by members, open to all members.">
        <div className="mt-8 grid gap-3 rounded-2xl bg-card p-3 shadow-lift md:grid-cols-[2fr_1fr_1fr_1fr]">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search role, keyword or skill" className={inputCls + " pl-9"} />
          </div>
          <select value={role} onChange={(e) => setRole(e.target.value)} className={inputCls} aria-label="Role type"><option value="All">All role types</option>{roleTypes.map((r) => <option key={r}>{r}</option>)}</select>
          <select value={poster} onChange={(e) => setPoster(e.target.value)} className={inputCls} aria-label="Poster type"><option value="All">All posters</option>{posterTypes.map((r) => <option key={r}>{r}</option>)}</select>
          <select value={loc} onChange={(e) => setLoc(e.target.value)} className={inputCls} aria-label="Location"><option value="All">Any location</option><option>Remote</option><option>On-site</option></select>
        </div>
      </PageHeader>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <h2 className="mb-5 text-xl font-bold text-primary-deep">★ Featured Vacancies</h2>
        <div className="grid gap-5 md:grid-cols-3">{featured.map((j) => <JobCard key={j.id} job={j} featured onApply={setApplying} />)}</div>

        <div className="mb-5 mt-14 flex items-center justify-between">
          <h2 className="text-xl font-bold text-primary-deep">All Opportunities <span className="text-sm font-medium text-muted-foreground">({filtered.length})</span></h2>
          <div className="flex rounded-lg border border-border bg-card p-1">
            {(["grid", "list"] as const).map((v) => (
              <button key={v} onClick={() => setView(v)} aria-label={`${v} view`} className={`grid h-9 w-9 place-items-center rounded-md transition ${view === v ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}>
                {v === "grid" ? <LayoutGrid className="h-4 w-4" /> : <List className="h-4 w-4" />}
              </button>
            ))}
          </div>
        </div>
        <div className={view === "grid" ? "grid gap-5 sm:grid-cols-2 lg:grid-cols-3" : "grid gap-4"}>
          <AnimatePresence mode="popLayout">{filtered.map((j) => <JobCard key={j.id} job={j} onApply={setApplying} />)}</AnimatePresence>
        </div>
        {filtered.length === 0 && <p className="py-16 text-center text-muted-foreground">No opportunities match your filters.</p>}
      </div>
      <ApplicationModal job={applying} onClose={() => setApplying(null)} />
    </>
  );
}
