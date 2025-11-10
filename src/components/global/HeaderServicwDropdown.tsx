"use client"
import React, { useState } from "react";
import IndutriesWeServe from "@/icons/IndutriesWeServe";
import MarketingSolution from "@/icons/MarketingSolution";
import SmartSolution from "@/icons/SmartSolution";
import WebDevelopment from "@/icons/WebDevelopment";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";

const HeaderServicwDropdown = () => {
  // Define services with their submenu, description, and image info
  const services = [
    {
      name: "Web Development",
      icon: <WebDevelopment />,
      submenu: [
        { name: "Frontend Development", href: "/web/frontend" },
        { name: "Backend Development", href: "/web/backend" },
      ],
      description:
        "At Reboot AI Private Limited, our mission is to enhance the competitiveness and agility of companies through innovative software solutions. We empower individuals and organizations with exceptional design, reliable technology, and ongoing support to drive transformation within their industries. Based in Kolkata, West Bengal, we offer comprehensive services across India.",
      imgSrc: "/images/webdev.png",
    },
    {
      name: "Marketing Solutions",
      icon: <MarketingSolution />,
      submenu: [
        { name: "SEO Services", href: "/marketing/seo" },
        { name: "Social Media Marketing", href: "/marketing/social" },
      ],
      description:
        "Innovative marketing strategies to boost your brand presence and maximize ROI.",
      imgSrc: "/images/marketing.png",
    },
    {
      name: "Smart Solutions",
      icon: <SmartSolution  />,
      submenu: [
        { name: "AI Integration", href: "/smart/ai" },
        { name: "Automation", href: "/smart/automation" },
      ],
      description:
        "Cutting-edge smart technology solutions designed to streamline your business processes.",
      imgSrc: "/images/smart.png",
    },
    {
      name: "Industries We Serve",
      icon: <IndutriesWeServe />,
      submenu: [
        { name: "Healthcare", href: "/industries/healthcare" },
        { name: "Finance", href: "/industries/finance" },
      ],
      description:
        "Specialized software solutions tailored for various industry requirements.",
      imgSrc: "/images/industries.png",
    },
  ];

  // State for currently selected service index
  const [selectedIndex, setSelectedIndex] = useState(0);

  const selectedService = services[selectedIndex];

  return (
    <div className="w-[60%] p-8 bg-white relative rounded-3xl inset-shadow-custom-light">
      <div className="w-full flex flex-row gap-4">
        <div className="w-[30%] flex flex-col gap-4">
          {services.map((item, index) => (
            <button
              key={index}
              className={`w-full flex justify-between items-center cursor-pointer text-custom-black hover:text-custom-darkblue hover:font-semibold ${
                index === selectedIndex ? "font-semibold text-custom-darkblue" : "font-normal"
              }`}
              onClick={() => setSelectedIndex(index)}
            >
              <div className="flex gap-2 items-center">
                <div>{React.cloneElement(item.icon, {
        color: index === selectedIndex ? "#0061FF" : "#222222",
      })}</div>
                <div>{item.name}</div>
              </div>
              <FaArrowRightLong />
            </button>
          ))}
        </div>
        <section className="w-[70%] h-auto">
          <div className="relative rounded-lg p-[1px] bg-gradient-to-tr from-custom-mediumblue via-custom-lightblue/50 to-custom-darkblue/60 shadow-lg">
            <div className="rounded-lg h-full bg-white backdrop-blur p-4 xl:p-8">
              <div className="flex flex-col gap-6">
                <div className="grid grid-cols-2 gap-4">
                  {selectedService.submenu.map((item, index) => (
                    <Link
                      href={item.href}
                      key={index}
                      className="w-full flex gap-8 items-center text-custom-black hover:text-custom-darkblue"
                    >
                      <div className="flex gap-2 items-center text-sm">
                        <div>{item.name}</div>
                      </div>
                      <IoIosArrowForward   />
                    </Link>
                  ))}
                </div>
                <div className="w-full flex flex-row gap-4">
                  <div className="w-[75%] text-custom-textgray text-xs">
                    {selectedService.description}
                  </div>
                  <div className="w-[25%]">
                    <Image
                      src={selectedService.imgSrc}
                      alt={selectedService.name}
                      width={189}
                      height={189}
                      className="w-full h-full rounded-md"
                    />
                  </div>
                </div>
              </div>
            </div>
            <span className="absolute -top-2 left-6 ">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17" fill="none">
  <path d="M19.9836 8.51389L19.9836 8.48611C14.4772 8.48611 10.0163 4.68056 10.0163 1.03454e-06L9.98375 1.0317e-06C9.98374 4.68056 5.52283 8.48611 -1.16304e-06 8.48611L-1.16547e-06 8.51389C5.50648 8.51389 9.98374 12.3056 9.98374 17L10.0163 17C10.0163 12.3194 14.4772 8.51389 20 8.51389L19.9836 8.51389Z" fill="#0061FF"/>
</svg>
            </span>
            <span className="absolute top-1/2 -right-4 ">
            <svg xmlns="http://www.w3.org/2000/svg" width="31" height="32" viewBox="0 0 31 32" fill="none">
  <path d="M30.9747 16.0261L30.9747 15.9739C22.4396 15.9739 15.5252 8.81046 15.5252 2.46185e-06L15.4748 2.45744e-06C15.4748 8.81046 8.56038 15.9739 -5.06299e-07 15.9739L-5.1087e-07 16.0261C8.53505 16.0261 15.4748 23.1634 15.4748 32L15.5252 32C15.5252 23.1895 22.4396 16.0261 31 16.0261L30.9747 16.0261Z" fill="#0061FF"/>
</svg></span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HeaderServicwDropdown;
