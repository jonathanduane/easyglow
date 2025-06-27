import { Button } from "@/components/ui/button";
import heroImage from "@assets/woman-s-legs-in-woolen-socks-heat-up-near-a-cozy-f-2025-02-09-06-46-35-utc_1750955714104.jpg";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F0F0F]/90 via-[#0F0F0F]/70 to-transparent" />
      
      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Clean <span className="text-[#FF4500]">Smokeless Coal</span><br />
            Delivered Across <span className="text-[#FFB366]">Ireland</span>
          </h1>
          
          {/* CTA Button */}
          <div className="flex justify-center mt-8">
            <Button 
              onClick={() => scrollToSection("smokeless")}
              className="bg-[#FF4500] hover:bg-[#DC2626] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-[#FF4500]/30 transform hover:scale-105 transition-all duration-300"
            >
              Shop Online
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
