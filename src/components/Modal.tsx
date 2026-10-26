import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import type { ReactNode } from "react";

export function SlideOver({ open, onClose, title, children }: { open: boolean; onClose: () => void; title: string; children: ReactNode }) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div className="fixed inset-0 z-50 bg-primary-deep/50 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} />
          <motion.div
            role="dialog" aria-label={title}
            className="fixed inset-y-0 right-0 z-50 flex w-full max-w-lg flex-col bg-card shadow-lift"
            initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", damping: 30, stiffness: 280 }}
          >
            <div className="flex items-center justify-between border-b border-border px-6 py-4">
              <h3 className="text-lg font-bold text-primary-deep">{title}</h3>
              <button onClick={onClose} className="grid h-10 w-10 place-items-center rounded-lg hover:bg-secondary" aria-label="Close"><X className="h-5 w-5" /></button>
            </div>
            <div className="flex-1 overflow-y-auto p-6">{children}</div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
