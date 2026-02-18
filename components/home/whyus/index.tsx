"use client";

import FeatureItem from "@/components/common/FeatureItem";
import { Leaf } from "lucide-react";
import Image from "next/image";
import { FaLeaf } from "react-icons/fa";
import { GiFarmer, GiPlantSeed } from "react-icons/gi";
import { MdArrowOutward, MdEco } from "react-icons/md";

export default function WhyUs() {
  return (
    <section className="bg-[#f3f4f2] py-24">
      <div className="container mx-auto px-4 md:px-12 lg:px-20 grid lg:grid-cols-2 gap-16 items-start">

        {/* LEFT CONTENT */}
        <div>
          <div className="flex items-center gap-3 text-[#1f6b45] mb-6">
            <Leaf size={22} />
            <p className="md:text-lg font-medium">
              Why Choose Us
            </p>
          </div>
          {/* Title */}
          <h2 className="text-2xl md:text-5xl font-semibold text-primary-dark leading-tight mb-10">
            Over 10 Years of Excellence in Responsible Pig Farming & Premium Pork Production
          </h2>

          <div className="mb-8">
            <p className="text-gray-700 leading-relaxed">
              For more than a decade, we have been committed to raising healthy pigs through
              responsible livestock management, strict biosecurity standards, and modern
              farming practices that prioritize animal welfare and food safety.
            </p>
          </div>

          <p className="text-gray-700 mb-10 leading-relaxed">
            With 10+ years of hands-on experience, we combine practical expertise,
            advanced nutrition programs, and sustainable farm operations to deliver
            consistent, high-quality pork products to our partners and communities.
          </p>


          {/* Features */}
          <FeatureItem
            icon={<GiFarmer size={22} />}
            title="10+ Years of Livestock Expertise"
            desc="A decade of proven experience in pig breeding, herd health management, and efficient farm operations."
          />

          <FeatureItem
            icon={<MdEco size={22} />}
            title="Advanced Biosecurity Standards"
            desc="Strict hygiene protocols, vaccination programs, and controlled farm access to ensure animal health and product safety."
          />

          <FeatureItem
            icon={<GiPlantSeed size={22} />}
            title="Sustainable & Ethical Practices"
            desc="Responsible manure management, efficient feed systems, and environmentally conscious production methods."
          />

          <div className="mt-10 border-t pt-8 text-gray-700">
            Sitting at the heart of the global supply chain, we have proudly supported local supply chains,
            retailers, and food partners by delivering reliable, traceable,
            and premium-quality pork products that meet the highest standards.
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-8">
            <button className="bg-primary-dark text-white px-6 py-3 rounded-md hover:bg-primary-dark hover:text-white transition">
              More About Us <MdArrowOutward size={18} className="inline" />
            </button>
            <button className="border border-primary-dark text-primary-dark px-6 py-3 rounded-md hover:bg-primary-dark hover:text-white transition">
              Contact Us
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE CARD */}
        <div className="relative sticky top-14">
          <div className="relative rounded-2xl overflow-hidden">
            <Image
              src="/whyus.webp"
              alt="Farmer"
              width={600}
              height={700}
              className="object-cover w-full h-[500px]"
            />
          </div>

          {/* Logo Badge */}
          <div className="absolute top-6 right-10 bg-white rounded-full w-28 h-28 flex items-center justify-center shadow-lg border">
            <FaLeaf className="text-green-700" size={32} />
          </div>

          {/* Floating Category Cards */}
          <div className="absolute bottom-8 left-1 md:left-24 flex items-center">
            <div className="bg-white rounded-xl shadow-md px-8 py-6 text-center">
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


