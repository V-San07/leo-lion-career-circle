import { Link } from "@tanstack/react-router";

export function Logo({ light }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2.5">
      <span className="relative grid h-9 w-9 place-items-center rounded-lg bg-primary font-extrabold text-gold shadow-card">
        L<span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-gold ring-2 ring-card" />
      </span>
      <span className={light ? "text-primary-foreground" : "text-primary-deep"}>
        <span className="block text-base font-extrabold leading-none">LeoConnect <span className="text-gold">Hub</span></span>
        <span className={`text-[10px] font-medium uppercase tracking-widest ${light ? "text-primary-foreground/60" : "text-muted-foreground"}`}>Career Hub for Leos & Lions</span>
      </span>
    </Link>
  );
}
