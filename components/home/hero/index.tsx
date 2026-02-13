"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation,Autoplay, EffectFade } from "swiper/modules";
import { FaArrowRight } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const slides = [
  {
    id: 1,
    image: "/slider.webp",
    subtitle: "Unlocking nature to enrich people’s lives.",
    title: "Producing High Quality Seeds & Young Plants!",
    description:
      "Our Agriculture businesses deliver agronomic advice, services and inputs to livestock, fruit and vegetables smart chain.",
  },
  {
    id: 2,
    image: "/slider1.webp",
    subtitle: "Growing smarter agriculture solutions.",
    title: "Sustainable Farming For A Better Future",
    description:
      "We support farmers with innovative agricultural solutions to ensure productivity and sustainability.",
  },
];

export default function Hero() {
  return (
    <section className="relative h-[92vh] w-full">
      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        effect="fade"
        navigation
        autoplay={{ delay: 5000 }}
        loop
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-[92vh] w-full">
              {/* Background Image */}
              <Image
                src={slide.image}
                alt="Hero Slide"
                fill
                priority
                className="object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50" />

              {/* Content */}
              <div className="relative z-10 flex items-center h-full container mx-auto px-6">
                <div className="max-w-2xl text-white">
                  <p className="text-sm tracking-wide mb-5 opacity-90">
                    🌿 {slide.subtitle}
                  </p>

                  <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                    {slide.title}
                  </h1>

                  <p className="text-lg text-gray-200 mb-8">
                    {slide.description}
                  </p>

                  <div className="flex gap-4">
                    <button className="bg-white text-black px-6 py-3 rounded-md font-medium flex items-center gap-2 hover:bg-gray-200 transition">
                      Explore Our Services <FaArrowRight size={14} />
                    </button>

                    <button className="border border-white px-6 py-3 rounded-md hover:bg-white hover:text-black transition">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>

              {/* Bottom Fade */}
              <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent via-white/50 to-white" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
