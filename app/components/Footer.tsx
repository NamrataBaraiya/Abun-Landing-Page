"use client";
import Image from "next/image";
import Link from "next/link";

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
    { src: "/img/CMS-carousel/Shopify.png", alt: "Shopify" },
    { src: "/img/CMS-carousel/webflow_logo.png", alt: "Webflow" },
    { src: "/img/CMS-carousel/google-search-console-logo-2.png", alt: "Google Search Console" },
    { src: "/img/CMS-carousel/Vector.png", alt: "Wix" },
  ];

  return (
    <footer className="max-w-full w-full px-4 pt-16 flex flex-col items-center">
      {/* Top Section */}
      <div className="max-w-[1150px] w-full justify-between p-12 grid grid-cols-2 gap-0 rounded-[20px] bg-[#FAF1E3] xl:grid-cols-2 md:grid-cols-1 md:gap-6">
        <div className="mx-auto space-y-6 flex flex-col gap-0 ">
          <h3 className="text-[48px] leading-[1.1em] font-bold xl:text-left md:text-center">
            The Secret Tool used by SEO & Growth Marketing Experts.
          </h3>
          <h2 className="text-[22px] leading-[1.4em] font-medium text-[rgb(102,85,66)] xl:text-left md:text-center">
            Scale your Sales & Marketing with our all in one AI<br /> tools that give you an unfair advantage.
          </h2>

          {/* Works With */}
          <div className="flex gap-5 items-center text-center">
            <a
              href="https://app.abun.com/auth/signup"
              className="py-2 px-4 bg-[#2E64FE] text-white font-[Geist] text-[16px] font-medium leading-6 rounded-[11px] hover:bg-[#6088f5e9] transition"
            >
              START FREE
            </a>
            <p className="text-[14px] font-medium text-[rgb(102,85,66)]">
              Works with:
            </p>

            {/* Continuous Horizontal Carousel */}
            <div className="relative w-[450px] overflow-hidden">
              <div className="flex animate-scroll whitespace-nowrap">
                {[...logos, ...logos].map((logo, i) => (
                  <div
                    key={i}
                    className="flex justify-center items-center px-6 shrink-0"
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
        <div className="flex flex-col justify-center gap-8 text-center xl:flex-col lg:flex-col md:flex-row">
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
      <div className="max-w-[1200px] w-full justify-between xl:w-[1200px] md:max-w-5xl items-top text-black mt-6 grid grid-cols-[25%_75%] justify-between gap-20 pt-12 xl:grid-cols-[25%_75%] xl:gap-20 md:grid-cols-[20%_80%] md:gap-5">
        {/* Column 1 */}
        <div className="flex flex-col gap-4">
          <Link href="/">
            
            <Image
              src="/img/footer_logo.png"
              alt="Abun Logo"
              width={165}
              height={50}
              className="mt-[-5px]"
            />
            
          </Link>
          <p className="text-[16px] text-[#766bea] leading-[1.2ems]">
            The All-In-One Toolkit for SEO & <br/>Growth Marketing.
          </p>
          <div className="flex gap-4 mt-4">
            <Link href="https://www.linkedin.com/company/abun/">
              <Image src="/img/Linkedin.svg" alt="LinkedIn" width={30} height={30} />
            </Link>
            <Link href="https://twitter.com/AbunTeam">
              <Image src="/img/Twitter.svg" alt="Twitter" width={30} height={30} />
            </Link>
            <Link href="https://www.youtube.com/@abuncom">
              <Image src="/img/Youtube.svg" alt="YouTube" width={30} height={30} />
            </Link>
          </div>
        </div>

        <div className="w-full flex flex-row justify-between">    
        {/* Column 2 */}
        <ul className="space-y-2 text-black flex flex-col gap-2">
          <li><a href="#faq">FAQ</a></li>
          <li><a href="#price">Pricing</a></li>
          <li><a href="/help">Knowledgebase</a></li>
          <li><a href="https://app.abun.com/auth/login">Login</a></li>
          <li><a href="https://app.abun.com/auth/signup">Signup</a></li>
        </ul>

        {/* Column 3 */}
        <ul className="space-y-2 text-black flex flex-col gap-2">
          <li><a href="/category/free-high-quality-backlinks">Free Backlink Guide</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="mailto:amin@abun.com">Email Founders</a></li>
          <li><a href="/affiliate">Affiliate Program</a></li>
          <li><a href="/free-ai-tools">Free Mini AI Tools</a></li>
        </ul>

        {/* Column 4 */}
        <ul className="space-y-2 text-black flex flex-col gap-2">
          <li className="">Other Products</li>
          <li><a href="https://deliveryman.ai/?ref=abun">Deliveryman.ai</a></li>
          <li><a href="https://draftss.com?ref=abun">Draftss.com</a></li>
          <li><a href="https://clientportalos.com?ref=abun">ClientPortalOS.com</a></li>
        </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-[1150px] xl:w-[1150px] pt-10 flex justify-between items-center gap-8 text-[11px] text-black xl:gap-8 xl:flex xl:flex-row md:flex-col md:gap-4 ">
        <div className="flex flex-wrap justify-center gap-8">
          <a href="/terms-conditions">Terms & Conditions</a>
          <a href="/privacy-policy">Privacy Policy</a>
        </div>
        <div className="flex flex-row items-center gap-0">
          <Image className="mt-2" src="/img/image-123.png" alt="Microsoft" width={250} height={100} />
          <Image src="/img/nv.png" alt="NVIDIA" width={150} height={60} />
        </div>
        <p className="text-black text-[18px] text-center md:text-right">
          Made with ❤️ by{" "}
          <a href="https://draftss.com/?ref=abun" className="underline decoration-black text-[#766bea]">
            Draftss.com
          </a>
        </p>
      </div>

      <div>
        <p className="h-5 text-black flex pt-6 text-[11px]">
          Copyright © 2025 Abun. All Rights Reserved.
        </p>
      </div>

      {/* Keyframes for Smooth Continuous Scroll */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          display: flex;
          animation: scroll 5s linear infinite;
        }
      `}</style>
    </footer>
  );
}
