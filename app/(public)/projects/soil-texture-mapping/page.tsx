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
        title="Soil Texture Mapping"
        description="Soil Texture Mapping"
      />
      <div className="container mx-auto px-4 md:px-12 lg:px-20 grid lg:grid-cols-[350px_1fr] gap-16 py-10 md:py-14">

        {/* LEFT SIDE */}
        <div className="flex flex-col gap-8">
          <OurProjects />

          {/* Promo Card */}
          <div className="relative rounded-2xl overflow-hidden h-[420px] flex items-end p-8 text-white">
            <img
              src="/slider3.webp"
              alt="Soil Mapping"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20" />

            <div className="relative z-10">
              <h3 className="text-xl font-semibold mb-4 leading-snug">
                Precision soil texture mapping for optimized agricultural planning and resource management.
              </h3>

              <p className="text-sm leading-relaxed mb-6 text-gray-200">
                Our advanced soil mapping technology provides detailed texture analysis 
                enabling precise agricultural decisions and improved crop management strategies.
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
            We provide detailed soil texture mapping services that analyze soil composition 
            and characteristics to help farmers make informed decisions about crop selection, 
            irrigation strategies, and fertilizer applications for optimal yields.
          </h1>

          {/* Video Card */}
          <div className="relative rounded-2xl overflow-hidden h-[380px] mb-8">
            <img
              src="https://images.unsplash.com/photo-1579483287704-ddc8bf4a1626?auto=format&fit=crop&w=1200&q=80"
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
            Soil texture mapping is a critical component of precision agriculture that 
            provides detailed information about soil composition, including sand, silt, 
            and clay percentages. Our advanced mapping technology combines soil sampling, 
            remote sensing, and GIS analysis to create comprehensive soil texture maps 
            that guide agricultural decision-making and resource management.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            Understanding soil texture is essential for optimizing water management, 
            nutrient application, and crop selection. Our detailed soil maps help farmers 
            identify variations in soil properties across their fields, enabling variable 
            rate applications, targeted irrigation, and crop zoning strategies that maximize 
            productivity while minimizing input costs and environmental impact.
          </p>
        </div>
      </div>
      <FAQs />
      <Contact />
    </div>
  );
}
