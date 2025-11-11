"use client";
import BannerIcon from "@/icons/BannerIcon";
import Image from "next/image";
import React from "react";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../css/TechMarquee.module.css";

const HomeBannerVideo = () => {
  const technology = [
    "Digital",
    "AI/ML",
    "Marketing",
    "Design",
    "Vfx",
    "Development",
    "Learning",
  ];

  const partners = [
    {
      imgsrc: "/images/google-partner-logo.webp",
      imgalt: "google-partner-logo",
    },
    {
      imgsrc: "/images/meta-business-partner-logo.webp",
      imgalt: "meta-business-partner-logo",
    },

    {
      imgsrc: "/images/makeinindia.webp",
      imgalt: "makeinindia",
    },
  ];
  return (
    <div className=" relative">
      <video
        width={960}
        height={540}
        autoPlay
        loop
        muted
        preload="auto"
        className="w-full md:h-full h-[80vh] object-cover relative"
      >
        <source src="/images/rebootslider.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className=" absolute bottom-0 w-full flex justify-center items-center bg-linear-to-b from-black/0 via-black/40 to-black/80 ">
        <div className=" w-full max-w-[1200px] flex flex-col gap-1 lg:p-8 p-4 ">
          <h3 className=" text-2xl lg:text-3xl font-semibold w-fit  bg-linear-to-r  from-white  to-custom-green  bg-clip-text  text-transparent brightness-125">
            Go Digital
          </h3>
          <h4 className="lg:text-xl text-base font-medium text-white brightness-125">
            Grow Your Business from Local
          </h4>
          <div className="flex flex-row  items-center gap-4 ">
            <div className="flex flex-col w-full md:w-[80%] gap-2">
              <h1 className=" text-3xl lg:text-4xl font-semibold w-fit flex flex-row gap-2 items-center  bg-linear-to-r  from-custom-darkblue  to-custom-green  bg-clip-text  text-transparent brightness-125">
                To Global <BannerIcon className=" size-[2.5rem]" />
              </h1>
              <h4 className="lg:text-lg text-base font-medium text-white brightness-125">
                Aaj Hi Judhiye Reboot AI Ke Saath – Kyunki Business Yahin Se
                Grow Hota Hai!
              </h4>
            </div>
            <div className=" w-[20%] md:block hidden ">
              <Swiper
                modules={[Autoplay, EffectFade]}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                effect="fade"
                loop={true}
                speed={1000}
                className="w-full"
              >
                {partners.map((item, index) => (
                  <SwiperSlide
                    key={index}
                    className="w-full h-full bg-white p-2 rounded-md"
                  >
                    <Image
                      src={item.imgsrc}
                      alt={item.imgalt}
                      width={1280}
                      height={720}
                      className="w-full h-[5rem] object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className=" border-t-2 mt-8 border-[#FFFFFF4D] py-4 flex justify-between gap-4 md:justify-center items-center">
            <div className=" w-[40%]  md:hidden">
              <Swiper
                modules={[Autoplay, EffectFade]}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                effect="fade"
                loop={true}
                speed={1000}
                className="w-full"
              >
                {partners.map((item, index) => (
                  <SwiperSlide
                    key={index}
                    className="w-full h-full bg-white p-2 rounded-md"
                  >
                    <Image
                      src={item.imgsrc}
                      alt={item.imgalt}
                      width={1280}
                      height={720}
                      className="w-full h-[4rem] object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
         <div className="hidden md:flex md:w-fit flex-row gap-4 bg-linear-to-r from-custom-green via-custom-lightblue to-custom-yellow bg-clip-text text-transparent brightness-110">
    {technology.map((item, index) => (
      <div key={index} className="flex items-center gap-4 text-2xl">
        <h1 className="lg:text-xl text-base font-semibold">{item}</h1> |{" "}
      </div>
    ))}
  </div>

  {/* MOBILE: infinite auto-scroll (duplicate list for seamless loop) */}
  <div
    className={`md:hidden w-[60%] ${styles.scroller}`}
    style={{ ["--duration" as any]: "30s" }}  // set to "60s" to slow further
  >
    <div className={` bg-linear-to-r from-custom-green via-custom-lightblue to-custom-yellow bg-clip-text text-transparent brightness-125 ${styles.track}`}>
      {[...technology, ...technology].map((item, idx) => (
        <div key={idx} className="inline-flex items-center gap-4 text-2xl">
          <h1 className="text-xl font-semibold">
            {item}
          </h1>
          <span className="">|</span>
        </div>
      ))}
    </div>
  </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBannerVideo;
