"use client";

import Image from "next/image";
import { Mail, Clock, ChevronDown } from "lucide-react";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/common/AnimatedSection";

export default function ContactSection() {
  return (
    <AnimatedSection className="py-28 bg-white" animation="fadeIn" delay={0.2}>
      <div className="container mx-auto px-4 md:px-12 lg:px-20">
        <motion.div 
          className="bg-[#e7efe9] rounded-[28px] px-6 md:px-10 overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >

          <div className="grid lg:grid-cols-2 gap-16 py-10 md:py-16">

            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.h2 
                className="text-[34px] leading-[44px] font-semibold text-[#0b3d2e] mb-12 max-w-md"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              >
                If you have questions or you'd like to find out more about services, please get in touch!
              </motion.h2>

              {/* Quick Contact */}
              <motion.div 
                className="mb-12"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <h4 className="text-[16px] font-semibold text-[#0b3d2e] mb-6">
                  Quick Contact
                </h4>

                <motion.div 
                  className="flex gap-4 items-start"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="w-11 h-11 bg-[#1f6b45] rounded-full flex items-center justify-center text-white"
                    whileHover={{ scale: 1.1, rotate: 15 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Mail size={18} />
                  </motion.div>
                  <div className="text-[15px] leading-[24px]">
                    <motion.p 
                      className="text-[#1f6b45]"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      Agrowok@mail.com
                    </motion.p>
                    <motion.p 
                      className="text-[#1f6b45]"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      +2 011 6114 5741
                    </motion.p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Working Hours */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
              >
                <h4 className="text-[16px] font-semibold text-[#0b3d2e] mb-6">
                  Working Hours
                </h4>

                <motion.div 
                  className="flex gap-4 items-start"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="w-11 h-11 bg-[#1f6b45] rounded-full flex items-center justify-center text-white"
                    whileHover={{ scale: 1.1, rotate: 15 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Clock size={18} />
                  </motion.div>
                  <div className="text-[15px] leading-[24px] text-[#0b3d2e]">
                    <motion.p 
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      Mon – Fri: 8.00am – 18.00pm
                    </motion.p>
                    <motion.p 
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      Sat: 9.00am – 17.00pm
                    </motion.p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* RIGHT FORM */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.form 
                className="space-y-4 md:space-y-7"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >

                <motion.div 
                  className="grid md:grid-cols-2 gap-4 md:gap-7"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  <Input placeholder="Your Name" />
                  <Input placeholder="Email Address" />
                </motion.div>

                <motion.div 
                  className="grid md:grid-cols-2 gap-4 md:gap-7"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Input placeholder="Company Name" />
                  <Input placeholder="Phone Number" />
                </motion.div>

                <motion.div 
                  className="grid md:grid-cols-2 gap-4 md:gap-7"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  viewport={{ once: true }}
                >
                  <CustomSelect placeholder="Property size (hectares)" />
                  <CustomSelect placeholder="AI Integration solutions" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  viewport={{ once: true }}
                >
                  <textarea
                    rows={5}
                    placeholder="Kindly provide enough information about your farm business..."
                    className="w-full bg-white rounded-xl px-6 py-4 text-[15px] outline-none border border-transparent focus:border-[#1f6b45] transition resize-none"
                  />
                </motion.div>

                <motion.button 
                  className="w-full bg-[#1f6b45] text-white py-4 rounded-xl text-[15px] font-medium hover:bg-[#155437] transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                  viewport={{ once: true }}
                >
                  Submit Request <MdArrowOutward size={18} className="inline" />
                </motion.button>

              </motion.form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

/* Input */
function Input({ placeholder }: { placeholder: string }) {
  return (
    <motion.input
      type="text"
      placeholder={placeholder}
      className="w-full bg-white rounded-xl px-6 py-4 text-[15px] outline-none border border-transparent focus:border-[#1f6b45] transition"
      whileFocus={{ scale: 1.02, borderColor: '#1f6b45' }}
      transition={{ duration: 0.3 }}
    />
  );
}

/* Custom Select */
function CustomSelect({ placeholder }: { placeholder: string }) {
  return (
    <motion.div 
      className="relative"
      whileFocus={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <select className="appearance-none w-full bg-white rounded-xl px-6 py-4 text-[15px] outline-none border border-transparent focus:border-[#1f6b45] transition text-gray-600">
        <option>{placeholder}</option>
        <option>Option 1</option>
        <option>Option 2</option>
      </select>
      <motion.div
        className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
        whileHover={{ rotate: 180 }}
        transition={{ duration: 0.3 }}
      >
        <ChevronDown size={18} />
      </motion.div>
    </motion.div>
  );
}