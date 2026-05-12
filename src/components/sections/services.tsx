import { motion } from "framer-motion";
import {
  Heart, Crown, Flower2, Sparkles, Flower, PartyPopper,
  Gift, UtensilsCrossed, GalleryVerticalEnd, Stars,
} from "lucide-react";

const services = [
  { icon: Heart, title: "Wedding Decorations", desc: "Cinematic wedding settings tailored to your love story." },
  { icon: Crown, title: "Stage Decorations", desc: "Royal stages with ornate craftsmanship and lighting." },
  { icon: Flower2, title: "Floral Arrangements", desc: "Statement floral designs in lush, signature palettes." },
  { icon: Flower, title: "Artificial Flower Setups", desc: "Long-lasting installations with photo-real beauty." },
  { icon: Sparkles, title: "Natural Flower Styling", desc: "Fresh blooms curated by season and ceremony." },
  { icon: Stars, title: "Cultural Event Decor", desc: "Heritage-rooted styling for cultural milestones." },
  { icon: PartyPopper, title: "Party Decorations", desc: "Birthdays, engagements & soirées designed to enchant." },
  { icon: UtensilsCrossed, title: "Catering Coordination", desc: "Seamless coordination with trusted culinary partners." },
  { icon: Gift, title: "Traditional Wedding Themes", desc: "Authentic Hyderabadi & South Asian theme execution." },
  { icon: GalleryVerticalEnd, title: "Reception Styling", desc: "Tablescapes and ambience that linger in memory." },
];

export default function Services() {
  return (
    <section id="services" className="relative py-28 md:py-36 bg-background overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,0,0,0.06),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-xs tracking-[0.4em] uppercase text-primary font-semibold">— What We Do</p>
          <h2 className="mt-4 font-display text-4xl md:text-6xl text-foreground leading-tight">
            Signature <span className="italic text-gradient-gold">Services</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            From intimate ceremonies to grand celebrations — every detail, perfected.
          </p>
        </motion.div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (i % 5) * 0.06, duration: 0.6 }}
              className="group relative p-[1px] rounded-2xl bg-gradient-to-b from-gold/40 via-border to-transparent hover:from-gold hover:via-gold/40 transition-all"
            >
              <div className="h-full bg-card rounded-2xl p-6 hover:-translate-y-1 transition-all shadow-soft hover:shadow-luxe">
                <div className="w-12 h-12 rounded-xl bg-gradient-maroon flex items-center justify-center text-cream group-hover:rotate-6 transition-transform">
                  <s.icon size={22} />
                </div>
                <h3 className="mt-5 font-display text-lg text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
