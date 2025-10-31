import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full py-12 font-Geist flex min-h-screen flex-col items-center justify-center bg-white dark:bg-black sm:items-start">
       
      <section className="py-30 flex flex-col w-[1200px] justify-center items-center text-center gap-6">
        <div className="w-[1100px] flex flex-row items-center justify-between gap-6 text-center">
          
          <div className="flex flex-col items-center gap-2 text-center">
            <Image src="/img/rating-star.png" alt="Rating Star" width={115} height={20} />
            <p className="text-[#d9cec1] text-[20px]">“biggest value bomb”</p>
          </div>

          <div className="flex flex-col items-center gap-2 text-center">
            <Image src="/img/rating-star.png" alt="Rating Star" width={115} height={20} />
            <p className="text-[#665542] text-[20px]">“my entire team can’t stop using it”</p>
          </div>

          <div className="flex flex-col items-center gap-2 text-center">
            <Image src="/img/rating-star.png" alt="Rating Star" width={115} height={20} />
            <p className="text-[#665542] text-[20px]">“helped us scale & grow”</p>
          </div> 
        </div>

        <h1 className="font-sans text-[60px] font-bold leading-[1.1em] tracking-[-1px] text-black">
          The All-In-One Toolkit for <br /> SEO & Growth Marketing.
        </h1>
        <p className="text-[28px] text-black font-medium">
          Used by 5,325 Marketers, Founders, SEO Experts
          <br />
          to Drive Traffic, Generate Leads, Rank Faster & Achieve Solid Business Growth
        </p>

        <button className="text-black text-[20px] transition-transform duration-300 ease-out hover:-translate-y-2 bg-[#FACE49] rounded-[11px] px-[30px] py-[20px]">
          <a>Claim Your Free Account ➔</a>
        </button> 

        <p className="font-sans text-[18px] font-normal leading-[1.1em] tracking-[0px] text-[#00000099]">
          Free Accounts available only for a Limited Time
        </p>   
        
        <div className="flex flex-row items-center gap-2 text-center">
          <Image src="/img/image-123.png" alt="" width={270} height={90} />
          <Image src="/img/nvidia-inception-program-badge-rgb-for-screen.png" alt="" width={152} height={66} />
        </div>

      </section>

{/*-------------------------------------- section 2 - AI SEO------------------------------------- */}
      <section className="py-30 flex flex-col w-[1200px] justify-center items-center text-center gap-4 bg-gradient-to-b from-[#F1F1F9]/80 to-[#FFFFFF]/100">
        <p className="text-[18px] font-medium leading-[1.1em] tracking-[-0.5px] text-[#4A4583]">AI SEO & Marketing Tools</p>
        <h2 className="text-[48px] font-bold leading-[1.1em] tracking-[-1px] text-black">Start Scaling your Traffic</h2>

        <div className="grid grid-cols-3 grid-rows-9 gap-4 items-center justify-between text-center">
          
          <div className="flex p-[25px] flex-col gap-2 bg-white border border-[#D2D2EB] rounded-[14px] shadow-[0_3px_3px_0_rgba(19,48,66,0.07)] ">
            <Image className="p-[10px] bg-[#f1f1f9] rounded-[10px]" src="/img/image-123.png" alt="Rating Star" width={40} height={40} />
            <p className="text-[20px] font-bold">AI Articles</p>
            <p className="text-[18px] font-normal">
              Human-like Articles that don't suck. All types of Articles Supported.
            </p>
          </div>

          <div className="flex p-[25px] flex-col gap-2 bg-white border border-[#D2D2EB] rounded-[14px] shadow-[0_3px_3px_0_rgba(19,48,66,0.07)] ">
            <Image className="p-[10px] bg-[#f1f1f9] rounded-[10px]" src="/img/image-123.png" alt="Rating Star" width={40} height={40} />
            <p className="text-[20px] font-bold">AI Blog Automation</p>
            <p className="text-[18px] font-normal">Automate your blog from months to a complete year.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}
