import Image from "next/image";
import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/common/AnimatedSection";

export default function FeatureCards() {
  return (
    <AnimatedSection className="relative -mt-24 z-20 container mx-auto px-4 md:px-12 lg:px-20" delay={0.2}>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Green Card */}
        <motion.div 
          className="bg-primary-dark text-white rounded-2xl p-10 lg:col-span-2 relative overflow-hidden flex items-center justify-between"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="max-w-md">
            <motion.h3 
              className="text-2xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Feeding The World With Consistency.
            </motion.h3>
            <motion.p 
              className="text-gray-200 mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              We are committed to build long lasting partnerships with our
              clients founded on trust to foster growth.
            </motion.p>

            <motion.button 
              className="bg-yellow-400 text-black px-5 py-3 rounded-md flex items-center gap-2 font-medium hover:bg-yellow-300 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Contact Us Now <FaArrowRight size={14} />
            </motion.button>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <Image
              src="/person.png"
              alt="Farmer with vegetables"
              width={260}
              height={260}
              className="hidden md:block object-contain"
            />
          </motion.div>
        </motion.div>

        {/* Yellow Card */}
        <motion.div 
          className="bg-yellow-400 rounded-2xl p-10 relative overflow-hidden"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
        >
          <motion.h3 
            className="text-2xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Our Vision
          </motion.h3>
          <motion.p 
            className="mb-6 text-gray-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Our vision is to advocates for formulators and distributors of
            organic crop pesticides, ensuring their participation in shaping
            pesticide policy.
          </motion.p>

          <motion.div 
            className="flex gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <motion.button 
              className="w-10 h-10 border border-black flex items-center justify-center rounded-md hover:bg-black hover:text-white transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaChevronLeft size={14} />
            </motion.button>

            <motion.button 
              className="w-10 h-10 border border-black flex items-center justify-center rounded-md hover:bg-black hover:text-white transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaChevronRight size={14} />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
