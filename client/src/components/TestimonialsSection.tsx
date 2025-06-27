import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Murphy",
      location: "Dublin",
      rating: 5,
      review: "Absolutely fantastic service! The delivery was incredibly fast and the installation team was professional and efficient. Our new stove looks amazing and works perfectly.",
      initials: "SM"
    },
    {
      name: "John O'Connor",
      location: "Cork",
      rating: 5,
      review: "Great selection of products and excellent customer service. They helped me choose the perfect fireplace for my living room. Highly recommended!",
      initials: "JO"
    },
    {
      name: "Mary Kelly",
      location: "Galway",
      rating: 5,
      review: "The quality of their products is outstanding. Our wood stove has been working perfectly for over two years now. Worth every penny!",
      initials: "MK"
    }
  ];

  return (
    <section className="py-20 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4">What Our <span className="text-[#FF4500]">Customers</span> Say</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it - hear from satisfied customers across Ireland.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-[#0F0F0F] p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-[#FF4500]">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-300 mb-6">
                "{testimonial.review}"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-[#FF4500] to-[#DC2626] rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-semibold">{testimonial.initials}</span>
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
