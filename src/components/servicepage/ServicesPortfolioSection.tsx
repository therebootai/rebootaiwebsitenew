"use client"
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react'
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'

type PortfolioType= {
    imgsrc?:string,
    alt?:string


} 

const ServicesPortfolioSection = ({portfolios=[]}:{portfolios?:PortfolioType[]}) => {
      const [slidesToShow, setSlidesToShow] = useState(5);
      const swiperRef = useRef<any>(null);
    
      useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth <= 350) setSlidesToShow(1);
          else if (window.innerWidth <= 460) setSlidesToShow(2);
          else if (window.innerWidth <= 860) setSlidesToShow(3);
          else if (window.innerWidth <= 1024) setSlidesToShow(3);
          else setSlidesToShow(4);
        };
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
      }, []);
  return (
    <>
    {portfolios.length >0 && (
    <div className="w-full " >
    <div className="max-w-[1200px] mx-auto lg:pt-10 lg:p-8  p-4  w-full flex flex-col gap-4">
        <div className=' flex justify-center items-center'>
            <h2 className='xl:text-3xl text-2xl font-semibold w-fit flex flex-row gap-2 items-center  bg-linear-to-r  from-custom-darkblue  to-custom-green  bg-clip-text  text-transparent'>Our Portfolio</h2>
        </div>
        <div className='w-full'>
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={slidesToShow}
        spaceBetween={-10}
        coverflowEffect={{
          rotate: 20,
          stretch: -20,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        loop={true}
        autoplay={{
          delay: 1800,
          disableOnInteraction: false,
        }}
        pagination={false}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="w-full"
      >
       {portfolios.map((item: PortfolioType, index: number) => (
            <SwiperSlide
              key={index}
              className=" rounded-lg"
            >
              <Image 
                src={item.imgsrc || "/placeholder.png"} 
                alt={item.alt || "Portfolio Image"} 
                width={1601} 
                height={1397} 
                className='w-full h-full rounded-md ' 
              />
            </SwiperSlide>
          ))}
      </Swiper>
      </div>
    </div>
  </div>)}
  </>
  )
}

export default ServicesPortfolioSection
