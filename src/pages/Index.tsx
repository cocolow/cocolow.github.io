import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { FeaturedWork } from "@/components/FeaturedWork";
import { AboutTeaser } from "@/components/AboutTeaser";
import { ServicesSection } from "@/components/ServicesSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturedWork />
        <AboutTeaser />
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
