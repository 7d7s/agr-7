"use client";

import Image from "next/image";
import { Leaf, Sprout, ShieldCheck } from "lucide-react";
import { MdArrowOutward } from "react-icons/md";
import FeatureItem from "@/components/common/FeatureItem";


export default function AboutUs() {
  return (
    <section className="relative bg-white py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div>
          <div className="flex items-center gap-3 text-[#1f6b45] mb-6">
            <Leaf size={22} />
            <p className="md:text-lg font-medium">
              About Our Pig Farm
            </p>
          </div>

          {/* Heading */}
          <h2 className="text-2xl md:text-5xl leading-10 font-semibold text-primary-dark mb-8">
            Sustainable pig farming with integrity, innovation &
            responsibility.
          </h2>
            <div className="rounded-[30px] overflow-hidden">
              <Image
                src="/pig_farm_images.png"
                alt="Pig Farm"
                width={600}
                height={700}
                className="object-cover w-full h-[450px]"
                priority
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div>

          {/* Description */}
          <p className="text-gray-600 text-[17px] leading-[28px] mb-10">
            We are committed to producing high-quality pork while maintaining
            ethical livestock practices and sustainable farming methods.
            Through advanced nutrition programs, responsible breeding and
            modern farm management, we ensure animal welfare and consistent
            product excellence.
          </p>

          {/* Feature Highlights */}
          <div className="space-y-6 mb-12">

            <FeatureItem
              icon={<Sprout size={20} />}
              title="Responsible Breeding"
              desc="Genetically strong and healthy pig breeds managed with care and precision."
            />

            <FeatureItem
              icon={<ShieldCheck size={20} />}
              title="Bio-Security Standards"
              desc="Strict hygiene, vaccination and monitoring systems for herd safety."
            />

            <FeatureItem
              icon={<Leaf size={20} />}
              title="Sustainable Feed Systems"
              desc="Balanced nutrition programs ensuring growth efficiency and animal welfare."
            />

          </div>

          {/* Signature Text */}
          <p className="font-greatvibes text-4xl md:text-6xl text-yellow-400 mb-6">
            Raising Quality, Naturally
          </p>

          {/* CTA */}
          <button className="bg-[#0b3d2e] text-white px-8 py-4 rounded-lg hover:bg-[#155437] transition text-[15px]">
            Learn More About Us <MdArrowOutward  size={18} className="inline" />
          </button>
        </div>
        </div>
      </div>
    </section>
  );
}
