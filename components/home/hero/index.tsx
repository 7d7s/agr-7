"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation,Autoplay, EffectFade } from "swiper/modules";
import { FaArrowRight } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
    <section className="relative h-[80vh] md:h-[82vh] w-full">
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
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-[70vh] md:h-[80vh] w-full">
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
              <div className="relative z-10 flex items-center h-full container mx-auto px-4 md:px-12 lg:px-20">
                <div className="max-w-2xl text-white">
                  <p className="text-sm md:text-lg text-gray-100 tracking-wide mb-5 opacity-90">
                    🌿 {slide.subtitle}
                  </p>

                  <h1 className="text-5xl md:text-6xl font-semibold leading-[1.2] mb-6">
                    {slide.title}
                  </h1>

                  <p className="text-lg text-gray-200 mb-8">
                    {slide.description}
                  </p>

                  <div className="flex gap-4">
                    <button className="bg-primary-dark text-white px-6 py-3 rounded-md flex items-center gap-2 hover:bg-primary-dark hover:text-white transition">
                      Explore Our Services <FaArrowRight size={14} />
                    </button>

                    <button className="border border-white px-6 py-3 rounded-md hover:bg-white hover:text-black transition">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>

              {/* Custom Navigation Buttons */}
              <div className="custom-swiper-prev absolute left-16 top-1/2 -translate-y-1/2 text-white cursor-pointer z-10 hidden md:flex">
                <ChevronLeft size={80} strokeWidth={1} />
              </div>
              <div className="custom-swiper-next absolute right-16 top-1/2 -translate-y-1/2 text-white cursor-pointer z-10 hidden md:flex">
                <ChevronRight size={80} strokeWidth={1} />
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
