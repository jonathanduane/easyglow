import { Truck, Wrench, Trophy, Lightbulb } from "lucide-react";

export default function FeatureSection() {
  const features = [
    {
      icon: Truck,
      title: "Super Fast Delivery",
      description: "Lightning-fast delivery throughout Ireland with careful handling and professional service."
    },
    {
      icon: Wrench,
      title: "Expert Installation",
      description: "Professional installation services by certified technicians with full warranty coverage."
    },
    {
      icon: Trophy,
      title: "Premium Quality",
      description: "Only the finest heating solutions from trusted manufacturers with proven performance records."
    },
    {
      icon: Lightbulb,
      title: "Expert Advice",
      description: "Personal consultation to help you choose the perfect heating solution for your space and needs."
    }
  ];

  return (
    <section id="about" className="py-20 bg-[#0F0F0F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-6">Why Choose <span className="text-[#FF4500]">EasyGlow</span>?</h2>
            <p className="text-xl text-gray-300 mb-8">
              With over a decade of experience in heating solutions, we're Ireland's trusted partner for premium quality products and exceptional service.
            </p>
            
            {/* Features List */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#FF4500] to-[#DC2626] rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Image */}
          <div className="mt-12 lg:mt-0 animate-fade-in">
            <img 
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Professional heating installation" 
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
