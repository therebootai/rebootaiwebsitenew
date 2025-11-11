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
        <div className="lg:w-[40%] w-full relative "    style={{
          height: isSmallScreen ? "auto" : `${rightSideHeight}px`,
        }}>
          <Image
            src={"/images/aboutus.png"}
            alt="about-us"
            width={789}
            height={789}
            className=" w-full h-full  rounded-lg object-cover"
          />
          <div className="  absolute bg-white pr-2 pt-2 rounded-tr-lg  bottom-0 left-0">
            <div className=" w-[10rem] h-[6rem] rounded-bl-lg rounded-tr-lg bg-linear-to-r from-custom-darkblue to-custom-lightblue flex justify-center items-center">
              <RebootLogoIconWhite />
            </div>
          </div>
          <div className=" grid grid-cols-2 gap-4 px-8 absolute top-8  w-full">
            <div className=" h-[5rem] w-full flex flex-col  justify-center items-center bg-blur-[2px] border border-white text-white  bg-black/10 backdrop-blur-[2px] rounded-lg">
              <h1 className=" text-2xl font-semibold ">250+</h1>
              <h3 className=" text-lg font-medium">Satisfied Clients</h3>
            </div>
            <div className=" h-[5rem] w-full flex flex-col justify-center items-center bg-blur-[2px] border border-white text-white bg-black/10 backdrop-blur-[2px] rounded-lg">
              <h1 className=" text-2xl font-semibold ">250+</h1>
              <h3 className=" text-lg font-medium">Satisfied Clients</h3>
            </div>
          </div>
        </div>
        <div className=" lg:w-[60%] w-full flex flex-col gap-4"    ref={leftSideRef}>
          <h4 className=" text-custom-black text-sm xl:text-base font-medium">
            About Reboot AI
          </h4>
          <h1 className="xl:text-3xl text-2xl font-semibold w-fit flex flex-row gap-2 items-center  bg-linear-to-r  from-custom-darkblue  to-custom-green  bg-clip-text  text-transparent">
            Let’s Reboot Your Business with Smart AI-Powered Digital Solutions.
          </h1>
          <div className=" text-xs xl:text-[13px] text-custom-textgray ">
            At Reboot AI Private Limited, our mission is to enhance the
            competitiveness and agility of companies through innovative software
            solutions. We empower individuals and organizations with exceptional
            design, reliable technology, and ongoing support to drive
            transformation within their industries. Based in Kolkata, West
            Bengal, we offer comprehensive services across India. Our offerings
            include web and app development, as well as business and IT
            consulting. Our development processes are designed to boost
            productivity and enable businesses to scale using modern techniques.{" "}
            <br /> As a Google Partner Firm, we specialize in delivering
            exceptional services to enhance website security in response to the
            evolving landscape of organic and paid marketing. Our team comprises
            skilled security professionals equipped with advanced tools to
            identify, upgrade, and eliminate any malicious activities. We offer
            a comprehensive range of expertise across sales, support,
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
          <div className=" flex flex-row gap-4 xl:mt-4">
            <button className=" cursor-pointer h-[3rem] w-fit flex gap-2 justify-center items-center bg-linear-to-r from-custom-darkblue via-custom-mediumblue to-custom-lightblue text-white px-6 rounded-lg text-xs xl:text-sm">
                  <ContactIcon className=" size-[1rem]" /> Know More
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
