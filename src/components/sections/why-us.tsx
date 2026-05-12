import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Crown, Palette, Users, Globe2, Award, ShieldCheck } from "lucide-react";

const features = [
  { icon: Crown, title: "200 Years of Heritage", desc: "An unmatched lineage of artistry and craftsmanship." },
  { icon: Palette, title: "Unique Artistic Designs", desc: "Bespoke concepts crafted exclusively for your story." },
  { icon: Users, title: "Personalized Experiences", desc: "Hands-on collaboration from concept to celebration." },
  { icon: Globe2, title: "Cultural Excellence", desc: "Authentic traditions, beautifully executed." },
  { icon: Award, title: "Premium Decoration Expertise", desc: "Decades of refined event production know-how." },
  { icon: ShieldCheck, title: "Trusted by Families", desc: "Generations of clients across the United States." },
];

const stats = [
  { n: 200, suffix: "+", label: "Years Heritage" },
  { n: 1200, suffix: "+", label: "Events Designed" },
  { n: 70, suffix: "+", label: "Years as Shalimar" },
  { n: 100, suffix: "%", label: "Family Trusted" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1600;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setN(Math.floor(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return <span ref={ref}>{n}{suffix}</span>;
}

export default function WhyUs() {
  return (
    <section className="relative py-28 md:py-36 bg-ink text-cream overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0,rgba(212,175,55,0.18),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(139,0,0,0.4),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-xs tracking-[0.4em] uppercase text-gold">— Why Choose Us</p>
          <h2 className="mt-4 font-display text-4xl md:text-6xl">
            Crafted with <span className="italic text-gradient-gold">Devotion</span>
          </h2>
          <p className="mt-5 text-cream/70 text-lg">
            Every celebration is a heirloom moment — designed to be remembered for generations.
          </p>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (i % 3) * 0.08, duration: 0.6 }}
              className="glass-dark rounded-2xl p-7 hover:border-gold/50 hover:-translate-y-1 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center text-ink">
                <f.icon size={22} />
              </div>
              <h3 className="mt-5 font-display text-xl text-cream">{f.title}</h3>
              <p className="mt-2 text-sm text-cream/65 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-5">
          {stats.map((s) => (
            <div key={s.label} className="text-center glass-dark rounded-2xl py-8">
              <div className="font-display text-4xl md:text-5xl text-gradient-gold">
                <Counter to={s.n} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-[11px] tracking-[0.25em] uppercase text-cream/60">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
