"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Footer() {
  const logos = [
    { src: "/img/CMS-carousel/Shopify.png", alt: "Shopify" },
    { src: "/img/CMS-carousel/webflow_logo.png", alt: "Webflow" },
    { src: "/img/CMS-carousel/google-search-console-logo-2.png", alt: "Google Search Console" },
    { src: "/img/CMS-carousel/Vector.png", alt: "Wix" },
    { src: "/img/CMS-carousel/Shopify.png", alt: "Shopify" },
    { src: "/img/CMS-carousel/webflow_logo.png", alt: "Webflow" },
    { src: "/img/CMS-carousel/google-search-console-logo-2.png", alt: "Google Search Console" },
    { src: "/img/CMS-carousel/Vector.png", alt: "Wix" },
 ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrentIndex((prev) =>
        prev + 1 >= logos.length - 2 ? 0 : prev + 1
      );
    }, 2500);

    return () => clearInterval(autoSlide);
  }, [logos.length]);

  return (
    <footer className="w-full px-6 pt-16 flex flex-col items-center md:px-16 lg:px-28">
      {/* Top Section */}
      <div className="w-[1200px] p-12 grid grid-cols-[65%_35%] gap-5 rounded-[20px] bg-[#FAF1E3]">
        <div className="mx-auto space-y-6">
          <h3 className="text-[40px] leading-[1.1em] font-bold">
            The Secret Tool used by SEO & Growth Marketing Experts.
          </h3>
          <h2 className="text-[20px] leading-[1.1em] font-medium text-[rgb(102,85,66)]">
            Scale your Sales & Marketing with our all in one AI tools that give you <br/>an unfair advantage.
          </h2>

          {/* Works With */}
          <div className="flex gap-5 items-center text-center">
            <a
              href="https://app.abun.com/auth/signup"
              className="py-2 px-4 bg-[#2E64FE] text-white font-[Geist] text-[16px] font-medium leading-[24px] rounded-[11px] hover:bg-[#6088f5e9] transition"
            >
              START FREE
            </a>
            <p className="text-[12px] font-medium text-[rgb(102,85,66)]">
              Works with:
            </p>

            {/* Horizontal Carousel */}
            <div className="relative w-[450px] overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndex * (100 / 3)}%)`,
                  width: `${(logos.length / 3) * 100}%`,
                }}
              >
                {logos.map((logo, i) => (
                  <div
                    key={i}
                    className="w-1/3 flex justify-center items-center p-4 shrink-0"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={120}
                      height={60}
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Reviews */}
        <div className="flex flex-col justify-center gap-8 text-center">
          {[
            "“biggest value bomb”",
            "“my entire team can’t stop using it”",
            "“helped us scale & grow”",
          ].map((text, i) => (
            <div key={i}>
              <Image
                src="/img/rating-star.png"
                alt="Rating stars"
                width={140}
                height={30}
                className="mx-auto"
              />
              <h3 className="text-lg mt-3">{text}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="w-[1200px] items-top  text-black mt-20 grid md:grid-cols-4 gap-10 pt-12">
        {/* Column 1 */}
        <div>
          <Link href="/">
            <Image
              src="/img/new-abun-logo.png"
              alt="Abun Logo"
              width={140}
              height={45}
              className="mb-3"
            />
          </Link>
          <p className="text-sm text-[#aa97ff]">
            The All-In-One Toolkit for SEO & Growth Marketing.
          </p>
          <div className="flex gap-4 mt-4">
            <Link href="https://www.linkedin.com/company/abun/">
              <Image src="/img/Linkedin.svg" alt="LinkedIn" width={22} height={22} />
            </Link>
            <Link href="https://twitter.com/AbunTeam">
              <Image src="/img/Twitter.svg" alt="Twitter" width={22} height={22} />
            </Link>
            <Link href="https://www.youtube.com/@abuncom">
              <Image src="/img/Youtube.svg" alt="YouTube" width={22} height={22} />
            </Link>
          </div>
        </div>

        {/* Column 2 */}
        <ul className="space-y-2 text-black">
          <li><a href="#faq" className="">FAQ</a></li>
          <li><a href="#price" className="">Pricing</a></li>
          <li><a href="/help" className="">Knowledgebase</a></li>
          <li><a href="https://app.abun.com/auth/login" className="">Login</a></li>
          <li><a href="https://app.abun.com/auth/signup" className="">Signup</a></li>
        </ul>

        {/* Column 3 */}
        <ul className="space-y-2 text-black">
          <li><a href="/category/free-high-quality-backlinks" className="">Free Backlink Guide</a></li>
          <li><a href="/blog" className="">Blog</a></li>
          <li><a href="mailto:amin@abun.com" className="">Email Founders</a></li>
          <li><a href="/affiliate" className="">Affiliate Program</a></li>
          <li><a href="/free-ai-tools" className="">Free Mini AI Tools</a></li>
        </ul>

        {/* Column 4 */}
        <ul className="space-y-2 text-black">
          <li className="font-semibold">Other Products</li>
          <li><a href="https://deliveryman.ai/?ref=abun" className="">Deliveryman.ai</a></li>
          <li><a href="https://draftss.com?ref=abun" className="">Draftss.com</a></li>
          <li><a href="https://clientportalos.com?ref=abun" className="">ClientPortalOS.com</a></li>
        </ul>
      </div>

      {/* Bottom Section */}
      <div className="w-[1200px] pt-6 flex flex-col md:flex-row justify-between items-center gap-8 text-[12px] text-black">
        <div className="flex flex-wrap justify-center gap-6">
          <a href="/terms-conditions">Terms & Conditions</a>
          <a href="/privacy-policy">Privacy Policy</a>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-3">
          <Image src="/img/image-123.png" alt="Microsoft" width={200} height={100} />
          <Image src="/img/nv.png" alt="NVIDIA" width={130} height={50} />
        </div>
        <p className="text-black text-[18px] text-center md:text-right">
          Made with ❤️ by{" "}
          <a href="https://draftss.com/?ref=abun" className="underline hover:text-white">
            Draftss.com
          </a>
        </p>
      </div>

      <div>
        <p className="text-black text-[12px]">
          Copyright © 2025 Abun. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
