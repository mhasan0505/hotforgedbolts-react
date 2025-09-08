import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import { useTranslation } from "react-i18next";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import images
import slide1 from "../assets/slider/slider1.jpg";
import slide2 from "../assets/slider/Slider2.jpg";
import slide3 from "../assets/slider/slider3.jpg";

const Slider = () => {
  const { t } = useTranslation();

  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const slidesData = [
    {
      id: 1,
      image: slide1,
      title: t("slider.slide1.title"),
      subtitle: t("slider.slide1.subtitle"),
      altText: "Hot forged bolts and nuts manufacturing - Precision in Every Forge"
    },
    {
      id: 2,
      image: slide2,
      title: t("slider.slide2.title"),
      subtitle: t("slider.slide2.subtitle"),
      altText: "Industrial fastening solutions - Built to Withstand"
    },
    {
      id: 3,
      image: slide3,
      title: t("slider.slide3.title"),
      subtitle: t("slider.slide3.subtitle"),
      altText: "Closed die forging components - Shaping Strength"
    },
  ];

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
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index} className="relative w-full h-full">
            <div className="absolute inset-0 bg-black/40 z-10" />
            <div className="absolute top-1/2 left-[5%] sm:left-[10%] transform -translate-y-1/2 text-left z-20 w-full max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-2xl px-4">
              <h1
                data-aos="fade-right"
                data-aos-delay="200"
                className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-3 sm:mb-4 md:mb-6"
              >
                {slide.title}
              </h1>
              <h2
                data-aos="fade-up"
                data-aos-delay="400"
                className="text-xs sm:text-sm md:text-base lg:text-xl text-white max-w-[280px] sm:max-w-sm md:max-w-lg lg:max-w-xl leading-relaxed"
              >
                {slide.subtitle}
              </h2>
            </div>
            <img
              src={slide.image}
              alt={slide.title || slide.altText}
              className="absolute inset-0 w-full h-full object-cover -z-10"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
