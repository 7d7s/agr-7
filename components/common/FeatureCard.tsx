import Image from "next/image";
import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function FeatureCards() {
  return (
    <section className="relative -mt-24 z-20 container mx-auto px-4 md:px-12 lg:px-20">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Green Card */}
        <div className="bg-primary-dark text-white rounded-2xl p-10 lg:col-span-2 relative overflow-hidden flex items-center justify-between">
          <div className="max-w-md">
            <h3 className="text-2xl font-bold mb-4">
              Feeding The World With Consistency.
            </h3>
            <p className="text-gray-200 mb-6">
              We are committed to build long lasting partnerships with our
              clients founded on trust to foster growth.
            </p>

            <button className="bg-yellow-400 text-black px-5 py-3 rounded-md flex items-center gap-2 font-medium hover:bg-yellow-300 transition">
              Contact Us Now <FaArrowRight size={14} />
            </button>
          </div>

          <Image
            src="/person.png"
            alt="Farmer with vegetables"
            width={260}
            height={260}
            className="hidden md:block object-contain"
          />
        </div>

        {/* Yellow Card */}
        <div className="bg-yellow-400 rounded-2xl p-10 relative overflow-hidden">
          <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
          <p className="mb-6 text-gray-800">
            Our vision is to advocates for formulators and distributors of
            organic crop pesticides, ensuring their participation in shaping
            pesticide policy.
          </p>

          <div className="flex gap-4">
            <button className="w-10 h-10 border border-black flex items-center justify-center rounded-md hover:bg-black hover:text-white transition">
              <FaChevronLeft size={14} />
            </button>

            <button className="w-10 h-10 border border-black flex items-center justify-center rounded-md hover:bg-black hover:text-white transition">
              <FaChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
