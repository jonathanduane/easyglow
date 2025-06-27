import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function ProductShowcase() {
  const products = [
    {
      id: 1,
      name: "Premium Wood Stove",
      description: "High-efficiency wood burning stove with modern design and excellent heat output.",
      price: "€899",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      badge: "Best Seller",
      badgeColor: "bg-[#FF4500]"
    },
    {
      id: 2,
      name: "Electric Fireplace Suite",
      description: "Contemporary electric fireplace with realistic flame effects and remote control.",
      price: "€1,299",
      image: "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      badge: "New",
      badgeColor: "bg-gray-600"
    },
    {
      id: 3,
      name: "Cast Iron Multi-Fuel Stove",
      description: "Traditional cast iron stove with multi-fuel capability and superior heat retention.",
      price: "€749",
      image: "https://images.unsplash.com/photo-1606744888344-493238951221?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      badge: "Eco-Friendly",
      badgeColor: "bg-green-600"
    }
  ];

  return (
    <section id="products" className="py-20 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4">Featured <span className="text-[#FF4500]">Products</span></h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our premium collection of heating solutions, carefully selected for quality, efficiency, and style.
          </p>
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-[#0F0F0F] rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:shadow-[#FF4500]/20 transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className={`${product.badgeColor} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                    {product.badge}
                  </Badge>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-400 mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-[#FF4500]">{product.price}</div>
                  <Button className="bg-gradient-to-r from-[#FF4500] to-[#DC2626] text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View All Products CTA */}
        <div className="text-center mt-12">
          <Button 
            variant="outline"
            className="border-2 border-[#FF4500] text-[#FF4500] px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#FF4500] hover:text-white transition-all duration-300"
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
}
