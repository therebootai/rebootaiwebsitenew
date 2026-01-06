import ContactIcon from "@/icons/ContactIcon";
import Image from "next/image";
import React from "react";
import { FaPlay } from "react-icons/fa6";

const ServicePage1stSection = () => {
  return (
    <div className="flex justify-center items-center ">
      <div className=" w-full max-w-[1200px] lg:pt-16 lg:p-8  p-4 flex flex-col lg:flex-row gap-4">
        <div className=" w-full lg:w-[60%] flex flex-col gap-4">
          <div className="w-fit relative ml-4 pl-10 rounded-r-full  px-6 h-[3rem] flex justify-center items-center bg-custom-darkblue/10 text-custom-darkblue text-base font-medium">
            <div className="  absolute -left-6   border-white border-2 rounded-full bg-white ">
              <div className=" border-2 border-custom-darkblue rounded-full size-[3rem] bg-radial from-white via-custom-lightblue/10 to-custom-lightblue/60 flex justify-center items-center">
                <FaPlay className=" size-[1.2rem]" />
              </div>
            </div>
            Listen with below content
          </div>
          <h1 className="xl:text-3xl text-2xl font-semibold w-fit flex flex-row gap-2 items-center  bg-linear-to-r  from-custom-darkblue  to-custom-green  bg-clip-text  text-transparent">
            Let&apos;s Reboot Your Business with Smart
          </h1>
          <div className=" text-sm/[22px] text-custom-textgray">
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
        </div>
        <div className=" w-full md:w-[40%] flex flex-col gap-4">
          <Image
            src={"/images/service.png"}
            alt=""
            width={741}
            height={451}
            className= " h-auto lg:h-[85%] w-full object-cover rounded-lg"
          />
          <button className=" h-[3rem] lg:h-[15%] flex gap-2 text-white text-sm justify-center items-center bg-linear-to-br from-custom-lightblue/60 via-custom-mediumblue/80 to-custom-darkblue rounded-lg">
            <ContactIcon className=" size-[1.5rem]" /> Contact Us Today!
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicePage1stSection;
