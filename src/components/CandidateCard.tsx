import { motion } from "framer-motion";
import { MessageSquare, MapPin } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { Profile } from "@/data/profiles";
import { Avatar, Btn, Tag, Verified } from "./ui-kit";

const statusTone = { "Open for Roles": "sage", Hiring: "crimson", "Open for Startup Collaboration": "gold" } as const;

export function CandidateCard({ p, onMessage }: { p: Profile; onMessage: (p: Profile) => void }) {
  return (
    <motion.article layout initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} whileHover={{ y: -4 }}
      className="flex flex-col rounded-2xl border border-border bg-card p-5 shadow-card transition-shadow hover:shadow-lift">
      <div className="flex items-start gap-3">
        <Avatar initials={p.initials} size="lg" />
        <div className="min-w-0">
          <h3 className="flex items-center gap-1.5 font-bold text-primary-deep">{p.name}{p.verified && <Verified />}</h3>
          <p className="text-sm text-muted-foreground">{p.title}</p>
          <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground"><MapPin className="h-3 w-3" />{p.club}</p>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-1.5">
        <Tag tone="navy">{p.memberType}</Tag>
        <Tag tone={statusTone[p.status]}>{p.status}</Tag>
      </div>
      <p className="mt-3 text-sm text-muted-foreground">{p.bio}</p>
      <div className="mt-3 flex flex-wrap gap-1.5">{p.skills.map((s) => <Tag key={s}>{s}</Tag>)}</div>
      <div className="mt-auto grid grid-cols-2 gap-2 pt-5">
        <Link to="/profile"><Btn variant="outline" className="w-full">View Profile</Btn></Link>
        <Btn onClick={() => onMessage(p)}><MessageSquare className="h-4 w-4" />Message</Btn>
      </div>
    </motion.article>
  );
}
