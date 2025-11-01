"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

const logos = [
  "https://abun.com/wp-content/uploads/2025/02/Group-1.png",
  "https://abun.com/wp-content/uploads/2025/02/cropped-Gu-c-22.png",
  "https://abun.com/wp-content/uploads/2025/02/Inside-logo.jpg",
  "https://abun.com/wp-content/uploads/2025/02/GrowMeOrganicLogo.webp",
  "https://abun.com/wp-content/uploads/2025/02/Jetting.svg",
  "https://abun.com/wp-content/uploads/2025/02/logo-3.avif",
  "https://abun.com/wp-content/uploads/2025/02/Titech.webp",
  "https://abun.com/wp-content/uploads/2025/02/Zappy-logo-2.webp",
];

export default function ImageCarousel() {
  return (
    <div className="w-full py-12 bg-white">
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        speed={500}
        slidesPerView={6}
        spaceBetween={60}
        breakpoints={{
          320: { slidesPerView: 3, spaceBetween: 30 },
          768: { slidesPerView: 5, spaceBetween: 40 },
          1024: { slidesPerView: 6, spaceBetween: 60 },
        }}
        className="flex items-center justify-center"
      >
        {logos.map((src, index) => (
          <SwiperSlide key={index} className="flex items-center justify-center">
            <Image
              src={src}
              alt={`Logo ${index + 1}`}
              width={140}
              height={80}
              className="object-contain hover:opacity-90 transition-opacity duration-300"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
