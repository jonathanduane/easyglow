import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-[#0F0F0F]/95 backdrop-blur-sm" : "bg-transparent"
    } border-b border-gray-800`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="https://easyglow.ie/images/Site-Logo23-1.png"
              alt="EasyGlow Logo"
              className="h-10 w-auto"
            />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection("home")}
              className="text-gray-300 hover:text-[#FF4500] transition-colors duration-300"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection("smokeless")}
              className="text-gray-300 hover:text-[#FF4500] transition-colors duration-300"
            >
              Smokeless
            </button>
            <button 
              onClick={() => scrollToSection("traditional-coal")}
              className="text-gray-300 hover:text-[#FF4500] transition-colors duration-300"
            >
              Traditional Coal
            </button>
            <button 
              onClick={() => scrollToSection("logs-briquettes")}
              className="text-gray-300 hover:text-[#FF4500] transition-colors duration-300"
            >
              Logs/Briquettes
            </button>
            <button 
              onClick={() => scrollToSection("mixed-pallets")}
              className="text-gray-300 hover:text-[#FF4500] transition-colors duration-300"
            >
              Mixed Pallets
            </button>
            <button 
              onClick={() => scrollToSection("half-pallets")}
              className="text-gray-300 hover:text-[#FF4500] transition-colors duration-300"
            >
              Half Pallets
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="text-gray-300 hover:text-[#FF4500] transition-colors duration-300"
            >
              Contact
            </button>
            <Button className="bg-[#FF4500] hover:bg-[#DC2626] text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300">
              Shop Online
            </Button>
          </div>
          
          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-white">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#1A1A1A] border-gray-800">
              <div className="flex flex-col space-y-4 mt-8">
                <button 
                  onClick={() => scrollToSection("home")}
                  className="text-left text-gray-300 hover:text-[#FF4500] py-2"
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection("smokeless")}
                  className="text-left text-gray-300 hover:text-[#FF4500] py-2"
                >
                  Smokeless
                </button>
                <button 
                  onClick={() => scrollToSection("traditional-coal")}
                  className="text-left text-gray-300 hover:text-[#FF4500] py-2"
                >
                  Traditional Coal
                </button>
                <button 
                  onClick={() => scrollToSection("logs-briquettes")}
                  className="text-left text-gray-300 hover:text-[#FF4500] py-2"
                >
                  Logs/Briquettes
                </button>
                <button 
                  onClick={() => scrollToSection("mixed-pallets")}
                  className="text-left text-gray-300 hover:text-[#FF4500] py-2"
                >
                  Mixed Pallets
                </button>
                <button 
                  onClick={() => scrollToSection("half-pallets")}
                  className="text-left text-gray-300 hover:text-[#FF4500] py-2"
                >
                  Half Pallets
                </button>
                <button 
                  onClick={() => scrollToSection("contact")}
                  className="text-left text-gray-300 hover:text-[#FF4500] py-2"
                >
                  Contact
                </button>
                <Button className="bg-[#FF4500] hover:bg-[#DC2626] text-white font-semibold mt-4">
                  Shop Online
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
