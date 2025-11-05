"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function ImageCarousel() {
  const images = [
    "/counter-carousel-images/cropped-Gu-c-22.png",
    "/counter-carousel-images/Group-1.png",
    "/counter-carousel-images/GrowMeOrganicLogo.webp",
    "/counter-carousel-images/Jetting.svg",
    "/counter-carousel-images/logo-3.avif",
    "/counter-carousel-images/Titech.webp",
    "/counter-carousel-images/Zappy-logo-2.webp",
  ];

  return (
    <div className="flex justify-center w-full bg-white py-10 overflow-hidden">
      <div className="w-[1200px] max-w-full">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          slidesPerView={6}
          spaceBetween={20}
          grabCursor={true}
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 10 },
            640: { slidesPerView: 3, spaceBetween: 15 },
            1024: { slidesPerView: 6, spaceBetween: 20 },
          }}
          className="w-full"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <div
                className="
                  flex 
                  justify-center 
                  items-center 
                  h-[120px] 
                  w-full
                "
              >
                <Image
                  src={src}
                  alt={`Software pack ${index + 1}`}
                  width={150}
                  height={100}
                  unoptimized
                  className="object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
