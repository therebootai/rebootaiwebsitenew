"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const OurProjectSection = () => {

      const [hoveredIndex, setHoveredIndex] = useState(null);
  const [slidesToShow, setSlidesToShow] = useState(5);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 560) {
        setSlidesToShow(2);
      } else if (window.innerWidth <= 860) {
        setSlidesToShow(4);
      } else if (window.innerWidth <= 1024) {
        setSlidesToShow(4);
      } else if (window.innerWidth <= 1380) {
        setSlidesToShow(5);
      } else if (window.innerWidth <= 1780) {
        setSlidesToShow(5);
      } else {
        setSlidesToShow(3);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

      const projects = [
    {
      name: "Logo Design",
      image: "/images/Logo-Design.webp",
      link: "",
    },
    {
      name: "Student App Development",
      image: "/images/student-app-development.webp",
      link: "",
    },
    {
      name: "Creative UI Design",
      image: "/images/creative-ui-design.webp",
      link: "",
    },
    {
      name: "Dental Clinic Management",
      image: "/images/dental-clinic-management.webp",
      link: "",
    },
    {
      name: "Education SAAS Development",
      image: "/images/education-saas-development.webp",
      link: "",
    },
    {
      name: "Service Center CRM",
      image: "/images/service-center-crm.webp",
      link: "",
    },
  ];
  return (
    <div className=" flex  justify-center items-center">
      <div className=" w-full max-w-[1200px]  lg:p-8 p-4 flex flex-col gap-4">
        <div className=" flex flex-col gap-2">
          <h4>Our Projects</h4>
          <div className=" flex justify-between items-center ">
            <h1 className=" text-custom-black text-xl md:text-2xl lg:text-3xl font-semibold">
              Explore
              <span className="bg-linear-to-r  from-custom-darkblue  to-custom-green  bg-clip-text  text-transparent">
                Reboot AIs
              </span>{" "}
              Innovative, Successful AI Project Solutions.
            </h1>
          </div>
        </div>
          <div className="w-full transition-all duration-300 relative">
          <Swiper   spaceBetween={10}
          slidesPerView={slidesToShow}
          autoplay={
        { delay: 3000, disableOnInteraction: false } 
          }
          loop={true}
          modules={[Autoplay]}>
            {projects.map((item:any, index:any) => (
              <SwiperSlide
                key={index}
              >
                <div
                  className={`relative w-full transition-all duration-300 rounded-lg h-[32rem]  !flex justify-center items-center ${
                    index % 2 === 0
                      ? "bg-[#4385F51A] text-[#4385F5]"
                      : "bg-[#3333331A] text-[#444444]"
                  }`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  style={{
                    zIndex: hoveredIndex === index ? 10 : 1,
                    transform: hoveredIndex === index ? "scale(1)" : "scale(1)", 
                    transformOrigin:
                      index === 5 || index === 4
                        ? "right center" 
                        : "center center", 
                  }}
                >
                  {hoveredIndex === index ? (
                    <div className="absolute   rounded-lg w-[24rem]  md:w-[28rem]  z-[1000] h-[32rem] bg-[#F5F5F5] overflow-hidden inset-0 p-4  ">
                      <div className="  relative h-[30rem] w-full  rounded-lg z-[1000]">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          objectFit="cover"
                          className="rounded-lg w-full  h-full border border-primary"
                        />
                      </div>
                      {/* <div className="absolute bottom-6 left-[50%] transform -translate-x-1/2">
                        <Link
                          href={item.link}
                          target="_blank"
                          className="flex justify-center boxshblue text-lg font-medium items-center h-[2.5rem] px-6 bg-[#4385F5] text-white border border-white rounded-md"
                        >
                          Live Preview
                        </Link>
                      </div> */}
                    </div>
                  ) : (
                    <h1 className="text-3xl font-medium -rotate-90 whitespace-nowrap">
                      {item.name}
                    </h1>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default OurProjectSection;
