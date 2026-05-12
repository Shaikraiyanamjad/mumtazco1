import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/sections/navbar";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Heritage from "@/components/sections/heritage";
import Services from "@/components/sections/services";
import Gallery from "@/components/sections/gallery";
import WhyUs from "@/components/sections/why-us";
import Testimonials from "@/components/sections/testimonials";
import CTA from "@/components/sections/cta";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mumtaz Company Inc — Luxury Wedding & Event Decoration | Chicago" },
      {
        name: "description",
        content:
          "Mumtaz Company Inc — luxury wedding, event, and floral decoration rooted in 200 years of Hyderabadi heritage. Serving Chicago and across the United States.",
      },
      { property: "og:title", content: "Mumtaz Company Inc — Heritage Luxury Event Decoration" },
      { property: "og:description", content: "Creating memorable celebrations with heritage & elegance." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Heritage />
      <Services />
      <Gallery />
      <WhyUs />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}
