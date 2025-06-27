import { Truck, Package, Clock, MapPin } from "lucide-react";

export default function DeliverySection() {


  return (
    <section className="py-20 bg-[#0F0F0F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4 text-white">
            Super Fast Delivery Throughout <span className="text-[#FF4500]">Ireland</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            We deliver our full range of solid fuels throughout Ireland, in 1000kg pallets (50 x 20kg bags). 
            For your convenience our couriers will deliver your pallet of smokeless coal ovals direct to your door, at street level.
          </p>
        </div>

        {/* Delivery Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-[#FF4500] to-[#DC2626] rounded-full flex items-center justify-center mx-auto mb-4">
              <Truck className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-white">Island Wide Delivery</h3>
            <p className="text-gray-400">Delivering throughout Ireland</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-[#FF4500] to-[#DC2626] rounded-full flex items-center justify-center mx-auto mb-4">
              <Package className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-white">1000kg Pallets</h3>
            <p className="text-gray-400">50 x 20kg bags per pallet</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-[#FF4500] to-[#DC2626] rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-white">Direct to Door</h3>
            <p className="text-gray-400">Street level delivery</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-[#FF4500] to-[#DC2626] rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-white">Fast Service</h3>
            <p className="text-gray-400">Quick and reliable</p>
          </div>
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Traditional Coal */}
          <div className="bg-[#1A1A1A] rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:shadow-[#FF4500]/20 transition-all duration-300">
            <div className="relative overflow-hidden">
              <img 
                src="https://easyglow.ie/images/bags/new/Premium-Columbian-Doubles-real.png"
                alt="Traditional Coal"
                className="w-full h-64 object-contain bg-white p-4"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 text-white">Traditional Coal</h3>
              <div className="text-[#FF4500] text-xl font-bold mb-4">From €10 / 20 KG</div>
              <ul className="text-gray-300 text-sm space-y-1 mb-4">
                <li>• Premium Colombian</li>
                <li>• Colombian Doubles</li>
                <li>• HouseHold Doubles</li>
                <li>• Triple Heat</li>
              </ul>
              <div className="text-white font-semibold mb-2">Best Rates - Great Heat</div>
              <div className="text-[#FF4500] text-sm">Delivery Nationwide</div>
            </div>
          </div>

          {/* Smokeless Coal */}
          <div className="bg-[#1A1A1A] rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:shadow-[#FF4500]/20 transition-all duration-300">
            <div className="relative overflow-hidden">
              <img 
                src="https://easyglow.ie/images/bags/new/tripleheat.png"
                alt="Smokeless Coal"
                className="w-full h-64 object-contain bg-white p-4"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 text-white">Smokeless Coal</h3>
              <div className="text-[#FF4500] text-xl font-bold mb-4">From €9.80 / 20 KG</div>
              <ul className="text-gray-300 text-sm space-y-1 mb-4">
                <li>• Open Fire/Ranges</li>
                <li>• Stove</li>
                <li>• Briquetts</li>
                <li>• Logs</li>
              </ul>
              <div className="text-white font-semibold mb-2">Suits ALL Smokeless Zones</div>
              <div className="text-[#FF4500] text-sm">Delivery Nationwide</div>
            </div>
          </div>

          {/* Mixed Pallets */}
          <div className="bg-[#1A1A1A] rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:shadow-[#FF4500]/20 transition-all duration-300">
            <div className="relative overflow-hidden">
              <img 
                src="https://easyglow.ie/images/bags/new/lignite23.png"
                alt="Mixed Pallets"
                className="w-full h-64 object-contain bg-white p-4"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 text-white">Mixed Pallets</h3>
              <div className="text-[#FF4500] text-xl font-bold mb-4">From €9.90 / 20KG</div>
              <ul className="text-gray-300 text-sm space-y-1 mb-4">
                <li>• Colombian and Triple Heat</li>
                <li>• Household Doubles and Triple Heat</li>
                <li>• Stove smokeless And Triple Heat</li>
                <li>• Household Doubles and Colombian Doubles</li>
              </ul>
              <div className="text-white font-semibold mb-2">More Choices...</div>
              <div className="text-[#FF4500] text-sm">Delivery Nationwide</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}