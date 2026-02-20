"use client";

import Image from "next/image";
import { Leaf, ShieldCheck, HeartHandshake, Factory, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/common/AnimatedSection";
import Breadcrumb from "@/components/common/Breadcrumb";
import ContactCTA from "@/components/common/ContactCTA";

export default function AboutPage() {
  return (
    <main className="bg-white text-gray-800">

      {/* ================= HERO ================= */}
      <Breadcrumb
        image="/pig_farm_images.png"
        title="About Us"
        description="Our success depends on our customers' success, so we are committed to building long lasting partnerships based on trust, collaboration, and fostering sustainable growth."
      />

      {/* ================= INTRO ================= */}
      <section className="relative py-28 md:py-36 bg-white overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 grid lg:grid-cols-2 gap-20 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Small Label */}
            <div className="flex items-center gap-3 mb-6 text-[#063c23]">
              <Leaf size={18} />
              <span className="uppercase tracking-wider text-sm font-semibold">
                10+ Years Experience
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-semibold text-[#063c23] leading-tight mb-8">
              A Decade of Trusted <br />
              Pig Farming Excellence
            </h2>

            <div className="space-y-6 mb-10">
              <p className="text-gray-600 leading-relaxed text-lg">
                For over 10 years, our farm has specialized in sustainable pig
                breeding, advanced nutrition management, and ethical livestock
                practices that ensure animal welfare and premium pork production.
              </p>

              <p className="text-gray-600 leading-relaxed text-lg">
                We combine modern technology, strict biosecurity systems,
                and environmentally responsible operations to strengthen
                supply chains and rural communities.
              </p>
              {/* Secondary Paragraph */}
              <p className="text-gray-600 text-lg leading-relaxed">
                We integrate modern technology, strict biosecurity systems,
                and environmentally responsible operations to strengthen
                global supply chains and support rural communities.
              </p>
            </div>
            {/* Signature Text */}
            <motion.p
              className="font-greatvibes text-4xl md:text-6xl text-yellow-400 mt-10"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              viewport={{ once: true }}
            >
              Raising Quality, Naturally
            </motion.p>
          </motion.div>

          {/* ================= RIGHT SIDE ================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Main Image */}
            <div className="rounded-3xl overflow-hidden mb-14">
              <Image
                src="/whyus.webp"
                alt="Pig Farm"
                width={700}
                height={600}
                className="object-cover w-full h-[400px]"
              />

            </div>
            {/* Feature Points */}
            <div className="space-y-4 mb-10">
              <div className="flex items-start gap-3">
                <ShieldCheck className="text-[#063c23]" size={20} />
                <p className="text-gray-700">
                  Advanced herd health monitoring systems
                </p>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck className="text-[#063c23]" size={20} />
                <p className="text-gray-700">
                  Sustainable feed and waste management programs
                </p>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck className="text-[#063c23]" size={20} />
                <p className="text-gray-700">
                  Strict biosecurity & global compliance standards
                </p>
              </div>
            </div>

            {/* CTA */}
            <motion.button
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#063c23] hover:bg-[#0b5c38] text-white px-8 py-4 rounded-xl flex items-center gap-3 font-semibold transition shadow-md"
            >
              Learn More About Our Process
              <ArrowRight size={18} />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <AnimatedSection className="relative bg-[#063c23] py-20 md:py-32 text-white overflow-hidden" animation="fadeIn" delay={0.3}>
        {/* Soft Gradient Accent */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#063c23] via-[#063c23]/95 to-[#063c23]" />

        <div className="relative container mx-auto px-4 md:px-12 lg:px-20 grid lg:grid-cols-2 gap-10 md:gap-24 items-center">

          {/* MISSION SECTION */}
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
                Our Purpose
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
              Mission:
              <br />
              Nurturing Excellence
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-gray-200 text-[17px] leading-[30px] mb-12 max-w-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              To revolutionize pig farming through sustainable practices, cutting-edge technology, and ethical livestock management. We are committed to delivering premium quality pork while ensuring animal welfare, environmental stewardship, and community prosperity.
            </motion.p>

            {/* Mission Points */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              {[
                "Sustainable farming practices for future generations",
                "Premium quality products through innovation",
                "Community development and rural empowerment"
              ].map((point, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="w-2 h-2 bg-yellow-400 rounded-full"
                    whileHover={{ scale: 1.5 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="text-gray-300 text-[15px]">{point}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* VISION SECTION */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {/* Vision Card */}
            <motion.div
              className="border border-white/10 rounded-xl p-8 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.1)' }}
            >
              {/* Vision Header */}
              <motion.div
                className="flex items-center gap-3 mb-6"
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center text-[#063c23]"
                  whileHover={{ rotate: 180 }}
                  transition={{ duration: 0.6 }}
                >
                  <Leaf size={24} />
                </motion.div>
                <h3 className="text-2xl font-bold text-yellow-400">Our Vision</h3>
              </motion.div>

              {/* Vision Content */}
              <motion.p
                className="text-gray-100 text-[16px] leading-[28px] mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                viewport={{ once: true }}
              >
                To be the global leader in sustainable pig farming, setting industry standards for innovation, animal welfare, and environmental responsibility. We envision a future where agriculture and technology work in harmony to feed the world sustainably.
              </motion.p>
            </motion.div>

            {/* Core Principles */}
            <motion.div
              className="border border-white/10 rounded-xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.1)' }}
            >
              <h4 className="text-lg font-semibold text-yellow-400 mb-4">Core Principles</h4>
              <div className="space-y-3">
                {[
                  "Innovation-driven agriculture",
                  "Ethical animal treatment",
                  "Environmental stewardship",
                  "Community partnership"
                ].map((principle, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 1.1 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="w-6 h-6 rounded-full border-2 border-yellow-400 flex items-center justify-center"
                      whileHover={{ scale: 1.2, rotate: 180 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                    </motion.div>
                    <span className="text-gray-200 text-sm">{principle}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Signature */}
        <motion.div
          className="relative container mx-auto px-4 md:px-12 lg:px-20 mt-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          viewport={{ once: true }}
        >
          <motion.p
            className="font-greatvibes text-4xl md:text-5xl text-yellow-400"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            viewport={{ once: true }}
          >
            Committed to Excellence
          </motion.p>
          <motion.div
            className="mt-6 flex justify-center"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
            viewport={{ once: true }}
          >
            <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
          </motion.div>
        </motion.div>
      </AnimatedSection>

      {/* ================= CORE VALUES (Do not change anything)================= */}
      <AnimatedSection className="py-24 md:py-32" animation="fadeUp" delay={0.4}>
        <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-20">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-semibold text-[#063c23] mb-6">
              Our Core Values
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <ValueCard
              icon={<ShieldCheck size={32} />}
              title="Bio-Security Excellence"
              text="Strict hygiene protocols and veterinary oversight ensure herd health and food safety."
              delay={0.6}
            />

            <ValueCard
              icon={<HeartHandshake size={32} />}
              title="Ethical Livestock Care"
              text="Animal welfare remains at the center of every farming decision we make."
              delay={0.7}
            />

            <ValueCard
              icon={<Factory size={32} />}
              title="Sustainable Operations"
              text="Efficient feed systems and waste management reduce environmental impact."
              delay={0.8}
            />
          </div>
        </div>
      </AnimatedSection>

      {/* ================= STATS ================= */}
      <AnimatedSection className="relative bg-gradient-to-br from-[#063c23] via-[#063c23] to-[#0b5c38] text-white py-24 md:py-32 overflow-hidden" animation="fadeUp" delay={0.5}>
        {/* Complex Background Layers */}
        <div className="absolute inset-0">
          {/* Base Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, #063c23 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, #063c23 0%, transparent 50%),
                             radial-gradient(circle at 50% 50%, #063c23 0%, transparent 50%)`,
              backgroundSize: '200px 200px'
            }} />
          </div>

          {/* Animated Grid Pattern */}
          <div className="absolute inset-0 opacity-8">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }} />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-20 relative z-10">
          <motion.div
            className="text-center mb-24"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl mb-8 relative">
              <span className="relative inline-block">
                Excellence in Numbers
              </span>
            </h2>

            <motion.p
              className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              A decade of excellence measured in meaningful metrics and sustainable impact
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12 lg:gap-20">
            <Stat number="10+" text="Years of Excellence" delay={0.7} />
            <Stat number="58M" text="Products Delivered" delay={0.8} />
            <Stat number="98K" text="Acres of Farming" delay={0.9} />
          </div>
        </div>
      </AnimatedSection>

      <ContactCTA />
    </main>
  );
}

/* ================= Components ================= */

function ValueCard({ icon, title, text, delay }: any) {
  return (
    <motion.div
      whileHover={{ y: -8, rotateX: 2 }}
      className="group relative bg-white p-10 lg:p-12 rounded-3xl border border-gray-100 transition-all duration-300 overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(45deg, #063c23 25%, transparent 25%, transparent 75%, #063c23 75%, #063c23),
                         linear-gradient(45deg, #063c23 25%, transparent 25%, transparent 75%, #063c23 75%, #063c23)`,
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0, 10px 10px'
        }} />
      </div>

      {/* Top Border Accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

      <div className="relative z-10">
        <motion.div
          className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center text-[#063c23] mb-8 mx-auto transform group-hover:rotate-6 transition-transform duration-300"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: delay + 0.1 }}
          viewport={{ once: true }}
        >
          {icon}
        </motion.div>

        <motion.h4
          className="font-bold text-xl text-[#063c23] mb-6 group-hover:text-yellow-600 transition-colors"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: delay + 0.2 }}
          viewport={{ once: true }}
        >
          {title}
        </motion.h4>

        <motion.p
          className="text-gray-600 leading-relaxed text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: delay + 0.3 }}
          viewport={{ once: true }}
        >
          {text}
        </motion.p>
      </div>
    </motion.div>
  );
}

function Stat({ number, text, delay }: any) {
  return (
    <motion.div
      className="text-center relative group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
    >
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: delay + 0.2 }}
        viewport={{ once: true }}
      >
        <h3 className="text-3xl md:text-6xl py-5 relative inline-block">
          <span className="relative">
            <span className="text-yellow-400">
              {number}
            </span>
          </span>
        </h3>
      </motion.div>

      <motion.p
        className="text-gray-300 text-lg mb-5 leading-relaxed max-w-xs mx-auto font-medium relative group-hover:text-yellow-200 transition-colors duration-300"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: delay + 0.4 }}
        viewport={{ once: true }}
      >
        {text}
      </motion.p>
      {/* Corner Decorations */}
      <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-yellow-400/30 group-hover:rotate-45 transition-transform duration-500"></div>
      <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-yellow-400/30 group-hover:rotate-45 transition-transform duration-500"></div>
      <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-yellow-400/30 group-hover:rotate-45 transition-transform duration-500"></div>
      <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-yellow-400/30 group-hover:rotate-45 transition-transform duration-500"></div>
    </motion.div>
  );
}
