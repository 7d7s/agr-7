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
        title="Crop Rotation Planning"
        description="Crop Rotation Planning"
      />
      <div className="container mx-auto px-4 md:px-12 lg:px-20 grid lg:grid-cols-[350px_1fr] gap-16 py-10 md:py-14">

        {/* LEFT SIDE */}
        <div className="flex flex-col gap-8">
          <OurProjects />

          {/* Promo Card */}
          <div className="relative rounded-2xl overflow-hidden h-[420px] flex items-end p-8 text-white">
            <img
              src="/slider3.webp"
              alt="Crop Rotation"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20" />

            <div className="relative z-10">
              <h3 className="text-xl font-semibold mb-4 leading-snug">
                Strategic crop rotation planning for soil health and sustainable agricultural productivity.
              </h3>

              <p className="text-sm leading-relaxed mb-6 text-gray-200">
                Our intelligent rotation systems optimize soil nutrients, break pest cycles, 
                and maximize yields through scientifically planned crop sequencing strategies.
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
            We develop strategic crop rotation plans that enhance soil fertility, 
            control pests and diseases, and optimize yields while ensuring long-term 
            agricultural sustainability and environmental stewardship.
          </h1>

          {/* Video Card */}
          <div className="relative rounded-2xl overflow-hidden h-[380px] mb-8">
            <img
              src="https://images.unsplash.com/photo-1592984357275-9c86bae54d73?auto=format&fit=crop&w=1200&q=80"
              alt="Crop Rotation"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-white/70 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition">
                <FiPlay className="text-xl text-[#1d2b1f] ml-1" />
              </div>
            </div>
          </div>

          <p className="text-gray-700 text-lg leading-relaxed">
            Crop rotation planning is a fundamental practice in sustainable agriculture that 
            involves sequencing different crops on the same land over time to improve soil 
            health, manage pests and diseases, and optimize yields. Our advanced planning 
            systems consider soil types, climate conditions, market demands, and crop 
            compatibility to create optimal rotation schedules.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            Effective crop rotation strategies provide numerous benefits including improved 
            soil structure, enhanced nutrient cycling, reduced pest pressure, and increased 
            biodiversity. Our data-driven approach uses historical performance data, soil 
            analysis, and predictive modeling to recommend rotation sequences that maximize 
            productivity while minimizing environmental impact and input costs.
          </p>
        </div>
      </div>
      <FAQs />
      <Contact />
    </div>
  );
}
