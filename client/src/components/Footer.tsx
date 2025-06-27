export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#1A1A1A] border-t border-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <img 
                src="https://easyglow.ie/images/Site-Logo23-1.png"
                alt="EasyGlow Logo"
                className="h-10 w-auto"
              />
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Ireland's leading supplier of premium smokeless coal and solid fuels. We deliver by the tonne or half tonne throughout the Island of Ireland with fast, reliable service since 2012.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-[#FF4500] transition-colors">
                <span className="text-white">f</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-[#FF4500] transition-colors">
                <span className="text-white">📷</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-[#FF4500] transition-colors">
                <span className="text-white">🐦</span>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection("home")}
                  className="text-gray-400 hover:text-[#FF4500] transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("smokeless")}
                  className="text-gray-400 hover:text-[#FF4500] transition-colors"
                >
                  Smokeless
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("traditional-coal")}
                  className="text-gray-400 hover:text-[#FF4500] transition-colors"
                >
                  Traditional Coal
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("logs-briquettes")}
                  className="text-gray-400 hover:text-[#FF4500] transition-colors"
                >
                  Logs/Briquettes
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-400 hover:text-[#FF4500] transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Products</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-[#FF4500] transition-colors">Smokeless Coal Ovals</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#FF4500] transition-colors">Traditional Coal</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#FF4500] transition-colors">Logs & Briquettes</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#FF4500] transition-colors">Mixed Pallets</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#FF4500] transition-colors">Half Pallets</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#FF4500] transition-colors">Bulk Delivery</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 EasyGlow. All rights reserved. Established 2012.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-[#FF4500] transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-[#FF4500] transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-[#FF4500] transition-colors">Delivery Info</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
