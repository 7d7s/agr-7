"use client";

import FeatureItem from "@/components/common/FeatureItem";
import { Leaf } from "lucide-react";
import Image from "next/image";
import { FaLeaf } from "react-icons/fa";
import { GiFarmer, GiPlantSeed } from "react-icons/gi";
import { MdArrowOutward, MdEco } from "react-icons/md";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/common/AnimatedSection";

export default function WhyUs() {
  return (
    <section className="bg-[#f3f4f2] py-24">
      <div className="container mx-auto px-4 md:px-12 lg:px-20 grid lg:grid-cols-2 gap-16 items-start">

        {/* LEFT CONTENT */}
        <div>
          <AnimatedSection animation="slideRight" delay={0.2}>
            <div className="flex items-center gap-3 text-[#1f6b45] mb-6">
              <motion.div
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 15 }}
                transition={{ duration: 0.3 }}
              >
                <Leaf size={22} />
              </motion.div>
              <p className="md:text-lg font-medium">
                Why Choose Us
              </p>
            </div>
            {/* Title */}
            <motion.h2 
              className="text-2xl md:text-5xl font-semibold text-primary-dark leading-tight mb-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Over 10+ Years of Excellence in Responsible Pig Farming & Premium Pork Production
            </motion.h2>
          </AnimatedSection>

          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-700 leading-relaxed">
              For more than a decade, we have been committed to raising healthy pigs through
              responsible livestock management, strict biosecurity standards, and modern
              farming practices that prioritize animal welfare and food safety.
            </p>
          </motion.div>

          <motion.p 
            className="text-gray-700 mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            With 10+ years of hands-on experience, we combine practical expertise,
            advanced nutrition programs, and sustainable farm operations to deliver
            consistent, high-quality pork products to our partners and communities.
          </motion.p>


          {/* Features */}
          <motion.div
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
                icon={<GiFarmer size={22} />}
                title="10+ Years of Livestock Expertise"
                desc="A decade of proven experience in pig breeding, herd health management, and efficient farm operations."
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <FeatureItem
                icon={<MdEco size={22} />}
                title="Advanced Biosecurity Standards"
                desc="Strict hygiene protocols, vaccination programs, and controlled farm access to ensure animal health and product safety."
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              viewport={{ once: true }}
            >
              <FeatureItem
                icon={<GiPlantSeed size={22} />}
                title="Sustainable & Ethical Practices"
                desc="Responsible manure management, efficient feed systems, and environmentally conscious production methods."
              />
            </motion.div>
          </motion.div>

          <motion.div 
            className="mt-10 border-t pt-8 text-gray-700"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            viewport={{ once: true }}
          >
            Sitting at the heart of the global supply chain, we have proudly supported local supply chains,
            retailers, and food partners by delivering reliable, traceable,
            and premium-quality pork products that meet the highest standards.
          </motion.div>

          {/* Buttons */}
          <motion.div 
            className="flex gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            viewport={{ once: true }}
          >
            <motion.button 
              className="bg-primary-dark text-white px-6 py-3 rounded-md hover:bg-primary-dark hover:text-white transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              More About Us <MdArrowOutward size={18} className="inline" />
            </motion.button>
            <motion.button 
              className="border border-primary-dark text-primary-dark px-6 py-3 rounded-md hover:bg-primary-dark hover:text-white transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.button>
          </motion.div>
        </div>

        {/* RIGHT IMAGE CARD */}
        <motion.div 
          className="relative sticky top-14"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
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
          <motion.div 
            className="absolute top-6 right-10 bg-white rounded-full w-28 h-28 flex items-center justify-center shadow-lg border"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1, rotate: 10 }}
          >
            <FaLeaf className="text-green-700" size={32} />
          </motion.div>

          {/* Floating Category Cards */}
          <motion.div 
            className="absolute bottom-8 left-1 md:left-24 flex items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="bg-white rounded-xl shadow-md px-8 py-6 text-center"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-green-700 mb-2">
                <GiPlantSeed size={28} />
              </div>
              <p className="font-medium text-sm">Vegetables & Fruits</p>
            </motion.div>

            <motion.div 
              className="bg-white rounded-xl shadow-lg px-8 py-6 text-center -ml-4"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-green-700 mb-2">
                <MdEco size={28} />
              </div>
              <p className="font-medium text-sm">Agriculture & Foods</p>
            </motion.div>

            <motion.div 
              className="bg-yellow-400 rounded-r-xl w-16 h-24 flex items-center justify-center -ml-4 cursor-pointer"
              whileHover={{ scale: 1.1, x: 5 }}
              transition={{ duration: 0.3 }}
            >
              ▶
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}


