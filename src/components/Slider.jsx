import React from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// Add these imports at the top
import slider1 from "../assets/slider/slider1.jpg";
import slider2 from "../assets/slider/Slider2.jpg";
import slider3 from "../assets/slider/slider3.jpg";

// Replace the slidesData array:
const slidesData = [
  {
    title: "Precision in Every Forge",
    subtitle:
      "Hot forged bolts and nuts engineered with strength, accuracy, and durability — trusted by industries worldwide",
    imageSrc: slider1,
  },
  {
    title: "Built to Withstand",
    subtitle:
      "Certified fastening solutions that meet DIN, BS, TE standards — from standard bolts to custom specifications.",
    imageSrc: slider2,
  },
  {
    title: "Shaping Strength",
    subtitle:
      "Closed die forging solutions for high-performance, safety-critical components.",
    imageSrc: slider3,
  },
];

export default function Slider() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <div className="w-screen relative left-1/2 -translate-x-1/2 mt-20 md:mt-24">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px]"
        onSlideChange={() => {
          AOS.refresh();
        }}
      >
        {slidesData.map((slide) => (
          <SwiperSlide key={slide.imageSrc} className="relative w-full h-full">
            <div className="absolute inset-0 bg-black/40 z-10" />
            <div className="absolute top-1/2 left-[5%] sm:left-[10%] transform -translate-y-1/2 text-left z-20 w-full max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-2xl px-4">
              <h1
                data-aos="fade-right"
                data-aos-delay="200"
                className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-3 sm:mb-4 md:mb-6"
              >
                {slide.title}
              </h1>
              <h3
                data-aos="fade-up"
                data-aos-delay="400"
                className="text-xs sm:text-sm md:text-base lg:text-xl text-white max-w-[280px] sm:max-w-sm md:max-w-lg lg:max-w-xl leading-relaxed"
              >
                {slide.subtitle}
              </h3>
            </div>
            <img
              src={slide.imageSrc}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover -z-10"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
