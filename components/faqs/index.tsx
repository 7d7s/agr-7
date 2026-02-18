"use client";

import { useState } from "react";
import { Leaf, Minus, Plus } from "lucide-react";
import { Check } from "lucide-react";

const faqs = [
  {
    question: "Do pig farms require more land compared to the past?",
    answer:
      "Modern pig farming uses optimized housing systems and advanced feed efficiency to reduce land usage while improving productivity.",
  },
  {
    question: "How do you ensure animal health and bio-security?",
    answer:
      "We follow strict vaccination programs, controlled farm access, and continuous veterinary supervision to maintain the highest herd health standards.",
  },
  {
    question: "Is pig farming environmentally sustainable?",
    answer:
      "With proper manure management, nutrient recycling, and sustainable feed programs, pig farming can operate responsibly and efficiently.",
  },
  {
    question: "Do pig farms contribute to the local economy?",
    answer:
      "Yes. Pig farming supports rural employment, feed supply chains, transportation, and food production sectors.",
  },
];

const features = [
  "Highest quality seeds & plants",
  "Cutting edge biosecurity methods",
  "Pest management planning",
  "Improving energy efficiency",
  "Filtering, and recycling rainwater",
  "Solutions tailored to your needs",
];

export default function FAQs() {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section className="relative bg-[#063c23] py-20 md:py-32 text-white overflow-hidden">
      {/* Soft Gradient Accent */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#063c23] via-[#063c23]/95 to-[#063c23]" />

      <div className="relative container mx-auto px-4 md:px-12 lg:px-20 grid lg:grid-cols-2 gap-10 md:gap-24 items-center">

        {/* LEFT CONTENT */}
        <div>
          {/* Subtitle */}
          <div className="flex items-center gap-3 text-yellow-400 mb-6">
            <Leaf size={22} />
            <p className="text-lg tracking-wide">
              Delivering with purpose & partnership!
            </p>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-5xl leading-10 font-semibold mb-8">
            Unlocking nature,
            <br />
            enriching life!
          </h2>

          {/* Description */}
          <p className="text-gray-200 text-[17px] leading-[30px] mb-12 max-w-xl">
            We are committed to responsible pig farming through innovation,
            sustainable livestock practices and strict quality standards that
            ensure both animal welfare and premium pork production.
          </p>

          {/* Script Signature */}
          <p className="font-greatvibes text-4xl md:text-6xl text-yellow-400">
            Enriching Lives
          </p>
        </div>

        {/* RIGHT FAQ */}
        <div className="space-y-6">
          {faqs.map((item, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                className="border border-white/10 rounded-xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() =>
                    setActiveIndex(isActive ? -1 : index)
                  }
                  className="w-full flex items-center justify-between px-6 py-5 text-left group"
                >
                  <span className="text-[16px] font-medium">
                    {item.question}
                  </span>

                  <div
                    className={`w-9 h-9 flex items-center justify-center rounded-md text-sm font-bold transition ${isActive
                      ? "bg-yellow-400 text-black"
                      : "bg-white text-black group-hover:bg-yellow-400"
                      }`}
                  >
                    {isActive ? <Minus size={20} className="text-primary-dark" /> : <Plus size={20} className="text-green-700" />}
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-500 ${isActive
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                    }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-gray-300 text-[15px] leading-[28px]">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="relative container mx-auto px-4 md:px-12 lg:px-20 mt-20">
        {/* Heading */}
        <h3 className="text-lg md:text-2xl font-semibold md:text-center text-white mb-12">
          Delivering impact with purpose and partnership!
        </h3>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-3">

          {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-6 rounded-md transition-all duration-300 cursor-pointer bg-[#e6ebe8] hover:bg-yellow-400 text-[#0b3d2e] hover:shadow-lg hover:scale-[1.02]"
              >
                <div
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-[#1f6b45] text-white"
                >
                  <Check size={16} />
                </div>

                <span className="text-[15px] font-medium">
                  {feature}
                </span>
              </div>
            ))}
         </div>

        {/* Bottom Text */}
        <p className="mt-12 text-gray-100 text-[16px] leading-[26px] max-w-xl mx-auto">
          We join farmers, manufacturers, and retailers in sourcing, making and
          delivering products that are vital for living.{" "}
          <span className="text-yellow-400 font-medium underline cursor-pointer">
            Get Started Now!
          </span>
        </p>
      </div>
    </section>
  );
}
