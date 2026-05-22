import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { Gallery } from "@/components/site/Gallery";
import { Booking } from "@/components/site/Booking";
import { Testimonials } from "@/components/site/Testimonials";
import { Stylists } from "@/components/site/Stylists";
import { Pricing } from "@/components/site/Pricing";
import { About } from "@/components/site/About";
import { Contact } from "@/components/site/Contact";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Nav />
      <Hero />
      <Services />
      <Gallery />
      <Booking />
      <Testimonials />
      <Stylists />
      <Pricing />
      <About />
      <Contact />
    </main>
  );
}
