import Image from 'next/image'
import React from 'react'

const ServiceProductCard = ({imgsrc,name,desc}:{imgsrc?:string, name:string, desc?:string }) => {
  return (
    <div className=' relative w-full h-full rounded-lg overflow-hidden group '>
        <Image src={imgsrc || "/images/services.png"} alt={name} width={722} height={1000} className=' w-full h-full object-cover rounded-lg'/>
        <div className='absolute inset-0 group-hover:bg-sky-600/20 bg-black/20 transition-colors duration-500 rounded-lg pointer-events-none z-[20]'></div>
      
        <div className=' z-[50] h-[40%]  flex items-end absolute bottom-0 rounded-b-lg p-2 md:p-4 xl:p-4 w-full bg-linear-to-b from-white/0 via-white/80 to-white/90'>
            <div className=' flex flex-col gap-2 '>
                <h1 className=' text-lg line-clamp-1 font-semibold text-custom-darkblue'>{name}</h1>
                <h4 className=' text-custom-textgray text-xs line-clamp-2'>{desc}</h4>
            </div>
        </div>
      
    </div>
  )
}

export default ServiceProductCard
