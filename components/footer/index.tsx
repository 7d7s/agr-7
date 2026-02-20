"use client";
import { FOOTER_LINKS } from "./footer.config";
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import AnimatedSection from "@/components/common/AnimatedSection";

export default function Footer() {
  return (
    <AnimatedSection className="bg-primary-dark text-white pt-20 relative overflow-hidden" animation="fadeIn" delay={0.2}>
      
      <div className="container mx-auto px-4 md:px-12 lg:px-20">

        {/* Top Section */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-5 gap-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >

          {/* Logo & About */}
          <motion.div className="lg:col-span-2">
            <motion.h2 
              className="text-3xl font-bold mb-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Agrowok
            </motion.h2>
            <motion.p 
              className="text-gray-300 leading-relaxed mb-6 max-w-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Our commitment is to help farmers have the technologies they
              need to protect crops and empowering the future of food production!
            </motion.p>

            <motion.div 
              className="flex gap-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <SocialIcon><FaFacebookF /></SocialIcon>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <SocialIcon><FaXTwitter /></SocialIcon>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <SocialIcon><FaLinkedinIn /></SocialIcon>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* About Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <FooterColumn title="About" links={FOOTER_LINKS.about} />
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <FooterColumn title="Services" links={FOOTER_LINKS.services} />
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            viewport={{ once: true }}
          >
            <motion.h4 
              className="font-semibold mb-6 text-lg"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              viewport={{ once: true }}
            >
              Quick Contact
            </motion.h4>
            <motion.p 
              className="text-gray-300 mb-4"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              viewport={{ once: true }}
            >
              2307 Beverley Rd <br />
              Brooklyn, New York, <br />
              United States.
            </motion.p>

            <motion.p 
              className="text-yellow-400 font-medium mb-2"
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.3 }}
              viewport={{ once: true }}
            >
              Agrowok@7oroof.com
            </motion.p>

            <motion.p 
              className="text-gray-200"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              viewport={{ once: true }}
            >
              +2 011 6114 5741
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-between mt-16 border-t border-white/10 pt-8 pb-12 text-center text-gray-300 text-sm"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.1 }}
          viewport={{ once: true }}
        >
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 2.2 }}
            viewport={{ once: true }}
          >
            ©2026 Agrowok, All Rights Reserved.
          </motion.p>
          <motion.div 
            className="mt-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 2.3 }}
            viewport={{ once: true }}
          >
            <motion.span 
              className="cursor-pointer hover:text-yellow-400 transition"
              whileHover={{ x: 3 }}
              transition={{ duration: 0.3 }}
            >
              Terms & Conditions
            </motion.span>
            {"  –  "}
            <motion.span 
              className="cursor-pointer hover:text-yellow-400 transition"
              whileHover={{ x: 3 }}
              transition={{ duration: 0.3 }}
            >
              Privacy Policy
            </motion.span>
            {"  –  "}
            <motion.span 
              className="cursor-pointer hover:text-yellow-400 transition"
              whileHover={{ x: 3 }}
              transition={{ duration: 0.3 }}
            >
              Sitemap
            </motion.span>
        </motion.div>
        </motion.div>

      </div>
    </AnimatedSection>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: string[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.h4 
        className="font-semibold mb-6 text-lg"
        initial={{ opacity: 0, x: -15 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h4>
      <motion.ul 
        className="space-y-3 text-gray-300"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        {links.map((link, i) => (
          <motion.li 
            key={i} 
            className="hover:text-yellow-400 cursor-pointer transition flex items-center justify-start group"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: -10 }}
            transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ x: 5, color: '#fbbf24', gap: '8px', transition: { duration: 0.3 } }}
          >
            <motion.div
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <FaArrowRight size={12} />
            </motion.div>
            <span>{link}</span>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
}

function SocialIcon({ children }: { children: React.ReactNode }) {
  return (
    <motion.div 
      className="w-11 h-11 bg-[#184d3b] rounded-md flex items-center justify-center hover:bg-yellow-400 hover:text-black transition cursor-pointer"
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}
