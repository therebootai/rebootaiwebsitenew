"use client"
import HelpIcon from '@/icons/HelpIcon';
import HomeIcon from '@/icons/HomeIcon';
import ProductIcon from '@/icons/ProductIcon';
import QuotationIcon from '@/icons/QuotationIcon';
import ServiceIcon from '@/icons/ServiceIcon';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const MobileFixFooter = () => {
      const [isVisible, setIsVisible] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollThreshold = window.innerWidth <= 768 ? 100 : 300;

    const scrollTop = window.scrollY || window.pageYOffset;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const distanceFromBottom = documentHeight - (scrollTop + windowHeight);

    if (scrollTop > scrollThreshold && distanceFromBottom > 50) {
      setIsVisible(true);
      setIsAnimated(true);
    } else {
      setIsVisible(false);
      setIsAnimated(false);
    }
  };
  useEffect(() => {
    if (isVisible) {
      setIsAnimated(true);
    }
  }, [isVisible]);

  const navLinks =[
    {
        link:"/",icons:<HomeIcon className=' size-[1.5rem]'/>,name:"Home"
    },
     {
        link:"/services",icons:<ServiceIcon className=' size-[1.5rem]'/>,name:"Services"
    },
     {
        link:"",icons:<QuotationIcon className=' size-[1.5rem]'/>,name:"Quotation"
    },
     {
        link:"/products",icons:<ProductIcon className=' size-[1.5rem]'/>,name:"Products"
    },
     {
        link:"/contact-us",icons:<HelpIcon className=' size-[1.5rem]'/>,name:"Help"
    }
  ] 
  return (
      <div
      className={`fixed w-full z-[80] bottom-0 transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full pointer-events-none"
      }`}
    >
    <div className={`flex justify-center items-center gap-2 h-[5rem] px-3 md:hidden w-full  bg-linear-to-r from-custom-black to-custom-black  ${isAnimated ? "animate" : ""}`}>

        <div className=" w-full  absolute inset-0 z-[40] overflow-hidden flex justify-center items-center">
          <div className=" absolute w-[12rem] h-[5rem]  bg-[#00cb3a] bottom-4 blur-2xl  rounded-b-full"></div>
           <div className=" absolute w-[10rem] h-[5rem] top-4 -left-6 bg-custom-darkblue blur-3xl   rounded-b-full"></div>
           <div className=" absolute w-[10rem] h-[5rem] top-4 -right-6 bg-custom-darkblue  blur-3xl  rounded-b-full"></div>

        </div>
        <div className=' flex flex-row gap-2 justify-between items-center w-full z-[100]'>
            {navLinks.map((item,index)=>(
                <Link href={item.link} key={index} className=' flex flex-col items-center'>
                    <div>
                        {item.icons}
                    </div>
                    <div className=' text-white text-sm'>{item.name}</div>
                </Link>
            ))}
        </div>
      
    </div>
    </div>
  )
}

export default MobileFixFooter
