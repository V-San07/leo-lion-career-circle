import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Plus, X, LogIn } from "lucide-react";
import { useState } from "react";
import { Logo } from "./Logo";
import { Btn } from "./ui-kit";
import { usePostModal } from "./PostOpportunityModal";

const links = [
  { to: "/", label: "Home" },
  { to: "/opportunities", label: "Opportunity Board" },
  { to: "/profile", label: "Profile & Activities" },
  { to: "/talent", label: "Talent Directory" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { openPost } = usePostModal();
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-card/85 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Logo />
        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition hover:text-primary data-[status=active]:bg-secondary data-[status=active]:text-primary"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <Btn variant="crimson" onClick={openPost}><Plus className="h-4 w-4" />Post Opportunity</Btn>
          <Btn variant="outline"><LogIn className="h-4 w-4" />Sign In / Register</Btn>
        </div>
        <button className="grid h-11 w-11 place-items-center rounded-lg hover:bg-secondary lg:hidden" onClick={() => setOpen(true)} aria-label="Open menu">
          <Menu />
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <>
            <motion.div className="fixed inset-0 z-40 bg-primary-deep/40 lg:hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(false)} />
            <motion.aside
              className="fixed inset-y-0 right-0 z-50 flex h-dvh w-80 max-w-[85vw] flex-col gap-2 bg-card p-5 shadow-lift lg:hidden"
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", damping: 28, stiffness: 260 }}
            >
              <div className="mb-4 flex items-center justify-between">
                <Logo />
                <button className="grid h-11 w-11 place-items-center rounded-lg hover:bg-secondary" onClick={() => setOpen(false)} aria-label="Close menu"><X /></button>
              </div>
              {links.map((l) => (
                <Link key={l.to} to={l.to} onClick={() => setOpen(false)} activeOptions={{ exact: l.to === "/" }}
                  className="rounded-lg px-4 py-3 font-medium text-foreground data-[status=active]:bg-secondary data-[status=active]:text-primary">
                  {l.label}
                </Link>
              ))}
              <div className="mt-auto grid gap-2">
                <Btn variant="crimson" onClick={() => { setOpen(false); openPost(); }}><Plus className="h-4 w-4" />Post Opportunity</Btn>
                <Btn variant="outline">Sign In / Register</Btn>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
