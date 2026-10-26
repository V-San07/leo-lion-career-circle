import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-primary-deep text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-1">
          <Logo light />
          <p className="mt-4 text-sm text-primary-foreground/70">Connecting Leo and Lion talent for careers, startups and service-driven leadership.</p>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-bold text-gold">Quick Links</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/75">
            <li><Link to="/opportunities" className="hover:text-gold">Opportunity Board</Link></li>
            <li><Link to="/talent" className="hover:text-gold">Talent Directory</Link></li>
            <li><Link to="/profile" className="hover:text-gold">My Profile</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-bold text-gold">District Contacts</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/75">
            <li className="flex gap-2"><MapPin className="h-4 w-4 shrink-0" />Multiple District 306, Sri Lanka</li>
            <li className="flex gap-2"><Mail className="h-4 w-4 shrink-0" />hello@leoconnect.org</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 shrink-0" />+94 11 000 0000</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-bold text-gold">Legal</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/75">
            <li><a href="#" className="hover:text-gold">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-gold">Terms of Use</a></li>
            <li><a href="#" className="hover:text-gold">Code of Conduct</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 py-5 text-center text-xs text-primary-foreground/60">
        © {new Date().getFullYear()} LeoConnect Hub. A service initiative for Leos & Lions.
      </div>
    </footer>
  );
}
