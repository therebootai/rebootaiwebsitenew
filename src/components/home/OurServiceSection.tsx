import ContactIcon from "@/icons/ContactIcon";
import Link from "next/link";
import React from "react";
import ServiceProductCard from "../card/ServiceProductCard";
import { ServicesData } from "@/lib/servicesData";

const OurServiceSection = () => {

  return (
    <div className=" flex  justify-center items-center">
      <div className=" w-full max-w-[1200px]  lg:p-8 p-4 flex flex-col gap-4">
        <div className=" flex flex-col gap-2">
        <h4>Our Services</h4>
        <div className=" flex justify-between items-center ">
          <h1 className=" text-custom-black text-xl md:text-2xl lg:text-3xl font-semibold">
            We Deal With{" "}
            <span className="bg-linear-to-r  from-custom-darkblue  to-custom-green  bg-clip-text  text-transparent">
              Smart AI-Powered
            </span>{" "}
            Professional IT Services
          </h1>
          <Link
            href={"/services"}
            className="cursor-pointer h-[2.5rem] w-fit flex gap-2 justify-center items-center bg-linear-to-b from-custom-lightblue via-custom-mediumblue to-custom-darkblue text-white px-3 rounded-lg text-xs xl:text-sm"
          >
            <ContactIcon className=" size-[1rem]" /> Explore More..
          </Link>
        </div>
        </div>
   

      <div className=" grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-4">
        {ServicesData.slice(0,4).map((item, index) => (
          <Link href={`/services/${item.slug}`} key={index} className=" w-full h-full">
            <ServiceProductCard imgsrc={item.serviceImg} name={item.heading} desc={item.description} />
          </Link>
        ))}
      </div>
         </div>
    </div>
  );
};

export default OurServiceSection;
