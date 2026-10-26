import { createContext, useContext, useState, type ReactNode } from "react";
import { CheckCircle2 } from "lucide-react";
import { SlideOver } from "./Modal";
import { Btn, inputCls } from "./ui-kit";
import { roleTypes, posterTypes } from "@/data/jobs";

const Ctx = createContext<{ openPost: () => void }>({ openPost: () => {} });
export const usePostModal = () => useContext(Ctx);

export function PostModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [done, setDone] = useState(false);
  const close = () => { setOpen(false); setTimeout(() => setDone(false), 300); };
  return (
    <Ctx.Provider value={{ openPost: () => setOpen(true) }}>
      {children}
      <SlideOver open={open} onClose={close} title="Post an Opportunity">
        {done ? (
          <div className="py-16 text-center">
            <CheckCircle2 className="mx-auto h-14 w-14 text-sage" />
            <h4 className="mt-4 text-xl font-bold text-primary-deep">Opportunity submitted</h4>
            <p className="mt-2 text-sm text-muted-foreground">It will appear on the board after a quick review.</p>
            <Btn className="mt-6" onClick={close}>Done</Btn>
          </div>
        ) : (
          <form className="grid gap-4" onSubmit={(e) => { e.preventDefault(); setDone(true); }}>
            <p className="rounded-lg bg-sage-soft p-3 text-xs text-sage-foreground">Open to every registered Leo and Lion — startup roles, corporate vacancies, internships or club tasks.</p>
            <label className="grid gap-1.5 text-sm font-medium">Role title<input required className={inputCls} placeholder="e.g. Frontend Developer" /></label>
            <label className="grid gap-1.5 text-sm font-medium">Company / Club<input required className={inputCls} placeholder="e.g. NeuroLeaf AI" /></label>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-1.5 text-sm font-medium">Role type<select className={inputCls}>{roleTypes.map((r) => <option key={r}>{r}</option>)}</select></label>
              <label className="grid gap-1.5 text-sm font-medium">Posting as<select className={inputCls}>{posterTypes.map((r) => <option key={r}>{r}</option>)}</select></label>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-1.5 text-sm font-medium">Location<input className={inputCls} placeholder="Colombo / Remote" /></label>
              <label className="grid gap-1.5 text-sm font-medium">Compensation<input className={inputCls} placeholder="LKR 100k/mo" /></label>
            </div>
            <label className="grid gap-1.5 text-sm font-medium">Description<textarea required rows={4} className={inputCls + " py-2"} /></label>
            <Btn type="submit" variant="crimson">Publish Opportunity</Btn>
          </form>
        )}
      </SlideOver>
    </Ctx.Provider>
  );
}
