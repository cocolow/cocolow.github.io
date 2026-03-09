import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { FeaturedWork } from "@/components/FeaturedWork";
import { AboutTeaser } from "@/components/AboutTeaser";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturedWork />
        <AboutTeaser />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
