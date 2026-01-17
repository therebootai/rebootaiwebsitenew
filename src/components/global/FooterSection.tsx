"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaGlobe, FaInstagram, FaLinkedinIn, FaPhoneVolume, FaWhatsapp, FaYoutube } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";
import { HiLocationMarker, HiOutlineCurrencyRupee } from "react-icons/hi";
import { BsChatQuote, BsExclamationDiamond } from "react-icons/bs";
import { RiTwitterXLine } from "react-icons/ri";
import { ServicesData } from "@/lib/servicesData";

const Footer = () => {
  const footerLinks = [
    {
      head: "Web & APP Services",
      links: [
              { text: "Custom Website Development", href: "/services/custom-website-development" },
        { text: "Ecommerce Website Development", href: "/services/" },
        { text: "Web Application Development", href: "/services/" },
        { text: "SAAS Development", href: "/services/" },
        { text: "Mobile Apps Development", href: "/services/" },
        { text: "AI & ML Development", href: "/services/" },
      ],
    },
    {
      head: "Marketing Solutions",
      links: [
          { text: "Google Marketing", href: "/services/" },
        { text: "Social Media Marketing", href: "/services/" },
        { text: "Whatsapp API Marketing", href: "/services/" },
        { text: "Influencer Marketing", href: "/services/" },
        { text: "Lead Generation Service", href: "/services/" },
        { text: "PR & Branding", href: "/services/" },
      ],
    },
    {
      head: "Smart Solutions & Products",
      links: [
        { text: "Business Consultation", href: "/services/" },
        { text: "Cloud Server Setup", href: "/services/" },
        { text: "UI & UX Solution", href: "/services/" },
        {
          text: "Educational CRM Advanced",
          href: "/products/educational-CRM-advanced",
        },
        {
          text: "Clinic Management Software",
          href: "/products/clinic-management-software",
        },
        {
          text: "Service Center Management CRM ",
          href: "/products/service-center-management-crm",
        },
      ],
    },
    {
      head: "Quick Links",
      links: [
        
        {
          text: "About Us",
          href: "/about",
        },
        {
          text: "Services",
          href: "/services",
        },
        {
          text: "Products",
          href: "/products",
        },
        {
          text: "career",
          href: "/career",
        },
        {
          text: "blogs",
          href: "/blogs",
        },
        {
          text: "Contact Us",
          href: "/contact-us",
        },
      ],
    },
  ];

    const nonSeoServices = ServicesData.filter(item => item.category === "SEO");

    const capitalizeWords = (str: string) => {
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}


  return (
    <footer className=" relative ">
      <div className="absolute inset-0 z-0 ">
        <Image
          src="/images/footer-bg.png"
          alt="Footer Background"
          fill
          className="opacity-75 object-cover"
        />
      </div>
      <div className="bg-[#222]/85 relative">
      <div className=" relative z-10 w-full max-w-[1200px] mx-auto p-4 xlg:p-8 flex flex-col gap-11">
        <div className="grid lg:grid-cols-4 grid-cols-1 gap-4">
          {footerLinks.map((item, index) => (
            <div className="flex flex-col gap-3" key={index}>
              <h2 className="xlg:text-sm lg:text-sm text-lg font-bold text-justify text-white flex items-center gap-1">
                <span>{item.head}</span>
                <span className="bg-[linear-gradient(90deg,_#4385F5_0%,_rgba(67,_133,_245,_0.00)_100%)] w-12 h-0.5"></span>
              </h2>
              <ul className="flex flex-col lg:text-xs text-base xlg:text-sm gap-2 leading-5">
                {item.links.map((link, count) => (
                  <Link
                    href={link.href}
                    className="flex items-center capitalize gap-2 text-white"
                    key={count}
                  >
                    <span className="text-primary">&gt;</span>
                    <span>{link.text}</span>
                  </Link>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="h-0.5 w-full bg-[rgba(139,139,139,0.6)]"></div>
        <div className="grid lg:grid-cols-4 grid-cols-1 gap-6 ">
          <div className="flex flex-col items-start gap-2 ">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="logo"
                width={253}
                height={46}
                className=" lg:h-[2rem] h-[3rem] xlg:h-[2rem] w-full"
              />
            </Link>
            <p className="xlg:text-sm lg:text-sm text-sm text-white ">
              Reboot AI Pvt. Ltd. is most growing IT company in North East India
              including Siliguri, Kolkata. We provide Tech & Marketing Solution
              for your business.
            </p>
          </div>
          <div className="flex flex-col gap-2 ">
            <h2 className="xlg:text-base lg:text-base text-lg font-bold text-justify text-white flex items-center gap-1">
              <span>Our Reg. No.</span>
              <span className="bg-[linear-gradient(90deg,_#4385F5_0%,_rgba(67,_133,_245,_0.00)_100%)] w-12 h-1"></span>
            </h2>
            <p className="xlg:text-sm lg:text-sm text-base text-white whitespace-nowrap">
              CIN No: U62012WB2024PTC274361
            </p>
            <p className="xlg:text-sm lg:text-sm text-base text-white whitespace-nowrap">
              MSME No: UDYOG-WB-14-000000
            </p>
          </div>
          <div className="flex flex-col gap-2  xlg:text-sm lg:text-sm text-base">
            <h2 className="xlg:text-base lg:text-base text-lg font-bold text-justify text-white flex items-center gap-1">
              <span>Get in touch</span>
              <span className="bg-[linear-gradient(90deg,_#4385F5_0%,_rgba(67,_133,_245,_0.00)_100%)] w-12 h-1"></span>
            </h2>
            <p className=" text-white flex items-center gap-1">
              <FaPhoneVolume className="text-primary" />{" "}
              <Link href="tel:03534069362">03534 069362</Link>
            </p>
            <p className=" text-white flex items-center gap-1">
              <FaWhatsapp className="text-primary" />{" "}
              <Link href="https://api.whatsapp.com/send?phone=919088576170">
                91 9088576170
              </Link>
            </p>
            <p className=" text-white flex items-center gap-1">
              <IoMailSharp className="text-primary" />{" "}
              <Link href="mailTo:info@rebootai.in">info@rebootai.in</Link>
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="xlg:text-base lg:text-base text-lg font-bold text-justify text-white flex items-center gap-1">
              <span>Our Reg. Offices</span>
              <span className="bg-[linear-gradient(90deg,_#4385F5_0%,_rgba(67,_133,_245,_0.00)_100%)] w-12 h-1"></span>
            </h2>
            <div className="xlg:text-sm lg:text-sm text-base text-white flex gap-1">
              <HiLocationMarker className="text-primary w-[2rem] text-xl" />
              <p>
                4th Floor, Shib Shankar Market, Bidhan Road Siliguri, West
                Bengal, IN 734001
              </p>
            </div>
          </div>
        </div>
        <div className="h-0.5 w-full bg-[rgba(139,139,139,0.6)]"></div>
        <div className=" md:grid-cols-2 grid-cols-1 grid lg:grid-cols-4 gap-4">
          <div className=" h-[7rem] lg:w-full lg:h-full relative">
            <Image
              src="/images/msme.png"
              alt="msme"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-col justify-between gap-2 xlg:gap-2">
            <button
              type="button"
              className="text-sm xl:text-base font-bold text-white px-4 xl:px-10 py-2 bg-custom-darkblue inline-flex items-center gap-2 rounded-lg"
            >
              <HiOutlineCurrencyRupee /> <span>Pay Online</span>
            </button>
            <button
              type="button"
              className="text-sm xl:text-base font-bold text-white px-4 xl:px-10 py-2 bg-custom-darkblue inline-flex items-center gap-2 rounded-lg"
            >
              <BsChatQuote /> <span>Ge A Quote</span>
            </button>
            <Link
              href={"/contact-us"}
              type="button"
              className="text-sm xl:text-base font-bold text-white px-4 xl:px-10 py-2 bg-custom-darkblue inline-flex items-center gap-2 rounded-lg"
            >
             
             <BsExclamationDiamond /> <span>Complain Us!</span>
            </Link>
          </div>
          <div className="h-[7rem] lg:w-full lg:h-full  relative bg-white rounded-lg">
            <Image
              src="/images/google-partner-logo.webp"
              alt="google"
              fill
              className="object-contain"
            />
          </div>
          <div className="h-[7rem] lg:w-full lg:h-full relative bg-white rounded-lg">
            <Image
              src="/images/meta-business-partner-logo.webp"
              alt="meta"
              fill
              className="object-contain"
            />
          </div>
        </div>

 <div className="h-0.5 w-full bg-[rgba(139,139,139,0.6)]"></div>
          <div className="grid lg:grid-cols-4 grid-cols-1 gap-4">
          {nonSeoServices.map((item, index) => (
            <div className="flex flex-col gap-3" key={index}>
             
              <ul className="flex flex-col lg:text-xs text-base xlg:text-[13px] gap-2 ">
                  <Link
                    href={`/services/${item.slug}`}
                    className="flex items-center capitalize gap-2 text-white"
                    key={index}
                  >
                    <span className="text-primary">&gt;</span>
                    <span className="">{capitalizeWords(item.heading)}</span>
                  </Link>
              </ul>
            </div>
          ))}
        </div>
        <div className="h-0.5 w-full bg-[rgba(139,139,139,0.6)]"></div>
        <div className="flex items-center lg:items-stretch flex-col gap-4 lg:flex-row justify-between">
          <h1 className="flex flex-row gap-2 text-xs items-center font-medium text-white">
            Find Us On :
            <Link href={""} target="_blank" className="">
             
              <div className=" size-[1.5rem] rounded-full bg-white flex justify-center items-center">
               <FaLinkedinIn className=" text-custom-darkblue" />
              </div>
            </Link>
            <Link
              href={"https://www.instagram.com/therebootai/"}
              target="_blank"
              className=""
            >
               <div className=" size-[1.5rem] rounded-full bg-white flex justify-center items-center">
                <FaInstagram className=" text-custom-darkblue"/>
              </div>
            </Link>
            <Link href={"https://x.com/reboot_ai"} target="_blank" className="">
              <div className=" size-[1.5rem] rounded-full bg-white flex justify-center items-center">
                <RiTwitterXLine className=" text-custom-darkblue"  />
              </div>
            </Link>
            <Link
              href={"https://www.youtube.com/@therebootai"}
              target="_blank"
              className=""
            >
              <div className=" size-[1.5rem] rounded-full bg-white flex justify-center items-center">
                <FaYoutube className=" text-custom-darkblue"/>
              </div>
            </Link>
          </h1>
          <h1 className="text-white text-xs">
            &copy;
            <span className="font-bold">Reboot AI Private Limited.</span>
            All Rights Reserved
          </h1>
          <h1 className="text-white text-xs">
            <Link href={"/images/Terms & Conditions.pdf"} target="_blank">
              Terms and Conditions
            </Link>{" "}
            |{" "}
            <Link href={"/images/Refund Policy.pdf"} target="_blank">
              Refund Policy
            </Link>{" "}
            |{" "}
            <Link href={"/images/Privacy Policy.pdf"} target="_blank">
              Privacy Policy
            </Link>
          </h1>
        </div>
      </div>
</div>

    </footer>
  );
};

export default Footer;
