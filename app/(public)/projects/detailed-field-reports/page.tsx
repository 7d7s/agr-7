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
        title="Detailed Field Reports"
        description="Detailed Field Reports"
      />
      <div className="container mx-auto px-4 md:px-12 lg:px-20 grid lg:grid-cols-[350px_1fr] gap-16 py-10 md:py-14">

        {/* LEFT SIDE */}
        <div className="flex flex-col gap-8">
          <OurProjects />

          {/* Promo Card */}
          <div className="relative rounded-2xl overflow-hidden h-[420px] flex items-end p-8 text-white">
            <img
              src="/slider3.webp"
              alt="Field Reports"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20" />

            <div className="relative z-10">
              <h3 className="text-xl font-semibold mb-4 leading-snug">
                Comprehensive field analysis and reporting for data-driven agricultural decisions.
              </h3>

              <p className="text-sm leading-relaxed mb-6 text-gray-200">
                Our detailed field reports provide actionable insights that help farmers 
                optimize operations, increase yields, and improve overall farm management efficiency.
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
            We deliver comprehensive field reports that combine satellite imagery, 
            sensor data, and agronomic analysis to provide farmers with detailed insights 
            for informed decision-making and optimized crop management.
          </h1>

          {/* Video Card */}
          <div className="relative rounded-2xl overflow-hidden h-[380px] mb-8">
            <img
              src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1200&q=80"
              alt="Field Analysis"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-white/70 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition">
                <FiPlay className="text-xl text-[#1d2b1f] ml-1" />
              </div>
            </div>
          </div>

          <p className="text-gray-700 text-lg leading-relaxed">
            Detailed field reports are essential tools for modern precision agriculture, 
            providing farmers with critical information about crop health, soil conditions, 
            pest pressure, and yield potential. Our reports integrate multiple data sources 
            including satellite imagery, drone surveys, soil sensors, and weather data to 
            create a comprehensive picture of field conditions.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            Our advanced reporting system delivers actionable insights on crop development, 
            nutrient deficiencies, irrigation needs, and disease risk assessment. By leveraging 
            artificial intelligence and machine learning algorithms, we can predict yield 
            potential, identify problem areas before they become critical, and recommend 
            specific management actions to optimize crop performance and maximize profitability.
          </p>
        </div>
      </div>
      <FAQs />
      <Contact />
    </div>
  );
}
