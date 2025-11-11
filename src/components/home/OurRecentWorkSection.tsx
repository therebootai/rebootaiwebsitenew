"use client"
import React, { useEffect, useState } from 'react'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import RecentWorkCard from '../card/RecentWorkCard'

const OurRecentWorkSection = () => {
      const [slidesToShow, setSlidesToShow] = useState(4);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 350) {
        setSlidesToShow(1);
        setAutoplay(true);
      } else if (window.innerWidth <= 460) {
        setSlidesToShow(1);
        setAutoplay(true);
      } else if (window.innerWidth <= 860) {
        setSlidesToShow(2);
        setAutoplay(true);
      } else if (window.innerWidth <= 1224) {
        setSlidesToShow(2);
        setAutoplay(true);
      } else if (window.innerWidth <= 1380) {
        setSlidesToShow(2);
        setAutoplay(true);
      } else if (window.innerWidth <= 1780) {
        setSlidesToShow(2);
        setAutoplay(true);
      } else {
        setSlidesToShow(2);
        setAutoplay(true);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const works =[
    {imgsrc:"/images/Rectangle 190.png",name:"Lorem ipsum dolor sit amet consectetur.",desc:"Lorem ipsum dolor sit amet consectetur. Aliquet justo pellentesque sagittis enim. Scelerisque diam egestas et ullamcorper egestas morbi odio. Vehicula ut accumsan tortor vel. In commodo ultricies molestie nunc id molestie."},
    {imgsrc:"/images/Rectangle 191.png",name:"Lorem ipsum dolor sit amet consectetur.",desc:"Lorem ipsum dolor sit amet consectetur. Aliquet justo pellentesque sagittis enim. Scelerisque diam egestas et ullamcorper egestas morbi odio. Vehicula ut accumsan tortor vel. In commodo ultricies molestie nunc id molestie."}
  ]
  return (
    <div className=' flex justify-center items-center'>
        <div className="w-full max-w-[1200px] lg:p-8 p-4 flex flex-col gap-4">
               <div className="flex flex-col gap-2">
          <h4>Explore Our Recent Idea</h4>
          <div className="flex justify-between items-center ">
            <h1 className="text-custom-black text-xl md:text-2xl lg:text-3xl font-semibold">
             Explore Our Recent  
              <span className="bg-linear-to-r from-custom-darkblue to-custom-green bg-clip-text text-transparent">
               {" "} Innovative Creativity
              </span>{" "}
              Ideas
            </h1>
          </div>
        </div>
        <div className=' w-full'>
            <Swiper
          spaceBetween={10}
          slidesPerView={slidesToShow}
          autoplay={
            autoplay ? { delay: 3000, disableOnInteraction: false } : false
          }
          loop={true}
          modules={[Autoplay]}>
            {works.map((item,index)=>(
                <SwiperSlide key={index}>
                    <RecentWorkCard imgsrc={item.imgsrc} name={item.name} desc={item.desc}/>
                </SwiperSlide>
            ))}

          </Swiper>
        </div>
        </div>
      
    </div>
  )
}

export default OurRecentWorkSection
