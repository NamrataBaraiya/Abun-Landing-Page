"use client";
import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    //------------------ 1---------------------
    {
         
      name: "Johnny V.",
      reviews: "1 Review",
      location: "US",
      title: "One of my favorites for long form content.",
      text: (
        <>
          <span className="bg-[#82f375] text-black px-1">
            Having recently compared a few AI writers, abun was the best of the bunch.
          </span>{" "}
          My articles were detailed, well-organized, and (most importantly) factual. Some even included tables where appropriate. The keyword research functionality, complete with integration into the prompts, is a huge time-saver.
        </>
      ),
      avatar: "J",
    },
    // --------------2----------------------------
    {
      name: "Fiorenzomi",
      reviews: "1 Reviews",
      location: "SE",
      title: "Everything working perfectly",
      text: (
        <>
          Had mixed feelings about Abun's product at first.{" "}
          <span className="bg-[#82f375] text-black px-1">
            Bought it, hit bugs with the non-English content, and got a refund.
          </span>
          But Abun's support was brilliant. They kept in touch after the refund, saying they'd fixed the issues based on my feedback! Tried the free trial again, totally different. Bugs gone, everything working perfectly.{" "} 
          <span className="bg-[#82f375] text-black px-1">
            Bought it again, and I'm really impressed. Great product, top-notch support. Thanks, Abun!
          </span>
        </>
      ),
      avatar: "F",
    },
    
    // -------------------------- 3 -------------------------
    {
      name: "Udomchoke Asawimalkit",
      reviews: "2 Reviews",
      location: "GB",
      title: "The Tool That Pleasantly Surprised Me",
      text: (
        <>
          Abun pleasantly surprised me. Right off the bat,{" "}
          <span className="bg-[#82f375] text-black px-1">I was impressed by the tool's output, an article in Thai language. This is a game-changer for me, as I just asked the Abun team to add my home language few days before I bought and tested it today.</span>
          This would make the same experience to anyone trying to rank their content in the ever-competitive online landscape with ease of automation.
          {" "}
          <span className="bg-[#82f375] text-black px-1">Abun helps me find those hidden gem keywords and full contents that can give me pleasing job.</span>
          
        </>
      ),
      avatar: "UA",
    },
    
    
    // -------------------------------4------------------------------
    {
      name: "Cigarginger",
      reviews: "2 Reviews",
      location: "US",
      title: "Perfect Solution",
      text: (
        <>
         
          <span className="bg-[#82f375] text-black px-1">
            This is a real winner 
          </span>{" "}
          - one of my favorite purchases. The writing style is perfect and the system prompt is flexible enough that you can change thigns in the user prompt. 
          <span className="bg-[#82f375] text-black px-1">
            The content quality is great. 
          </span>{" "}
          But the real stand out winner in this platform are all the keyword tools. The system's ability to detect and generate keywords for competitors, look at GSC results, etc makes this a real winner. I stacked this up to the max and it has already allowed multiple sites to increase their rankings quickly.
        </>
      ),
      avatar: "C",
    },

    // -------------------------------5--------------------------------
    {
      name: "luke",
      reviews: "2 Reviews",
      location: "EA",
      title: "AI content tool with potential",
      text: (
        <>
          The articles and KW research have been more than I could have hoped for.I've been using Abun for a few days and its a solid AI content tool. The keyword research and SEO optimizations are impressive making article creation easy and smooth.{" "}
          <span className="bg-[#82f375] text-black px-1">
            The internal linking and publishing features are a timesaver.
          </span>
          Some tweaks are needed for personalization. Otherwise it's a great tool with a lot of potential.
        </>
      ),
      avatar: "L",
    },
    // --------------------------------6--------------------------------
    {
      name: "David",
      reviews: "22 Reviews",
      location: "GB",
      title: "Didn’t expect much from Abun but It works",
      text: (
        <>
          Tried Abun through AS and I’m genuinely impressed.{" "}
          <span className="bg-[#82f375] text-black px-1">
            Articles were generated in minutes, saving me hours of keyword research and writing. I love the way it automates internal/external linking, image generation, and SEO optimization.
          </span>
          Interface is simple and easy to use. Needed some tweaks here and there, but that’s expected. So far, does the job better than most AI tools I’ve used.
        </>
      ),
      avatar: "D",
    },

    
    // ----------------------------------7---------------------------------
    {
      name: "DigiSync.io",
      reviews: "1 Reviews",
      location: "SG",
      title: "After almost of month of use",
      text: (
        <>
          The articles and KW research have been more than I could have hoped for.{" "}
          <span className="bg-[#82f375] text-black px-1">
            This has helped to speed up my local SEO that I do for several clients. The articles come back fast within 2-3 minutes along with the fact I have very little editing to do.
          </span>
          If you are on the fence, give Abun a try before they leave the platform. The creators are constantly updating the app and I see big things for their future.
        </>
      ),
      avatar: "DS",
    },
    // ----------------------------------8-------------------------
    {
      name: "Armands Leimanis",
      reviews: "1 Reviews",
      location: "CH",
      title: "Great tool with multi-language support",
      text: (
        <>
          Probably the most professional company I have worked with,I have been using abun to generate content for my blog and it has been a pleasure to use, works as advertised even in Latvian language. Of course, the generated content needs some editorial touch before publishing, but so far the experience has been much more pleasant rather than using AI chatbots directly.{" "}
          <span className="bg-[#82f375] text-black px-1">
            The content length is perfect for my needs. I do not use auto-publishing feature and rather copy the HTML to my Ghost blog editor, overall, abun is a great product that I highly recommend!
          </span>
        </>
      ),
      avatar: "AL",
    },
    // --------------------------------------9-----------------------------------------
    {
      name: "Lucas Müller",
      reviews: "1 Reviews",
      location: "US",
      title: "I love Abun",
      text: (
        <>
          I had early access a couple of months ago and have been using it to create 20,30,50 really high quality articles that are ranking and sending us traffic already.{" "}
          <span className="bg-[#82f375] text-black px-1">
            I've been paying my SEO agency like $3k/mo for 10 backlinks and 5 articles so this is a steal by comparison and I can see in my SEM Rush account the articles are doing great.
          </span>
          You'll love Abun but dont love it too much leave some for the rest of us
        </>
      ),
      avatar: "LM",
    },
  ];

  return (
      <section className="pt-20 w-full flex flex-col justify-center items-center text-center bg-[#fcfbf3]">
        <div className="w-full flex flex-col justify-center items-center gap-6 px-2 xl:px-6 md:px-4 sm:px-2">
            <h2 className=" pb-10 text-[48px] text-black font-bold leading-[1.1em]">Everyone Loves our Product & Support</h2>
        </div>     

      {/* Testimonials Grid */}
        <div className="w-full px-4 columns-1 xl:px-14 xl:gap-6 md:px-2 md:gap-3 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {testimonials.map((t, index) => (
            <div
            key={index}
            className="break-inside-avoid border border-gray-300 gap-2 rounded-[20px] bg-white p-6 flex flex-col justify-between"
            >
            {/* 1️⃣ User Info */}
            <div className="flex items-center gap-4 mt-2 mb-1 ">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#ffddc0] text-lg font-semibold text-gray-700">
                {t.avatar}
                </div>
                <div className="flex flex-col gap-1">
                <p className="font-semibold text-gray-900 text-[16px] text-left xl:text-[20px] md:text-[18px] sm:text-[16px]">{t.name}</p>
                <div className="flex gap-2 text-[12px] xl:text-[14px] md:text-[12px] font-medium text-gray-500">
                    <span>{t.reviews}</span>
                    <div className="flex gap-1">
                    <Image src="/img/pin.png" alt="Location" width={18} height={18} className="opacity-70" />
                    <span className="text-[12px] xl:text-[14px] md:text-[12px]">{t.location}</span>
                    </div>
                </div>
                </div>
            </div>

            <hr className="border-t border-gray-200 my-2" />

            {/* 2️⃣ Comment */}
            <div className="flex flex-col text-left gap-5 flex-1">
                <Image className="w-[80px] xl:w-[150px] md:w-[100px] sm:w-[80px]" src="/img/client-rating.jpg" alt="Stars" width={150} height={28} />
                <h3 className="font-semibold text-black text-[16px] xl:text-[22px] md:text-[22px] leading-[1.3em] xl:leading-6 md:leading-6 ">{t.title}</h3>
                <p className="text-[#64698e] text-[16px] xl:text-[20px] md:text-[20px] font-medium leading-[1.3em] xl:leading-6 md:leading-6">{t.text}</p>
            </div>

            <hr className="border-t border-gray-200 my-2" />

            {/* 3️⃣ Footer */}
            <div className="py-2 flex items-center justify-between text-[14px] text-[#64698e]">
                <div className="flex items-center justify-center gap-3">
                <div className="flex items-center justify-centern gap-1">
                    <Image src="/img/thumbs-up.png" alt="Like" width={16} height={16} className="opacity-70" />
                    <span>Useful</span>
                </div>
                <div className="flex items-center gap-1">
                    <Image src="/img/share.png" alt="Share" width={16} height={16} className="opacity-70" />
                    <span>Share</span>
                </div>
                </div>
                <Image src="/img/flag.png" alt="Flag" width={16} height={16} className="opacity-70" />
            </div>
            </div>
        ))}
        </div>
        {/* Bottom Glow Effect */}
      <div className="mt-[-220px] left-0 w-full h-[200px] xl:h-[400px] xl:mt-[-420px] md:h-[200px] md:mt-[-220px] sm:h-[200px] bg-gradient-to-b from-[#1D020200] via-[#ffffff80] to-white pointer-events-none z-2" />
        
    </section>
  );
}
