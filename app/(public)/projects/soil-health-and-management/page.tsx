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
        title="Soil Health and Management"
        description="Soil Health and Management"
      />
      <div className="container mx-auto px-4 md:px-12 lg:px-20 grid lg:grid-cols-[350px_1fr] gap-16 py-10 md:py-14">

        {/* LEFT SIDE */}
        <div className="flex flex-col gap-8">
          <OurProjects />

          {/* Promo Card */}
          <div className="relative rounded-2xl overflow-hidden h-[420px] flex items-end p-8 text-white">
            <img
              src="/slider3.webp"
              alt="Soil Management"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20" />

            <div className="relative z-10">
              <h3 className="text-xl font-semibold mb-4 leading-snug">
                Advanced soil management solutions for sustainable agriculture and optimal crop growth.
              </h3>

              <p className="text-sm leading-relaxed mb-6 text-gray-200">
                Our comprehensive soil health programs ensure long-term productivity 
                and environmental sustainability through scientific analysis and targeted interventions.
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
            We help farmers optimize soil health through comprehensive analysis, 
            nutrient management, and sustainable practices that enhance crop productivity 
            while preserving environmental balance for future generations.
          </h1>

          {/* Video Card */}
          <div className="relative rounded-2xl overflow-hidden h-[380px] mb-8">
            <img
              src="https://images.unsplash.com/photo-1592984357275-9c86bae54d73?auto=format&fit=crop&w=1200&q=80"
              alt="Soil Analysis"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-white/70 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition">
                <FiPlay className="text-xl text-[#1d2b1f] ml-1" />
              </div>
            </div>
          </div>

          <p className="text-gray-700 text-lg leading-relaxed">
            Soil health management encompasses the biological, chemical, and physical properties 
            of soil that support agricultural productivity. Our approach involves comprehensive 
            soil testing, nutrient analysis, and customized management plans that address specific 
            soil deficiencies and optimize growing conditions for various crops.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            Healthy soil is the foundation of sustainable agriculture. Our advanced soil management 
            techniques include organic matter enhancement, pH balancing, microbial activity stimulation, 
            and erosion control. By implementing these practices, farmers can improve water retention, 
            nutrient availability, and overall soil structure, leading to increased crop yields and 
            reduced environmental impact.
          </p>
        </div>
      </div>
      <FAQs />
      <Contact />
    </div>
  );
}
