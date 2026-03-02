
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
        title="Seed Supply and Distribution"
        description="Seed Supply and Distribution"
      />
      <div className="container mx-auto px-4 md:px-12 lg:px-20 grid lg:grid-cols-[350px_1fr] gap-16 py-10 md:py-14">

        {/* LEFT SIDE */}
        <div className="flex flex-col gap-8">
          <OurProjects />

          {/* Promo Card */}
          <div className="relative rounded-2xl overflow-hidden h-[420px] flex items-end p-8 text-white">
            <img
              src="/slider3.webp"
              alt="Farmer"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20" />

            <div className="relative z-10">
              <h3 className="text-xl font-semibold mb-4 leading-snug">
                Innovative solutions for agriculture growth and soil health.
              </h3>

              <p className="text-sm leading-relaxed mb-6 text-gray-200">
                Our success depends on customers’ success, so we are committed
                to building long lasting partnerships based on trust,
                collaboration, and foster true sustainable growth.
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
            We help farmers and consumers have the technologies they need to
            protect the crops and the ecosystems from the threat of pests,
            weeds diseases in an environmentally sound, safe, and sustainable way.
          </h1>

          {/* Video Card */}
          <div className="relative rounded-2xl overflow-hidden h-[380px] mb-8">
            <img
              src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80"
              alt="Field"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-white/70 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition">
                <FiPlay className="text-xl text-[#1d2b1f] ml-1" />
              </div>
            </div>
          </div>

          <p className="text-gray-700 text-lg leading-relaxed">
            Seed supply and distribution encompasses the entire process of making seeds available to farmers, from production to final delivery. This involves various stages, including seed production, processing, storage, and transportation, and relies on a diverse range of actors like seed producers, distributors, and retailers. Effective seed supply and distribution systems are crucial for agricultural productivity and food security.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            In agriculture, seeds are the foundation of food security and crop productivity. Yet, behind every seed lies a labyrinth of challenges in the supply chain. Imagine farmers struggling with Inconsistent seed quality, manufacturers battling counterfeit products, and distributors grappling with fragmented logistics. The seed supply chain, though vital, Is often plagued by Inefficiencies and vulnerabilities. What If there were a way to bring transparency, accountability, and efficiency to the seed supply chain? Let's delve into the pressing issues and explore Innovative
          </p>
        </div>
      </div>
      <FAQs />
      <Contact />
    </div>
  );
}