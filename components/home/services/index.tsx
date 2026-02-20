"use client";

import { Leaf } from "lucide-react";
import { GiFarmer, GiPlantSeed } from "react-icons/gi";
import { MdArrowOutward, MdEco } from "react-icons/md";
import { FaSeedling, FaBoxOpen, FaAppleAlt, FaTractor } from "react-icons/fa";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/common/AnimatedSection";

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
    <AnimatedSection className="bg-white pt-16 md:pt-28" animation="fadeIn" delay={0.2}>
      <div className="container mx-auto px-4 md:px-12 lg:px-20">

        {/* Top Header Area */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="flex gap-3 text-[#1f6b45] mb-6">
              <motion.div
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 15 }}
                transition={{ duration: 0.3 }}
              >
                <Leaf size={22} className="shrink-0" />
              </motion.div>
              <p className="md:text-lg font-medium">
                Delivering sustainable and innovative agriculture solutions.
              </p>
            </div>

            <motion.h2
              className="text-[44px] leading-[56px] font-semibold text-[#0b3d2e]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Our commitment is to produce quality crops and empowering the future of food production!
            </motion.h2>
          </motion.div>

          {/* Right Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.p
              className="text-gray-700 text-[16px] leading-[28px] mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              We help farmers and consumers have the technologies they need to protect the crops and the ecosystems from the threat of pests, weeds diseases in an environmentally sound, safe, and sustainable way.
            </motion.p>

            <motion.p
              className="text-gray-600 text-[15px] leading-[26px] mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              With 65 years of experience, we utilize deep industry knowledge, insights and innovation expertise to create solutions for tomorrow.
            </motion.p>

            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.button
                className="bg-[#0b3d2e] text-white px-6 py-3 rounded-md text-[14px] hover:bg-[#155437] transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                More About Us  <MdArrowOutward size={18} className="inline" />
              </motion.button>

              <motion.button
                className="border border-[#0b3d2e] text-[#0b3d2e] px-6 py-3 rounded-md text-[14px] hover:bg-[#0b3d2e] hover:text-white transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Feature Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 border border-gray-200"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          viewport={{ once: true }}
        >
          {features.map((item, index) => (
            <motion.div
              key={index}
              className="p-10 border-b border-r border-gray-200 last:border-r-0 md:[&:nth-child(4n)]:border-r-0"
              initial={{ opacity: 0, y: 30, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{
                duration: 0.6,
                delay: 1 + index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
            >
              <motion.div
                className="w-14 h-14 bg-[#e6ebe8] rounded-lg flex items-center justify-center text-[#1f6b45] mb-6"
                whileHover={{ rotate: 15 }}
                transition={{ duration: 0.6 }}
              >
                {item.icon}
              </motion.div>

              <motion.h4
                className="font-semibold text-[#0b3d2e] mb-3"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                {item.title}
              </motion.h4>

              <motion.p
                className="text-gray-600 text-[14px] leading-[24px]"
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {item.desc}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
