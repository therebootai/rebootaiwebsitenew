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
      sectionName: "Website Development",
      details: [
        { imgsrc: "https://res.cloudinary.com/db7fyrtvc/image/upload/v1768556847/Website_design_kf0p9c.avif", name: "Website Development" },
        { imgsrc: "https://res.cloudinary.com/db7fyrtvc/image/upload/v1768556845/Website_design-2_ez1zlc.avif", name: "Website Development" },
        { imgsrc: "https://res.cloudinary.com/db7fyrtvc/image/upload/v1768556842/Website_design-1_nusbpa.avif", name: "Website Development" },
      ],
    },
        {
      sectionName: "Application Development",
      details: [
        { imgsrc: "https://res.cloudinary.com/db7fyrtvc/image/upload/v1768556839/web_app_wmwlug.avif", name: "Application Development" },
        { imgsrc: "https://res.cloudinary.com/db7fyrtvc/image/upload/v1768556843/web_app2_xsotpd.avif", name: "Application Development" },
        { imgsrc: "https://res.cloudinary.com/db7fyrtvc/image/upload/v1768556837/web_app_3_e3awkk.avif", name: "Application Development" },
      ],
    },
       {
      sectionName: "UI/UX Design",
      details: [
        { imgsrc: "https://res.cloudinary.com/db7fyrtvc/image/upload/v1768556835/ui_ux_design_3_vcslmp.avif", name: "UI/UX Design" },
        { imgsrc: "https://res.cloudinary.com/db7fyrtvc/image/upload/v1768556835/ui_ux_design_h9i2bg.avif", name: "UI/UX Design" },
        { imgsrc: "https://res.cloudinary.com/db7fyrtvc/image/upload/v1768556834/ui_ux_design_2_for_USA_mt6cnf.avif", name: "UI/UX Design" },
      ],
    },
    {
      sectionName: "PR Branding",
      details: [
        { imgsrc: "https://res.cloudinary.com/db7fyrtvc/image/upload/v1768556824/pr_branding_1_mfxzyj.avif", name: "PR Branding" },
        { imgsrc: "https://res.cloudinary.com/db7fyrtvc/image/upload/v1768556828/pr_branding_2_s8taks.avif", name: "PR Branding" },
        { imgsrc: "https://res.cloudinary.com/db7fyrtvc/image/upload/v1768556834/pr_branding_3_hptauh.avif", name: "PR Branding" },
      ],
    },

        {
      sectionName: "Social Media Design",
      details: [
        { imgsrc: "https://res.cloudinary.com/db7fyrtvc/image/upload/v1768556834/social_media_design-1_elx1xm.avif", name: "Social Media Design" },
        { imgsrc: "https://res.cloudinary.com/db7fyrtvc/image/upload/v1768556834/social_media_design-2_maflkn.avif", name: "Social Media Design" },
        { imgsrc: "https://res.cloudinary.com/db7fyrtvc/image/upload/v1768556834/social_media_design_awgoad.avif", name: "Social Media Design" },
      ],
    },

           {
      sectionName: "Mobile App Design",
      details: [
        { imgsrc: "https://res.cloudinary.com/db7fyrtvc/image/upload/v1768556819/mobile_app_design-1_stpwep.avif", name: "Mobile App Design" },
        { imgsrc: "https://res.cloudinary.com/db7fyrtvc/image/upload/v1768556820/mobile_app_design-2_jpiej7.avif", name: "Mobile App Design" },
        { imgsrc: "https://res.cloudinary.com/db7fyrtvc/image/upload/v1768556822/mobile_app_design_z2dlje.avif", name: "Mobile App Design" },
      ],
    },

               {
      sectionName: "Ecommerce Web Design",
      details: [
        { imgsrc: "https://res.cloudinary.com/db7fyrtvc/image/upload/v1768556813/Ecommerce_web_Design_ceiycl.avif", name: "Ecommerce Web  Design" },
        { imgsrc: "https://res.cloudinary.com/db7fyrtvc/image/upload/v1768556810/Ecommerce_web_Design-2_oqzmyf.avif", name: "Ecommerce Web  Design" },
        { imgsrc: "https://res.cloudinary.com/db7fyrtvc/image/upload/v1768556810/Ecommerce_web_Design-1_ya4rea.avif", name: "Ecommerce Web  Design" },
      ],
    },

                   {
      sectionName: "Logo Design",
      details: [
        { imgsrc: "https://res.cloudinary.com/db7fyrtvc/image/upload/v1768556814/logo_design-1_usxjqs.avif", name: "Logo Design" },
        { imgsrc: "https://res.cloudinary.com/db7fyrtvc/image/upload/v1768556816/logo_design-2_fmkxqq.avif", name: "Logo Design" },
        { imgsrc: "https://res.cloudinary.com/db7fyrtvc/image/upload/v1768556816/logo_design_ntnta8.avif", name: "Logo  Design" },
      ],
    },
 
  

  ];

  // useGSAP(() => {
  //   const panels = panelsRef.current;
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: pinRef.current,
  //       start: "top top",
  //       end: () => `+=${panels.length * 100}%`, 
  //       pin: true,
  //       scrub: 1, 
  //       snap: 1 / (panels.length - 1),
  //     },
  //   });

  //   panels.forEach((panel, i) => {
  //     if (i !== 0) {
  //       tl.fromTo(
  //         panel,
  //         { yPercent: 120 }, 
  //         { 
  //           yPercent: i*2,
  //           ease: "none",
  //         }
  //       );
  //     }
  //   });
  //   tl.to({}, { duration: 0.5 });
  // }, { scope: pinRef });


    useGSAP(() => {
    const panels = panelsRef.current;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: pinRef.current,
        start: "top top",
        end: () => `+=${panels.length * 100}%`, 
        pin: true,
        scrub: 1,
        snap: 1 / (panels.length - 1),
      },
    });

panels.forEach((panel, i) => {
      if (i !== 0) {
        tl.addLabel(`card-${i}`);
        tl.fromTo(
          panel,
          { 
            yPercent: 120, 
            opacity: 1 
          }, 
          { 
            yPercent: 0,  
            opacity: 1, 
            ease: "none",
            duration: 1
          },
          `card-${i}`
        );
        if (panels[i - 1]) {
          tl.to(
            panels[i - 1],
            {
              scale: 0.95, 
              opacity: 0.5, 
              yPercent: -5,  
              ease: "none",
              duration: 1
            },
            `card-${i}`
          );
        }

        if (panels[i - 2]) {
           tl.to(
            panels[i - 2],
            {
              scale: 0.90,       
              opacity: 0.2,     
              duration: 1
            },
            `card-${i}` 
          );
        }
      }
    });
  }, { scope: pinRef });


  return (
    <section ref={pinRef} className="relative h-[80vh] md:h-screen overflow-hidden flex flex-col gap-6">
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
            <div className="md:p-6 p-4  flex flex-col gap-5 border border-[#CCCCCC] bg-white rounded-md inset-shadow-custom-light">
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