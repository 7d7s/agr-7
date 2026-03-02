import Breadcrumb from "@/components/common/Breadcrumb";
import OurProjects from "@/components/common/OurProjects";
import FAQs from "@/components/faqs";
import Contact from "@/components/home/contact";
import { FiArrowRight, FiPlay } from "react-icons/fi";

export default function Page() {

  return (
    <div className="bg-[#f4f6f3] min-h-screen">
      <Breadcrumb
        image="/pig_farm_images.png"
        title="Crop Irrigation Management"
        description="Crop Irrigation Management"
      />
      <div className="container mx-auto px-4 md:px-12 lg:px-20 grid lg:grid-cols-[350px_1fr] gap-16 py-10 md:py-14">

        {/* LEFT SIDE */}
        <div className="flex flex-col gap-8">
          <OurProjects />

          {/* Promo Card */}
          <div className="relative rounded-2xl overflow-hidden h-[420px] flex items-end p-8 text-white">
            <img
              src="/slider3.webp"
              alt="Irrigation System"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20" />

            <div className="relative z-10">
              <h3 className="text-xl font-semibold mb-4 leading-snug">
                Smart irrigation solutions for water conservation and maximum crop yield optimization.
              </h3>

              <p className="text-sm leading-relaxed mb-6 text-gray-200">
                Our precision irrigation systems ensure optimal water distribution while 
                minimizing waste and maximizing agricultural productivity through advanced technology.
              </p>

              <button className="bg-white text-[#1d2b1f] px-5 py-3 rounded-md flex items-center gap-3 text-sm font-medium hover:scale-105 transition">
                Get Started Now
                <FiArrowRight />
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-5">
          <h1 className="text-2xl font-semibold leading-relaxed mb-8">
            We provide advanced irrigation management solutions that optimize water usage, 
            reduce costs, and ensure crops receive the precise amount of water needed for 
            optimal growth and maximum yield production.
          </h1>

          {/* Video Card */}
          <div className="relative rounded-2xl overflow-hidden h-[380px] mb-8">
            <img
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=1200&q=80"
              alt="Irrigation System"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-white/70 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition">
                <FiPlay className="text-xl text-[#1d2b1f] ml-1" />
              </div>
            </div>
          </div>

          <p className="text-gray-700 text-lg leading-relaxed">
            Modern irrigation management combines technology, data analytics, and agronomic 
            expertise to deliver water precisely when and where crops need it most. Our systems 
            utilize soil moisture sensors, weather data, and crop water requirements to create 
            customized irrigation schedules that maximize efficiency and minimize water waste.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            Effective irrigation management is crucial for sustainable agriculture in the face 
            of increasing water scarcity and climate variability. Our solutions include drip 
            irrigation, sprinkler systems, smart controllers, and real-time monitoring that 
            help farmers reduce water usage by up to 50% while increasing crop yields and 
            improving overall farm profitability.
          </p>
        </div>
      </div>
      <FAQs />
      <Contact />
    </div>
  );
}
