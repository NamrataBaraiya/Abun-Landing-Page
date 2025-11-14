"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function ImageCarousel() {
  const images = [
    "/img/CMS-carousel/google-search-console-logo-2.png",
    "/img/CMS-carousel/Shopify.png",
    "/img/CMS-carousel/Vector.png",
    "/img/CMS-carousel/webflow_logo.png",
    "/img/CMS-carousel/google-search-console-logo-2.png",
    "/img/CMS-carousel/Shopify.png",
    "/img/CMS-carousel/Vector.png",
    "/img/CMS-carousel/webflow_logo.png",
  ];

  return (
    <div className="flex justify-center py-6 w-fulloverflow-hidden">
      <div className="max-w-full">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          slidesPerView={4}
          spaceBetween={20}
          grabCursor={true}
          breakpoints={{
            320: { slidesPerView: 3, spaceBetween: 5 },
            640: { slidesPerView: 3, spaceBetween: 15 },
            1024: { slidesPerView: 4, spaceBetween: 30 },
          }}
          className="w-full"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-center h-[35] w-full">
                <Image
                  src={src}
                  alt={`Software pack ${index + 1}`}
                  width={90}
                  height={35}
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
