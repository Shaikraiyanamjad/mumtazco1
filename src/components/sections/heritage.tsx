import { motion } from "framer-motion";
import heritage from "@/assets/heritage.jpg";

const timeline = [
  { year: "1820s", title: "Karkhana Abbasiya", desc: "Our story begins in the historic city of Hyderabad with a royal atelier of artisans." },
  { year: "1950s", title: "Shalimar Furniture", desc: "Seventy years of celebrated craftsmanship refining the art of opulent staging." },
  { year: "2018", title: "Arrival in the U.S.", desc: "Bringing ancestral artistry to American celebrations of every culture." },
  { year: "Today", title: "Mumtaz Company Inc", desc: "A legacy continued — luxury weddings, events and floral artistry across the U.S." },
];

export default function Heritage() {
  return (
    <section id="heritage" className="relative py-28 md:py-36 bg-ink text-cream overflow-hidden">
      <img src={heritage} alt="" className="absolute inset-0 w-full h-full object-cover opacity-15" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/85 to-ink" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <p className="text-xs tracking-[0.4em] uppercase text-gold">— Our Heritage</p>
          <h2 className="mt-4 font-display text-4xl md:text-6xl lg:text-7xl leading-[1.05]">
            <span className="text-gradient-gold italic">200 Years</span> of Heritage
          </h2>
          <p className="mt-6 text-cream/75 text-lg leading-relaxed">
            Mumtaz Company Inc traces its roots back over 200 years to{" "}
            <span className="text-gold">Karkhana Abbasiya</span> in the historic city of Hyderabad, India.
            The legacy continued through the renowned <span className="text-gold">Shalimar Furniture</span>,
            a company with over 70 years of excellence. Today, we proudly bring our cultural artistry
            and ancestral craftsmanship to the United States.
          </p>
        </motion.div>

        <div className="relative mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
          {timeline.map((t, i) => (
            <motion.div
              key={t.year}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.12, duration: 0.7 }}
              className="relative group"
            >
              <div className="relative z-10 mx-auto w-6 h-6 rounded-full bg-gradient-gold ring-4 ring-ink shadow-[0_0_30px_rgba(212,175,55,0.6)]" />
              <div className="mt-6 glass-dark rounded-2xl p-6 hover:border-gold/40 transition-all hover:-translate-y-1">
                <div className="font-display text-gold text-3xl">{t.year}</div>
                <h3 className="mt-2 font-display text-xl text-cream">{t.title}</h3>
                <p className="mt-3 text-sm text-cream/65 leading-relaxed">{t.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 mx-auto max-w-3xl text-center"
        >
          <div className="inline-block ornament w-32 h-px mb-6" />
          <p className="font-display italic text-2xl md:text-3xl text-gradient-gold">
            "Serving the United States with heritage-driven celebration artistry for over 7 years."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
