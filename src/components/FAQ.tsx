import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/data/faqs";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mx-auto grid max-w-3xl gap-3">
      {faqs.map((f, i) => (
        <div key={f.q} className="overflow-hidden rounded-xl border border-border bg-card shadow-card">
          <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-primary-deep">
            {f.q}
            <motion.span animate={{ rotate: open === i ? 180 : 0 }}><ChevronDown className="h-5 w-5 text-primary" /></motion.span>
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }}>
                <p className="px-5 pb-5 text-sm text-muted-foreground">{f.a}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
