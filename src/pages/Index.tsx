import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { FeaturedWork } from "@/components/FeaturedWork";
import { AboutTeaser } from "@/components/AboutTeaser";
import { Footer } from "@/components/Footer";
import { ScrollingMarquee } from "@/design-system";
import { features } from "@/config/features";

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
        {features.showFeaturedProjects && <FeaturedWork />}
        <AboutTeaser />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
