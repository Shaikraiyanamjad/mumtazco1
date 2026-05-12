import { motion } from "framer-motion";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import g5 from "@/assets/g5.jpg";
import g6 from "@/assets/g6.jpg";

const items = [
  { src: g1, label: "Royal Mandap", span: "md:row-span-2" },
  { src: g2, label: "Reception Tablescape", span: "" },
  { src: g3, label: "Floral Archway", span: "md:row-span-2" },
  { src: g4, label: "Maroon & Gold Stage", span: "" },
  { src: g5, label: "Hanging Floral Canopy", span: "" },
  { src: g6, label: "Centerpiece Artistry", span: "" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-28 md:py-36 bg-muted/40 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div className="max-w-2xl">
            <p className="text-xs tracking-[0.4em] uppercase text-primary font-semibold">— Gallery</p>
            <h2 className="mt-4 font-display text-4xl md:text-6xl leading-tight">
              Moments We've <span className="italic text-gradient-gold">Designed</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            A curated glimpse into our weddings, receptions, and cultural celebrations across the United States.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-[260px]">
          {items.map((it, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (i % 3) * 0.1, duration: 0.7 }}
              className={`group relative overflow-hidden rounded-2xl shadow-soft hover:shadow-luxe transition-shadow ${it.span}`}
            >
              <img
                src={it.src}
                alt={it.label}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/15 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
              <figcaption className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform">
                <span className="text-[10px] tracking-[0.3em] uppercase text-gold">Mumtaz</span>
                <div className="font-display text-cream text-xl">{it.label}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
