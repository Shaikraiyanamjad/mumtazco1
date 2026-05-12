import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";

const cards = [
  {
    icon: MapPin,
    title: "Visit Studio",
    lines: ["2301 West Devon Avenue", "Chicago, Illinois 60659"],
  },
  {
    icon: Clock,
    title: "Appointments",
    lines: ["By Appointment Only", "We design around your schedule"],
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: ["630-205-4201", "630-689-3610"],
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["mumtazcompany@yahoo.com"],
  },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative py-28 md:py-36 bg-background overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_90%,rgba(139,0,0,0.07),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-xs tracking-[0.4em] uppercase text-primary font-semibold">— Get in Touch</p>
          <h2 className="mt-4 font-display text-4xl md:text-6xl">
            Begin Your <span className="italic text-gradient-gold">Celebration</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            Tell us about your vision — we'll design something unforgettable.
          </p>
        </motion.div>

        <div className="mt-16 grid lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              {cards.map((c, i) => (
                <div
                  key={c.title}
                  className="group p-6 rounded-2xl bg-card border border-border hover:border-gold/50 hover:-translate-y-1 transition-all shadow-soft"
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-maroon flex items-center justify-center text-cream">
                    <c.icon size={20} />
                  </div>
                  <h3 className="mt-4 font-display text-lg">{c.title}</h3>
                  {c.lines.map((l) => (
                    <p key={l} className="text-sm text-muted-foreground mt-1">{l}</p>
                  ))}
                </div>
              ))}
            </div>

            <div className="rounded-2xl overflow-hidden border border-border shadow-soft h-64">
              <iframe
                title="Mumtaz Company Inc location"
                src="https://www.google.com/maps?q=2301+West+Devon+Avenue,+Chicago,+IL+60659&output=embed"
                className="w-full h-full grayscale-[40%] hover:grayscale-0 transition-all"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="relative p-[1px] rounded-3xl bg-gradient-to-b from-gold/50 via-border to-transparent"
          >
            <div className="bg-card rounded-3xl p-8 md:p-10 shadow-luxe">
              <h3 className="font-display text-2xl">Tell us about your event</h3>
              <p className="text-sm text-muted-foreground mt-1">We respond within 24 hours.</p>

              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <Field label="Full Name" name="name" />
                <Field label="Phone" name="phone" type="tel" />
                <Field label="Email" name="email" type="email" className="sm:col-span-2" />
                <Field label="Event Type" name="type" placeholder="Wedding, Reception, etc." className="sm:col-span-2" />
                <Field label="Event Date" name="date" type="date" />
                <Field label="Guest Count" name="guests" type="number" />
              </div>
              <div className="mt-4">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Your Vision</label>
                <textarea
                  rows={4}
                  className="mt-2 w-full bg-background border border-border rounded-xl p-3.5 text-sm focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition resize-none"
                  placeholder="Share your inspirations, theme, or any details we should know…"
                />
              </div>

              <button
                type="submit"
                disabled={sent}
                className="mt-7 w-full inline-flex items-center justify-center gap-2 bg-gradient-gold text-ink font-semibold py-4 rounded-full shadow-soft hover:shadow-luxe transition disabled:opacity-70"
              >
                {sent ? (<><CheckCircle2 size={18}/> Request Sent</>) : (<>Send Inquiry <Send size={16} /></>)}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", placeholder, className = "" }:
  { label: string; name: string; type?: string; placeholder?: string; className?: string }) {
  return (
    <div className={className}>
      <label htmlFor={name} className="text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full bg-background border border-border rounded-xl p-3.5 text-sm focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition"
      />
    </div>
  );
}
