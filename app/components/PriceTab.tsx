"use client";
import { useState } from "react";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("monthly");

  return (
    <div className="w-full flex flex-col items-center justify-center ">
      {/* Tabs Navigation */}
      <div className="flex mb-8 p-2 gap-2 bg-[#f2f3f4] rounded-[10px] text-black">
        <button
          onClick={() => setActiveTab("monthly")}
          className={`py-2 px-6 text-lg font-medium transition-colors rounded-[10px] duration-300  ${
            activeTab === "monthly"
              ? "text-white bg-[#2e64fe]"
              : "text-black hover:text-white hover:bg-[#2e64fe]"
          }`}
        >
          Monthly
        </button>

        <button
          onClick={() => setActiveTab("annual")}
          className={`py-2 px-6 text-lg font-medium transition-colors rounded-[10px] duration-300 ${
            activeTab === "annual"
              ? "text-white bg-[#2e64fe]"
              : "text-black hover:text-white hover:bg-[#2e64fe]"
          }`}
        >
          Annual{" "}
          <span className="text-sm">
            (Limited Time Offer 6 Months Free)
          </span>
        </button>
      </div>

{/*---------------------- Tab Content - Monthly--------------------------------------------------------------------------- */}
      <div className="text-center ">
        
        {activeTab === "monthly" && (
          
        <>
            <div>
                <p className="text-[20px] text-[#2E64FE] font-medium leading-[1.1em]" >Limited Time Offer: 50% OFF for First Month. No Coupon Code Required.</p>

            </div>            
            <div className="max-w-[1350px] grid grid-cols-4 py-10 text-[16px] text-[#000c60] text-left md:gap-4">
{/* ------------------------------------------------Seed---------------------------------------- */}
                          <div className="flex flex-col pl-5 pr-4 pt-3 pb-6 gap-0 border-2 border-r-0 mr-[-7px] border-black rounded-tl-[10px] rounded-bl-[10px] rounded-tr-[0px] rounded-br-[0px] md:border md:rounded-[10px]">
                              <h4 className="text-[40px] text-black text-bold">Seed</h4>
                              <span className="flex content-center items-center text-[30px] text-[#8E8E90] gap-2 "><span className="line-through ">$24</span><p className="text-[16px] flex align-center content-center">per month</p></span>
                              <span className="flex content-end items-baseline text-[60px] text-black gap-2"><b>$12</b><p className="text-[16px] text-black font-regular decoration-none flex content-end items-baseline">first month</p></span>

                              <ul className="flex flex-col gap-4 pt-5 pb-6 border-b-2 border-[#0000001A]">
                                  <li className="w-fit no-underline border-b-2 border-dotted border-[#cbc8d2] bg-[linear-gradient(0deg,#67ff7f6b_0%,rgba(253,187,45,0)_50%)] leading-[1em] pb-0"><b>10</b> AI Articles</li>
                                  <li className="w-fit no-underline border-b-2 border-dotted border-[#cbc8d2] bg-[linear-gradient(0deg,#67ff7f6b_0%,rgba(253,187,45,0)_50%)] leading-[1em] pb-0"><b>1000</b> Keyword Research Credits</li>
                                  <li className="w-fit no-underline border-b-2 border-dotted border-[#cbc8d2] bg-[linear-gradient(0deg,#67ff7f6b_0%,rgba(253,187,45,0)_50%)] leading-[1em] pb-0"><b>2</b> Sites</li>
                                  <li className="w-fit no-underline border-b-2 border-dotted border-[#cbc8d2] bg-[linear-gradient(0deg,#67ff7f6b_0%,rgba(253,187,45,0)_50%)] leading-[1em] pb-0"><b>Access to All Tools</b></li>
                                  <li className="w-fit no-underline border-b-2 border-dotted border-[#cbc8d2] bg-[linear-gradient(0deg,#67ff7f6b_0%,rgba(253,187,45,0)_50%)] leading-[1em] pb-0"><b>All Integrations</b></li>
                              </ul>

                              <ul className="flex flex-col gap-4 py-5">
                                  <li><b>2</b> Blog Automation</li>
                                  <li className="flex justify-between items-center content-center">Content Calender<span className="h-6 flex item-center text-[14px] py-1 px-2 bg-[#fac44b] text-black rounded-[100px]"> Unlimited</span></li>
                                  <li className="flex justify-between items-center content-center">Search Console Insights <span className="h-6 flex item-center text-[14px] py-1 px-2 bg-[#fac44b] text-black rounded-[100px]"> Unlimited</span></li>
                                  <li className="flex justify-between items-center content-center">Fast Indexing <span className="h-6 flex item-center text-[14px] py-1 px-2 bg-[#fac44b] text-black rounded-[100px]"> Unlimited</span></li>
                                  <li className="flex justify-between items-center content-center">Backlink Directory <span className="h-6 flex item-center text-[14px] py-1 px-2 bg-[#fac44b] text-black rounded-[100px]"> Unlimited</span></li>
                                  <li><b>5</b> AI Calculator Widgets</li>
                                  <li><b>5</b> AI Statistics Pages</li>
                                  <li><b>5</b> AI Comparison Pages</li>
                                  <li><b>2</b> Guest Post Finder</li>
                                  <li><b>2</b> Reddit SEO</li>
                                  <li><b>100 URLs</b> AI Auto Schema</li>
                                  <li><b>10</b> AI Glossary Creator</li>

                                  <li className="flex items-center content-center gap-3"><span className="flex items-center justify-center text-[14px] bg-[#7A63DF33] text-[#7A63DF] max-h-[28px] w-[28px] p-2 rounded-[100px]">✓</span>AI Programmatic SEO</li>
                                  <li className="flex items-center content-center gap-3"><span className="flex items-center justify-center text-[14px] bg-[#7A63DF33] text-[#7A63DF] max-h-[28px] w-[28px] p-2 rounded-[100px]">✓</span>LongTail Keyword Research</li>
                                  <li className="flex items-center content-center gap-3"><span className="flex items-center justify-center text-[14px] bg-[#7A63DF33] text-[#7A63DF] max-h-[28px] w-[28px] p-2 rounded-[100px]">✓</span>Steal Competitor Keywords</li>
                                  <li className="flex items-center content-center gap-3"><span className="flex items-center justify-center text-[14px] bg-[#7A63DF33] text-[#7A63DF] max-h-[28px] w-[28px] p-2 rounded-[100px]">✓</span>AI Keyword Research</li>
                                  <li className="flex items-center content-center gap-3"><span className="flex items-center justify-center text-[14px] bg-[#7A63DF33] text-[#7A63DF] max-h-[28px] w-[28px] p-2 rounded-[100px]">✓</span>ICP to KW Research</li>
                                  <li className="flex items-center content-center gap-3"><span className="flex items-center justify-center text-[14px] bg-[#7A63DF33] text-[#7A63DF] max-h-[28px] w-[28px] p-2 rounded-[100px]">✓</span>Manual Keyword Research</li>
                                  <li className="flex justify-between items-center content-center"><div className="flex gap-3"><span className="flex items-center justify-center text-[14px] bg-[#7A63DF33] text-[#7A63DF] max-h-[28px] w-[28px] p-2 rounded-[100px]">✓</span>Video to Article</div><span className="text-[13px] py-1 px-2 bg-[#b9b9b933] text-[#686868] rounded-[100px] min-w-[95px]">Coming Soon</span></li>
                                  <li className="flex justify-between items-center content-center gap-3"><div className="flex gap-3"><span className="flex items-center justify-center text-[14px] bg-[#7A63DF33] text-[#7A63DF] max-h-[28px] w-[28px] p-2 rounded-[100px]">✓</span>AI Article Updater</div><span className="text-[13px] py-1 px-2 bg-[#b9b9b933] text-[#686868] rounded-[100px] min-w-[95px]">Coming Soon</span></li>
                                  <li className="flex justify-between items-center content-center gap-3"><div className="flex gap-3"><span className="flex items-center justify-center text-[14px] bg-[#7A63DF33] text-[#7A63DF] max-h-[28px] w-[28px] p-2 rounded-[100px]">✓</span>AI Auto Technical SEO</div><span className="text-[13px] py-1 px-2 bg-[#b9b9b933] text-[#686868] rounded-[100px] min-w-[95px]">Coming Soon</span></li>
                                  <li className="flex justify-between items-center content-center gap-3"><div className="flex gap-3"><span className="flex items-center justify-center text-[14px] bg-[#7A63DF33] text-[#7A63DF] max-h-[28px] w-[28px] p-2 rounded-[100px]">✓</span>AI Internal Links Builder</div><span className="text-[13px] py-1 px-2 bg-[#b9b9b933] text-[#686868] rounded-[100px] min-w-[95px]">Coming Soon</span></li>
                                  <li className="flex justify-between items-center content-center gap-3"><div className="flex gap-3"><span className="flex items-center justify-center text-[14px] bg-[#7A63DF33] text-[#7A63DF] max-h-[28px] w-[28px] p-2 rounded-[100px]">✓</span>GMB SEO Tracker</div><span className="text-[13px] py-1 px-2 bg-[#b9b9b933] text-[#686868] rounded-[100px] min-w-[95px]">Coming Soon</span></li>
                                  <li className="flex justify-between items-center content-center gap-3"><div className="flex gap-3"><span className="flex items-center justify-center text-[14px] bg-[#7A63DF33] text-[#7A63DF] max-h-[28px] w-[28px] p-2 rounded-[100px]">✓</span>AI SEO Tracker</div><span className="text-[13px] py-1 px-2 bg-[#b9b9b933] text-[#686868] rounded-[100px] min-w-[95px]">Coming Soon</span></li>

                              </ul>
                              <div className="w-full min-w-full justify-center flex items-center content-center">
                                  <button className="w-fit mt-5 text-center text-[18px] py-[10px] px-[60px] border-black border-solid border-[1px] text-black rounded-[100px] hover:bg-[#2E64FE] hover:text-white hover:border-[#2E64FE] hover:-translate-y-2 focus:bg-[#2E64FE] focus:text-white focus:border-[#2E64FE] focus:-translate-y-2 transition-transform duration-300"><a>PROCEED</a></button>
                              </div>
                          </div>

                          {/* --------------------------------Starter---------------------------------------- */}
                          <div className="flex flex-col pl-5 pr-4 pt-3 pb-6 gap-0 border-2 border-r-0 mr-[-7px] border-black rounded-tl-[10px] rounded-bl-[10px] rounded-tr-[0px] rounded-br-[0px] md:border-black md:rounded-[10px]">
                            <h4 className="text-[40px] text-black text-bold">Starter</h4>
                              <span className="flex content-center items-center text-[30px] text-[#8E8E90] gap-2 "><span className="line-through ">$59</span><p className="text-[16px] flex align-center content-center">per month</p></span>
                              <span className="flex content-end items-baseline text-[60px] text-black gap-2"><b>$29</b><p className="text-[16px] text-black font-regular decoration-none flex content-end items-baseline">first month</p></span>

                              <ul className="flex flex-col gap-4 pt-5 pb-6 border-b-2 border-[#0000001A]">
                                  <li className="w-fit no-underline border-b-2 border-dotted border-[#cbc8d2] bg-[linear-gradient(0deg,#67ff7f6b_0%,rgba(253,187,45,0)_50%)] leading-[1em] pb-0"><b>25</b> AI Articles</li>
                                  <li className="w-fit no-underline border-b-2 border-dotted border-[#cbc8d2] bg-[linear-gradient(0deg,#67ff7f6b_0%,rgba(253,187,45,0)_50%)] leading-[1em] pb-0"><b>2500</b> Keyword Research Credits</li>
                                  <li className="w-fit no-underline border-b-2 border-dotted border-[#cbc8d2] bg-[linear-gradient(0deg,#67ff7f6b_0%,rgba(253,187,45,0)_50%)] leading-[1em] pb-0"><b>5</b> Sites</li>
                                  <li className="w-fit no-underline border-b-2 border-dotted border-[#cbc8d2] bg-[linear-gradient(0deg,#67ff7f6b_0%,rgba(253,187,45,0)_50%)] leading-[1em] pb-0"><b>Access to All Tools</b></li>
                                  <li className="w-fit no-underline border-b-2 border-dotted border-[#cbc8d2] bg-[linear-gradient(0deg,#67ff7f6b_0%,rgba(253,187,45,0)_50%)] leading-[1em] pb-0"><b>All Integrations</b></li>
                              </ul>

                              <ul className="flex flex-col gap-4 py-5">
                                  <li><b>5</b> Blog Automation</li>
                                  <li className="flex justify-between items-center content-center">Content Calender<span className="h-6 flex item-center text-[14px] py-1 px-2 bg-[#fac44b] text-black rounded-[100px]"> Unlimited</span></li>
                                  <li className="flex justify-between items-center content-center">Search Console Insights <span className="h-6 flex item-center text-[14px] py-1 px-2 bg-[#fac44b] text-black rounded-[100px]"> Unlimited</span></li>
                                  <li className="flex justify-between items-center content-center">Fast Indexing <span className="h-6 flex item-center text-[14px] py-1 px-2 bg-[#fac44b] text-black rounded-[100px]"> Unlimited</span></li>
                                  <li className="flex justify-between items-center content-center">Backlink Directory <span className="h-6 flex item-center text-[14px] py-1 px-2 bg-[#fac44b] text-black rounded-[100px]"> Unlimited</span></li>
                                  <li><b>15</b> AI Calculator Widgets</li>
                                  <li><b>15</b> AI Statistics Pages</li>
                                  <li><b>15</b> AI Comparison Pages</li>
                                  <li><b>30</b> Guest Post Finder</li>
                                  <li><b>30</b> Reddit SEO</li>
                                  <li><b>1000 URLs</b> AI Auto Schema</li>
                                  <li><b>100</b> AI Glossary Creator</li>

                                  <li className="flex items-center content-center gap-3"><span className="flex items-center justify-center text-[14px] bg-[#7A63DF33] text-[#7A63DF] max-h-[28px] w-[28px] p-2 rounded-[100px]">✓</span>AI Programmatic SEO</li>
                                  <li className="flex items-center content-center gap-3"><span className="flex items-center justify-center text-[14px] bg-[#7A63DF33] text-[#7A63DF] max-h-[28px] w-[28px] p-2 rounded-[100px]">✓</span>LongTail Keyword Research</li>
                                  <li className="flex items-center content-center gap-3"><span className="flex items-center justify-center text-[14px] bg-[#7A63DF33] text-[#7A63DF] max-h-[28px] w-[28px] p-2 rounded-[100px]">✓</span>Steal Competitor Keywords</li>
                                  <li className="flex items-center content-center gap-3"><span className="flex items-center justify-center text-[14px] bg-[#7A63DF33] text-[#7A63DF] max-h-[28px] w-[28px] p-2 rounded-[100px]">✓</span>AI Keyword Research</li>
                                  <li className="flex items-center content-center gap-3"><span className="flex items-center justify-center text-[14px] bg-[#7A63DF33] text-[#7A63DF] max-h-[28px] w-[28px] p-2 rounded-[100px]">✓</span>ICP to KW Research</li>
                                  <li className="flex items-center content-center gap-3"><span className="flex items-center justify-center text-[14px] bg-[#7A63DF33] text-[#7A63DF] max-h-[28px] w-[28px] p-2 rounded-[100px]">✓</span>Manual Keyword Research</li>
                                  <li className="flex justify-between items-center content-center"><div className="flex gap-3"><span className="flex items-center justify-center text-[14px] bg-[#7A63DF33] text-[#7A63DF] max-h-[28px] w-[28px] p-2 rounded-[100px]">✓</span>Video to Article</div><span className="text-[13px] py-1 px-2 bg-[#b9b9b933] text-[#686868] rounded-[100px] min-w-[95px]">Coming Soon</span></li>
                                  <li className="flex justify-between items-center content-center gap-3"><div className="flex gap-3"><span className="flex items-center justify-center text-[14px] bg-[#7A63DF33] text-[#7A63DF] max-h-[28px] w-[28px] p-2 rounded-[100px]">✓</span>AI Article Updater</div><span className="text-[13px] py-1 px-2 bg-[#b9b9b933] text-[#686868] rounded-[100px] min-w-[95px]">Coming Soon</span></li>
                                  <li className="flex justify-between items-center content-center gap-3"><div className="flex gap-3"><span className="flex items-center justify-center text-[14px] bg-[#7A63DF33] text-[#7A63DF] max-h-[28px] w-[28px] p-2 rounded-[100px]">✓</span>AI Auto Technical SEO</div><span className="text-[13px] py-1 px-2 bg-[#b9b9b933] text-[#686868] rounded-[100px] min-w-[95px]">Coming Soon</span></li>
                                  <li className="flex justify-between items-center content-center gap-3"><div className="flex gap-3"><span className="flex items-center justify-center text-[14px] bg-[#7A63DF33] text-[#7A63DF] max-h-[28px] w-[28px] p-2 rounded-[100px]">✓</span>AI Internal Links Builder</div><span className="text-[13px] py-1 px-2 bg-[#b9b9b933] text-[#686868] rounded-[100px] min-w-[95px]">Coming Soon</span></li>
                                  <li className="flex justify-between items-center content-center gap-3"><div className="flex gap-3"><span className="flex items-center justify-center text-[14px] bg-[#7A63DF33] text-[#7A63DF] max-h-[28px] w-[28px] p-2 rounded-[100px]">✓</span>GMB SEO Tracker</div><span className="text-[13px] py-1 px-2 bg-[#b9b9b933] text-[#686868] rounded-[100px] min-w-[95px]">Coming Soon</span></li>
                                  <li className="flex justify-between items-center content-center gap-3"><div className="flex gap-3"><span className="flex items-center justify-center text-[14px] bg-[#7A63DF33] text-[#7A63DF] max-h-[28px] w-[28px] p-2 rounded-[100px]">✓</span>AI SEO Tracker</div><span className="text-[13px] py-1 px-2 bg-[#b9b9b933] text-[#686868] rounded-[100px] min-w-[95px]">Coming Soon</span></li>

                              </ul>
                              <div className="w-full min-w-full justify-center flex items-center content-center">
                                  <button className="w-fit mt-5 text-center text-[18px] py-[10px] px-[60px] border-black border-solid border-[1px] text-black rounded-[100px] hover:bg-[#2E64FE] hover:text-white hover:border-[#2E64FE] hover:-translate-y-2 focus:bg-[#2E64FE] focus:text-white focus:border-[#2E64FE] focus:-translate-y-2 transition-transform duration-300"><a>PROCEED</a></button>
                              </div>
                          </div>

                          {/* --------------------------------Growth---------------------------------------- */}
                          <div className="flex flex-col pl-5 pr-4 pt-3 pb-6 gap-0 border-2 border-r-0 mr-[-7px] border-black rounded-tl-[10px] rounded-bl-[10px] rounded-tr-[0px] rounded-br-[0px] md:border md:rounded-[10px]">
                             <h4 className="text-[40px] text-black text-bold">Growth</h4>
                              <span className="flex content-center items-center text-[30px] text-[#8E8E90] gap-2 "><span className="line-through ">$79</span><p className="text-[16px] flex align-center content-center">per month</p></span>
                              <span className="flex content-end items-baseline text-[60px] text-black gap-2"><b>$39</b><p className="text-[16px] text-black font-regular decoration-none flex content-end items-baseline">first month</p></span>

                              <ul className="flex flex-col gap-4 pt-5 pb-6 border-b-2 border-[#0000001A]">
                                  <li className="w-fit no-underline border-b-2 border-dotted border-[#cbc8d2] bg-[linear-gradient(0deg,#67ff7f6b_0%,rgba(253,187,45,0)_50%)] leading-[1em] pb-0"><b>100</b> AI Articles</li>
                                  <li className="w-fit no-underline border-b-2 border-dotted border-[#cbc8d2] bg-[linear-gradient(0deg,#67ff7f6b_0%,rgba(253,187,45,0)_50%)] leading-[1em] pb-0"><b>6000</b> Keyword Research Credits</li>
                                  <li className="w-fit no-underline border-b-2 border-dotted border-[#cbc8d2] bg-[linear-gradient(0deg,#67ff7f6b_0%,rgba(253,187,45,0)_50%)] leading-[1em] pb-0"><b>15</b> Sites</li>
                                  <li className="w-fit no-underline border-b-2 border-dotted border-[#cbc8d2] bg-[linear-gradient(0deg,#67ff7f6b_0%,rgba(253,187,45,0)_50%)] leading-[1em] pb-0"><b>Access to All Tools</b></li>
                                  <li className="w-fit no-underline border-b-2 border-dotted border-[#cbc8d2] bg-[linear-gradient(0deg,#67ff7f6b_0%,rgba(253,187,45,0)_50%)] leading-[1em] pb-0"><b>All Integrations</b></li>
                              </ul>

                              <ul className="flex flex-col gap-4 py-5">
                                  <li><b>10</b> Blog Automation</li>
                                  <li className="flex justify-between items-center content-center">Content Calender<span className="h-6 flex item-center text-[14px] py-1 px-2 bg-[#fac44b] text-black rounded-[100px]"> Unlimited</span></li>
                                  <li className="flex justify-between items-center content-center">Search Console Insights <span className="h-6 flex item-center text-[14px] py-1 px-2 bg-[#fac44b] text-black rounded-[100px]"> Unlimited</span></li>
                                  <li className="flex justify-between items-center content-center">Fast Indexing <span className="h-6 flex item-center text-[14px] py-1 px-2 bg-[#fac44b] text-black rounded-[100px]"> Unlimited</span></li>
                                  <li className="flex justify-between items-center content-center">Backlink Directory <span className="h-6 flex item-center text-[14px] py-1 px-2 bg-[#fac44b] text-black rounded-[100px]"> Unlimited</span></li>
                                  <li><b>30</b> AI Calculator Widgets</li>
                                  <li><b>30</b> AI Statistics Pages</li>
                                  <li><b>30</b> AI Comparison Pages</li>
                                  <li><b>100</b> Guest Post Finder</li>
                                  <li><b>100</b> Reddit SEO</li>
                                  <li><b>5000 URLs</b> AI Auto Schema</li>
                                  <li><b>200</b> AI Glossary Creator</li>

                                  <li className="flex items-center content-center gap-3"><span className="flex items-center justify-center text-[14px] bg-[#7A63DF33] text-[#7A63DF] max-h-[28px] w-[28px] p-2 rounded-[100px]">✓</span>AI Programmatic SEO</li>
                                  <li className="flex items-center content-center gap-3"><span className="flex items-center justify-center text-[14px] bg-[#7A63DF33] text-[#7A63DF] max-h-[28px] w-[28px] p-2 rounded-[100px]">✓</span>LongTail Keyword Research</li>
                                  <li className="flex items-center content-center gap-3"><span className="flex items-center justify-center text-[14px] bg-[#7A63DF33] text-[#7A63DF] max-h-[28px] w-[28px] p-2 rounded-[100px]">✓</span>Steal Competitor Keywords</li>
                                  <li className="flex items-center content-center gap-3"><span className="flex items-center justify-center text-[14px] bg-[#7A63DF33] text-[#7A63DF] max-h-[28px] w-[28px] p-2 rounded-[100px]">✓</span>AI Keyword Research</li>
                                  <li className="flex items-center content-center gap-3"><span className="flex items-center justify-center text-[14px] bg-[#7A63DF33] text-[#7A63DF] max-h-[28px] w-[28px] p-2 rounded-[100px]">✓</span>ICP to KW Research</li>
                                  <li className="flex items-center content-center gap-3"><span className="flex items-center justify-center text-[14px] bg-[#7A63DF33] text-[#7A63DF] max-h-[28px] w-[28px] p-2 rounded-[100px]">✓</span>Manual Keyword Research</li>
                                  <li className="flex justify-between items-center content-center"><div className="flex gap-3"><span className="flex items-center justify-center text-[14px] bg-[#7A63DF33] text-[#7A63DF] max-h-[28px] w-[28px] p-2 rounded-[100px]">✓</span>Video to Article</div><span className="text-[13px] py-1 px-2 bg-[#b9b9b933] text-[#686868] rounded-[100px] min-w-[95px]">Coming Soon</span></li>
                                  <li className="flex justify-between items-center content-center gap-3"><div className="flex gap-3"><span className="flex items-center justify-center text-[14px] bg-[#7A63DF33] text-[#7A63DF] max-h-[28px] w-[28px] p-2 rounded-[100px]">✓</span>AI Article Updater</div><span className="text-[13px] py-1 px-2 bg-[#b9b9b933] text-[#686868] rounded-[100px] min-w-[95px]">Coming Soon</span></li>
                                  <li className="flex justify-between items-center content-center gap-3"><div className="flex gap-3"><span className="flex items-center justify-center text-[14px] bg-[#7A63DF33] text-[#7A63DF] max-h-[28px] w-[28px] p-2 rounded-[100px]">✓</span>AI Auto Technical SEO</div><span className="text-[13px] py-1 px-2 bg-[#b9b9b933] text-[#686868] rounded-[100px] min-w-[95px]">Coming Soon</span></li>
                                  <li className="flex justify-between items-center content-center gap-3"><div className="flex gap-3"><span className="flex items-center justify-center text-[14px] bg-[#7A63DF33] text-[#7A63DF] max-h-[28px] w-[28px] p-2 rounded-[100px]">✓</span>AI Internal Links Builder</div><span className="text-[13px] py-1 px-2 bg-[#b9b9b933] text-[#686868] rounded-[100px] min-w-[95px]">Coming Soon</span></li>
                                  <li className="flex justify-between items-center content-center gap-3"><div className="flex gap-3"><span className="flex items-center justify-center text-[14px] bg-[#7A63DF33] text-[#7A63DF] max-h-[28px] w-[28px] p-2 rounded-[100px]">✓</span>GMB SEO Tracker</div><span className="text-[13px] py-1 px-2 bg-[#b9b9b933] text-[#686868] rounded-[100px] min-w-[95px]">Coming Soon</span></li>
                                  <li className="flex justify-between items-center content-center gap-3"><div className="flex gap-3"><span className="flex items-center justify-center text-[14px] bg-[#7A63DF33] text-[#7A63DF] max-h-[28px] w-[28px] p-2 rounded-[100px]">✓</span>AI SEO Tracker</div><span className="text-[13px] py-1 px-2 bg-[#b9b9b933] text-[#686868] rounded-[100px] min-w-[95px]">Coming Soon</span></li>

                              </ul>
                              <div className="w-full min-w-full justify-center flex items-center content-center">
                                  <button className="w-fit mt-5 text-center text-[18px] py-2.5 px-[60px] border-black border-solid border text-black rounded-[100px] hover:bg-[#2E64FE] hover:text-white hover:border-[#2E64FE] hover:-translate-y-2 focus:bg-[#2E64FE] focus:text-white focus:border-[#2E64FE] focus:-translate-y-2 transition-transform duration-300"><a>PROCEED</a></button>
                              </div>
                          </div>

                          {/* --------------------------------Growth Max---------------------------------------- */}
                          <div className="flex flex-col pl-5 pr-3 pt-3 pb-6 gap-0 bg-[#ffffe6] border-4 border-[#2e64fe] rounded-[10px] md:border md:rounded-[10px] ">
                              <h4 className="text-[40px] text-black text-bold">Growth Max</h4>
                              <span className="flex content-center items-center text-[30px] text-[#8E8E90] gap-2 "><span className="line-through ">$149</span><p className="text-[16px] flex align-center content-center">per month</p></span>
                              <span className="flex content-end items-baseline text-[60px] text-black gap-2"><b>$74</b><p className="text-[16px] text-black font-regular decoration-none flex content-end items-baseline">first month</p></span>

                              <ul className="flex flex-col gap-4 pt-5 pb-6 border-b-2 border-[#0000001A]">
                                  <li className="w-fit no-underline border-b-2 border-dotted border-[#cbc8d2] bg-[linear-gradient(0deg,#67ff7f6b_0%,rgba(253,187,45,0)_50%)] leading-[1em] pb-0"><b>500</b> AI Articles</li>
                                  <li className="w-fit no-underline border-b-2 border-dotted border-[#cbc8d2] bg-[linear-gradient(0deg,#67ff7f6b_0%,rgba(253,187,45,0)_50%)] leading-[1em] pb-0"><b>20000</b> Keyword Research Credits</li>
                                  <li className="w-full flex justify-between items-center content-center leading-[1em] pb-0 mt-[-5px] mb-[-5px]"><span className="w-fit mb-[-8px] mt-[-8px] no-underline border-b-2 border-dotted border-[#cbc8d2] bg-[linear-gradient(0deg,#67ff7f6b_0%,rgba(253,187,45,0)_50%)] ">Sites</span><span className="h-6 my-0 flex item-center text-[14px] py-1 px-2 bg-[#fac44b] text-black rounded-[100px]"> Unlimited</span></li>
                                  <li className="w-fit no-underline border-b-2 border-dotted border-[#cbc8d2] bg-[linear-gradient(0deg,#67ff7f6b_0%,rgba(253,187,45,0)_50%)] leading-[1em] pb-0"><b>Access to All Tools</b></li>
                                  <li className="w-fit no-underline border-b-2 border-dotted border-[#cbc8d2] bg-[linear-gradient(0deg,#67ff7f6b_0%,rgba(253,187,45,0)_50%)] leading-[1em] pb-0"><b>All Integrations</b></li>
                              </ul>

                              <ul className="flex flex-col gap-4 py-5">
                                  <li className="flex justify-between items-center content-center">Blog Automation<span className="h-6 flex item-center text-[14px] py-1 px-2 bg-[#fac44b] text-black rounded-[100px]"> Unlimited</span></li>
                                  <li className="flex justify-between items-center content-center">Content Calender<span className="h-6 flex item-center text-[14px] py-1 px-2 bg-[#fac44b] text-black rounded-[100px]"> Unlimited</span></li>
                                  <li className="flex justify-between items-center content-center">Search Console Insights <span className="h-6 flex item-center text-[14px] py-1 px-2 bg-[#fac44b] text-black rounded-[100px]"> Unlimited</span></li>
                                  <li className="flex justify-between items-center content-center">Fast Indexing <span className="h-6 flex item-center text-[14px] py-1 px-2 bg-[#fac44b] text-black rounded-[100px]"> Unlimited</span></li>
                                  <li className="flex justify-between items-center content-center">Backlink Directory <span className="h-6 flex item-center text-[14px] py-1 px-2 bg-[#fac44b] text-black rounded-[100px]"> Unlimited</span></li>
                                  <li className="flex justify-between items-center content-center">AI Calculator Widgets <span className="h-6 flex item-center text-[14px] py-1 px-2 bg-[#fac44b] text-black rounded-[100px]"> Unlimited</span></li>
                                  <li className="flex justify-between items-center content-center">AI Statistics Pages <span className="h-6 flex item-center text-[14px] py-1 px-2 bg-[#fac44b] text-black rounded-[100px]"> Unlimited</span></li>
                                  <li className="flex justify-between items-center content-center">AI Comparison Pages <span className="h-6 flex item-center text-[14px] py-1 px-2 bg-[#fac44b] text-black rounded-[100px]"> Unlimited</span></li>
                                  <li className="flex justify-between items-center content-center">Guest Post Finder <span className="h-6 flex item-center text-[14px] py-1 px-2 bg-[#fac44b] text-black rounded-[100px]"> Unlimited</span></li>
                                  <li className="flex justify-between items-center content-center">Reddit SEO <span className="h-6 flex item-center text-[14px] py-1 px-2 bg-[#fac44b] text-black rounded-[100px]"> Unlimited</span></li>
                                  <li className="flex justify-between items-center content-center">AI Auto Schema <span className="h-6 flex item-center text-[14px] py-1 px-2 bg-[#fac44b] text-black rounded-[100px]"> Unlimited</span></li>
                                  <li><b>1000</b> AI Glossary Creator</li>

                                  <li className="flex items-center content-center gap-3"><span className="flex items-center justify-center text-[14px] bg-[#7A63DF33] text-[#7A63DF] max-h-[28px] w-[28px] p-2 rounded-[100px]">✓</span>AI Programmatic SEO</li>
                                  <li className="flex items-center content-center gap-3"><span className="flex items-center justify-center text-[14px] bg-[#7A63DF33] text-[#7A63DF] max-h-[28px] w-[28px] p-2 rounded-[100px]">✓</span>LongTail Keyword Research</li>
                                  <li className="flex items-center content-center gap-3"><span className="flex items-center justify-center text-[14px] bg-[#7A63DF33] text-[#7A63DF] max-h-[28px] w-[28px] p-2 rounded-[100px]">✓</span>Steal Competitor Keywords</li>
                                  <li className="flex items-center content-center gap-3"><span className="flex items-center justify-center text-[14px] bg-[#7A63DF33] text-[#7A63DF] max-h-[28px] w-[28px] p-2 rounded-[100px]">✓</span>AI Keyword Research</li>
                                  <li className="flex items-center content-center gap-3"><span className="flex items-center justify-center text-[14px] bg-[#7A63DF33] text-[#7A63DF] max-h-[28px] w-[28px] p-2 rounded-[100px]">✓</span>ICP to KW Research</li>
                                  <li className="flex items-center content-center gap-3"><span className="flex items-center justify-center text-[14px] bg-[#7A63DF33] text-[#7A63DF] max-h-[28px] w-[28px] p-2 rounded-[100px]">✓</span>Manual Keyword Research</li>
                                  <li className="flex justify-between items-center content-center"><div className="flex gap-3"><span className="flex items-center justify-center text-[14px] bg-[#7A63DF33] text-[#7A63DF] max-h-[28px] w-[28px] p-2 rounded-[100px]">✓</span>Video to Article</div><span className="text-[13px] py-1 px-2 bg-[#b9b9b933] text-[#686868] rounded-[100px] min-w-[95px]">Coming Soon</span></li>
                                  <li className="flex justify-between items-center content-center gap-3"><div className="flex gap-3"><span className="flex items-center justify-center text-[14px] bg-[#7A63DF33] text-[#7A63DF] max-h-[28px] w-[28px] p-2 rounded-[100px]">✓</span>AI Article Updater</div><span className="text-[13px] py-1 px-2 bg-[#b9b9b933] text-[#686868] rounded-[100px] min-w-[95px]">Coming Soon</span></li>
                                  <li className="flex justify-between items-center content-center gap-3"><div className="flex gap-3"><span className="flex items-center justify-center text-[14px] bg-[#7A63DF33] text-[#7A63DF] max-h-[28px] w-[28px] p-2 rounded-[100px]">✓</span>AI Auto Technical SEO</div><span className="text-[13px] py-1 px-2 bg-[#b9b9b933] text-[#686868] rounded-[100px] min-w-[95px]">Coming Soon</span></li>
                                  <li className="flex justify-between items-center content-center gap-3"><div className="flex gap-3"><span className="flex items-center justify-center text-[14px] bg-[#7A63DF33] text-[#7A63DF] max-h-[28px] w-[28px] p-2 rounded-[100px]">✓</span>AI Internal Links Builder</div><span className="text-[13px] py-1 px-2 bg-[#b9b9b933] text-[#686868] rounded-[100px] min-w-[95px]">Coming Soon</span></li>
                                  <li className="flex justify-between items-center content-center gap-3"><div className="flex gap-3"><span className="flex items-center justify-center text-[14px] bg-[#7A63DF33] text-[#7A63DF] max-h-[28px] w-[28px] p-2 rounded-[100px]">✓</span>GMB SEO Tracker</div><span className="text-[13px] py-1 px-2 bg-[#b9b9b933] text-[#686868] rounded-[100px] min-w-[95px]">Coming Soon</span></li>
                                  <li className="flex justify-between items-center content-center gap-3"><div className="flex gap-3"><span className="flex items-center justify-center text-[14px] bg-[#7A63DF33] text-[#7A63DF] max-h-[28px] w-[28px] p-2 rounded-[100px]">✓</span>AI SEO Tracker</div><span className="text-[13px] py-1 px-2 bg-[#b9b9b933] text-[#686868] rounded-[100px] min-w-[95px]">Coming Soon</span></li>

                              </ul>
                              <div className="w-full min-w-full justify-center flex items-center content-center">
                                  <button className="w-fit mt-5 bg-[#2e64fe] text-center text-[18px] py-[10px] px-[60px] border-[#2e64fe] border-solid border-[1px] text-white rounded-[100px] hover:bg-[#2E64FE] hover:text-white hover:border-[#2E64FE] hover:-translate-y-2 focus:bg-[#2E64FE] focus:text-white focus:border-[#2E64FE] focus:-translate-y-2 transition-transform duration-300"><a>PROCEED</a></button>
                              </div>
                          </div>


            </div>
        </>
        )}

{/*----------------------- Tab Content - Annual---------------------------------------------------------------- */}
        {activeTab === "annual" && (
        <>
            <div>
                <p className="text-[20px] text-[#2E64FE] font-medium leading-[1.1em]" >Pay for 6 Months, Get 6 Months for Free. No Coupon Code Required.</p>
            </div>
            <div className="max-w-[1350px] grid grid-cols-4 py-10 text-[16px] text-[#000c60] text-left md:gap-4">
{/* ------------------------------------------------Seed---------------------------------------- */}
                          <div className="flex flex-col pl-5 pr-4 pt-3 pb-6 gap-0 border-2 border-r-0 mr-[-7px] border-black rounded-tl-[10px] rounded-bl-[10px] rounded-tr-none rounded-br-none md:border md:rounded-[10px]">
                              <h4 className="text-[40px] text-black text-bold">Seed</h4>
                              <span className="flex content-end items-baseline text-[60px] text-black gap-2"><b>$12</b><p className="text-[16px] text-black font-regular decoration-none flex content-end items-baseline">per month</p></span>
                              <span className="leading-[1em] pb-8"> Billed Yearly</span>          
                              <ul className="flex flex-col gap-4 pt-5 pb-6 border-b-2 border-[#0000001A]">
                                  <li className="w-fit no-underline border-b-2 border-dotted border-[#cbc8d2] bg-[linear-gradient(0deg,#67ff7f6b_0%,rgba(253,187,45,0)_50%)] leading-[1em] pb-0"><b>10</b> AI Articles</li>
                                  <li className="w-fit no-underline border-b-2 border-dotted border-[#cbc8d2] bg-[linear-gradient(0deg,#67ff7f6b_0%,rgba(253,187,45,0)_50%)] leading-[1em] pb-0"><b>1000</b> Keyword Research Credits</li>
                                  <li className="w-fit no-underline border-b-2 border-dotted border-[#cbc8d2] bg-[linear-gradient(0deg,#67ff7f6b_0%,rgba(253,187,45,0)_50%)] leading-[1em] pb-0"><b>2</b> Sites</li>
                                  <li className="w-fit no-underline border-b-2 border-dotted border-[#cbc8d2] bg-[linear-gradient(0deg,#67ff7f6b_0%,rgba(253,187,45,0)_50%)] leading-[1em] pb-0"><b>Access to All Tools</b></li>
                                  <li className="w-fit no-underline border-b-2 border-dotted border-[#cbc8d2] bg-[linear-gradient(0deg,#67ff7f6b_0%,rgba(253,187,45,0)_50%)] leading-[1em] pb-0"><b>All Integrations</b></li>
                              </ul>

                              <ul className="flex flex-col gap-4 py-5">
                                  <li><b>2</b> Blog Automation</li>
                                  <li className="flex justify-between items-center content-center">Content Calender<span className="h-6 flex item-center text-[14px] py-1 px-2 bg-[#fac44b] text-black rounded-[100px]"> Unlimited</span></li>
                                  <li className="flex justify-between items-center content-center">Search Console Insights <span className="h-6 flex item-center text-[14px] py-1 px-2 bg-[#fac44b] text-black rounded-[100px]"> Unlimited</span></li>
                                  <li className="flex justify-between items-center content-center">Fast Indexing <span className="h-6 flex item-center text-[14px] py-1 px-2 bg-[#fac44b] text-black rounded-[100px]"> Unlimited</span></li>
                                  <li className="flex justify-between items-center content-center">Backlink Directory <span className="h-6 flex item-center text-[14px] py-1 px-2 bg-[#fac44b] text-black rounded-[100px]"> Unlimited</span></li>
                                  <li><b>5</b> AI Calculator Widgets</li>
                                  <li><b>5</b> AI Statistics Pages</li>
                                  <li><b>5</b> AI Comparison Pages</li>
                                  <li><b>2</b> Guest Post Finder</li>
                                  <li><b>2</b> Reddit SEO</li>
                                  <li><b>100 URLs</b> AI Auto Schema</li>
                                  <li><b>10</b> AI Glossary Creator</li>

                                  <li className="flex items-center content-center gap-3"><span className="flex items-center justify-center text-[14px] bg-[#7A63DF33] text-[#7A63DF] max-h-[28px] w-[28px] p-2 rounded-[100px]">✓</span>AI Programmatic SEO</li>
                                  <li className="flex items-center content-center gap-3"><span className="flex items-center justify-center text-[14px] bg-[#7A63DF33] text-[#7A63DF] max-h-[28px] w-[28px] p-2 rounded-[100px]">✓</span>LongTail Keyword Research</li>
                                  <li className="flex items-center content-center gap-3"><span className="flex items-center justify-center text-[14px] bg-[#7A63DF33] text-[#7A63DF] max-h-[28px] w-[28px] p-2 rounded-[100px]">✓</span>Steal Competitor Keywords</li>
                                  <li className="flex items-center content-center gap-3"><span className="flex items-center justify-center text-[14px] bg-[#7A63DF33] text-[#7A63DF] max-h-[28px] w-[28px] p-2 rounded-[100px]">✓</span>AI Keyword Research</li>
                                  <li className="flex items-center content-center gap-3"><span className="flex items-center justify-center text-[14px] bg-[#7A63DF33] text-[#7A63DF] max-h-[28px] w-[28px] p-2 rounded-[100px]">✓</span>ICP to KW Research</li>
                                  <li className="flex items-center content-center gap-3"><span className="flex items-center justify-center text-[14px] bg-[#7A63DF33] text-[#7A63DF] max-h-[28px] w-[28px] p-2 rounded-[100px]">✓</span>Manual Keyword Research</li>
                                  <li className="flex justify-between items-center content-center"><div className="flex gap-3"><span className="flex items-center justify-center text-[14px] bg-[#7A63DF33] text-[#7A63DF] max-h-[28px] w-[28px] p-2 rounded-[100px]">✓</span>Video to Article</div><span className="text-[13px] py-1 px-2 bg-[#b9b9b933] text-[#686868] rounded-[100px] min-w-[95px]">Coming Soon</span></li>
                                  <li className="flex justify-between items-center content-center gap-3"><div className="flex gap-3"><span className="flex items-center justify-center text-[14px] bg-[#7A63DF33] text-[#7A63DF] max-h-[28px] w-[28px] p-2 rounded-[100px]">✓</span>AI Article Updater</div><span className="text-[13px] py-1 px-2 bg-[#b9b9b933] text-[#686868] rounded-[100px] min-w-[95px]">Coming Soon</span></li>
                                  <li className="flex justify-between items-center content-center gap-3"><div className="flex gap-3"><span className="flex items-center justify-center text-[14px] bg-[#7A63DF33] text-[#7A63DF] max-h-[28px] w-[28px] p-2 rounded-[100px]">✓</span>AI Auto Technical SEO</div><span className="text-[13px] py-1 px-2 bg-[#b9b9b933] text-[#686868] rounded-[100px] min-w-[95px]">Coming Soon</span></li>
                                  <li className="flex justify-between items-center content-center gap-3"><div className="flex gap-3"><span className="flex items-center justify-center text-[14px] bg-[#7A63DF33] text-[#7A63DF] max-h-[28px] w-[28px] p-2 rounded-[100px]">✓</span>AI Internal Links Builder</div><span className="text-[13px] py-1 px-2 bg-[#b9b9b933] text-[#686868] rounded-[100px] min-w-[95px]">Coming Soon</span></li>
                                  <li className="flex justify-between items-center content-center gap-3"><div className="flex gap-3"><span className="flex items-center justify-center text-[14px] bg-[#7A63DF33] text-[#7A63DF] max-h-[28px] w-[28px] p-2 rounded-[100px]">✓</span>GMB SEO Tracker</div><span className="text-[13px] py-1 px-2 bg-[#b9b9b933] text-[#686868] rounded-[100px] min-w-[95px]">Coming Soon</span></li>
                                  <li className="flex justify-between items-center content-center gap-3"><div className="flex gap-3"><span className="flex items-center justify-center text-[14px] bg-[#7A63DF33] text-[#7A63DF] max-h-[28px] w-[28px] p-2 rounded-[100px]">✓</span>AI SEO Tracker</div><span className="text-[13px] py-1 px-2 bg-[#b9b9b933] text-[#686868] rounded-[100px] min-w-[95px]">Coming Soon</span></li>

                              </ul>
                              <div className="w-full min-w-full justify-center flex items-center content-center">
                                  <button className="w-fit mt-5 text-center text-[18px] py-[10px] px-[60px] border-black border-solid border text-black rounded-[100px] hover:bg-[#2E64FE] hover:text-white hover:border-[#2E64FE] hover:-translate-y-2 focus:bg-[#2E64FE] focus:text-white focus:border-[#2E64FE] focus:-translate-y-2 transition-transform duration-300"><a>PROCEED</a></button>
                              </div>
                          </div>

                          {/* --------------------------------Starter---------------------------------------- */}
                          <div className="flex flex-col pl-5 pr-4 pt-3 pb-6 gap-0 border-2 border-r-0 mr-[-7px] border-black rounded-tl-[10px] rounded-bl-[10px] rounded-tr-none rounded-br-none md:border md:rounded-[10px]">
                              <h4 className="text-[40px] text-black text-bold">Starter</h4>
                              <span className="flex content-end items-baseline text-[60px] text-black gap-2"><b>$29</b><p className="text-[16px] text-black font-regular decoration-none flex content-end items-baseline">per month</p></span>
                              <span className="leading-[1em] pb-8"> Billed Yearly</span>  
                              <ul className="flex flex-col gap-4 pt-5 pb-6 border-b-2 border-[#0000001A]">
                                  <li className="w-fit no-underline border-b-2 border-dotted border-[#cbc8d2] bg-[linear-gradient(0deg,#67ff7f6b_0%,rgba(253,187,45,0)_50%)] leading-[1em] pb-0"><b>25</b> AI Articles</li>
                                  <li className="w-fit no-underline border-b-2 border-dotted border-[#cbc8d2] bg-[linear-gradient(0deg,#67ff7f6b_0%,rgba(253,187,45,0)_50%)] leading-[1em] pb-0"><b>2500</b> Keyword Research Credits</li>
                                  <li className="w-fit no-underline border-b-2 border-dotted border-[#cbc8d2] bg-[linear-gradient(0deg,#67ff7f6b_0%,rgba(253,187,45,0)_50%)] leading-[1em] pb-0"><b>5</b> Sites</li>
                                  <li className="w-fit no-underline border-b-2 border-dotted border-[#cbc8d2] bg-[linear-gradient(0deg,#67ff7f6b_0%,rgba(253,187,45,0)_50%)] leading-[1em] pb-0"><b>Access to All Tools</b></li>
                                  <li className="w-fit no-underline border-b-2 border-dotted border-[#cbc8d2] bg-[linear-gradient(0deg,#67ff7f6b_0%,rgba(253,187,45,0)_50%)] leading-[1em] pb-0"><b>All Integrations</b></li>
                              </ul>

                              <ul className="flex flex-col gap-4 py-5">
                                  <li><b>5</b> Blog Automation</li>
                                  <li className="flex justify-between items-center content-center">Content Calender<span className="h-6 flex item-center text-[14px] py-1 px-2 bg-[#fac44b] text-black rounded-[100px]"> Unlimited</span></li>
                                  <li className="flex justify-between items-center content-center">Search Console Insights <span className="h-6 flex item-center text-[14px] py-1 px-2 bg-[#fac44b] text-black rounded-[100px]"> Unlimited</span></li>
                                  <li className="flex justify-between items-center content-center">Fast Indexing <span className="h-6 flex item-center text-[14px] py-1 px-2 bg-[#fac44b] text-black rounded-[100px]"> Unlimited</span></li>
                                  <li className="flex justify-between items-center content-center">Backlink Directory <span className="h-6 flex item-center text-[14px] py-1 px-2 bg-[#fac44b] text-black rounded-[100px]"> Unlimited</span></li>
                                  <li><b>15</b> AI Calculator Widgets</li>
                                  <li><b>15</b> AI Statistics Pages</li>
                                  <li><b>15</b> AI Comparison Pages</li>
                                  <li><b>30</b> Guest Post Finder</li>
                                  <li><b>30</b> Reddit SEO</li>
                                  <li><b>1000 URLs</b> AI Auto Schema</li>
                                  <li><b>100</b> AI Glossary Creator</li>

                                  <li className="flex items-center content-center gap-3"><span className="flex items-center justify-center text-[14px] bg-[#7A63DF33] text-[#7A63DF] max-h-[28px] w-[28px] p-2 rounded-[100px]">✓</span>AI Programmatic SEO</li>
                                  <li className="flex items-center content-center gap-3"><span className="flex items-center justify-center text-[14px] bg-[#7A63DF33] text-[#7A63DF] max-h-[28px] w-[28px] p-2 rounded-[100px]">✓</span>LongTail Keyword Research</li>
                                  <li className="flex items-center content-center gap-3"><span className="flex items-center justify-center text-[14px] bg-[#7A63DF33] text-[#7A63DF] max-h-[28px] w-[28px] p-2 rounded-[100px]">✓</span>Steal Competitor Keywords</li>
                                  <li className="flex items-center content-center gap-3"><span className="flex items-center justify-center text-[14px] bg-[#7A63DF33] text-[#7A63DF] max-h-[28px] w-[28px] p-2 rounded-[100px]">✓</span>AI Keyword Research</li>
                                  <li className="flex items-center content-center gap-3"><span className="flex items-center justify-center text-[14px] bg-[#7A63DF33] text-[#7A63DF] max-h-[28px] w-[28px] p-2 rounded-[100px]">✓</span>ICP to KW Research</li>
                                  <li className="flex items-center content-center gap-3"><span className="flex items-center justify-center text-[14px] bg-[#7A63DF33] text-[#7A63DF] max-h-[28px] w-[28px] p-2 rounded-[100px]">✓</span>Manual Keyword Research</li>
                                  <li className="flex justify-between items-center content-center"><div className="flex gap-3"><span className="flex items-center justify-center text-[14px] bg-[#7A63DF33] text-[#7A63DF] max-h-[28px] w-[28px] p-2 rounded-[100px]">✓</span>Video to Article</div><span className="text-[13px] py-1 px-2 bg-[#b9b9b933] text-[#686868] rounded-[100px] min-w-[95px]">Coming Soon</span></li>
                                  <li className="flex justify-between items-center content-center gap-3"><div className="flex gap-3"><span className="flex items-center justify-center text-[14px] bg-[#7A63DF33] text-[#7A63DF] max-h-[28px] w-[28px] p-2 rounded-[100px]">✓</span>AI Article Updater</div><span className="text-[13px] py-1 px-2 bg-[#b9b9b933] text-[#686868] rounded-[100px] min-w-[95px]">Coming Soon</span></li>
                                  <li className="flex justify-between items-center content-center gap-3"><div className="flex gap-3"><span className="flex items-center justify-center text-[14px] bg-[#7A63DF33] text-[#7A63DF] max-h-[28px] w-[28px] p-2 rounded-[100px]">✓</span>AI Auto Technical SEO</div><span className="text-[13px] py-1 px-2 bg-[#b9b9b933] text-[#686868] rounded-[100px] min-w-[95px]">Coming Soon</span></li>
                                  <li className="flex justify-between items-center content-center gap-3"><div className="flex gap-3"><span className="flex items-center justify-center text-[14px] bg-[#7A63DF33] text-[#7A63DF] max-h-[28px] w-[28px] p-2 rounded-[100px]">✓</span>AI Internal Links Builder</div><span className="text-[13px] py-1 px-2 bg-[#b9b9b933] text-[#686868] rounded-[100px] min-w-[95px]">Coming Soon</span></li>
                                  <li className="flex justify-between items-center content-center gap-3"><div className="flex gap-3"><span className="flex items-center justify-center text-[14px] bg-[#7A63DF33] text-[#7A63DF] max-h-[28px] w-[28px] p-2 rounded-[100px]">✓</span>GMB SEO Tracker</div><span className="text-[13px] py-1 px-2 bg-[#b9b9b933] text-[#686868] rounded-[100px] min-w-[95px]">Coming Soon</span></li>
                                  <li className="flex justify-between items-center content-center gap-3"><div className="flex gap-3"><span className="flex items-center justify-center text-[14px] bg-[#7A63DF33] text-[#7A63DF] max-h-[28px] w-[28px] p-2 rounded-[100px]">✓</span>AI SEO Tracker</div><span className="text-[13px] py-1 px-2 bg-[#b9b9b933] text-[#686868] rounded-[100px] min-w-[95px]">Coming Soon</span></li>

                              </ul>
                              <div className="w-full min-w-full justify-center flex items-center content-center">
                                  <button className="w-fit mt-5 text-center text-[18px] py-[10px] px-[60px] border-black border-solid border text-black rounded-[100px] hover:bg-[#2E64FE] hover:text-white hover:border-[#2E64FE] hover:-translate-y-2 focus:bg-[#2E64FE] focus:text-white focus:border-[#2E64FE] focus:-translate-y-2 transition-transform duration-300"><a>PROCEED</a></button>
                              </div>
                          </div>

                          {/* --------------------------------Growth---------------------------------------- */}
                          <div className="flex flex-col pl-5 pr-4 pt-3 pb-6 gap-0 border-2 border-r-0 mr-[-7px] border-black rounded-tl-[10px] rounded-bl-[10px] rounded-tr-none rounded-br-none md:border md:rounded-[10px]">
                              <h4 className="text-[40px] text-black text-bold">Growth</h4>
                              <span className="flex content-end items-baseline text-[60px] text-black gap-2"><b>$39</b><p className="text-[16px] text-black font-regular decoration-none flex content-end items-baseline">per month</p></span>
                              <span className="leading-[1em] pb-8"> Billed Yearly</span>
                              <ul className="flex flex-col gap-4 pt-5 pb-6 border-b-2 border-[#0000001A]">
                                  <li className="w-fit no-underline border-b-2 border-dotted border-[#cbc8d2] bg-[linear-gradient(0deg,#67ff7f6b_0%,rgba(253,187,45,0)_50%)] leading-[1em] pb-0"><b>100</b> AI Articles</li>
                                  <li className="w-fit no-underline border-b-2 border-dotted border-[#cbc8d2] bg-[linear-gradient(0deg,#67ff7f6b_0%,rgba(253,187,45,0)_50%)] leading-[1em] pb-0"><b>6000</b> Keyword Research Credits</li>
                                  <li className="w-fit no-underline border-b-2 border-dotted border-[#cbc8d2] bg-[linear-gradient(0deg,#67ff7f6b_0%,rgba(253,187,45,0)_50%)] leading-[1em] pb-0"><b>15</b> Sites</li>
                                  <li className="w-fit no-underline border-b-2 border-dotted border-[#cbc8d2] bg-[linear-gradient(0deg,#67ff7f6b_0%,rgba(253,187,45,0)_50%)] leading-[1em] pb-0"><b>Access to All Tools</b></li>
                                  <li className="w-fit no-underline border-b-2 border-dotted border-[#cbc8d2] bg-[linear-gradient(0deg,#67ff7f6b_0%,rgba(253,187,45,0)_50%)] leading-[1em] pb-0"><b>All Integrations</b></li>
                              </ul>

                              <ul className="flex flex-col gap-4 py-5">
                                  <li><b>10</b> Blog Automation</li>
                                  <li className="flex justify-between items-center content-center">Content Calender<span className="h-6 flex item-center text-[14px] py-1 px-2 bg-[#fac44b] text-black rounded-[100px]"> Unlimited</span></li>
                                  <li className="flex justify-between items-center content-center">Search Console Insights <span className="h-6 flex item-center text-[14px] py-1 px-2 bg-[#fac44b] text-black rounded-[100px]"> Unlimited</span></li>
                                  <li className="flex justify-between items-center content-center">Fast Indexing <span className="h-6 flex item-center text-[14px] py-1 px-2 bg-[#fac44b] text-black rounded-[100px]"> Unlimited</span></li>
                                  <li className="flex justify-between items-center content-center">Backlink Directory <span className="h-6 flex item-center text-[14px] py-1 px-2 bg-[#fac44b] text-black rounded-[100px]"> Unlimited</span></li>
                                  <li><b>30</b> AI Calculator Widgets</li>
                                  <li><b>30</b> AI Statistics Pages</li>
                                  <li><b>30</b> AI Comparison Pages</li>
                                  <li><b>100</b> Guest Post Finder</li>
                                  <li><b>100</b> Reddit SEO</li>
                                  <li><b>5000 URLs</b> AI Auto Schema</li>
                                  <li><b>200</b> AI Glossary Creator</li>

                                  <li className="flex items-center content-center gap-3"><span className="flex items-center justify-center text-[14px] bg-[#7A63DF33] text-[#7A63DF] max-h-7 w-7 p-2 rounded-[100px]">✓</span>AI Programmatic SEO</li>
                                  <li className="flex items-center content-center gap-3"><span className="flex items-center justify-center text-[14px] bg-[#7A63DF33] text-[#7A63DF] max-h-7 w-7 p-2 rounded-[100px]">✓</span>LongTail Keyword Research</li>
                                  <li className="flex items-center content-center gap-3"><span className="flex items-center justify-center text-[14px] bg-[#7A63DF33] text-[#7A63DF] max-h-7 w-7 p-2 rounded-[100px]">✓</span>Steal Competitor Keywords</li>
                                  <li className="flex items-center content-center gap-3"><span className="flex items-center justify-center text-[14px] bg-[#7A63DF33] text-[#7A63DF] max-h-7 w-7 p-2 rounded-[100px]">✓</span>AI Keyword Research</li>
                                  <li className="flex items-center content-center gap-3"><span className="flex items-center justify-center text-[14px] bg-[#7A63DF33] text-[#7A63DF] max-h-7 w-7 p-2 rounded-[100px]">✓</span>ICP to KW Research</li>
                                  <li className="flex items-center content-center gap-3"><span className="flex items-center justify-center text-[14px] bg-[#7A63DF33] text-[#7A63DF] max-h-7 w-7 p-2 rounded-[100px]">✓</span>Manual Keyword Research</li>
                                  <li className="flex justify-between items-center content-center"><div className="flex gap-3"><span className="flex items-center justify-center text-[14px] bg-[#7A63DF33] text-[#7A63DF] max-h-[28px] w-[28px] p-2 rounded-[100px]">✓</span>Video to Article</div><span className="text-[13px] py-1 px-2 bg-[#b9b9b933] text-[#686868] rounded-[100px] min-w-[95px]">Coming Soon</span></li>
                                  <li className="flex justify-between items-center content-center gap-3"><div className="flex gap-3"><span className="flex items-center justify-center text-[14px] bg-[#7A63DF33] text-[#7A63DF] max-h-[28px] w-[28px] p-2 rounded-[100px]">✓</span>AI Article Updater</div><span className="text-[13px] py-1 px-2 bg-[#b9b9b933] text-[#686868] rounded-[100px] min-w-[95px]">Coming Soon</span></li>
                                  <li className="flex justify-between items-center content-center gap-3"><div className="flex gap-3"><span className="flex items-center justify-center text-[14px] bg-[#7A63DF33] text-[#7A63DF] max-h-[28px] w-[28px] p-2 rounded-[100px]">✓</span>AI Auto Technical SEO</div><span className="text-[13px] py-1 px-2 bg-[#b9b9b933] text-[#686868] rounded-[100px] min-w-[95px]">Coming Soon</span></li>
                                  <li className="flex justify-between items-center content-center gap-3"><div className="flex gap-3"><span className="flex items-center justify-center text-[14px] bg-[#7A63DF33] text-[#7A63DF] max-h-[28px] w-[28px] p-2 rounded-[100px]">✓</span>AI Internal Links Builder</div><span className="text-[13px] py-1 px-2 bg-[#b9b9b933] text-[#686868] rounded-[100px] min-w-[95px]">Coming Soon</span></li>
                                  <li className="flex justify-between items-center content-center gap-3"><div className="flex gap-3"><span className="flex items-center justify-center text-[14px] bg-[#7A63DF33] text-[#7A63DF] max-h-[28px] w-[28px] p-2 rounded-[100px]">✓</span>GMB SEO Tracker</div><span className="text-[13px] py-1 px-2 bg-[#b9b9b933] text-[#686868] rounded-[100px] min-w-[95px]">Coming Soon</span></li>
                                  <li className="flex justify-between items-center content-center gap-3"><div className="flex gap-3"><span className="flex items-center justify-center text-[14px] bg-[#7A63DF33] text-[#7A63DF] max-h-[28px] w-[28px] p-2 rounded-[100px]">✓</span>AI SEO Tracker</div><span className="text-[13px] py-1 px-2 bg-[#b9b9b933] text-[#686868] rounded-[100px] min-w-[95px]">Coming Soon</span></li>

                              </ul>
                              <div className="w-full min-w-full justify-center flex items-center content-center">
                                  <button className="w-fit mt-5 text-center text-[18px] py-[10px] px-[60px] border-black border-solid border text-black rounded-[100px] hover:bg-[#2E64FE] hover:text-white hover:border-[#2E64FE] hover:-translate-y-2 focus:bg-[#2E64FE] focus:text-white focus:border-[#2E64FE] focus:-translate-y-2 transition-transform duration-300"><a>PROCEED</a></button>
                              </div>
                          </div>

                          {/* --------------------------------Growth Max---------------------------------------- */}
                          <div className="flex flex-col pl-5 pr-3 pt-3 pb-6 gap-0 bg-[#ffffe6] border-4 border-[#2e64fe] rounded-[10px]">
                              <h4 className="text-[40px] text-black text-bold">Growth Max</h4>
                              <span className="flex content-end items-baseline text-[60px] text-black gap-2"><b>$74</b><p className="text-[16px] text-black font-regular decoration-none flex content-end items-baseline">per month</p></span>
                              <span className="leading-[1em] pb-8"> Billed Yearly</span>

                              <ul className="flex flex-col gap-4 pt-5 pb-6 border-b-2 border-[#0000001A]">
                                  <li className="w-fit no-underline border-b-2 border-dotted border-[#cbc8d2] bg-[linear-gradient(0deg,#67ff7f6b_0%,rgba(253,187,45,0)_50%)] leading-[1em] pb-0"><b>500</b> AI Articles</li>
                                  <li className="w-fit no-underline border-b-2 border-dotted border-[#cbc8d2] bg-[linear-gradient(0deg,#67ff7f6b_0%,rgba(253,187,45,0)_50%)] leading-[1em] pb-0"><b>20000</b> Keyword Research Credits</li>
                                  <li className="w-full flex justify-between items-center content-center leading-[1em] pb-0 mt-[-5px] mb-[-5px]"><span className="w-fit mb-[-8px] mt-[-8px] no-underline border-b-2 border-dotted border-[#cbc8d2] bg-[linear-gradient(0deg,#67ff7f6b_0%,rgba(253,187,45,0)_50%)] ">Sites</span><span className="h-6 my-0 flex item-center text-[14px] py-1 px-2 bg-[#fac44b] text-black rounded-[100px]"> Unlimited</span></li>
                                  <li className="w-fit no-underline border-b-2 border-dotted border-[#cbc8d2] bg-[linear-gradient(0deg,#67ff7f6b_0%,rgba(253,187,45,0)_50%)] leading-[1em] pb-0"><b>Access to All Tools</b></li>
                                  <li className="w-fit no-underline border-b-2 border-dotted border-[#cbc8d2] bg-[linear-gradient(0deg,#67ff7f6b_0%,rgba(253,187,45,0)_50%)] leading-[1em] pb-0"><b>All Integrations</b></li>
                              </ul>

                              <ul className="flex flex-col gap-4 py-5">
                                  <li className="flex justify-between items-center content-center">Blog Automation<span className="h-6 flex item-center text-[14px] py-1 px-2 bg-[#fac44b] text-black rounded-[100px]"> Unlimited</span></li>
                                  <li className="flex justify-between items-center content-center">Content Calender<span className="h-6 flex item-center text-[14px] py-1 px-2 bg-[#fac44b] text-black rounded-[100px]"> Unlimited</span></li>
                                  <li className="flex justify-between items-center content-center">Search Console Insights <span className="h-6 flex item-center text-[14px] py-1 px-2 bg-[#fac44b] text-black rounded-[100px]"> Unlimited</span></li>
                                  <li className="flex justify-between items-center content-center">Fast Indexing <span className="h-6 flex item-center text-[14px] py-1 px-2 bg-[#fac44b] text-black rounded-[100px]"> Unlimited</span></li>
                                  <li className="flex justify-between items-center content-center">Backlink Directory <span className="h-6 flex item-center text-[14px] py-1 px-2 bg-[#fac44b] text-black rounded-[100px]"> Unlimited</span></li>
                                  <li className="flex justify-between items-center content-center">AI Calculator Widgets <span className="h-6 flex item-center text-[14px] py-1 px-2 bg-[#fac44b] text-black rounded-[100px]"> Unlimited</span></li>
                                  <li className="flex justify-between items-center content-center">AI Statistics Pages <span className="h-6 flex item-center text-[14px] py-1 px-2 bg-[#fac44b] text-black rounded-[100px]"> Unlimited</span></li>
                                  <li className="flex justify-between items-center content-center">AI Comparison Pages <span className="h-6 flex item-center text-[14px] py-1 px-2 bg-[#fac44b] text-black rounded-[100px]"> Unlimited</span></li>
                                  <li className="flex justify-between items-center content-center">Guest Post Finder <span className="h-6 flex item-center text-[14px] py-1 px-2 bg-[#fac44b] text-black rounded-[100px]"> Unlimited</span></li>
                                  <li className="flex justify-between items-center content-center">Reddit SEO <span className="h-6 flex item-center text-[14px] py-1 px-2 bg-[#fac44b] text-black rounded-[100px]"> Unlimited</span></li>
                                  <li className="flex justify-between items-center content-center">AI Auto Schema <span className="h-6 flex item-center text-[14px] py-1 px-2 bg-[#fac44b] text-black rounded-[100px]"> Unlimited</span></li>
                                  <li><b>1000</b> AI Glossary Creator</li>

                                  <li className="flex items-center content-center gap-3"><span className="flex items-center justify-center text-[14px] bg-[#7A63DF33] text-[#7A63DF] max-h-[28px] w-[28px] p-2 rounded-[100px]">✓</span>AI Programmatic SEO</li>
                                  <li className="flex items-center content-center gap-3"><span className="flex items-center justify-center text-[14px] bg-[#7A63DF33] text-[#7A63DF] max-h-[28px] w-[28px] p-2 rounded-[100px]">✓</span>LongTail Keyword Research</li>
                                  <li className="flex items-center content-center gap-3"><span className="flex items-center justify-center text-[14px] bg-[#7A63DF33] text-[#7A63DF] max-h-[28px] w-[28px] p-2 rounded-[100px]">✓</span>Steal Competitor Keywords</li>
                                  <li className="flex items-center content-center gap-3"><span className="flex items-center justify-center text-[14px] bg-[#7A63DF33] text-[#7A63DF] max-h-[28px] w-[28px] p-2 rounded-[100px]">✓</span>AI Keyword Research</li>
                                  <li className="flex items-center content-center gap-3"><span className="flex items-center justify-center text-[14px] bg-[#7A63DF33] text-[#7A63DF] max-h-[28px] w-[28px] p-2 rounded-[100px]">✓</span>ICP to KW Research</li>
                                  <li className="flex items-center content-center gap-3"><span className="flex items-center justify-center text-[14px] bg-[#7A63DF33] text-[#7A63DF] max-h-[28px] w-[28px] p-2 rounded-[100px]">✓</span>Manual Keyword Research</li>
                                  <li className="flex justify-between items-center content-center"><div className="flex gap-3"><span className="flex items-center justify-center text-[14px] bg-[#7A63DF33] text-[#7A63DF] max-h-[28px] w-[28px] p-2 rounded-[100px]">✓</span>Video to Article</div><span className="text-[13px] py-1 px-2 bg-[#b9b9b933] text-[#686868] rounded-[100px] min-w-[95px]">Coming Soon</span></li>
                                  <li className="flex justify-between items-center content-center gap-3"><div className="flex gap-3"><span className="flex items-center justify-center text-[14px] bg-[#7A63DF33] text-[#7A63DF] max-h-[28px] w-[28px] p-2 rounded-[100px]">✓</span>AI Article Updater</div><span className="text-[13px] py-1 px-2 bg-[#b9b9b933] text-[#686868] rounded-[100px] min-w-[95px]">Coming Soon</span></li>
                                  <li className="flex justify-between items-center content-center gap-3"><div className="flex gap-3"><span className="flex items-center justify-center text-[14px] bg-[#7A63DF33] text-[#7A63DF] max-h-[28px] w-[28px] p-2 rounded-[100px]">✓</span>AI Auto Technical SEO</div><span className="text-[13px] py-1 px-2 bg-[#b9b9b933] text-[#686868] rounded-[100px] min-w-[95px]">Coming Soon</span></li>
                                  <li className="flex justify-between items-center content-center gap-3"><div className="flex gap-3"><span className="flex items-center justify-center text-[14px] bg-[#7A63DF33] text-[#7A63DF] max-h-[28px] w-[28px] p-2 rounded-[100px]">✓</span>AI Internal Links Builder</div><span className="text-[13px] py-1 px-2 bg-[#b9b9b933] text-[#686868] rounded-[100px] min-w-[95px]">Coming Soon</span></li>
                                  <li className="flex justify-between items-center content-center gap-3"><div className="flex gap-3"><span className="flex items-center justify-center text-[14px] bg-[#7A63DF33] text-[#7A63DF] max-h-[28px] w-[28px] p-2 rounded-[100px]">✓</span>GMB SEO Tracker</div><span className="text-[13px] py-1 px-2 bg-[#b9b9b933] text-[#686868] rounded-[100px] min-w-[95px]">Coming Soon</span></li>
                                  <li className="flex justify-between items-center content-center gap-3"><div className="flex gap-3"><span className="flex items-center justify-center text-[14px] bg-[#7A63DF33] text-[#7A63DF] max-h-[28px] w-[28px] p-2 rounded-[100px]">✓</span>AI SEO Tracker</div><span className="text-[13px] py-1 px-2 bg-[#b9b9b933] text-[#686868] rounded-[100px] min-w-[95px]">Coming Soon</span></li>

                              </ul>
                              <div className="w-full min-w-full justify-center flex items-center content-center">
                                  <button className="w-fit mt-5 bg-[#2e64fe] text-center text-[18px] py-[10px] px-[60px] border-[#2e64fe] border-solid border-[1px] text-white rounded-[100px] hover:bg-[#2E64FE] hover:text-white hover:border-[#2E64FE] hover:-translate-y-2 focus:bg-[#2E64FE] focus:text-white focus:border-[#2E64FE] focus:-translate-y-2 transition-transform duration-300"><a>PROCEED</a></button>
                              </div>
                          </div>


            </div>
        </>
        )}
      </div>
      <div className="w-full mt-[-10px] flex justify-center content-center item-center " >  
        <div className="w-fit p-5 gap-0 border-[#c8c8c8] border-solid border-[2px] rounded-[10px] grid grid-cols-3 align-center justify-center">
            <div className="flex flex-col gap-0 content-left">
                <div className="text-[40px] text-black text-left leading-[1.2em]"><b>Trial</b></div>
                <span className="flex content-end items-baseline text-[30px] text-black gap-2 leading-[1.1em]"><b>$0</b>
                    <p className="text-[18px] text-black font-[500] leading-[1.1em] decoration-none flex content-end items-baseline">per month</p>
                </span>
            </div>
            <span className="flex flex-col gap-0 items-center align-center content-center justify-center text-[40px] text-black leading-[1.2em]"><b>2</b><p className="text-[18px] text-black font-medium decoration-none flex content-end leading-[1.1em]">Credits</p></span>
            <div className="w-full min-w-full justify-center flex items-center content-center">
                <button className="w-fit text-center text-[18px] py-[8px] px-[35px] border-black border-solid border-[1px] text-black rounded-[100px] hover:bg-[#2E64FE] hover:text-white hover:border-[#2E64FE] hover:-translate-y-2 focus:bg-[#2E64FE] focus:text-white focus:border-[#2E64FE] focus:-translate-y-2 transition-transform duration-300"><a>PROCEED</a></button>
            </div>  
        </div>   
      </div>  
    </div>
  );
}
