import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Briefcase, Compass, Eye, Handshake, Rocket, Sparkles, Target, UserCircle, Users } from "lucide-react";
import { Btn, Section } from "@/components/ui-kit";
import { FAQ } from "@/components/FAQ";
import { usePostModal } from "@/components/PostOpportunityModal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LeoConnect Hub — Empowering Leo & Lion Talent" },
      { name: "description", content: "The career hub for Leos and Lions: startup roles, enterprise vacancies, internships and micro-tasks." },
      { property: "og:title", content: "LeoConnect Hub — Empowering Leo & Lion Talent" },
      { property: "og:description", content: "Jobs, startups and leadership networking for Leo and Lion members." },
    ],
  }),
  component: Home,
});

const stats = [
  { v: "600+", l: "Active Members", icon: Users },
  { v: "180+", l: "Opportunities Listed", icon: Briefcase },
  { v: "45+", l: "Member Startups", icon: Rocket },
];

const values = [
  { icon: Rocket, title: "Leos hire Leos", text: "Young founders recruit fellow Leos they've already served alongside — trusted teammates from day one.", tone: "bg-crimson/10 text-crimson" },
  { icon: Briefcase, title: "Lions hire verified talent", text: "Lion business leaders access young professionals with proven leadership and service records.", tone: "bg-primary/10 text-primary" },
  { icon: Target, title: "Skill-matched for all ages", text: "Every member can discover roles that match their skills — from micro-tasks to executive positions.", tone: "bg-sage-soft text-sage-foreground" },
];

const steps = [
  { icon: UserCircle, title: "Build Profile", text: "Showcase professional skills alongside your club leadership history." },
  { icon: Compass, title: "Post or Discover", text: "Any member can list vacancies; all members can apply." },
  { icon: Handshake, title: "Connect & Grow", text: "Collaborate on startups, corporate roles and freelance tasks." },
];

function Home() {
  const { openPost } = usePostModal();
  return (
    <>
      <section className="relative overflow-hidden bg-hero text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 pb-24 pt-20 sm:px-6 lg:pt-28">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/15 px-3 py-1 text-xs font-semibold text-gold">
              <Sparkles className="h-3.5 w-3.5" />The Career Hub for Leos & Lions
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] sm:text-6xl">
              Empowering Leo & Lion Talent Across Our <span className="text-gold">Global Network</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-primary-foreground/80">
              From Leo-founded startups seeking their first team to Lion enterprises hiring verified young leaders — find work that builds careers and communities.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/opportunities"><Btn variant="gold" className="px-6">Browse Opportunities<ArrowRight className="h-4 w-4" /></Btn></Link>
              <Btn variant="light" className="px-6" onClick={openPost}>Post a Vacancy</Btn>
            </div>
          </motion.div>
          <div className="mt-16 grid gap-4 sm:grid-cols-3">
            {stats.map((s, i) => (
              <motion.div key={s.l} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.1 }}
                className="flex items-center gap-4 rounded-2xl border border-primary-foreground/15 bg-primary-foreground/10 p-5 backdrop-blur">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-gold text-gold-foreground"><s.icon className="h-6 w-6" /></span>
                <div><p className="text-3xl font-extrabold">{s.v}</p><p className="text-sm text-primary-foreground/70">{s.l}</p></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Section eyebrow="What & Why" title="Mutual value across generations" sub="One trusted network where service experience becomes career currency.">
        <div className="grid gap-6 md:grid-cols-3">
          {values.map((v, i) => (
            <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -6 }}
              className="rounded-2xl border border-border bg-card p-7 shadow-card transition-shadow hover:shadow-lift">
              <span className={`grid h-12 w-12 place-items-center rounded-xl ${v.tone}`}><v.icon className="h-6 w-6" /></span>
              <h3 className="mt-5 text-xl font-bold text-primary-deep">{v.title}</h3>
              <p className="mt-2 text-muted-foreground">{v.text}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <div className="bg-soft">
        <Section eyebrow="How it works" title="Three steps to your next opportunity">
          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}
                className="relative rounded-2xl border border-border bg-card p-7 shadow-card">
                <span className="absolute right-6 top-5 text-5xl font-extrabold text-secondary">0{i + 1}</span>
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary text-primary-foreground"><s.icon className="h-6 w-6" /></span>
                <h3 className="mt-5 text-xl font-bold text-primary-deep">{s.title}</h3>
                <p className="mt-2 text-muted-foreground">{s.text}</p>
              </motion.div>
            ))}
          </div>
        </Section>
      </div>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid overflow-hidden rounded-3xl border border-border shadow-lift md:grid-cols-2">
          <div className="bg-primary p-10 text-primary-foreground sm:p-12">
            <Eye className="h-8 w-8 text-gold" />
            <h3 className="mt-4 text-2xl font-extrabold">Our Vision</h3>
            <p className="mt-3 text-primary-foreground/80">A network where every Leo and Lion can turn leadership through service into lasting career advancement and economic empowerment.</p>
          </div>
          <div className="bg-card p-10 sm:p-12">
            <Target className="h-8 w-8 text-crimson" />
            <h3 className="mt-4 text-2xl font-extrabold text-primary-deep">Our Mission</h3>
            <ul className="mt-3 space-y-2 text-muted-foreground">
              <li>• Advance careers through skill-matched opportunities</li>
              <li>• Foster cross-generational mentorship between Leos and Lions</li>
              <li>• Grow member startups and community-driven enterprises</li>
            </ul>
          </div>
        </div>
      </section>

      <Section eyebrow="FAQ" title="Questions, answered" className="pt-0">
        <FAQ />
      </Section>
    </>
  );
}
