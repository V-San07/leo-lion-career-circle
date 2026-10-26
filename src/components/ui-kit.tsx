import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import type { ReactNode, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "gold" | "crimson" | "outline" | "ghost" | "light";
const variants: Record<Variant, string> = {
  primary: "bg-primary text-primary-foreground hover:bg-primary-deep shadow-card",
  gold: "bg-gold text-gold-foreground hover:brightness-95 shadow-card",
  crimson: "bg-crimson text-crimson-foreground hover:brightness-110 shadow-card",
  outline: "border border-border bg-card text-foreground hover:border-primary hover:text-primary",
  ghost: "text-foreground hover:bg-secondary",
  light: "border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10",
};

export function Btn({ variant = "primary", className, ...p }: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  return (
    <button
      {...p}
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-5 text-sm font-semibold transition-all active:scale-[0.98] disabled:opacity-50",
        variants[variant],
        className,
      )}
    />
  );
}

export function Verified({ className }: { className?: string }) {
  return <BadgeCheck className={cn("h-4 w-4 fill-gold text-gold-foreground", className)} aria-label="Verified" />;
}

export function Tag({ children, tone = "sage" }: { children: ReactNode; tone?: "sage" | "gold" | "crimson" | "navy" }) {
  const tones = {
    sage: "bg-sage-soft text-sage-foreground",
    gold: "bg-gold/25 text-gold-foreground",
    crimson: "bg-crimson/10 text-crimson",
    navy: "bg-secondary text-secondary-foreground",
  };
  return <span className={cn("inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium", tones[tone])}>{children}</span>;
}

export function Avatar({ initials, size = "md" }: { initials: string; size?: "md" | "lg" | "xl" }) {
  const s = { md: "h-11 w-11 text-sm", lg: "h-14 w-14 text-base", xl: "h-28 w-28 text-3xl" }[size];
  return (
    <div className={cn("grid shrink-0 place-items-center rounded-full bg-primary font-bold text-primary-foreground ring-4 ring-gold/40", s)}>
      {initials}
    </div>
  );
}

export function Section({ eyebrow, title, sub, children, className }: { eyebrow?: string; title: string; sub?: string; children: ReactNode; className?: string }) {
  return (
    <section className={cn("mx-auto max-w-7xl px-4 py-20 sm:px-6", className)}>
      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto mb-12 max-w-2xl text-center">
        {eyebrow && <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-crimson">{eyebrow}</p>}
        <h2 className="text-3xl font-extrabold text-primary-deep sm:text-4xl">{title}</h2>
        {sub && <p className="mt-4 text-muted-foreground">{sub}</p>}
      </motion.div>
      {children}
    </section>
  );
}

export function PageHeader({ title, sub, children }: { title: string; sub: string; children?: ReactNode }) {
  return (
    <div className="bg-hero text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="text-3xl font-extrabold sm:text-4xl">{title}</motion.h1>
        <p className="mt-3 max-w-2xl text-primary-foreground/80">{sub}</p>
        {children}
      </div>
    </div>
  );
}

export const inputCls =
  "min-h-11 w-full rounded-lg border border-input bg-card px-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20";
