"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import ImageCarousel from "@/components/imagecarousel";



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
    <main className="w-full py-12 font-Geist flex min-h-screen flex-col items-center justify-center bg-white dark:bg-black">
      
      {/* SECTION 1 */}
      <section className="py-30 w-full flex flex-col justify-center items-center text-center gap-6">
        <div className="max-w-[1200px] w-full flex flex-col justify-center items-center gap-6 px-6">
          
          <div className="w-full max-w-[1200px] flex flex-row flex-wrap items-center justify-center gap-6 text-center">
            
            <div className="flex flex-col items-center gap-2 text-center">
              <Image src="/img/rating-star.png" alt="Rating Star" width={115} height={20} />
              <p className="text-[rgb(102,85,66)] text-[20px]">“biggest value bomb”</p>
            </div>

            <div className="flex flex-col items-center gap-2 text-center">
              <Image src="/img/rating-star.png" alt="Rating Star" width={115} height={20} />
              <p className="text-[rgb(102,85,66)] text-[20px]">“my entire team can’t stop using it”</p>
            </div>

            <div className="flex flex-col items-center gap-2 text-center">
              <Image src="/img/rating-star.png" alt="Rating Star" width={115} height={20} />
              <p className="text-[#665542] text-[20px]">“helped us scale & grow”</p>
            </div>
          </div>

          <h1 className="font-sans text-[90px] font-bold leading-[1.1em] tracking-[-1px] text-black">
            The All-In-One Toolkit for <br /> SEO & Growth Marketing.
          </h1>

          <p className="text-[28px] text-black font-medium">
            Used by 5,325 Marketers, Founders, SEO Experts
            <br />
            to Drive Traffic, Generate Leads, Rank Faster & Achieve Solid Business Growth
          </p>

          <button className="mt-5 text-black text-[20px] transition-transform duration-300 ease-out hover:-translate-y-2 bg-[#FACE49] rounded-[11px] px-[30px] py-[20px]">
            <a>Claim Your Free Account ➔</a>
          </button>

          <p className="font-sans text-[18px] font-normal leading-[1.1em] tracking-[0px] text-[#00000099]">
            Free Accounts available only for a Limited Time
          </p>

          <div className="flex flex-row items-center justify-center gap-2 text-center">
            <Image src="/img/image-123.png" alt="" width={265} height={80} />
            <Image src="/img/nvidia-inception-program-badge-rgb-for-screen.png" alt="" width={152} height={66} />
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="py-30 w-full flex flex-col justify-center items-center text-center bg-gradient-to-b from-[#F1F1F9]/80 to-[#FFFFFF]/100">
        <div className="max-w-[1200px] w-full flex flex-col justify-center items-center gap-6 px-6">
          <p className="text-[18px] font-[500] leading-[1.1em] tracking-[-0.5px] text-[#4A4583]">AI SEO & Marketing Tools</p>
          <h2 className="text-[48px] font-bold leading-[1.1em] tracking-[-1px] text-black">Start Scaling your Traffic</h2>

          <div className="w-full max-w-[1280px] grid grid-cols-3 gap-6 items-start justify-center text-center ">
            {/* 1 */}
            <div className="flex p-[25px] min-h-[210px] flex-col gap-3 item-left text-left bg-[#FFFFFF] border border-[#D2D2EB] rounded-[14px] shadow-[0_3px_3px_0_rgba(19,48,66,0.07)] transition-transform duration-300 hover:scale-[1.02] hover:cursor-default">
              <Image className="p-2.5 bg-[#f1f1f9] rounded-[10px]" src="/img/Script-2-Streamline-Plump.png" alt="AI Articles" width={40} height={40} />
              <p className="mt-2 text-[20px] font-bold leading-[1.4em]">AI Articles</p>
              <p className="text-[16px] font-normal">
                Human-like Articles that don't suck. All types of Articles Supported.
              </p>
            </div>
{/* 2 */}
            <div className="flex p-[25px] min-h-[210px] flex-col gap-3 item-left text-left bg-white border border-[#D2D2EB] rounded-[14px] shadow-[0_3px_3px_0_rgba(19,48,66,0.07)] transition-transform duration-300 hover:scale-[1.02] hover:cursor-default">
              <Image className="p-2.5 bg-[#f1f1f9] rounded-[10px]" src="/img/Ai-Browser-Robot-Streamline-Plump.png" alt="AI Blog Automation" width={40} height={40} />
              <p className="text-[20px] font-bold">AI Blog Automation</p>
              <p className="text-[16px] font-normal">Automate your blog from months to a complete year.</p>
            </div>
{/* 3 */}
            <div className="flex p-[25px] min-h-[210px] flex-col gap-3 item-left text-left bg-white border border-[#D2D2EB] rounded-[14px] shadow-[0_3px_3px_0_rgba(19,48,66,0.07)] transition-transform duration-300 hover:scale-[1.02] hover:cursor-default">
              <Image className="p-2.5 bg-[#f1f1f9] rounded-[10px]" src="/img/Ai-Browser-Robot-Streamline-Plump.png" alt="AI Blog Automation" width={40} height={40} />
              <p className="text-[20px] font-bold">AI Programmatic SEO</p>
              <p className="text-[16px] font-normal">Create Multiple Programmatic SEO based articles to rank faster.</p>
            </div>
{/* 4 */}
            <div className="flex p-[25px] min-h-[210px] flex-col gap-3 item-left text-left bg-white border border-[#D2D2EB] rounded-[14px] shadow-[0_3px_3px_0_rgba(19,48,66,0.07)] transition-transform duration-300 hover:scale-[1.02] hover:cursor-default">
              <Image className="p-2.5 bg-[#f1f1f9] rounded-[10px]" src="/img/Ai-Browser-Robot-Streamline-Plump.png" alt="AI Blog Automation" width={40} height={40} />
              <p className="text-[20px] font-bold">AI Glossary Creator</p>
              <p className="text-[16px] font-normal">Turn a single topic into a glossary of high-ranking, Google-optimized definitions.</p>
            </div>
{/* 5 */}
            <div className="flex p-[25px] min-h-[210px] flex-col gap-3 item-left text-left bg-white border border-[#D2D2EB] rounded-[14px] shadow-[0_3px_3px_0_rgba(19,48,66,0.07)] transition-transform duration-300 hover:scale-[1.02] hover:cursor-default">
              <Image className="p-2.5 bg-[#f1f1f9] rounded-[10px]" src="/img/Long-tail-keyword-research.png" alt="AI Blog Automation" width={40} height={40} />
              <p className="text-[20px] font-bold">LongTail Keyword Research</p>
              <p className="text-[16px] font-normal">Instantly generate hundreds of long-tail keywords for any topic or niche.</p>
            </div>
 {/* 6            */}
            <div className="flex p-[25px] min-h-[210px] flex-col gap-3 item-left text-left bg-white border border-[#D2D2EB] rounded-[14px] shadow-[0_3px_3px_0_rgba(19,48,66,0.07)] transition-transform duration-300 hover:scale-[1.02] hover:cursor-default">
              <Image className="p-2.5 bg-[#f1f1f9] rounded-[10px]" src="/img/Find-competitor-keyword.png" alt="AI Blog Automation" width={40} height={40} />
              <p className="text-[20px] font-bold">Steal Competitor Keywords</p>
              <p className="text-[16px] font-normal">Find & Steal keywords for which your competitors are ranking.</p>
            </div>
{/* ------------------------------------------------7 */}
            <div className="flex p-[25px] min-h-[210px] flex-col gap-3 item-left text-left bg-white border border-[#D2D2EB] rounded-[14px] shadow-[0_3px_3px_0_rgba(19,48,66,0.07)] transition-transform duration-300 hover:scale-[1.02] hover:cursor-default">
              <Image className="p-2.5 bg-[#f1f1f9] rounded-[10px]" src="/img/Ai.png" alt="AI Blog Automation" width={40} height={40} />
              <p className="text-[20px] font-bold">AI Keyword Research</p>
              <p className="text-[16px] font-normal">Let AI uncover the best keywords for ranking and traffic growth.</p>
            </div>

  {/*------------------------------- 8           */}
            <div className="flex p-[25px] min-h-[210px] flex-col gap-3 item-left text-left bg-white border border-[#D2D2EB] rounded-[14px] shadow-[0_3px_3px_0_rgba(19,48,66,0.07)] transition-transform duration-300 hover:scale-[1.02] hover:cursor-default">
              <Image className="p-2.5 bg-[#f1f1f9] rounded-[10px]" src="/img/Code-Analysis.png" alt="AI Blog Automation" width={40} height={40} />
              <p className="text-[20px] font-bold">ICP to Keyword Research</p>
              <p className="text-[16px] font-normal">Turn ideal customers into keyword gold. Find what they search, so you rank where it matters.</p>
            </div>

   {/* 9          */}
            <div className="flex p-[25px] min-h-[210px] flex-col gap-3 item-left text-left bg-white border border-[#D2D2EB] rounded-[14px] shadow-[0_3px_3px_0_rgba(19,48,66,0.07)] transition-transform duration-300 hover:scale-[1.02] hover:cursor-default">
              <Image className="p-2.5 bg-[#f1f1f9] rounded-[10px]" src="/img/Search-Arrow-Increase.png" alt="AI Blog Automation" width={40} height={40} />
              <p className="text-[20px] font-bold">Manual Keyword Research</p>
              <p className="text-[16px] font-normal">Old-school, hands-on keyword digging.
No fluff just pure, strategic SEO.</p>
            </div>

      {/* 10       */}
            <div className="flex p-[25px] min-h-[210px] flex-col gap-3 item-left text-left bg-white border border-[#D2D2EB] rounded-[14px] shadow-[0_3px_3px_0_rgba(19,48,66,0.07)] transition-transform duration-300 hover:scale-[1.02] hover:cursor-default">
              <Image className="p-2.5 bg-[#f1f1f9] rounded-[10px]" src="/img/ai-schema.png" alt="AI Blog Automation" width={40} height={40} />
              <p className="text-[20px] font-bold">AI Auto Schema</p>
              <p className="text-[16px] font-normal">Auto add JSON schema to all of your pages to boost your technical SEO.</p>
            </div>

       {/* 11      */}
            <div className="flex p-[25px] min-h-[210px] flex-col gap-3 item-left text-left bg-white border border-[#D2D2EB] rounded-[14px] shadow-[0_3px_3px_0_rgba(19,48,66,0.07)] transition-transform duration-300 hover:scale-[1.02] hover:cursor-default">
              <Image className="p-2.5 bg-[#f1f1f9] rounded-[10px]" src="/img/Fast-indexing.png" alt="AI Blog Automation" width={40} height={40} />
              <p className="text-[20px] font-bold">Fast Indexing</p>
              <p className="text-[16px] font-normal">Get your pages seen now. Lightning-speed indexing for quicker SEO wins.</p>
            </div>

     {/* 12        */}
            <div className="flex p-[25px] min-h-[210px] flex-col gap-3 item-left text-left bg-white border border-[#D2D2EB] rounded-[14px] shadow-[0_3px_3px_0_rgba(19,48,66,0.07)] transition-transform duration-300 hover:scale-[1.02] hover:cursor-default">
              <Image className="p-2.5 bg-[#f1f1f9] rounded-[10px]" src="/img/Product-Selection.png" alt="AI Blog Automation" width={40} height={40} />
              <p className="text-[20px] font-bold">AI Auto Technical SEO</p>
              <p className="text-[16px] font-normal">Technical fixes made easy. Let AI handle the geeky stuff for peak site performance.</p>
            </div>
      {/* 13       */}
            <div className="flex p-[25px] min-h-[210px] flex-col gap-3 item-left text-left bg-white border border-[#D2D2EB] rounded-[14px] shadow-[0_3px_3px_0_rgba(19,48,66,0.07)] transition-transform duration-300 hover:scale-[1.02] hover:cursor-default">
              <Image className="p-2.5 bg-[#f1f1f9] rounded-[10px]" src="/img/Ai-Generate-Text-Spark-Streamline-Plump.png" alt="AI Blog Automation" width={40} height={40} />
              <p className="text-[20px] font-bold">AI Article Updater</p>
              <p className="text-[16px] font-normal">Auto update you existing article so that you get better rankings.</p>
            </div>
     {/* 14        */}
            <div className="flex p-[25px] min-h-[210px] flex-col gap-3 item-left text-left bg-white border border-[#D2D2EB] rounded-[14px] shadow-[0_3px_3px_0_rgba(19,48,66,0.07)] transition-transform duration-300 hover:scale-[1.02] hover:cursor-default">
              <Image className="p-2.5 bg-[#f1f1f9] rounded-[10px]" src="/img/Personal-Hotspot.png" alt="AI Blog Automation" width={40} height={40} />
              <p className="text-[20px] font-bold">AI Internal Links Builder</p>
              <p className="text-[16px] font-normal">AI scans your content and adds internal links where they matter most.</p>
            </div>
            {/* 15 */}

            <div className="flex p-[25px] min-h-[210px] flex-col gap-3 item-left text-left bg-white border border-[#D2D2EB] rounded-[14px] shadow-[0_3px_3px_0_rgba(19,48,66,0.07)] transition-transform duration-300 hover:scale-[1.02] hover:cursor-default">
              <Image className="p-2.5 bg-[#f1f1f9] rounded-[10px]" src="/img/Sound-Recognition-Search-Streamline-Plump.png" alt="AI Blog Automation" width={40} height={40} />
              <p className="text-[20px] font-bold">Search Console Insights</p>
              <p className="text-[16px] font-normal">Find Interesting Insights from your Google Search Console Data.</p>
            </div>

            {/* 16 */}

            <div className="flex p-[25px] min-h-[210px] flex-col gap-3 item-left text-left bg-white border border-[#D2D2EB] rounded-[14px] shadow-[0_3px_3px_0_rgba(19,48,66,0.07)] transition-transform duration-300 hover:scale-[1.02] hover:cursor-default">
              <Image className="p-2.5 bg-[#f1f1f9] rounded-[10px]" src="/img/AI-calculator.png" alt="AI Blog Automation" width={40} height={40} />
              <p className="text-[20px] font-bold">AI Calculator Widgets</p>
              <p className="text-[16px] font-normal">Create calculators for your niche with one-click create & publish.</p>
            </div>
            {/* 17 */}
            <div className="flex p-[25px] min-h-[210px] flex-col gap-3 item-left text-left bg-white border border-[#D2D2EB] rounded-[14px] shadow-[0_3px_3px_0_rgba(19,48,66,0.07)] transition-transform duration-300 hover:scale-[1.02] hover:cursor-default">
              <Image className="p-2.5 bg-[#f1f1f9] rounded-[10px]" src="/img/File-Check.png" alt="AI Blog Automation" width={40} height={40} />
              <p className="text-[20px] font-bold">AI Comparison Pages</p>
              <p className="text-[16px] font-normal">Create dozens of competitor vs. competitor pages without writing a word.</p>
            </div>
            {/* 18 */}
            <div className="flex p-[25px] min-h-[210px] flex-col gap-3 item-left text-left bg-white border border-[#D2D2EB] rounded-[14px] shadow-[0_3px_3px_0_rgba(19,48,66,0.07)] transition-transform duration-300 hover:scale-[1.02] hover:cursor-default">
              <Image className="p-2.5 bg-[#f1f1f9] rounded-[10px]" src="/img/Align-Object-Frame-Top-Streamline-Plump.png" alt="AI Blog Automation" width={40} height={40} />
              <p className="text-[20px] font-bold">AI Infographic / Stats Page</p>
              <p className="text-[16px] font-normal">Auto Create Infographic & Statistics Page relevant to your niche.</p>
            </div>
{/* 19 */}
            <div className="flex p-[25px] min-h-[210px] flex-col gap-3 item-left text-left bg-white border border-[#D2D2EB] rounded-[14px] shadow-[0_3px_3px_0_rgba(19,48,66,0.07)] transition-transform duration-300 hover:scale-[1.02] hover:cursor-default">
              <Image className="p-2.5 bg-[#f1f1f9] rounded-[10px]" src="/img/Guest-post-finder.png" alt="AI Blog Automation" width={40} height={40} />
              <p className="text-[20px] font-bold">Guest Post Finder
Guest Post Finder</p>
              <p className="text-[16px] font-normal">Find Guest Post Opportunities in your niche.</p>
            </div>
            {/* 20 */}
            <div className="flex p-[25px] min-h-[210px] flex-col gap-3 item-left text-left bg-white border border-[#D2D2EB] rounded-[14px] shadow-[0_3px_3px_0_rgba(19,48,66,0.07)] transition-transform duration-300 hover:scale-[1.02] hover:cursor-default">
              <Image className="p-2.5 bg-[#f1f1f9] rounded-[10px]" src="/img/Copy-Link-Streamline-Plump.png" alt="AI Blog Automation" width={40} height={40} />
              <p className="text-[20px] font-bold">Backlink Directory</p>
              <p className="text-[16px] font-normal">List of places to submit to get backlinks for website.</p>
            </div>
            {/* 21 */}
            <div className="flex p-[25px] min-h-[210px] flex-col gap-3 item-left text-left bg-white border border-[#D2D2EB] rounded-[14px] shadow-[0_3px_3px_0_rgba(19,48,66,0.07)] transition-transform duration-300 hover:scale-[1.02] hover:cursor-default">
              <Image className="p-2.5 bg-[#f1f1f9] rounded-[10px]" src="/img/Google-map-Seo-tracker.png" alt="AI Blog Automation" width={40} height={40} />
              <p className="text-[20px] font-bold">Google Map SEO Tracker</p>
              <p className="text-[16px] font-normal">Check in which locations is your Google My Business Profile Ranking.</p>
            </div>
            {/* 22 */}
            <div className="flex p-[25px] min-h-[210px] flex-col gap-3 item-left text-left bg-white border border-[#D2D2EB] rounded-[14px] shadow-[0_3px_3px_0_rgba(19,48,66,0.07)] transition-transform duration-300 hover:scale-[1.02] hover:cursor-default">
              <Image className="p-2.5 bg-[#f1f1f9] rounded-[10px]" src="/img/Play-List-8-Streamline-Plump.png" alt="AI Blog Automation" width={40} height={40} />
              <p className="text-[20px] font-bold">Video to Article</p>
              <p className="text-[16px] font-normal">Convert any YouTube video to a blog article.</p>
            </div>
            {/* 23 */}
            <div className="flex p-[25px] min-h-[210px] flex-col gap-3 item-left text-left bg-white border border-[#D2D2EB] rounded-[14px] shadow-[0_3px_3px_0_rgba(19,48,66,0.07)] transition-transform duration-300 hover:scale-[1.02] hover:cursor-default">
              <Image className="p-2.5 bg-[#f1f1f9] rounded-[10px]" src="/img/Reddit-Logo-Streamline-Plump.png" alt="AI Blog Automation" width={40} height={40} />
              <p className="text-[20px] font-bold">Reddit SEO</p>
              <p className="text-[16px] font-normal">Find reddit posts in your niche, so you can comment at the right place.</p>
            </div>
            {/* 24 */}
            <div className="flex p-[25px] min-h-[210px] flex-col gap-3 item-left text-left bg-white border border-[#D2D2EB] rounded-[14px] shadow-[0_3px_3px_0_rgba(19,48,66,0.07)] transition-transform duration-300 hover:scale-[1.02] hover:cursor-default">
              <Image className="p-2.5 bg-[#f1f1f9] rounded-[10px]" src="/img/Notepad.png" alt="AI Blog Automation" width={40} height={40} />
              <p className="text-[20px] font-bold">Content Calender</p>
              <p className="text-[16px] font-normal">Plan like a pro. Organize and schedule all your content for consistent publishing and SEO wins.</p>
            </div>
            {/* 25 */}
             <div className="flex p-[25px] min-h-[210px] flex-col gap-3 item-left text-left bg-white border border-[#D2D2EB] rounded-[14px] shadow-[0_3px_3px_0_rgba(19,48,66,0.07)] transition-transform duration-300 hover:scale-[1.02] hover:cursor-default">
              <Image className="p-2.5 bg-[#f1f1f9] rounded-[10px]" src="/img/No-Word-Wrap.png" alt="AI Blog Automation" width={40} height={40} />
              <p className="text-[20px] font-bold">AI SEO Tracker</p>
              <p className="text-[16px] font-normal">Smarter tracking, better rankings. Let AI monitor your SEO performance and spot winning opportunities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================== SECTION 3 ========================== */}
      <section className="py-30 w-full flex flex-col justify-center items-center text-center bg-gradient-to-b from-[#F1F1F9]/80 to-[#FFFFFF]/100">
        <div className="max-w-[1200px] w-full flex flex-col justify-center items-center gap-6 px-6">
          
          {/* Animated Counter */}
          <div className="elementor-counter mt-6">
            <div className="elementor-counter-number-wrapper flex justify-center items-center text-center">
              <span className="font-sans text-[90px] font-bold leading-[1.1em] tracking-[-1px] text-black">
                {formattedCount}
              </span>
            </div>
            <p className="text-[28px] text-black font-medium mt-3 mt-6">
              Our users love us 2.6 Billion.<br/><br/>That’s the amount of AI/LLM tokens used cumulatively by our users.
            </p>
            <h2 className="text-[48px] font-bold leading-[1.1em] tracking-[-1px] text-black">All Good things Packed into One Software</h2>  

            <div className="w-full p-6 grid grid-cols-2 gap-12 rounded-[20px] bg-[#FAF1E3]">
              <div className="flex flex-col gap-2">
                <h3 className="font-[35px] text-[#4F340A] leading-[1.1em] font-medium">We integrate with all the  latest tech, so you are not left behind.</h3>
                <p className="font-[20px] text-[#4F340A] leading-[1.4em]" >Our system is built to support top platforms today, and ready for what’s next tomorrow.</p>
              </div>

              <div>
                <Image src="/img/Software-pack.png" alt="Software pack"  />
              </div>  
                      
            </div>  




          </div>
        </div>
      </section>



    </main>
  );
}
