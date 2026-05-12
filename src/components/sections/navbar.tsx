import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#heritage", label: "Heritage" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-ink/85 backdrop-blur-xl border-b border-gold/20 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-8 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <div className="bg-gradient-maroon rounded-md p-1.5 shadow-soft">
              <img src={logo} alt="Mumtaz Company Inc" className="h-9 w-auto" />
            </div>
            <div className="hidden sm:block leading-tight">
              <div className="font-display text-cream text-lg">Mumtaz Company</div>
              <div className="text-[10px] tracking-[0.3em] text-gold uppercase">Since Generations</div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-9">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-cream/85 hover:text-gold text-sm font-medium tracking-wide transition-colors relative group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 bg-gradient-gold text-ink font-semibold text-sm px-5 py-2.5 rounded-full shadow-soft hover:shadow-luxe transition-all hover:-translate-y-0.5"
            >
              <Phone size={15} /> Book Consultation
            </a>
            <button
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className="lg:hidden text-cream p-2"
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-ink/95 backdrop-blur-2xl flex flex-col"
          >
            <div className="flex items-center justify-between p-5">
              <span className="font-display text-cream text-xl">Mumtaz</span>
              <button onClick={() => setOpen(false)} className="text-cream p-2" aria-label="Close menu">
                <X size={28} />
              </button>
            </div>
            <nav className="flex-1 flex flex-col items-center justify-center gap-7">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.06 }}
                  className="font-display text-cream text-3xl hover:text-gold transition-colors"
                >
                  {l.label}
                </motion.a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-6 bg-gradient-gold text-ink font-semibold px-7 py-3 rounded-full"
              >
                Book Consultation
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
