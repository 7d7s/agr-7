"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { Home, Phone, ArrowRight } from "lucide-react";

const NotFoundPage = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-neutral-50 relative overflow-hidden py-24 md:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#94c120_1px,transparent_1px)] [background-size:20px_20px]" />
      </div>

      <motion.div
        className="container mx-auto px-4 md:px-8 relative z-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.div variants={itemVariants} className="mb-8 relative inline-block">
            <h1 className="text-[120px] md:text-[180px] font-bold leading-none text-neutral-900/5 select-none">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-primary-50 text-primary-600 px-6 py-2 rounded-full text-sm font-semibold tracking-wide uppercase border border-primary-100 shadow-sm">
                Page Not Found
              </div>
            </div>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6 tracking-tight"
          >
            We couldn&apos;t find that page
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-neutral-600 mb-10 max-w-xl mx-auto leading-relaxed"
          >
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-row gap-3 md:gap-4 justify-center items-center"
          >
            <Link
              href="/"
              className="group flex items-center gap-2 px-5 py-3 md:px-8 md:py-3.5 bg-primary-500 hover:bg-primary-600 text-white rounded-md font-medium transition-all duration-300 shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 hover:-translate-y-0.5 text-sm md:text-base"
            >
              <Home className="w-4 h-4" />
              <span>Back to Home</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/contact"
              className="group flex items-center gap-2 px-5 py-3 md:px-8 md:py-3.5 bg-white border border-neutral-200 hover:border-primary-200 text-neutral-700 hover:text-primary-600 rounded-md font-medium transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 text-sm md:text-base"
            >
              <Phone className="w-4 h-4" />
              <span>Contact Support</span>
            </Link>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-12 pt-8 border-t border-neutral-200/60"
          >
            <p className="text-sm text-neutral-500">
              Need immediate assistance? Call us at <a href="tel:+919876543210" className="text-primary-600 font-semibold hover:underline">+91 98765 43210</a>
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;