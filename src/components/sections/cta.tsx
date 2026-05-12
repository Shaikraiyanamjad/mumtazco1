import { motion } from "framer-motion";
import { ArrowRight, CalendarHeart } from "lucide-react";
import bg from "@/assets/g3.jpg";

export default function CTA() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="relative rounded-[2rem] overflow-hidden shadow-luxe">
          <img src={bg} alt="" className="absolute inset-0 w-full h-full object-cover scale-110 blur-sm" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/75 to-maroon/80" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(212,175,55,0.3),transparent_60%)]" />

          <div className="relative px-8 md:px-16 py-20 md:py-28 text-center text-cream">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs tracking-[0.3em] uppercase"
            >
              <CalendarHeart size={14} className="text-gold" /> Book Today
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-6 font-display text-4xl md:text-6xl lg:text-7xl leading-tight"
            >
              Let's Create Your <br className="hidden md:block" />
              <span className="italic text-gradient-gold">Dream Celebration</span>
            </motion.h2>
            <p className="mt-6 max-w-2xl mx-auto text-cream/75 md:text-lg">
              Limited bookings each season to ensure every event receives our undivided artistry.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ y: -2 }}
              className="mt-10 inline-flex items-center gap-2 bg-gradient-gold text-ink font-semibold px-8 py-4 rounded-full shadow-luxe"
            >
              Schedule Your Event Consultation
              <ArrowRight size={18} />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
