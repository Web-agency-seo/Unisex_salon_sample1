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
  head: () => ({
    meta: [
      { title: "Ziva Unisex Salon — Hair, Skin, Bridal & Grooming Atelier, Mumbai" },
      {
        name: "description",
        content:
          "Ziva is a modern unisex salon in Bandra, Mumbai. Signature haircuts, bridal packages, HydraFacials, men's grooming & nail spa. Book instantly.",
      },
      { property: "og:title", content: "Ziva Unisex Salon — Mumbai" },
      {
        property: "og:description",
        content: "A quiet kind of luxury. Hair, skin, bridal and grooming in Bandra, Mumbai.",
      },
      { property: "og:url", content: "https://zivaunisexsalon.com/" },
      { property: "og:image", content: "https://zivaunisexsalon.com/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Ziva Unisex Salon interior, Bandra Mumbai" },
      { name: "twitter:image", content: "https://zivaunisexsalon.com/og-image.jpg" },
      { name: "twitter:image:alt", content: "Ziva Unisex Salon" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500&family=Inter:wght@400;500;600&display=swap",
      },
      { rel: "canonical", href: "https://zivaunisexsalon.com/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HairSalon",
          name: "Ziva Unisex Salon",
          description:
            "A modern unisex atelier in Mumbai offering hair, skin, bridal and grooming rituals.",
          url: "https://zivaunisexsalon.com",
          telephone: "+91-98-1234-5678",
          image: "https://zivaunisexsalon.com/og-image.jpg",
          address: {
            "@type": "PostalAddress",
            streetAddress: "12 Linking Road",
            addressLocality: "Bandra West",
            addressRegion: "Mumbai",
            postalCode: "400050",
            addressCountry: "IN",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 19.0596,
            longitude: 72.8295,
          },
          openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "10:00",
            closes: "21:00",
          },
          priceRange: "₹₹",
          servesCuisine: undefined,
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "2400",
            bestRating: "5",
          },
          sameAs: [
            "https://www.instagram.com/zivaunisexsalon",
            "https://www.facebook.com/zivaunisexsalon",
          ],
        }),
      },
    ],
  }),
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
