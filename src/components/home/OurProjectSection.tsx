"use client"
import Image from "next/image";
import React, { useState } from "react";

const OurProjectSection = () => {
  // Set activeId to null initially so you can see the colors first.
  const [activeId, setActiveId] = useState<number | null>(null);

  const projects = [
    {
      name: "Ecommerce Development",
      image: "https://res.cloudinary.com/db7fyrtvc/image/upload/v1768556847/ecommerce_development_es1h4w.avif",
      link: "#",
      description: "Scalable online stores built for growth.",
    },
    {
      name: "Mobile App Development",
      image: "https://res.cloudinary.com/db7fyrtvc/image/upload/v1768556849/mobile_app_development_o8xmkx.avif",
      link: "#",
      description: "Native and cross-platform mobile solutions.",
    },
    {
      name: "SaaS Development",
      image: "https://res.cloudinary.com/db7fyrtvc/image/upload/v1768556850/saas_development_eshteb.avif",
      link: "#",
      description: "Cloud-based software tailored to your needs.",
    },
    {
      name: "Web Development",
      image: "https://res.cloudinary.com/db7fyrtvc/image/upload/v1768556853/web_development_wczq3y.avif",
      link: "#",
      description: "High-performance websites and web applications.",
    },
  ];

  return (
    <div className="flex justify-center items-center py-12 bg-white">
      <div className="w-full max-w-[1200px] px-4 md:px-8 flex flex-col gap-8">
        
        {/* Header Section */}
        <div className="flex flex-col gap-3">
          <h4 className="text-custom-darkblue font-medium uppercase tracking-wider text-sm">
            Our Projects
          </h4>
          <div className="flex justify-between items-end">
            <h1 className="text-custom-black text-2xl md:text-3xl lg:text-4xl font-bold max-w-2xl leading-tight">
              Explore{" "}
              <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                Reboot AI's
              </span>{" "}
              Innovative, Successful Project Solutions.
            </h1>
          </div>
        </div>

        {/* ---------------- Desktop View (Accordion) ---------------- */}
        <div className="hidden lg:flex w-full h-[500px] gap-4">
          {projects.map((item, index) => {
            const isActive = activeId === index;
            
            // Logic for Colors:
            // Index 0 (1st item) = Blue
            // Index 1, 2, 3 (Rest) = Red
            const isBlue = index % 2 === 0;
            const colorClass = isBlue 
                ? "bg-[#4385F5]/10 text-[#4385F5]" // Blue low opacity bg, Blue text
                : "bg-[#FF5757]/10 text-[#FF5757]"; // Red low opacity bg, Red text

            return (
              <div
                key={index}
                onMouseEnter={() => setActiveId(index)}
                onMouseLeave={() => setActiveId(null)}
                className={`
                  relative h-full rounded-2xl overflow-hidden cursor-pointer
                  transition-[flex] duration-500 ease-out
                  ${isActive ? "flex-[3]" : "flex-[1]"}
                `}
              >
                {/* ---------------- ACTIVE STATE (Image & Details) ---------------- */}
                <div className={`absolute inset-0 z-10 w-full h-full transition-opacity duration-500 ${isActive ? 'opacity-100 delay-100' : 'opacity-0 pointer-events-none'}`}>
                     {/* Image */}
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={581}
                      height={720}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    
                    {/* Dark Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                    {/* Content */}
                    <div className={`absolute inset-0 p-8 flex flex-col justify-end transform transition-transform duration-500 ${isActive ? 'translate-y-0' : 'translate-y-10'}`}>
                        <div className="bg-white/30 backdrop-blur-sm p-6 rounded-xl shadow-xl border-l-4 border-blue-600">
                            <h3 className="text-xl font-bold text-white mb-1 capitalize">
                                {item.name}
                            </h3>
                        </div>
                    </div>
                </div>

                {/* ---------------- INACTIVE / COLLAPSED STATE (Colored BG) ---------------- */}
                <div 
                    className={`
                        absolute inset-0 z-0 flex items-center justify-center 
                        ${colorClass} backdrop-blur-sm
                        transition-all duration-300
                    `}
                >
                  <h2 
                    className="text-2xl font-bold whitespace-nowrap uppercase tracking-widest"
                    style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                  >
                    {item.name}
                  </h2>
                </div>

              </div>
            );
          })}
        </div>
        <div className="lg:hidden w-full overflow-x-auto pb-4 hide-scrollbar snap-x snap-mandatory flex gap-4">
          {projects.map((item, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 snap-center
                w-[85%]  h-[400px] 
                rounded-2xl overflow-hidden group"
            >
              <Image
                src={item.image}
                alt={item.name}
                width={581}
                height={720}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-5">
                 <h3 className="text-xl font-bold text-white mb-1 capitalize shadow-black drop-shadow-md">
                    {item.name}
                  </h3>
                 
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default OurProjectSection;