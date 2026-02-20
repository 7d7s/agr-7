"use client";

import { useState } from "react";
import { Leaf, Minus, Plus } from "lucide-react";
import { Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/common/AnimatedSection";

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
    <AnimatedSection className="relative bg-[#063c23] py-20 md:py-32 text-white overflow-hidden" animation="fadeIn" delay={0.2}>
      {/* Soft Gradient Accent */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#063c23] via-[#063c23]/95 to-[#063c23]" />

      <div className="relative container mx-auto px-4 md:px-12 lg:px-20 grid lg:grid-cols-2 gap-10 md:gap-24 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {/* Subtitle */}
          <motion.div 
            className="flex items-center gap-3 text-yellow-400 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ rotate: 0 }}
              whileHover={{ rotate: 15 }}
              transition={{ duration: 0.3 }}
            >
              <Leaf size={22} />
            </motion.div>
            <p className="text-lg tracking-wide">
              Delivering with purpose & partnership!
            </p>
          </motion.div>

          {/* Heading */}
          <motion.h2 
            className="text-3xl md:text-5xl leading-10 font-semibold mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Unlocking nature,
            <br />
            enriching life!
          </motion.h2>

          {/* Description */}
          <motion.p 
            className="text-gray-200 text-[17px] leading-[30px] mb-12 max-w-xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            We are committed to responsible pig farming through innovation,
            sustainable livestock practices and strict quality standards that
            ensure both animal welfare and premium pork production.
          </motion.p>

          {/* Script Signature */}
          <motion.p 
            className="font-greatvibes text-5xl md:text-6xl text-yellow-400"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
          >
            Enriching Lives
          </motion.p>

        </motion.div>

        {/* RIGHT FAQ */}
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {faqs.map((item, index) => {
            const isActive = activeIndex === index;

            return (
              <motion.div
                key={index}
                className="border border-white/10 rounded-xl overflow-hidden transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <motion.button
                  onClick={() =>
                    setActiveIndex(isActive ? -1 : index)
                  }
                  className="w-full flex items-center justify-between px-6 py-5 text-left group"
                  whileHover={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.span 
                    className="text-[16px] font-medium"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.question}
                  </motion.span>

                  <motion.div
                    className={`w-9 h-9 flex items-center justify-center rounded-md text-sm font-bold transition ${isActive
                      ? "bg-yellow-400 text-black"
                      : "bg-white text-black group-hover:bg-yellow-400"
                      }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {isActive ? <Minus size={20} className="text-primary-dark" /> : <Plus size={20} className="text-green-700" />}
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <motion.p 
                        className="px-6 pb-6 text-gray-300 text-[15px] leading-[28px]"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                      >
                        {item.answer}
                      </motion.p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
      <motion.div 
        className="relative container mx-auto px-4 md:px-12 lg:px-20 mt-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Heading */}
        <motion.h3 
          className="text-lg md:text-2xl font-semibold md:text-center text-white mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          viewport={{ once: true }}
        >
          Delivering impact with purpose and partnership!
        </motion.h3>

        {/* Grid */}
        <motion.div 
          className="grid md:grid-cols-3 gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-4 p-6 rounded-md transition-all duration-300 cursor-pointer bg-[#e6ebe8] hover:bg-yellow-400 text-[#0b3d2e] hover:shadow-lg hover:scale-[1.02]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="w-8 h-8 flex items-center justify-center rounded-full bg-[#1f6b45] text-white"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Check size={16} />
              </motion.div>

              <motion.span 
                className="text-[15px] font-medium"
                whileHover={{ x: 3 }}
                transition={{ duration: 0.3 }}
              >
                {feature}
              </motion.span>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Text */}
        <motion.p 
          className="mt-12 text-gray-100 text-[16px] leading-[26px] max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          viewport={{ once: true }}
        >
          We join farmers, manufacturers, and retailers in sourcing, making and
          delivering products that are vital for living{" "}
          <motion.span 
            className="text-yellow-400 font-medium underline cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Get Started Now!
          </motion.span>
        </motion.p>
      </motion.div>
    </AnimatedSection>
  );
}
