import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactSection } from "@/components/ContactSection";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-14">
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
