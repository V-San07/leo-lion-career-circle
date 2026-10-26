import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, FileText, Upload, X } from "lucide-react";
import type { Job } from "@/data/jobs";
import { SlideOver } from "./Modal";
import { Btn, Tag, inputCls } from "./ui-kit";

export function ApplicationModal({ job, onClose }: { job: Job | null; onClose: () => void }) {
  const [file, setFile] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => { if (job) { setFile(null); setProgress(0); setDone(false); } }, [job]);
  useEffect(() => {
    if (!file || progress >= 100) return;
    const t = setTimeout(() => setProgress((p) => Math.min(100, p + 20)), 120);
    return () => clearTimeout(t);
  }, [file, progress]);

  return (
    <SlideOver open={!!job} onClose={onClose} title="Apply for this role">
      {job && (done ? (
        <div className="py-16 text-center">
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}><CheckCircle2 className="mx-auto h-16 w-16 text-sage" /></motion.div>
          <h4 className="mt-4 text-xl font-bold text-primary-deep">Application sent!</h4>
          <p className="mt-2 text-sm text-muted-foreground">{job.poster.name} will receive your profile and CV.</p>
          <Btn className="mt-6" onClick={onClose}>Back to board</Btn>
        </div>
      ) : (
        <form className="grid gap-4" onSubmit={(e) => { e.preventDefault(); setDone(true); }}>
          <div className="rounded-xl bg-secondary p-4">
            <p className="font-bold text-primary-deep">{job.title}</p>
            <p className="text-sm text-muted-foreground">{job.company}</p>
            <div className="mt-2 flex flex-wrap gap-1.5">{job.skills.map((s) => <Tag key={s}>{s}</Tag>)}</div>
          </div>
          <label className="grid gap-1.5 text-sm font-medium">Full name<input required defaultValue="Kasun Dissanayake" className={inputCls} /></label>
          <label className="grid gap-1.5 text-sm font-medium">Email<input required type="email" defaultValue="kasun@example.com" className={inputCls} /></label>
          <div className="grid gap-1.5 text-sm font-medium">
            CV / Resume
            <input ref={ref} type="file" accept=".pdf,.doc,.docx" className="hidden" onChange={(e) => { const f = e.target.files?.[0]; if (f) { setFile(f.name); setProgress(0); } }} />
            {!file ? (
              <button type="button" onClick={() => ref.current?.click()} className="flex flex-col items-center gap-2 rounded-xl border-2 border-dashed border-sage/60 bg-sage-soft/50 p-6 text-sage-foreground transition hover:border-primary">
                <Upload className="h-6 w-6" /><span>Click to attach CV (PDF, DOC)</span>
                <span className="text-xs font-normal text-muted-foreground">or <span className="underline" onClick={(e) => { e.stopPropagation(); setFile("Kasun_Dissanayake_CV.pdf"); }}>use profile CV</span></span>
              </button>
            ) : (
              <div className="rounded-xl border border-border p-3">
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-primary" />
                  <span className="flex-1 truncate font-normal">{file}</span>
                  <button type="button" onClick={() => setFile(null)} aria-label="Remove"><X className="h-4 w-4" /></button>
                </div>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-muted"><motion.div className="h-full bg-sage" animate={{ width: `${progress}%` }} /></div>
                <p className="mt-1 text-xs font-normal text-muted-foreground">{progress < 100 ? `Uploading… ${progress}%` : "Uploaded"}</p>
              </div>
            )}
          </div>
          <label className="grid gap-1.5 text-sm font-medium">Cover note<textarea rows={4} className={inputCls + " py-2"} placeholder="Why are you a great fit?" /></label>
          <Btn type="submit" disabled={!file || progress < 100}>Submit Application</Btn>
        </form>
      ))}
    </SlideOver>
  );
}
