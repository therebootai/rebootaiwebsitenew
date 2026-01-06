"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react"; // Recommended for Next.js
import RecentWorkCard from "../card/RecentWorkCard";

gsap.registerPlugin(ScrollTrigger);

const OurRecentWorkSection = () => {
  const pinRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<HTMLDivElement[]>([]);

  const recentWork = [
    {
      sectionName: "Social Media Design",
      details: [
        { imgsrc: "/images/r1.jpg", name: "Social Media Design" },
        { imgsrc: "/images/r2.jpg", name: "Social Media Design" },
        { imgsrc: "/images/r3.jpg", name: "Social Media Design" },
      ],
    },
    {
      sectionName: "UI/UX Design",
      details: [
        { imgsrc: "/images/r1.jpg", name: "UI/UX Design" },
        { imgsrc: "/images/r2.jpg", name: "UI/UX Design" },
        { imgsrc: "/images/r3.jpg", name: "UI/UX Design" },
      ],
    },
    {
      sectionName: "Website Development",
      details: [
        { imgsrc: "/images/r1.jpg", name: "Website Development" },
        { imgsrc: "/images/r2.jpg", name: "Website Development" },
        { imgsrc: "/images/r3.jpg", name: "Website Development" },
      ],
    },
    {
      sectionName: "Application Development",
      details: [
        { imgsrc: "/images/r1.jpg", name: "Application Development" },
        { imgsrc: "/images/r2.jpg", name: "Application Development" },
        { imgsrc: "/images/r3.jpg", name: "Application Development" },
      ],
    },
  ];

  useGSAP(() => {
    const panels = panelsRef.current;
    
    // Create a master timeline for the pinned section
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: pinRef.current,
        start: "top top",
        // The more height you add here, the slower/smoother the scroll feels
        end: () => `+=${panels.length * 100}%`, 
        pin: true,
        scrub: 1, // Smoothly follows the scrollbar
        snap: 1 / (panels.length - 1),
      },
    });

    // Sequence the panels so they enter one-by-one
    panels.forEach((panel, i) => {
      if (i !== 0) {
        tl.fromTo(
          panel,
          { yPercent: 100 }, // Start off-screen (bottom)
          { 
            yPercent: i * 8,      // Slide to full view
            ease: "none",
          }
        );
      }
    });
    tl.to({}, { duration: 0.5 });
  }, { scope: pinRef });

  return (
    <section ref={pinRef} className="relative h-[80vh] md:h-[120vh] overflow-hidden flex flex-col gap-6">
      <div className=" flex justify-center items-center mb-4">
         <div className="flex flex-col gap-2 w-full max-w-[1200px] lg:p-8 p-4">
          <h4>Explore Our Recent Idea</h4>
          <div className="flex justify-between items-center">
            <h1 className="text-custom-black text-xl md:text-2xl lg:text-3xl font-semibold">
              Explore Our Recent
              <span className="bg-linear-to-r from-custom-darkblue to-custom-green bg-clip-text text-transparent">
                {" "}Innovative Creativity
              </span>{" "}
              Ideas
            </h1>
          </div>
        </div>
        </div>
      
      {recentWork.map((item, index) => (
        <div
          key={index}
          ref={(el) => {
            if (el) panelsRef.current[index] = el;
          }}
          // Use z-index to ensure new panels stack on top of old ones
          style={{ zIndex: index }} 
          className="absolute inset-0 h-screen flex md:justify-center md:items-center mt-24 md:mt-16  md:pb-28"
        >
          {/* YOUR DESIGN — NO CHANGES MADE HERE */}
          <div className="w-full max-w-[1200px] lg:p-8 p-4 ">
            <div className="md:p-6 p-4  flex flex-col gap-5 border border-[#CCCCCC] bg-white rounded-md shadow-sm">
              <h2 className="md:text-3xl text-2xl font-semibold text-custom-darkblue">
                {item.sectionName}
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {item.details.map((card, i) => (
                  <RecentWorkCard
                    key={i}
                    imgsrc={card.imgsrc}
                    name={card.name}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default OurRecentWorkSection;