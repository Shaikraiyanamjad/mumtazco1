import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const items = [
  {
    quote:
      "Mumtaz transformed our wedding into a true royal Hyderabadi affair. Every floral, every drape, every detail felt sacred. Our families still speak of it.",
    name: "Ayesha & Imran",
    role: "Wedding · Chicago, IL",
  },
  {
    quote:
      "The artistry is on another level. They didn't just decorate a venue — they composed an emotional experience our guests will never forget.",
    name: "Priya Reddy",
    role: "Reception · Naperville, IL",
  },
  {
    quote:
      "From concept to clean-up, the team made everything effortless. The stage was breathtaking — a perfect blend of heritage and modern luxury.",
    name: "The Khan Family",
    role: "Engagement · Houston, TX",
  },
];

export default function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % items.length), 6500);
    return () => clearInterval(t);
  }, []);
  const t = items[i];

  return (
    <section className="relative py-28 md:py-36 bg-background overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-5xl px-5 lg:px-8 text-center">
        <p className="text-xs tracking-[0.4em] uppercase text-primary font-semibold">— Kind Words</p>
        <h2 className="mt-4 font-display text-4xl md:text-6xl text-foreground">
          Loved by <span className="italic text-gradient-gold">Families</span>
        </h2>

        <div className="mt-14 relative">
          <div className="absolute -inset-4 bg-gradient-gold opacity-10 blur-3xl rounded-[3rem]" />
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.6 }}
              className="relative glass rounded-3xl bg-card border border-border shadow-luxe p-10 md:p-14"
            >
              <Quote className="mx-auto text-gold" size={42} />
              <p className="mt-6 font-display text-2xl md:text-3xl leading-relaxed text-foreground italic">
                "{t.quote}"
              </p>
              <div className="mt-8 flex items-center justify-center gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} size={16} fill="currentColor" />
                ))}
              </div>
              <div className="mt-4 font-display text-lg text-foreground">{t.name}</div>
              <div className="text-xs tracking-widest uppercase text-muted-foreground">{t.role}</div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={() => setI((p) => (p - 1 + items.length) % items.length)}
              className="w-11 h-11 rounded-full border border-border bg-card hover:bg-gold/10 hover:border-gold/50 transition flex items-center justify-center"
              aria-label="Previous"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {items.map((_, k) => (
                <button
                  key={k}
                  onClick={() => setI(k)}
                  aria-label={`Go to ${k + 1}`}
                  className={`h-1.5 rounded-full transition-all ${k === i ? "w-8 bg-gradient-gold" : "w-2 bg-border"}`}
                />
              ))}
            </div>
            <button
              onClick={() => setI((p) => (p + 1) % items.length)}
              className="w-11 h-11 rounded-full border border-border bg-card hover:bg-gold/10 hover:border-gold/50 transition flex items-center justify-center"
              aria-label="Next"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
