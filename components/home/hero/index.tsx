"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import { FaArrowRight } from "react-icons/fa";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/common/AnimatedSection";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const slides = [
  {
    id: 1,
    image: "/slider.webp",
    subtitle: "Committed to responsible livestock farming.",
    title: "Producing Healthy Pigs & Premium Quality Pork",
    description:
      "Our pig farming operations focus on animal welfare, advanced nutrition programs, and strict biosecurity standards to ensure healthy herds and consistent premium pork production.",
  },
  {
    id: 2,
    image: "/slider1.webp",
    subtitle: "Innovation in modern pig farming.",
    title: "Sustainable & Ethical Swine Production",
    description:
      "We integrate sustainable feed systems, efficient farm management, and environmentally responsible practices to deliver high-quality pork while reducing our environmental footprint.",
  },
  {
    id: 3,
    image: "/slider3.webp",
    subtitle: "Supporting local communities & food supply chains.",
    title: "Strengthening Livestock Supply With Excellence",
    description:
      "From breeding and herd health management to processing and distribution, we ensure reliable pork supply with the highest standards of safety, traceability, and quality.",
  },
];

export default function Hero() {
  return (
    <AnimatedSection className="relative h-[80vh] md:h-[82vh] lg:h-[90vh] w-full overflow-hidden" animation="fadeIn" delay={0.1}>
      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        effect="fade"
        navigation={{
          nextEl: '.custom-swiper-next',
          prevEl: '.custom-swiper-prev',
        }}
        autoplay={{ delay: 5000 }}
        loop
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-[70vh] md:h-[82vh] lg:h-[90vh] w-full">
              {/* Background Image */}
              <motion.div
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, delay: index * 0.2 }}
                className="absolute inset-0"
              >
                <Image
                  src={slide.image}
                  alt="Hero Slide"
                  fill
                  priority
                  className="object-cover"
                />
              </motion.div>

              {/* Overlay */}
              <motion.div 
                className="absolute inset-0 bg-black/50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              />

              {/* Content */}
              <div className="relative z-10 flex items-center h-full container mx-auto px-4 md:px-12 lg:px-20">
                <motion.div 
                  className="max-w-2xl text-white"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                  viewport={{ once: true }}
                >
                  <motion.p 
                    className="text-sm md:text-lg text-gray-100 tracking-wide mb-5 opacity-90"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 0.9, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    🌿 {slide.subtitle}
                  </motion.p>

                  <motion.h1 
                    className="text-5xl md:text-6xl font-semibold leading-[1.2] mb-6"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    {slide.title}
                  </motion.h1>

                  <motion.p 
                    className="text-lg text-gray-200 mb-8"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    viewport={{ once: true }}
                  >
                    {slide.description}
                  </motion.p>

                  <motion.div 
                    className="flex gap-4"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <motion.button 
                      className="bg-primary-dark text-white px-6 py-3 rounded-md flex items-center gap-2 hover:bg-primary-dark hover:text-white transition-all hover:scale-105"
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      viewport={{ once: true }}
                    >
                      Explore Our Services <FaArrowRight size={14} />
                    </motion.button>

                    <motion.button 
                      className="border border-white px-6 py-3 rounded-md hover:bg-white hover:text-black transition-all hover:scale-105"
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      viewport={{ once: true }}
                    >
                      Learn More
                    </motion.button>
                  </motion.div>
                </motion.div>
              </div>

              {/* Bottom Fade */}
              <motion.div 
                className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent via-white/50 to-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Custom Navigation Buttons - Outside Swiper */}
      <motion.button
        type="button"
        className="custom-swiper-prev absolute left-4 md:left-16 top-1/2 -translate-y-1/2 text-white cursor-pointer z-20 flex items-center justify-center"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        whileTap={{ scale: 0.9 }}
        viewport={{ once: true }}
      >
        <ChevronLeft size={40} strokeWidth={1} className="md:size-20" />
      </motion.button>
      <motion.button
        type="button"
        className="custom-swiper-next absolute right-4 md:right-16 top-1/2 -translate-y-1/2 text-white cursor-pointer z-20 flex items-center justify-center"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1.1 }}
        whileTap={{ scale: 0.9 }}
        viewport={{ once: true }}
      >
        <ChevronRight size={40} strokeWidth={1} className="md:size-20" />
      </motion.button>
    </AnimatedSection>
  );
}
