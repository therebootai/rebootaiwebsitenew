import BannerIcon from "@/icons/BannerIcon";
import Image from "next/image";
import React from "react";

const HomeBannerVideo = () => {
  return (
    <div className=" relative">
      <video
        width={960}
        height={540}
        autoPlay
        loop
        muted
        preload="auto"
        className="w-full md:h-full h-[50vh] object-cover relative"
      >
        <source src="/images/rebootslider.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className=" absolute bottom-0 w-full flex justify-center items-center bg-linear-to-b from-black/0 via-black/40 to-black/80 ">
        <div className=" w-full max-w-[1200px] flex flex-col gap-2 xl:p-16 lg:p-8 p-4 ">
          <h3
            className=" text-4xl font-semibold w-fit  bg-linear-to-r  from-white  to-custom-green  bg-clip-text  text-transparent"
          >
            Go Digital
          </h3>
          <h4 className="text-2xl font-medium text-white">Grow Your Business from Local</h4>
          <div className="flex flex-row  gap-4 ">
            <div className="flex flex-col w-[80%] gap-2">
                <h1 className=" text-5xl font-semibold w-fit flex flex-row gap-2 items-center  bg-linear-to-r  from-custom-darkblue  to-custom-green  bg-clip-text  text-transparent">To Global <BannerIcon className=" size-[4rem]"/></h1>
                <h4 className="text-xl font-medium text-white">Aaj Hi Judhiye Reboot AI Ke Saath – Kyunki Business Yahin Se Grow Hota Hai!</h4>
            </div>
            <div className=" w-[20%] h-full bg-white p-2 rounded-md">
                <Image src={"/images/meta-business-partner-logo.webp"} alt="" width={1280} height={720} className="w-full h-full object-cover"/>
            </div>
          </div>
          <div className=" "></div>
        </div>
      </div>
    </div>
  );
};

export default HomeBannerVideo;
