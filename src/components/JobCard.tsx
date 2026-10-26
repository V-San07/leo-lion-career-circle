import { motion } from "framer-motion";
import { Banknote, Clock, MapPin, Flame } from "lucide-react";
import type { Job } from "@/data/jobs";
import { Btn, Tag, Verified } from "./ui-kit";

export function JobCard({ job, onApply, featured }: { job: Job; onApply: (j: Job) => void; featured?: boolean }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.97 }}
      whileHover={{ y: -4 }}
      className={`group flex flex-col rounded-2xl border bg-card p-5 shadow-card transition-shadow hover:shadow-lift ${featured ? "border-gold/60 ring-1 ring-gold/40" : "border-border"}`}
    >
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <Tag tone="navy">{job.roleType}</Tag>
        {featured && <Tag tone="gold">★ Featured</Tag>}
        {job.urgent && <Tag tone="crimson"><Flame className="h-3 w-3" />Urgent</Tag>}
        <span className="ml-auto flex items-center gap-1 text-xs text-muted-foreground"><Clock className="h-3 w-3" />{job.postedAgo}</span>
      </div>
      <h3 className="text-lg font-bold text-primary-deep group-hover:text-primary">{job.title}</h3>
      <p className="text-sm text-muted-foreground">{job.company}</p>
      <p className="mt-3 flex items-center gap-1.5 text-xs text-foreground">
        Posted by: <span className="font-semibold">{job.poster.name}</span>
        <span className="text-muted-foreground">({job.poster.member} – {job.poster.title})</span>
        {job.poster.verified && <Verified />}
      </p>
      <div className="mt-4 grid gap-1.5 text-sm text-muted-foreground">
        <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-sage" />{job.location} · {job.mode}</span>
        <span className="flex items-center gap-2"><Banknote className="h-4 w-4 text-sage" />{job.compensation}</span>
      </div>
      <div className="mt-4 flex flex-wrap gap-1.5">{job.skills.map((s) => <Tag key={s}>{s}</Tag>)}</div>
      <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
        <span className="text-xs font-medium text-muted-foreground">{job.posterType}</span>
        <Btn onClick={() => onApply(job)} className="min-h-10 px-4">Apply Now</Btn>
      </div>
    </motion.article>
  );
}
