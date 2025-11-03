"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function ImageCarousel() {
  const images = [
    "/counter-crausel-images/cropped-Gu-c-22.png",
    "/counter-crausel-images/Group-1 (1).png",
    "/counter-crausel-images/GrowMeOrganicLogo.webp",
    "/counter-crausel-images/Jetting.svg",
    "/counter-crausel-images/logo-3 (1).avif",
    "/counter-crausel-images/Titech (1).webp",
    "/counter-crausel-images/Zappy-logo-2 (1).webp",
    "/counter-crausel-images/Software-pack17.png",
    "/counter-crausel-images/Software-pack18.png",
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
              <div className="flex justify-center items-center">
                <Image
                  src={src}
                  alt={`Software pack ${index + 1}`}
                  width={150}
                  height={150}
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
