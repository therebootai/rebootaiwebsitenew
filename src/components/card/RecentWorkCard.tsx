import ContactIcon from '@/icons/ContactIcon'
import Image from 'next/image'
import React from 'react'

const RecentWorkCard = ({imgsrc,name,desc}:{imgsrc?:string, name:string, desc?:string }) => {
  return (
    <div className=' relative w-full h-full rounded-lg border border-[#F5F5F5] '>
        <Image src={imgsrc || "/images/services.png"} alt={name} width={722} height={1000} className=' w-full h-full object-cover rounded-lg'/>
        <div className=' absolute bottom-0 rounded-b-lg p-2 md:p-4 xl:p-6 bg-linear-to-b from-white/0 via-white/70 to-white/80'>
            <div className=' flex flex-col gap-2'>
                <h1 className=' text-xl font-semibold text-custom-darkblue'>{name}</h1>
                <h4 className=' text-custom-textgray text-xs line-clamp-3'>{desc}</h4>
                 <button className=" cursor-pointer h-[2rem] w-fit flex gap-2 justify-center items-center bg-linear-to-r from-custom-darkblue via-custom-mediumblue to-custom-lightblue text-white px-4 rounded-sm text-xs xl:text-sm">
                  <ContactIcon className=" size-[1rem]" /> Know More
            </button>
            </div>
        </div>
      
    </div>
  )
}


export default RecentWorkCard
