import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { FeaturedWork } from "@/components/FeaturedWork";
import { AboutTeaser } from "@/components/AboutTeaser";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { ScrollingMarquee } from "@/design-system";

const marqueeItems = [
  "PUBLIC & DIGITAL HEALTH",
  "HEALTHY AGEING",
  "MENTAL WELLBEING",
  "TRUST & SAFETY",
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ScrollingMarquee items={marqueeItems} />
        <FeaturedWork />
        <AboutTeaser />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
