import { motion } from "framer-motion";
import { Crown, Heart, Sparkles, Leaf } from "lucide-react";
import about from "@/assets/about.jpg";

const cards = [
  { icon: Crown, title: "Generational Mastery", desc: "Two centuries of artistry distilled into every setup we craft." },
  { icon: Heart, title: "Personal Touch", desc: "Bespoke styling that mirrors your story, culture, and family." },
  { icon: Leaf, title: "Floral Excellence", desc: "Natural & artificial florals arranged with timeless elegance." },
  { icon: Sparkles, title: "Cultural Authenticity", desc: "Hyderabadi heritage, brought to American celebrations." },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(212,175,55,0.08),transparent_50%)]" />
      <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-2 gap-16 items-center relative">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-gradient-gold opacity-20 rounded-[2rem] blur-2xl" />
          <div className="relative rounded-[2rem] overflow-hidden shadow-luxe">
            <img src={about} alt="Bridal floral arrangement" className="w-full h-[600px] object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden md:block bg-card border border-gold/30 shadow-luxe rounded-2xl px-6 py-5">
            <div className="font-display text-4xl text-gradient-gold">200+</div>
            <div className="text-xs tracking-widest uppercase text-muted-foreground mt-1">Years of Heritage</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs tracking-[0.35em] uppercase text-primary font-semibold">— Our Story</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight">
            About <span className="italic text-gradient-gold">Mumtaz Company Inc</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-base md:text-lg leading-relaxed">
            Mumtaz Company Inc provides a number of different setups and styles for all occasions.
            Along with stage decorations, we offer natural and artificial floral arrangements,
            wedding setups, catering coordination, and complete event styling for celebrations
            of any size — woven with cultural artistry passed down through generations.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {cards.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group p-5 rounded-2xl bg-card border border-border hover:border-gold/50 hover:-translate-y-1 transition-all shadow-soft"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-maroon flex items-center justify-center text-cream group-hover:scale-110 transition-transform">
                  <c.icon size={20} />
                </div>
                <h3 className="mt-4 font-display text-lg text-foreground">{c.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
