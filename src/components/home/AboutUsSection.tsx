"use client";
import RebootLogoIconWhite from "@/icons/RebootLogoIconWhite";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import SkillBar from "../card/SkillBar";
import ContactIcon from "@/icons/ContactIcon";
import useElementHeight from "@/hooks/useElementHeight";

const AboutUsSection = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

     const [rightSideHeight, leftSideRef] = useElementHeight<HTMLDivElement>();
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);



  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setInView(true);
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const skils = [
    { label: "Web & App Security Solution", value: 79.9 },
    { label: "Creative & Brand Identity", value: 89.9 },
    { label: "Digital Marketing Service", value: 69.9 },
    { label: "Business Branding Solution", value: 69.9 },
  ];
  return (
    <div ref={ref} className=" w-full flex justify-center items-center">
      <div className=" w-full max-w-[1200px]    lg:p-8  p-4 flex flex-col lg:flex-row gap-4">
        <div className="lg:w-[40%] w-full relative group overflow-hidden"    style={{
          height: isSmallScreen ? "auto" : `${rightSideHeight}px`,
        }}>
          <Image
            src={"https://res.cloudinary.com/db7fyrtvc/image/upload/v1768556596/about_before_urgv7d.avif"}
            alt="about-us"
            width={789}
            height={789}
            className=" w-full h-full  rounded-lg object-cover transition-opacity duration-500 ease-in opacity-100 group-hover:opacity-0"
          />
          <Image
            src="https://res.cloudinary.com/db7fyrtvc/image/upload/v1768556594/about_after_dtz2wz.avif"
            width={2504}
            height={2184}
            alt="Enquiry Hover"
            className="w-full h-full object-cover rounded-md transition-opacity duration-500 ease-out opacity-0 group-hover:opacity-100 absolute top-0 left-0"
          />
         <div className="absolute bg-white pr-2 pt-2 rounded-tr-lg bottom-0 left-0 
    transition-all duration-500 ease-in-out 
    group-hover:opacity-0 group-hover:-translate-x-4 group-hover:translate-y-4">
    
    <div className="w-[10rem] h-[6rem] rounded-bl-lg rounded-tr-lg bg-linear-to-r from-custom-darkblue to-custom-lightblue flex justify-center items-center">
        <RebootLogoIconWhite />
    </div>
</div>
         <div className="grid grid-cols-2 gap-4 px-8 absolute top-8 w-full 
    transition-all duration-500 ease-in-out 
    group-hover:opacity-0 group-hover:-translate-y-8">
    
    <div className="h-[5rem] w-full flex flex-col justify-center items-center bg-blur-[2px] border border-white text-white bg-black/10 backdrop-blur-[2px] rounded-lg">
        <h1 className="text-2xl font-semibold">250+</h1>
        <h3 className="text-lg font-medium">Satisfied Clients</h3>
    </div>
    <div className="h-[5rem] w-full flex flex-col justify-center items-center bg-blur-[2px] border border-white text-white bg-black/10 backdrop-blur-[2px] rounded-lg">
        <h1 className="text-2xl font-semibold">250+</h1>
        <h3 className="text-lg font-medium">Satisfied Clients</h3>
    </div>
</div>
        </div>
        <div className=" lg:w-[60%] w-full flex flex-col gap-4"    ref={leftSideRef}>
          <h4 className=" text-custom-black text-sm xl:text-base font-medium">
            About Reboot AI
          </h4>
          <h1 className="xl:text-2xl text-2xl font-semibold w-fit flex flex-row gap-2 items-center  bg-linear-to-r  from-custom-darkblue  to-custom-green  bg-clip-text  text-transparent">
            Let’s Reboot Your Business with Smart AI-Powered Digital Solutions.
          </h1>
          <div className=" text-xs xl:text-[13px] text-custom-textgray ">
           Reboot is an emerging technology firm in the Eastern India region that is spiraling out of the ordinary in terms of vibrancy and energy, being a renowned web development, app development, and IT solutions company. Anyone who comes to us with an idea is definitely the winner since it is this idea that will be turned into a digital experience that generates an impact. Having over 10+ years of experience within the industry, we provide customized, scalable, and resolute digital solutions, which are specifically crafted to enable businesses to emerge in the market, which is today competitive. Our team has not just the capacity to provide the latest, modern and easy to use apps, which will make your vision come a reality, be it ERP and student management applications, dental clinic applications, health SaaS applications or a pharma management application. <br/> Our greatest point of distinction with the other companies is, by far, our high level of devotion to innovation, our intent at offering a great value to money, and our long-term benefits perspective. Each of our works is a mixture of the most recent technologies, the clean developing ones, and the next generation architecture. The solutions we need to achieve through our interaction with you are encounter-driven, customer experience focused, and an operation simplifier, i.e., you are the ones that remain ahead of the game in the digital realm
             {isExpanded && (
              <>
                <br />
                <br />
                We accompany you in all the phases, thoughts, and plans to the execution, testing, debut, and adjustments. We are highly confident in our team to support us really well, to the point that we promise our clients or our professionals to come to their aid anytime of the day. Thus, clients do not need to worry about anything and can always count on the help of professionals anytime they need it. Our IT consultancy service, UI/UX design service, full-stack development service, cloud integration service, software service development, and digital marketing service, including SEO and lead generation, are our bouquet of services. Having a dedicated team, streamlined processes and OTIF delivery rate of 100% we ensure that your project is completed successfully through its flow up to the end.

              </>
            )}
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
            {skils.map((skill) => (
              <SkillBar
                key={skill.label}
                label={skill.label}
                value={skill.value}
                play={inView}
              />
            ))}
          </div>
          <div className=" flex flex-row gap-4 ">
             <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="cursor-pointer h-[3rem] w-fit flex gap-2 justify-center items-center bg-linear-to-r from-custom-darkblue via-custom-mediumblue to-custom-lightblue text-white px-6 rounded-lg text-xs xl:text-sm"
            >
              <ContactIcon className="size-[1rem]" /> 
              {isExpanded ? "Read Less" : "Read More"}
            </button>
             <button className=" cursor-pointer h-[3rem] w-fit flex gap-2 justify-center items-center bg-white text-custom-darkblue px-6 border border-custom-darkblue rounded-lg text-xs xl:text-sm">
                  <ContactIcon className=" size-[1rem]" color="#0061FF"/> Recent Work
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
