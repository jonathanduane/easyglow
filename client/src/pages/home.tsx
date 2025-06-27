import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import WelcomeSection from "@/components/WelcomeSection";
import DeliverySection from "@/components/DeliverySection";
import BenefitsSection from "@/components/BenefitsSection";
import ShippingInfoSection from "@/components/ShippingInfoSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white">
      <Navigation />
      <HeroSection />
      <WelcomeSection />
      <DeliverySection />
      <BenefitsSection />
      <ShippingInfoSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
