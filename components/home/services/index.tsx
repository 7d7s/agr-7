"use client";

import { Leaf } from "lucide-react";
import { GiFarmer, GiPlantSeed } from "react-icons/gi";
import { MdArrowOutward, MdEco } from "react-icons/md";
import { FaSeedling, FaBoxOpen, FaAppleAlt, FaTractor } from "react-icons/fa";

const features = [
  {
    icon: <GiFarmer size={26} />,
    title: "Always support farmer",
    desc: "Farmers strength their soil health while increasing crop yields & profitability.",
  },
  {
    icon: <GiPlantSeed size={26} />,
    title: "Growing excellence",
    desc: "Providing premium vegetable and soft fruit starter plants with our excellent seeds.",
  },
  {
    icon: <MdEco size={26} />,
    title: "Power of regeneration",
    desc: "Shifting agriculture from being carbon emitter to a powerful carbon sink.",
  },
  {
    icon: <FaSeedling size={26} />,
    title: "Excellent seeds",
    desc: "We help foster growth for our clients to contribute the agriculture industry's advancement.",
  },
  {
    icon: <FaTractor size={26} />,
    title: "Years of heritage!",
    desc: "Providing premium vegetable and soft fruit starter plants with our excellent seeds.",
  },
  {
    icon: <GiFarmer size={26} />,
    title: "Premium products",
    desc: "Farmers strength their soil health while increasing crop yields & profitability.",
  },
  {
    icon: <FaAppleAlt size={26} />,
    title: "Fresh farm harvest",
    desc: "We help foster growth for our clients to contribute the agriculture industry's advancement.",
  },
  {
    icon: <FaBoxOpen size={26} />,
    title: "Eco friendly packaging",
    desc: "Shifting agriculture from being carbon emitter to a powerful carbon sink.",
  },
];

export default function Services() {
  return (
    <section className="bg-white pt-16 md:pt-28">
      <div className="container mx-auto px-4 md:px-12 lg:px-20">

        {/* Top Header Area */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">

          {/* Left */}
          <div>
            <div className="flex gap-3 text-[#1f6b45] mb-6">
              <Leaf size={22} className="shrink-0"/>
              <p className="md:text-lg font-medium">
                Delivering sustainable and innovative agriculture solutions.
              </p>
            </div>

            <h2 className="text-[44px] leading-[56px] font-semibold text-[#0b3d2e]">
              Our commitment is to produce quality crops and empowering the future of food production!
            </h2>
          </div>

          {/* Right Text */}
          <div>
            <p className="text-gray-700 text-[16px] leading-[28px] mb-6">
              We help farmers and consumers have the technologies they need to protect the crops and the ecosystems from the threat of pests, weeds diseases in an environmentally sound, safe, and sustainable way.
            </p>

            <p className="text-gray-600 text-[15px] leading-[26px] mb-8">
              With 65 years of experience, we utilize deep industry knowledge, insights and innovation expertise to create solutions for tomorrow.
            </p>

            <div className="flex gap-4">
              <button className="bg-[#0b3d2e] text-white px-6 py-3 rounded-md text-[14px] hover:bg-[#155437] transition">
                More About Us  <MdArrowOutward size={18} className="inline" />
              </button>

              <button className="border border-[#0b3d2e] text-[#0b3d2e] px-6 py-3 rounded-md text-[14px] hover:bg-[#0b3d2e] hover:text-white transition">
                Contact Us
              </button>
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 border border-gray-200">

          {features.map((item, index) => (
            <div
              key={index}
              className="p-10 border-b border-r border-gray-200 
                         last:border-r-0 
                         md:[&:nth-child(4n)]:border-r-0"
            >
              <div className="w-14 h-14 bg-[#e6ebe8] rounded-lg flex items-center justify-center text-[#1f6b45] mb-6">
                {item.icon}
              </div>

              <h4 className="font-semibold text-[#0b3d2e] mb-3">
                {item.title}
              </h4>

              <p className="text-gray-600 text-[14px] leading-[24px]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
