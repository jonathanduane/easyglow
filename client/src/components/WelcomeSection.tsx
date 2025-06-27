import welcomeImage from "@assets/image_1750954116865.png";

export default function WelcomeSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Image */}
          <div className="mb-12 lg:mb-0 animate-fade-in">
            <img 
              src={welcomeImage}
              alt="EasyGlow Smokeless Coal Products" 
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
          
          {/* Content */}
          <div className="animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Welcome to <span className="text-[#FF4500]">Easyglow</span>
            </h2>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              Great Smokeless Heat - Low Ash
            </h3>
            <h4 className="text-xl font-semibold mb-6 text-[#FF4500]">
              Easyglow Smokeless
            </h4>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Easyglow was established in 2012, we are located on the Fermanagh - Monaghan border.
              </p>
              <p>
                We have spent the last 11 years perfecting our formulations for our Easyglow Smokeless Coal Oval Nuggets using the highest possible quality materials. We also stock a full range of high-quality solid fuels.
              </p>
              <p>
                We deliver by the tonne or half tonne throughout the Island of Ireland.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}