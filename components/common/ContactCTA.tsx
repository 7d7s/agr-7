"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function PremiumCTA() {
  return (
    <section className="relative py-24 md:py-32 bg-[#f3f4f2] overflow-hidden">

      {/* Subtle Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-[#f3f4f2]" />

      {/* Soft Radial Highlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-yellow-400/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">

        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-semibold text-[#063c23] leading-tight mb-8">
            Partner With Us For <br />
            Sustainable Livestock Solutions
          </h2>

          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Join us in building a responsible and sustainable future
            for pig farming. Together we can strengthen supply chains,
            improve animal welfare, and create lasting impact.
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="flex flex-col md:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Primary Button */}
          <motion.button
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.98 }}
            className="bg-[#063c23] hover:bg-[#0b5c38] text-white px-10 py-5 rounded-xl flex items-center gap-3 font-semibold text-lg transition shadow-lg"
          >
            Contact Our Team
            <ArrowRight size={20} />
          </motion.button>

          {/* Secondary Button */}
          <motion.button
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.98 }}
            className="border-2 border-[#063c23] text-[#063c23] px-10 py-5 rounded-xl flex items-center gap-3 font-semibold text-lg hover:bg-[#063c23] hover:text-white transition"
          >
            View Our Services
            <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}