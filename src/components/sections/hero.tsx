import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Star } from "lucide-react";
import hero from "@/assets/hero.jpg";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] w-full overflow-hidden">
      <img
        src={hero}
        alt="Luxury wedding stage decoration"
        className="absolute inset-0 w-full h-full object-cover scale-105"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.18),transparent_60%)]" />

      {/* floating ornaments */}
      <motion.div
        aria-hidden
        className="absolute -top-20 -left-20 w-96 h-96 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(212,175,55,0.25), transparent 70%)" }}
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(139,0,0,0.45), transparent 70%)" }}
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8 min-h-[100svh] flex flex-col justify-center pt-28 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 self-start glass rounded-full px-4 py-1.5 text-cream/90 text-xs tracking-[0.25em] uppercase"
        >
          <Sparkles size={14} className="text-gold" />
          Since Generations
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="mt-6 font-display text-cream text-[clamp(2.4rem,6.5vw,5.5rem)] leading-[1.02] max-w-5xl"
        >
          Luxury Wedding & Event<br />
          Decorations with{" "}
          <span className="italic text-gradient-gold">Timeless Heritage</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mt-7 max-w-2xl text-cream/80 text-base md:text-lg leading-relaxed"
        >
          We transform weddings, celebrations, and special occasions into unforgettable
          experiences through artistic decor, floral elegance, and cultural craftsmanship
          rooted in 200 years of Hyderabadi heritage.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#services"
            className="group inline-flex items-center gap-2 bg-gradient-gold text-ink font-semibold px-7 py-3.5 rounded-full shadow-luxe hover:-translate-y-0.5 transition-all"
          >
            Explore Services
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 glass text-cream font-medium px-7 py-3.5 rounded-full hover:bg-white/15 transition"
          >
            Contact Us
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl"
        >
          {[
            { k: "200+", v: "Years Heritage" },
            { k: "1,200+", v: "Events Designed" },
            { k: "7+", v: "Years in U.S." },
            { k: "5.0★", v: "Family Trusted" },
          ].map((s) => (
            <div key={s.v} className="glass rounded-2xl px-4 py-4">
              <div className="font-display text-gold text-2xl">{s.k}</div>
              <div className="text-cream/75 text-[11px] uppercase tracking-widest mt-1">{s.v}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 text-cream/60 text-xs tracking-widest uppercase">
        <Star size={12} className="text-gold" /> Scroll <Star size={12} className="text-gold" />
      </div>
    </section>
  );
}
