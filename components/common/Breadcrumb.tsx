"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Home, ChevronRight, Leaf } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

export default function Breadcrumb({ image, title, description }: { image: string; title: string; description: string }) {
    return (
        <AnimatedSection className="relative h-[70vh] md:h-[60vh] w-full overflow-hidden" animation="fadeIn" delay={0.1}>
            {/* Background Image with Parallax Effect */}
            <motion.div
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute inset-0"
            >
                <Image
                    src={image}
                    alt={title}
                    fill
                    priority
                    className="object-cover"
                />
            </motion.div>

            {/* Multi-layered Overlay */}
            <div className="absolute inset-0">
                {/* Base Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#063c23]/90 via-[#063c23]/80 to-[#0b5c38]/90" />
            </div>

            {/* Main Content */}
            <div className="relative z-10 h-full flex items-center">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 text-white">
                    
                    {/* Breadcrumb Navigation */}
                    <motion.div
                        className="flex items-center gap-3 mb-8"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <motion.div
                            className="flex items-center gap-2 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2"
                        >
                            <div>
                                <Home size={16} className="text-yellow-400" />
                            </div>
                            <span className="text-sm font-medium">Home</span>
                        </motion.div>
                        
                        <motion.div
                            whileHover={{ x: 3 }}
                            transition={{ duration: 0.3 }}
                        >
                            <ChevronRight size={18} className="text-yellow-400" />
                        </motion.div>
                        
                        <motion.div
                            className="border border-yellow-400/30 rounded-full px-4 py-2"
                        >
                            <span className="text-sm font-medium text-yellow-100">{title}</span>
                        </motion.div>
                    </motion.div>

                    {/* Title with Enhanced Typography */}
                    <motion.h1 
                        className="text-3xl md:text-5xl leading-[1.1] mb-8 relative"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <span>
                            {title}
                        </span>
                    </motion.h1>

                    {/* Description with Better Styling */}
                    <motion.p 
                        className="max-w-3xl text-xl text-gray-100 leading-relaxed mb-12"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        viewport={{ once: true }}
                    >
                        {description}
                    </motion.p>

                    {/* Call to Action Button */}
                    <motion.button
                        className="group relative bg-gradient-to-r from-yellow-400 to-yellow-500 text-[#063c23] px-8 py-4 rounded-lg overflow-hidden transition-all flex items-center gap-3 font-semibold"
                        whileTap={{ scale: 0.98 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        viewport={{ once: true }}
                    >
                        {/* Animated Background */}
                        <div className="absolute inset-0 bg-gradient-to-r from-white to-yellow-100 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                        
                        <span className="relative flex items-center gap-3">
                            <motion.div
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.6 }}
                            >
                                <Leaf size={20} />
                            </motion.div>
                            Explore More
                            <ChevronRight 
                                size={18} 
                                className="group-hover:translate-x-2 transition-transform"
                            />
                        </span>
                    </motion.button>
                </div>
            </div>
        </AnimatedSection>
    );
}