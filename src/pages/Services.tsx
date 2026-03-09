import { Navbar } from "@/components/Navbar";
import { ServicesSection } from "@/components/ServicesSection";
import { Footer } from "@/components/Footer";

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-14">
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
