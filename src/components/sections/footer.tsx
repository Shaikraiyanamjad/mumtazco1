import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

export default function Footer() {
  return (
    <footer className="relative bg-ink text-cream pt-20 pb-8 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(139,0,0,0.45),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-3">
            <div className="bg-gradient-maroon rounded-md p-1.5">
              <img src={logo} alt="Mumtaz Company Inc" className="h-9 w-auto" />
            </div>
            <div>
              <div className="font-display text-cream text-lg leading-none">Mumtaz Company</div>
              <div className="text-[10px] tracking-[0.3em] text-gold uppercase mt-1">Inc · Chicago</div>
            </div>
          </div>
          <p className="mt-5 text-sm text-cream/65 leading-relaxed">
            Luxury wedding & event decoration rooted in 200 years of Hyderabadi heritage —
            now serving celebrations across the United States.
          </p>
          <div className="mt-5 flex gap-3">
            {[Instagram, Facebook, Youtube].map((I, i) => (
              <a key={i} href="#" aria-label="social"
                className="w-10 h-10 rounded-full glass-dark flex items-center justify-center hover:border-gold/60 hover:text-gold transition">
                <I size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg text-gold">Quick Links</h4>
          <ul className="mt-5 space-y-2.5 text-sm text-cream/70">
            {["Home","About","Heritage","Services","Gallery","Contact"].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="hover:text-gold transition">{l}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg text-gold">Services</h4>
          <ul className="mt-5 space-y-2.5 text-sm text-cream/70">
            {["Weddings","Stage Decor","Floral Styling","Receptions","Cultural Events","Catering Coordination"].map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg text-gold">Reach Us</h4>
          <ul className="mt-5 space-y-3 text-sm text-cream/70">
            <li className="flex gap-3"><MapPin size={16} className="text-gold mt-0.5"/> 2301 West Devon Avenue, Chicago, IL 60659</li>
            <li className="flex gap-3"><Phone size={16} className="text-gold mt-0.5"/> 630-205-4201 · 630-689-3610</li>
            <li className="flex gap-3"><Mail size={16} className="text-gold mt-0.5"/> mumtazcompany@yahoo.com</li>
          </ul>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8 mt-14 pt-6 border-t border-cream/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-cream/55">
        <p>© {new Date().getFullYear()} Mumtaz Company Inc. All rights reserved.</p>
        <p className="font-display italic text-gold/80">Preserving Heritage Through Memorable Celebrations.</p>
      </div>
    </footer>
  );
}
