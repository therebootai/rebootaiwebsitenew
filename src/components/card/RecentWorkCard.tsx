
import Image from 'next/image'
import React from 'react'

const RecentWorkCard = ({imgsrc,name}:{imgsrc?:string, name:string }) => {
  return (
    <div className=' relative w-full h-full rounded-lg border border-[#F5F5F5] '>
        <Image src={imgsrc || "/images/services.png"} alt={name} width={1000} height={1000} className=' w-full h-full object-cover rounded-lg'/>
        <div className=' w-full absolute bottom-0 rounded-b-lg p-2 md:p-4 xl:p-6 bg-linear-to-b from-white/0 via-white/70 to-white/80'>
            <div className=' flex flex-col gap-2'>
                <h4 className=' text-custom-textgray text-base font-semibold '>{name}</h4>
               
            </div>
        </div>
      
    </div>
  )
}


export default RecentWorkCard
