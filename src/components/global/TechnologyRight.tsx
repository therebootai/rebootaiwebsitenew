"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";

export default function TechnologyRight() {
  const [activeTab, setActiveTab] = useState("web");
  const tabContainerRef = useRef<HTMLDivElement>(null);
  const isManualScrolling = useRef(false);
  const resumeTimeout = useRef<NodeJS.Timeout | null>(null);

  const tabs = [
    { id: "web", label: "Web Design" },
    { id: "app", label: "Apps" },
    { id: "ai", label: "AI" },
    { id: "webapp", label: "Web Apps" },
    { id: "design", label: "Design" },
    { id: "digital", label: "Digital" },
    { id: "linux", label: "Linux" },
    { id: "application", label: "Application" },
  ];

  const tabImages: Record<string, string[]> = {
    web: [
      "/assets/Technology/grok.png",
      "/assets/Technology/gemini.png",
      "/assets/Technology/chatgpt.png",
      "/assets/Technology/jsper.png",
      "/assets/Technology/star.png",
      "/assets/Technology/copilot.png",
      "/assets/Technology/meta.png",
      "/assets/Technology/deepseek.png",
      "/assets/Technology/arowstar.png",
    ],
    app: [
      "/assets/Technology/grok.png",
      "/assets/Technology/gemini.png",
      "/assets/Technology/deepseek.png",
      "/assets/Technology/arowstar.png",
      "/assets/Technology/chatgpt.png",
      "/assets/Technology/jsper.png",
      "/assets/Technology/star.png",
      "/assets/Technology/copilot.png",
      "/assets/Technology/meta.png",
    ],
    ai: [
      "/assets/Technology/copilot.png",
      "/assets/Technology/meta.png",
      "/assets/Technology/deepseek.png",
      "/assets/Technology/arowstar.png",
      "/assets/Technology/grok.png",
      "/assets/Technology/gemini.png",
      "/assets/Technology/chatgpt.png",
      "/assets/Technology/jsper.png",
      "/assets/Technology/star.png",
    ],
    webapp: [
      "/assets/Technology/grok.png",
      "/assets/Technology/deepseek.png",
      "/assets/Technology/arowstar.png",
      "/assets/Technology/gemini.png",
      "/assets/Technology/chatgpt.png",
      "/assets/Technology/jsper.png",
      "/assets/Technology/star.png",
      "/assets/Technology/copilot.png",
      "/assets/Technology/meta.png",
    ],
    design: [
      "/assets/Technology/deepseek.png",
      "/assets/Technology/arowstar.png",
      "/assets/Technology/grok.png",
      "/assets/Technology/gemini.png",
      "/assets/Technology/chatgpt.png",
      "/assets/Technology/jsper.png",
      "/assets/Technology/star.png",
      "/assets/Technology/copilot.png",
      "/assets/Technology/meta.png",
    ],
    digital: [
      "/assets/Technology/grok.png",
      "/assets/Technology/jsper.png",
      "/assets/Technology/star.png",
      "/assets/Technology/copilot.png",
      "/assets/Technology/meta.png",
      "/assets/Technology/deepseek.png",
      "/assets/Technology/arowstar.png",
      "/assets/Technology/gemini.png",
      "/assets/Technology/chatgpt.png",
    ],
    linux: [
      "/assets/Technology/jsper.png",
      "/assets/Technology/star.png",
      "/assets/Technology/copilot.png",
      "/assets/Technology/meta.png",
      "/assets/Technology/deepseek.png",
      "/assets/Technology/arowstar.png",
      "/assets/Technology/grok.png",
      "/assets/Technology/gemini.png",
      "/assets/Technology/chatgpt.png",
    ],
    application: [
      "/assets/Technology/grok.png",
      "/assets/Technology/gemini.png",
      "/assets/Technology/copilot.png",
      "/assets/Technology/meta.png",
      "/assets/Technology/deepseek.png",
      "/assets/Technology/arowstar.png",
      "/assets/Technology/chatgpt.png",
      "/assets/Technology/jsper.png",
      "/assets/Technology/star.png",
    ],
  };

  // Convert to JSX
  const tabContent: Record<string, JSX.Element[]> = Object.fromEntries(
    Object.entries(tabImages).map(([key, images]) => [
      key,
      images.map((src, i) => (
        <div
          key={i}
          className="flex justify-center items-center bg-white hover:shadow-md transition"
        >
          <Image
            src={src}
            alt={`${key} image ${i + 1}`}
            width={60}
            height={60}
            className="object-contain"
          />
        </div>
      )),
    ])
  );

  // Auto-scroll logic
  useEffect(() => {
    const container = tabContainerRef.current;
    if (!container) return;

    const autoScroll = () => {
      if (isManualScrolling.current) return;
      const scrollAmount = container.scrollWidth / tabs.length / 2;
      if (
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth
      ) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    };

    const interval = setInterval(autoScroll, 3000);
    return () => clearInterval(interval);
  }, [tabs.length]);

  // Manual scroll handlers
  const handleManualStart = () => {
    isManualScrolling.current = true;
    if (resumeTimeout.current) clearTimeout(resumeTimeout.current);
  };

  const handleManualEnd = () => {
    if (resumeTimeout.current) clearTimeout(resumeTimeout.current);
    resumeTimeout.current = setTimeout(() => {
      isManualScrolling.current = false;
    }, 3000);
  };

  return (
    <div className="md:w-1/2 flex flex-col md:mt-0 mt-4">
      {/* Tabs */}
      <div className="mb-6">
        <div
          ref={tabContainerRef}
          className="flex gap-2 overflow-x-auto no-scrollbar scroll-smooth"
          onMouseEnter={handleManualStart}
          onMouseLeave={handleManualEnd}
          onTouchStart={handleManualStart}
          onTouchEnd={handleManualEnd}
          onScroll={handleManualStart}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-shrink-0 px-6 py-2 rounded-md border-[0.4px] text-sm font-medium transition whitespace-nowrap min-w-[20%] text-center ${
                activeTab === tab.id
                  ? "bg-[linear-gradient(90deg,#0061ff,#4fa0ff)] text-white border-blue-600"
                  : "border-gray-400 text-gray-700 hover:bg-blue-50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="grid grid-cols-3 flex-1 border-[0.4px] border-gray-300">
        {tabContent[activeTab].map((item, i) => (
          <div
            key={i}
            className="flex justify-center items-center bg-white hover:shadow-md transition border-[0.3px] border-gray-300 border-t-0 border-l-0 border-r-[0.3px] border-b-[0.3px]"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}






