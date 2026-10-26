import { useState } from "react";
import { X } from "lucide-react";
import type { Activity, ActivityKind } from "@/data/activities";
import { Btn, Tag, inputCls } from "./ui-kit";

export function ActivityForm({ onAdd }: { onAdd: (a: Activity) => void }) {
  const [skills, setSkills] = useState<string[]>([]);
  const [skill, setSkill] = useState("");
  const addSkill = () => { const s = skill.trim(); if (s && !skills.includes(s)) setSkills([...skills, s]); setSkill(""); };

  return (
    <form
      className="grid gap-5 rounded-2xl border border-border bg-card p-6 shadow-card sm:p-8"
      onSubmit={(e) => {
        e.preventDefault();
        const f = new FormData(e.currentTarget);
        onAdd({
          id: crypto.randomUUID(), name: String(f.get("name")), org: String(f.get("org")), role: String(f.get("role")),
          kind: f.get("kind") as ActivityKind, year: String(new Date().getFullYear()), description: String(f.get("desc")),
          skills, link: String(f.get("link") || "") || undefined,
        });
        e.currentTarget.reset(); setSkills([]);
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-1.5 text-sm font-medium">Project Name<input name="name" required className={inputCls} /></label>
        <label className="grid gap-1.5 text-sm font-medium">Type<select name="kind" className={inputCls}><option>Service Project</option><option>Startup</option><option>Professional</option></select></label>
        <label className="grid gap-1.5 text-sm font-medium">Club / Company<input name="org" required className={inputCls} /></label>
        <label className="grid gap-1.5 text-sm font-medium">Role<input name="role" required className={inputCls} /></label>
      </div>
      <label className="grid gap-1.5 text-sm font-medium">Description<textarea name="desc" rows={4} required className={inputCls + " py-2"} /></label>
      <div className="grid gap-1.5 text-sm font-medium">
        Skill Tags
        <div className="flex gap-2">
          <input value={skill} onChange={(e) => setSkill(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); addSkill(); } }} className={inputCls} placeholder="Type and press Enter" />
          <Btn type="button" variant="outline" onClick={addSkill}>Add</Btn>
        </div>
        <div className="flex flex-wrap gap-1.5">{skills.map((s) => (
          <button type="button" key={s} onClick={() => setSkills(skills.filter((x) => x !== s))}><Tag>{s}<X className="h-3 w-3" /></Tag></button>
        ))}</div>
      </div>
      <label className="grid gap-1.5 text-sm font-medium">Portfolio Link<input name="link" type="url" className={inputCls} placeholder="https://" /></label>
      <Btn type="submit" className="justify-self-start">Save Activity</Btn>
    </form>
  );
}
