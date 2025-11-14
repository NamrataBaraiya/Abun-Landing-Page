"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Header from "./components/Header";
import ImageCarousel from "./components/ImageCarousel";
import CMS_Carousel from "./components/CMS-Carousel";
import PriceTab from "./components/PriceTab";
import FAQ from  "./components/Faq";
import Testimonials from "./components/Testimonials"; 
import TextSlider from "./components/TextSlider";
import Footer from "./components/Footer";

export default function Home() {
  // Counter logic
  const [count, setCount] = useState(0);
  const duration = 2000; // 2 seconds
  const endValue = 2673000000; // Target number

  useEffect(() => {
    let start = 0;
    const increment = endValue / (duration / 16); // smooth 60fps
    const timer = setInterval(() => {
      start += increment;
      if (start >= endValue) {
        start = endValue;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, []);

  const formattedCount = count.toLocaleString("en-US");

  return (
    <main className="w-full pb-12 font-Geist flex min-h-screen flex-col items-center justify-center bg-white text-black dark:bg-black">
      <Header />
      {/* SECTION 1 */}
      <section className="py-20 w-full flex flex-col justify-center items-center text-center gap-6 xl:py-30 md:py-30 sm:py-30">
        <div className="max-w-[1200px] w-full flex flex-col justify-center items-center gap-6 px-6">
          
          <div className="max-w-[1100px] grid grid-cols-3 gap-2 flex-wrap items-center justify-between text-center xl:grid-cols-1 xl:gap-28 md:grid-cols-3 md:gap-10 sm:grid-cols-3 sm:gap-5">
            
            <div className="flex flex-col items-center gap-2 text-center">
              <Image src="/img/rating-star.png" alt="Rating Star" width={115} height={20} />
              <p className="text-[rgb(102,85,66)] text-[12px] xl:text-[20px] md:text-[14px] sm:text-[12px]">“biggest value bomb”</p>
            </div>

            <div className="flex flex-col items-center gap-2 text-center">
              <Image src="/img/rating-star.png" alt="Rating Star" width={115} height={20} />
              <p className="text-[rgb(102,85,66)] text-[12px] xl:text-[20px] md:text-[14px] sm:text-[12px]">“my entire team can’t stop using it”</p>
            </div>

            <div className="flex flex-col items-center gap-2 text-center">
              <Image src="/img/rating-star.png" alt="Rating Star" width={115} height={20} />
              <p className="text-[#665542] text-[12px] xl:text-[20px] md:text-[14px] sm:text-[12px]">“helped us scale & grow”</p>
            </div>
          </div>

          <h1 className="font-sans text-[40px] font-bold leading-[1.1em] tracking-[-1px] text-black xl:text-[90px] md:text-[60px] sm:text-[40px]">
            The All-In-One Toolkit for <br /> SEO & Growth Marketing.
          </h1>

          <p className="text-[20px] text-black font-medium xl:text-[32px] md:text-[22px] sm:text-[20px]">
            Used by 5,325 Marketers, Founders, SEO Experts
            <br />
            to Drive Traffic, Generate Leads, Rank Faster & Achieve Solid Business Growth
          </p>

          <button className="mt-5 text-black text-[20px] transition-transform duration-300 ease-out hover:-translate-y-2 bg-[#FACE49] rounded-[11px] px-[30px] py-4 animate-pulse-shadow ">
            <a>Claim Your Free Account ➔</a>
          </button>
          
          <p className="font-sans text-[18px] font-normal leading-[1.1em] tracking-[0px] text-[#00000099]">
            Free Accounts available only for a Limited Time
          </p>

          <div className="flex flex-row items-center justify-center gap-2 text-center">
            <Image className="pt-2" src="/img/image-123.png" alt="" width={265} height={80} />
            <Image src="/img/nv.png" alt="" width={152} height={66} />
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="pt-30 w-full flex flex-col justify-center items-center text-center bg-gradient-to-b from-[#F1F1F9]/80 to-[#FFFFFF]/100">
        <div className="max-w-[1200px] w-full flex flex-col justify-center items-center gap-6 px-6 xl:px-6 md:px-3">
          <p className="text-[18px] font-medium leading-[1.1em] tracking-[-0.5px] text-[#4A4583]">AI SEO & Marketing Tools</p>
          <h2 className="text-[48px] font-bold leading-[1.1em] tracking-[-1px] text-black">Start Scaling your Traffic</h2>

          <div className="w-full pt-7 max-w-7xl grid grid-cols-1 xl:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-5 xl:gap-5 md:gap-2 items-start justify-center text-center ">
            {/* 1 */}
            <div className="flex p-[25px] min-h-[220px] flex-col gap-3 item-left text-left bg-[#FFFFFF] border border-[#D2D2EB] rounded-[14px] shadow-[0_3px_3px_0_rgba(19,48,66,0.07)] transition-transform duration-300 hover:scale-[1.02] hover:cursor-default">
              <Image className="p-2.5 bg-[#f1f1f9] rounded-[10px]" src="/img/Script-2-Streamline-Plump.png" alt="AI Articles" width={40} height={40} />
              <p className="mt-2 text-[20px] font-bold leading-[1.4em]">AI Articles</p>
              <p className="text-[16px] font-normal">
                Human-like Articles that don't suck. All types of Articles Supported.
              </p>
            </div>
{/* 2 */}
            <div className="flex p-[25px] min-h-[220px] flex-col gap-3 item-left text-left bg-white border border-[#D2D2EB] rounded-[14px] shadow-[0_3px_3px_0_rgba(19,48,66,0.07)] transition-transform duration-300 hover:scale-[1.02] hover:cursor-default">
              <Image className="p-2.5 bg-[#f1f1f9] rounded-[10px]" src="/img/Ai-Browser-Robot-Streamline-Plump.png" alt="AI Blog Automation" width={40} height={40} />
              <p className="text-[20px] font-bold">AI Blog Automation</p>
              <p className="text-[16px] font-normal">Automate your blog from months to a complete year.</p>
            </div>
{/* 3 */}
            <div className="flex p-[25px] min-h-[220px]  flex-col gap-3 item-left text-left bg-white border border-[#D2D2EB] rounded-[14px] shadow-[0_3px_3px_0_rgba(19,48,66,0.07)] transition-transform duration-300 hover:scale-[1.02] hover:cursor-default">
              <Image className="p-2.5 bg-[#f1f1f9] rounded-[10px]" src="/img/Hierarchy-13-Streamline-Plump.png" alt="AI Blog Automation" width={40} height={40} />
              <p className="text-[20px] font-bold">AI Programmatic SEO</p>
              <p className="text-[16px] font-normal">Create Multiple Programmatic SEO based articles to rank faster.</p>
            </div>
{/* 4 */}
            <div className="flex p-[25px] min-h-[220px]  flex-col gap-3 item-left text-left bg-white border border-[#D2D2EB] rounded-[14px] shadow-[0_3px_3px_0_rgba(19,48,66,0.07)] transition-transform duration-300 hover:scale-[1.02] hover:cursor-default">
              <Image className="p-2.5 bg-[#f1f1f9] rounded-[10px]" src="/img/Ascending-Alphabetical-Order-Streamline-Plump.png" alt="AI Blog Automation" width={40} height={40} />
              <p className="text-[20px] font-bold">AI Glossary Creator</p>
              <p className="text-[16px] font-normal">Turn a single topic into a glossary of high-ranking, Google-optimized definitions.</p>
            </div>
{/* 5 */}
            <div className="flex p-[25px] min-h-[220px] flex-col gap-3 item-left text-left bg-white border border-[#D2D2EB] rounded-[14px] shadow-[0_3px_3px_0_rgba(19,48,66,0.07)] transition-transform duration-300 hover:scale-[1.02] hover:cursor-default">
              <Image className="p-2.5 bg-[#f1f1f9] rounded-[10px]" src="/img/Long-tail-keyword-research.png" alt="AI Blog Automation" width={40} height={40} />
              <p className="text-[20px] font-bold">LongTail Keyword Research</p>
              <p className="text-[16px] font-normal">Instantly generate hundreds of long-tail keywords for any topic or niche.</p>
            </div>
 {/* 6            */}
            <div className="flex p-[25px] min-h-[220px] flex-col gap-3 item-left text-left bg-white border border-[#D2D2EB] rounded-[14px] shadow-[0_3px_3px_0_rgba(19,48,66,0.07)] transition-transform duration-300 hover:scale-[1.02] hover:cursor-default">
              <Image className="p-2.5 bg-[#f1f1f9] rounded-[10px]" src="/img/Find-competitor-keyword.png" alt="AI Blog Automation" width={40} height={40} />
              <p className="text-[20px] font-bold">Steal Competitor Keywords</p>
              <p className="text-[16px] font-normal">Find & Steal keywords for which your competitors are ranking.</p>
            </div>
{/* ------------------------------------------------7 */}
            <div className="flex p-[25px] min-h-[220px]  flex-col gap-3 item-left text-left bg-white border border-[#D2D2EB] rounded-[14px] shadow-[0_3px_3px_0_rgba(19,48,66,0.07)] transition-transform duration-300 hover:scale-[1.02] hover:cursor-default">
              <Image className="p-2.5 bg-[#f1f1f9] rounded-[10px]" src="/img/Ai.png" alt="AI Blog Automation" width={40} height={40} />
              <p className="text-[20px] font-bold">AI Keyword Research</p>
              <p className="text-[16px] font-normal">Let AI uncover the best keywords for ranking and traffic growth.</p>
            </div>

  {/*------------------------------- 8 ------------------------------------------------------*/}
            <div className="flex p-[25px] min-h-[220px] flex-col gap-3 item-left text-left bg-white border border-[#D2D2EB] rounded-[14px] shadow-[0_3px_3px_0_rgba(19,48,66,0.07)] transition-transform duration-300 hover:scale-[1.02] hover:cursor-default">
              <Image className="p-2.5 bg-[#f1f1f9] rounded-[10px]" src="/img/Code-Analysis.png" alt="AI Blog Automation" width={40} height={40} />
              <p className="text-[20px] font-bold">ICP to Keyword Research</p>
              <p className="text-[16px] font-normal">Turn ideal customers into keyword gold. Find what they search, so you rank where it matters.</p>
            </div>

   {/* 9          */}
            <div className="flex p-[25px] min-h-[220px] flex-col gap-3 item-left text-left bg-white border border-[#D2D2EB] rounded-[14px] shadow-[0_3px_3px_0_rgba(19,48,66,0.07)] transition-transform duration-300 hover:scale-[1.02] hover:cursor-default">
              <Image className="p-2.5 bg-[#f1f1f9] rounded-[10px]" src="/img/Search-Arrow-Increase.png" alt="AI Blog Automation" width={40} height={40} />
              <p className="text-[20px] font-bold">Manual Keyword Research</p>
              <p className="text-[16px] font-normal">Old-school, hands-on keyword digging.
No fluff just pure, strategic SEO.</p>
            </div>

      {/* 10       */}
            <div className="flex p-[25px] min-h-[220px] flex-col gap-3 item-left text-left bg-white border border-[#D2D2EB] rounded-[14px] shadow-[0_3px_3px_0_rgba(19,48,66,0.07)] transition-transform duration-300 hover:scale-[1.02] hover:cursor-default">
              <Image className="p-2.5 bg-[#f1f1f9] rounded-[10px]" src="/img/ai-schema.png" alt="AI Blog Automation" width={40} height={40} />
              <p className="text-[20px] font-bold">AI Auto Schema</p>
              <p className="text-[16px] font-normal">Auto add JSON schema to all of your pages to boost your technical SEO.</p>
            </div>

       {/* 11      */}
            <div className="flex p-[25px] min-h-[220px]  flex-col gap-3 item-left text-left bg-white border border-[#D2D2EB] rounded-[14px] shadow-[0_3px_3px_0_rgba(19,48,66,0.07)] transition-transform duration-300 hover:scale-[1.02] hover:cursor-default">
              <Image className="p-2.5 bg-[#f1f1f9] rounded-[10px]" src="/img/Fast-indexing.png" alt="AI Blog Automation" width={40} height={40} />
              <p className="text-[20px] font-bold">Fast Indexing</p>
              <p className="text-[16px] font-normal">Get your pages seen now. Lightning-speed indexing for quicker SEO wins.</p>
            </div>

     {/* 12        */}
            <div className="flex p-[25px] min-h-[220px]  flex-col gap-3 item-left text-left bg-white border border-[#D2D2EB] rounded-[14px] shadow-[0_3px_3px_0_rgba(19,48,66,0.07)] transition-transform duration-300 hover:scale-[1.02] hover:cursor-default">
              <Image className="p-2.5 bg-[#f1f1f9] rounded-[10px]" src="/img/Product-Selection.png" alt="AI Blog Automation" width={40} height={40} />
              <p className="text-[20px] font-bold">AI Auto Technical SEO</p>
              <p className="text-[16px] font-normal">Technical fixes made easy. Let AI handle the geeky stuff for peak site performance.</p>
            </div>
      {/* 13       */}
            <div className="flex p-[25px] min-h-[220px]  flex-col gap-3 item-left text-left bg-white border border-[#D2D2EB] rounded-[14px] shadow-[0_3px_3px_0_rgba(19,48,66,0.07)] transition-transform duration-300 hover:scale-[1.02] hover:cursor-default">
              <Image className="p-2.5 bg-[#f1f1f9] rounded-[10px]" src="/img/Ai-Generate-Text-Spark-Streamline-Plump.png" alt="AI Blog Automation" width={40} height={40} />
              <p className="text-[20px] font-bold">AI Article Updater</p>
              <p className="text-[16px] font-normal">Auto update you existing article so that you get better rankings.</p>
            </div>
     {/* 14        */}
            <div className="flex p-[25px] min-h-[220px] flex-col gap-3 item-left text-left bg-white border border-[#D2D2EB] rounded-[14px] shadow-[0_3px_3px_0_rgba(19,48,66,0.07)] transition-transform duration-300 hover:scale-[1.02] hover:cursor-default">
              <Image className="p-2.5 bg-[#f1f1f9] rounded-[10px]" src="/img/Personal-Hotspot.png" alt="AI Blog Automation" width={40} height={40} />
              <p className="text-[20px] font-bold">AI Internal Links Builder</p>
              <p className="text-[16px] font-normal">AI scans your content and adds internal links where they matter most.</p>
            </div>
            {/* 15 */}

            <div className="flex p-[25px] min-h-[220px] flex-col gap-3 item-left text-left bg-white border border-[#D2D2EB] rounded-[14px] shadow-[0_3px_3px_0_rgba(19,48,66,0.07)] transition-transform duration-300 hover:scale-[1.02] hover:cursor-default">
              <Image className="p-2.5 bg-[#f1f1f9] rounded-[10px]" src="/img/Sound-Recognition-Search-Streamline-Plump.png" alt="AI Blog Automation" width={40} height={40} />
              <p className="text-[20px] font-bold">Search Console Insights</p>
              <p className="text-[16px] font-normal">Find Interesting Insights from your Google Search Console Data.</p>
            </div>

            {/* 16 */}

            <div className="flex p-[25px] min-h-[220px] flex-col gap-3 item-left text-left bg-white border border-[#D2D2EB] rounded-[14px] shadow-[0_3px_3px_0_rgba(19,48,66,0.07)] transition-transform duration-300 hover:scale-[1.02] hover:cursor-default">
              <Image className="p-2.5 bg-[#f1f1f9] rounded-[10px]" src="/img/AI-calculator.png" alt="AI Blog Automation" width={40} height={40} />
              <p className="text-[20px] font-bold">AI Calculator Widgets</p>
              <p className="text-[16px] font-normal">Create calculators for your niche with one-click create & publish.</p>
            </div>
            {/* 17 */}
            <div className="flex p-[25px] min-h-[220px] flex-col gap-3 item-left text-left bg-white border border-[#D2D2EB] rounded-[14px] shadow-[0_3px_3px_0_rgba(19,48,66,0.07)] transition-transform duration-300 hover:scale-[1.02] hover:cursor-default">
              <Image className="p-2.5 bg-[#f1f1f9] rounded-[10px]" src="/img/File-Check.png" alt="AI Blog Automation" width={40} height={40} />
              <p className="text-[20px] font-bold">AI Comparison Pages</p>
              <p className="text-[16px] font-normal">Create dozens of competitor vs. competitor pages without writing a word.</p>
            </div>
            {/* 18 */}
            <div className="flex p-[25px] min-h-[220px] flex-col gap-3 item-left text-left bg-white border border-[#D2D2EB] rounded-[14px] shadow-[0_3px_3px_0_rgba(19,48,66,0.07)] transition-transform duration-300 hover:scale-[1.02] hover:cursor-default">
              <Image className="p-2.5 bg-[#f1f1f9] rounded-[10px]" src="/img/Align-Object-Frame-Top-Streamline-Plump.png" alt="AI Blog Automation" width={40} height={40} />
              <p className="text-[20px] font-bold">AI Infographic / Stats Page</p>
              <p className="text-[16px] font-normal">Auto Create Infographic & Statistics Page relevant to your niche.</p>
            </div>
{/* 19 */}
            <div className="flex p-[25px] min-h-[220px] flex-col gap-3 item-left text-left bg-white border border-[#D2D2EB] rounded-[14px] shadow-[0_3px_3px_0_rgba(19,48,66,0.07)] transition-transform duration-300 hover:scale-[1.02] hover:cursor-default">
              <Image className="p-2.5 bg-[#f1f1f9] rounded-[10px]" src="/img/Guest-post-finder.png" alt="AI Blog Automation" width={40} height={40} />
              <p className="text-[20px] font-bold">Guest Post Finder
Guest Post Finder</p>
              <p className="text-[16px] font-normal">Find Guest Post Opportunities in your niche.</p>
            </div>
            {/* 20 */}
            <div className="flex p-[25px] min-h-[220px] flex-col gap-3 item-left text-left bg-white border border-[#D2D2EB] rounded-[14px] shadow-[0_3px_3px_0_rgba(19,48,66,0.07)] transition-transform duration-300 hover:scale-[1.02] hover:cursor-default">
              <Image className="p-2.5 bg-[#f1f1f9] rounded-[10px]" src="/img/Copy-Link-Streamline-Plump.png" alt="AI Blog Automation" width={40} height={40} />
              <p className="text-[20px] font-bold">Backlink Directory</p>
              <p className="text-[16px] font-normal">List of places to submit to get backlinks for website.</p>
            </div>
            {/* 21 */}
            <div className="flex p-[25px] min-h-[220px] flex-col gap-3 item-left text-left bg-white border border-[#D2D2EB] rounded-[14px] shadow-[0_3px_3px_0_rgba(19,48,66,0.07)] transition-transform duration-300 hover:scale-[1.02] hover:cursor-default">
              <Image className="p-2.5 bg-[#f1f1f9] rounded-[10px]" src="/img/Google-map-Seo-tracker.png" alt="AI Blog Automation" width={40} height={40} />
              <p className="text-[20px] font-bold">Google Map SEO Tracker</p>
              <p className="text-[16px] font-normal">Check in which locations is your Google My Business Profile Ranking.</p>
            </div>
            {/* 22 */}
            <div className="flex p-[25px] min-h-[220px] flex-col gap-3 item-left text-left bg-white border border-[#D2D2EB] rounded-[14px] shadow-[0_3px_3px_0_rgba(19,48,66,0.07)] transition-transform duration-300 hover:scale-[1.02] hover:cursor-default">
              <Image className="p-2.5 bg-[#f1f1f9] rounded-[10px]" src="/img/Play-List-8-Streamline-Plump.png" alt="AI Blog Automation" width={40} height={40} />
              <p className="text-[20px] font-bold">Video to Article</p>
              <p className="text-[16px] font-normal">Convert any YouTube video to a blog article.</p>
            </div>
            {/* 23 */}
            <div className="flex p-[25px] min-h-[220px] flex-col gap-3 item-left text-left bg-white border border-[#D2D2EB] rounded-[14px] shadow-[0_3px_3px_0_rgba(19,48,66,0.07)] transition-transform duration-300 hover:scale-[1.02] hover:cursor-default">
              <Image className="p-2.5 bg-[#f1f1f9] rounded-[10px]" src="/img/Reddit-Logo-Streamline-Plump.png" alt="AI Blog Automation" width={40} height={40} />
              <p className="text-[20px] font-bold">Reddit SEO</p>
              <p className="text-[16px] font-normal">Find reddit posts in your niche, so you can comment at the right place.</p>
            </div>
            {/* 24 */}
            <div className="flex p-[25px] min-h-[220px] flex-col gap-3 item-left text-left bg-white border border-[#D2D2EB] rounded-[14px] shadow-[0_3px_3px_0_rgba(19,48,66,0.07)] transition-transform duration-300 hover:scale-[1.02] hover:cursor-default">
              <Image className="p-2.5 bg-[#f1f1f9] rounded-[10px]" src="/img/Notepad.png" alt="Content Calender" width={40} height={40} />
              <p className="text-[20px] font-bold">Content Calender</p>
              <p className="text-[16px] font-normal">Plan like a pro. Organize and schedule all your content for consistent publishing and SEO wins.</p>
            </div>
            {/* 25 */}
             <div className="flex p-[25px] min-h-[220px] flex-col gap-3 item-left text-left bg-white border border-[#D2D2EB] rounded-[14px] shadow-[0_3px_3px_0_rgba(19,48,66,0.07)] transition-transform duration-300 hover:scale-[1.02] hover:cursor-default">
              <Image className="p-2.5 bg-[#f1f1f9] rounded-[10px]" src="/img/No-Word-Wrap.png" alt="AI SEO Tracker" width={40} height={40} />
              <p className="text-[20px] font-bold">AI SEO Tracker</p>
              <p className="text-[16px] font-normal">Smarter tracking, better rankings. Let AI monitor your SEO performance and spot winning opportunities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================== SECTION 3 ========================== */}
      <section className="py-30 w-full flex flex-col justify-center items-center text-center bg-white">
        <div className="max-w-[1200px] w-full flex flex-col justify-center items-center gap-5 px-6">
          
          {/* Animated Counter */}
          <div className="elementor-counter mt-0">
            <div className="elementor-counter-number-wrapper flex justify-center items-center text-center">
              <span className="font-sans text-[50px] xl:text-[100px] md:text-[80px] sm:text-[50px] font-bold leading-[1.1em] tracking-[-1px] text-black">
                {formattedCount}
              </span>
            </div>
            <p className="text-[29px] text-black font-medium mt-6 xl:text-[29px] md:text-[20px]">
              Our users love us 2.6 Billion.<br/><br/>That’s the amount of AI/LLM tokens used cumulatively by our users.
            </p>
            <ImageCarousel />            
            <h2 className="py-5 text-[40px] font-bold leading-[1.1em] tracking-[-1px] text-black">All Good things Packed into One Software</h2>  
          
          </div>

          <div className="w-full p-16 grid space-between grid-cols-1 gap-5 xl:grid-cols-[50%_40%] xl:p-16 md:p-16 md:grid-cols-1 sm:p-5 sm:grid-cols-1 rounded-[20px] bg-[#FAF1E3] ">
              <div className="flex flex-col gap-5 text-center xl:text-left md:text-center sm:text-center">
                <h3 className="text-[40px] text-[#4F340A] leading-[1.1em] font-semibold">We integrate with all the  latest tech, so you are not left behind.</h3>
                <p className="text-[20px] text-[#8A5E19] leading-[1.4em]" >Our system is built to support top platforms<br/> today, and ready for what’s next tomorrow.</p>
              </div>
              <div className="flex justify-center xl:justify-end md:justify-center sm:justify:center">
                <Image src="/img/Software-pack.png" alt="Software Pack" width={900} height={400} />
              </div>                      
            
          </div>

          <div className="w-full grid grid-cols-1 gap-7 pt-4 xl:grid-col-2 md:grid-col-2 sm:grid-col-1">
              <div className="flex flex-col pt-4 pb-2 gap-3 text-center rounded-[20px] bg-[#e4f1ff] ">
                <CMS_Carousel />    
                <p className="text-[35px] text-[#264363] leading-[1.1em] font-bold">Full Fledged Integrations</p>
                <p className="text-[20px] text-[#2463A8] leading-[1.4em]" >So simple, you’ll forget it’s even integrated.<br/> Built for teams that hate complexity but <br />love when things just work.</p>
                <div className="flex justify-center">
                  
                  <a href="https://abun.com/integrations" className="inline-flex items-center gap-2 px-6 py-1 rounded-full text-sm font-medium transition-all duration-300 hover: hover:gap-3">
                                    
                    <span className="flex align-center items-center gap-5 justify-center text-[20px] text-[#264363] bg-transparent" >View Integrations <p className="text-[40px] mt-[-3px] font-medium">›</p> </span>                
                  
                  </a>
                </div>
              </div>

              <div className="flex flex-col p-8 gap-3 text-center rounded-[20px] bg-[#e4e7ff] ">
                <TextSlider /> 
                <p className="pt-5 text-[35px] text-[#2A3062] leading-[1.1em] font-bold">Multi Language Support</p>
                <p className="text-[20px] text-[#4B539A] leading-[1.4em]" >Whether it's English, Español, or Emoji, we<br/> speak your customers’ language, so<br /> nothing gets lost in translation.</p>
                <div className="flex justify-center">
                  <a href="https://abun.com/integrations" className="inline-flex items-center gap-2 text-white px-6 py-1 rounded-full text-sm font-medium transition-all duration-300 hover:gap-3">
                                    
                    <span className="flex align-center items-center gap-5 justify-center text-[20px] text-[#264363] bg-transparent" >View Languages Supported <p className="text-[40px] mt-[-3px] font-medium">›</p> </span>                
                  </a>
                </div>
              </div>                          
            
          </div>

          <h2 className="pt-18 text-[35px] text-black font-medium leading-[1.1em]">We are your unfair advantage.</h2>
          <p className="text-[35px] text-[#2E64FE] font-medium leading-[1.1em]" >Our users see guaranteed growth <br/>within 30 days.</p>

          <div className="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-4 py-12 text-[16px] text-black xl:text-[25px] md:text-[16px] sm:text-[16px]">
            <div className="flex flex-col gap-4">
              <p>25+ Tools</p>
              <p>Feature Rich Tools</p>
              <p>Growing Integrations</p>
              <p>New Tools Every Month</p>
              <p>Frequent Feature Drops</p>          
            </div>

            <div className="flex flex-col gap-4">  
              <p>No Learning Curve</p>
              <p>Community Driven</p>
              <p>All in one Pricing</p>
              <p>Great Support</p>
              <p>Privacy First</p>
            </div>

            <div className="flex flex-col gap-4">
              <p>Built for Scale</p>
              <p>Zero Setup Time</p>
              <p>Transparent Pricing</p>
              <p>Designed for Efficiency</p>
              <p>Enterprise-Grade Security</p>
            </div>
          </div>

          <button className="mt-8 text-black text-[20px] transition-transform duration-300 ease-out hover:-translate-y-2 bg-[#FACE49] rounded-[11px] px-[30px] py-4 animate-pulse-shadow ">
            <a>Claim Your Free Account ➔</a>
          </button>

          <p className="font-sans text-[18px] font-normal leading-[1.1em] tracking-[0px] text-[#00000099]">
            Free Accounts available only for a Limited Time
          </p>

        </div>
      </section>
{/*================================ SECTION 4 - Testimonials =============================================*/}
      <Testimonials />
{/* ========================== SECTION 5 - Price Table ========================== */}
      <section className="py-30 w-full flex flex-col justify-center items-center text-center bg-white">
        <div className="max-w-[1350px] w-full flex flex-col justify-center items-center gap-6 px-6">
          <h2 className="pt-16 pb-6 text-[48px] text-black font-bold leading-[1.1em]">Access All Tools for One Price.</h2>
          
{/*------------------------------------------price table component----------------------------------------------------------------------------------------------------------  */}
          <PriceTab />  
        </div>
      </section>    
{/* ============================== SECTION 6 - FAQ ============================================ */}
      <FAQ /> 
{/* ============================================ Footer ================================================= */}
      <Footer />




    </main>
  );
}
