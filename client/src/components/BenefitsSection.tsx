import { Leaf, Flame, Shield, Clock } from "lucide-react";

export default function BenefitsSection() {
  const benefits = [
    {
      icon: Flame,
      title: "Low Smoke for Open Fires",
      description: "Perfect for use in Smoke free zones with the beauty of an open fire for you and your family to stay warm this winter."
    },
    {
      icon: Leaf,
      title: "Low Carbon Eco Glow Coal",
      description: "Our low-emission fuels are one of the better ways to stay warm while doing your best to make a difference."
    },
    {
      icon: Shield,
      title: "Smokeless City Coal",
      description: "Our smokeless coal is manufactured using a cold process to establish the most efficient ecological heat conversion possible."
    },
    {
      icon: Clock,
      title: "Quality heat to your door",
      description: "We pride ourselves on getting our fuels to you as quickly as possible. Orders before noon always get shipped the same day."
    }
  ];

  return (
    <section className="py-20 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4 text-white">
            Benefits of <span className="text-[#FF4500]">Easyglow</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-[#0F0F0F] p-8 rounded-xl shadow-lg text-center hover:shadow-xl hover:shadow-[#FF4500]/20 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-[#FF4500] to-[#DC2626] rounded-full flex items-center justify-center mx-auto mb-6">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">{benefit.title}</h3>
              <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}