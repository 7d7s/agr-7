"use client";

import Image from "next/image";
import { FaLeaf } from "react-icons/fa";
import { GiFarmer, GiPlantSeed } from "react-icons/gi";
import { MdEco } from "react-icons/md";

export default function WhyUs() {
  return (
    <section className="bg-[#f3f4f2] py-24">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">

        {/* LEFT CONTENT */}
        <div>
          {/* Title */}
          <h2 className="text-5xl font-bold text-[#0b3d2e] leading-tight mb-10">
            Our commitment is to produce quality crops and empowering the
            future of food production!
          </h2>

          {/* Intro Text */}
          <div className="flex gap-4 mb-8">
            <FaLeaf className="text-yellow-500 mt-1" size={22} />
            <p className="text-gray-700 leading-relaxed">
              We help ensure farmers and consumers have the technologies they
              need to protect the crops, communities, and ecosystems from the
              threat of pests, weeds diseases in an environmentally sound,
              safe, and sustainable way.
            </p>
          </div>

          <p className="text-gray-700 mb-10 leading-relaxed">
            With over 65 years of experience, we utilize deep industry
            knowledge, market insights & innovation expertise to create
            solutions for tomorrow.
          </p>

          {/* Features */}
          <FeatureItem
            icon={<GiFarmer size={22} />}
            title="Always support farmers"
            desc="Farmers could strengthen soil health while increasing crop yields and profitability."
          />

          <FeatureItem
            icon={<MdEco size={22} />}
            title="Power of regeneration"
            desc="Shifting agriculture from being a carbon emitter to a powerful carbon sink."
          />

          <FeatureItem
            icon={<GiPlantSeed size={22} />}
            title="Growing excellence"
            desc="Providing premium vegetable and soft fruit starter plants with our excellent seeds."
          />

          <div className="mt-10 border-t pt-8 text-gray-700">
            Sitting at the heart of the global supply chain, we join farmers,
            ranchers, foodservice customers and retailers in sourcing, making
            and delivering products that are vital for living.
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-8">
            <button className="bg-green-700 text-white px-6 py-3 rounded-md hover:bg-green-800 transition">
              More About Us →
            </button>
            <button className="border border-green-700 text-green-700 px-6 py-3 rounded-md hover:bg-green-700 hover:text-white transition">
              Contact Us
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE CARD */}
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden">
            <Image
              src="/whyus.webp"
              alt="Farmer"
              width={600}
              height={700}
              className="object-cover w-full h-[600px]"
            />
          </div>

          {/* Logo Badge */}
          <div className="absolute -top-6 right-10 bg-white rounded-full w-28 h-28 flex items-center justify-center shadow-lg border">
            <FaLeaf className="text-green-700" size={32} />
          </div>

          {/* Floating Category Cards */}
          <div className="absolute bottom-8 left-8 flex items-center">
            <div className="bg-white rounded-xl shadow-lg px-8 py-6 text-center">
              <div className="text-green-700 mb-2">
                <GiPlantSeed size={28} />
              </div>
              <p className="font-medium text-sm">Vegetables & Fruits</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg px-8 py-6 text-center -ml-4">
              <div className="text-green-700 mb-2">
                <MdEco size={28} />
              </div>
              <p className="font-medium text-sm">Agriculture & Foods</p>
            </div>

            <div className="bg-yellow-400 rounded-r-xl w-16 h-24 flex items-center justify-center -ml-4 cursor-pointer">
              ▶
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureItem({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="border-t pt-6 mt-6 flex gap-5">
      <div className="w-14 h-14 bg-[#e8ecea] rounded-lg flex items-center justify-center text-green-700">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-[#0b3d2e] mb-2">{title}</h4>
        <p className="text-gray-600 text-sm">{desc}</p>
      </div>
    </div>
  );
}
