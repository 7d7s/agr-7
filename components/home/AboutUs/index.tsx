"use client";

import Image from "next/image";
import { Leaf, Sprout, ShieldCheck } from "lucide-react";
import { MdArrowOutward } from "react-icons/md";
import FeatureItem from "@/components/common/FeatureItem";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/common/AnimatedSection";


export default function AboutUs() {
  return (
    <section className="relative bg-white py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-20 items-start">
          <div>
          <AnimatedSection animation="slideLeft" delay={0.2}>
            <div className="flex items-center gap-3 text-[#1f6b45] mb-6">
              <motion.div
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 15 }}
                transition={{ duration: 0.3 }}
              >
                <Leaf size={22} />
              </motion.div>
              <p className="md:text-lg font-medium">
                About Our Pig Farm
              </p>
            </div>

            {/* Heading */}
            <motion.h2 
              className="text-2xl md:text-5xl leading-10 font-semibold text-primary-dark mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Sustainable pig farming with integrity, innovation &
              responsibility.
            </motion.h2>
          </AnimatedSection>
            
            <motion.div 
              className="rounded-[30px] overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src="/pig_farm_images.png"
                alt="Pig Farm"
                width={600}
                height={700}
                className="object-cover w-full h-[450px]"
                priority
              />
            </motion.div>
          </div>

          {/* RIGHT CONTENT */}
          <div>

          {/* Description */}
          <motion.p 
            className="text-gray-600 text-[17px] leading-[28px] mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            We are committed to producing high-quality pork while maintaining
            ethical livestock practices and sustainable farming methods.
            Through advanced nutrition programs, responsible breeding and
            modern farm management, we ensure animal welfare and consistent
            product excellence.
          </motion.p>

          {/* Feature Highlights */}
          <motion.div 
            className="space-y-6 mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <FeatureItem
                icon={<Sprout size={20} />}
                title="Responsible Breeding"
                desc="Genetically strong and healthy pig breeds managed with care and precision."
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <FeatureItem
                icon={<ShieldCheck size={20} />}
                title="Bio-Security Standards"
                desc="Strict hygiene, vaccination and monitoring systems for herd safety."
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              viewport={{ once: true }}
            >
              <FeatureItem
                icon={<Leaf size={20} />}
                title="Sustainable Feed Systems"
                desc="Balanced nutrition programs ensuring growth efficiency and animal welfare."
              />
            </motion.div>
          </motion.div>

          {/* Signature Text */}
          <motion.p 
            className="font-greatvibes text-4xl md:text-6xl text-yellow-400 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            viewport={{ once: true }}
          >
            Raising Quality, Naturally
          </motion.p>

          {/* CTA */}
          <motion.button 
            className="bg-[#0b3d2e] text-white px-8 py-4 rounded-lg hover:bg-[#155437] transition text-[15px]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            viewport={{ once: true }}
          >
            Learn More About Us <MdArrowOutward  size={18} className="inline" />
          </motion.button>
        </div>
        </div>
      </div>
    </section>
  );
}
