"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const SomeDesignSection = () => {
          const [slidesToShow, setSlidesToShow] = useState(4);
      const [autoplay, setAutoplay] = useState(true);
    
      useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth <= 350) {
            setSlidesToShow(1);
            setAutoplay(true);
          } else if (window.innerWidth <= 460) {
            setSlidesToShow(2);
            setAutoplay(true);
          } else if (window.innerWidth <= 860) {
            setSlidesToShow(2);
            setAutoplay(true);
          } else if (window.innerWidth <= 1224) {
            setSlidesToShow(3);
            setAutoplay(true);
          } else if (window.innerWidth <= 1380) {
            setSlidesToShow(3);
            setAutoplay(true);
          } else if (window.innerWidth <= 1780) {
            setSlidesToShow(3);
            setAutoplay(true);
          } else {
            setSlidesToShow(3);
            setAutoplay(true);
          }
        };
    
        window.addEventListener("resize", handleResize);
        handleResize();
    
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);

      const designs =[
        {imgsrc:"/images/design1.jpg", imgalt:""},
        {imgsrc:"/images/design2.jpg", imgalt:""},
        {imgsrc:"/images/design3.jpg", imgalt:""},

      ]
  return (
    <div className=' flex justify-center items-center'>
        <div className='w-full max-w-[1200px] lg:p-8 p-4 flex flex-col gap-4'>
                    <div className=' w-full'>
            <Swiper
          spaceBetween={10}
          slidesPerView={slidesToShow}
          autoplay={
            autoplay ? { delay: 3000, disableOnInteraction: false } : false
          }
          loop={true}
          modules={[Autoplay]}>
            {designs.map((item,index)=>(
                <SwiperSlide key={index}>
                    <Image src={item.imgsrc} alt={item.imgalt} width={1000} height={1000} className=' rounded-lg'/>
                </SwiperSlide>
            ))}

          </Swiper>
        </div>

        </div>
      
    </div>
  )
}

export default SomeDesignSection
