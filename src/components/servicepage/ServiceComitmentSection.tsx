import Image from 'next/image'
import React from 'react'

const ServiceComitmentSection = () => {
    const comitments =[
        {name:"Lorem ipsum dolor sit amet consectetur.", desc:"Lorem ipsum dolor sit amet consectetur. Aliquet justo pellentesque sagittis enim. Scelerisque diam egestas et ullamcorper egestas morbi odio. Vehicula ut accumsan tortor vel. In commodo ultricies molestie nunc id molestie."},
      
        {name:"Lorem ipsum dolor sit amet consectetur.", desc:"Lorem ipsum dolor sit amet consectetur. Aliquet justo pellentesque sagittis enim. Scelerisque diam egestas et ullamcorper egestas morbi odio. Vehicula ut accumsan tortor vel. In commodo ultricies molestie nunc id molestie."},
      {name:"Lorem ipsum dolor sit amet consectetur.", desc:"Lorem ipsum dolor sit amet consectetur. Aliquet justo pellentesque sagittis enim. Scelerisque diam egestas et ullamcorper egestas morbi odio. Vehicula ut accumsan tortor vel. In commodo ultricies molestie nunc id molestie."},
      {name:"Lorem ipsum dolor sit amet consectetur.", desc:"Lorem ipsum dolor sit amet consectetur. Aliquet justo pellentesque sagittis enim. Scelerisque diam egestas et ullamcorper egestas morbi odio. Vehicula ut accumsan tortor vel. In commodo ultricies molestie nunc id molestie."},
      

    ]

    const solutions =[
        "/images/sol.png",
        "/images/sol.png",
        "/images/sol.png",
        "/images/sol.png",

    ]
  return (
    <div className='flex justify-center items-center'>
        <div className=" w-full max-w-[1200px] lg:p-8  p-4 flex flex-col lg:flex-row gap-4">
            <div className=' w-full lg:w-[60%] flex flex-col gap-6'>
                   <h1 className="xl:text-3xl text-2xl font-semibold w-fit flex flex-row gap-2 items-center  bg-linear-to-r  from-custom-darkblue  to-custom-green  bg-clip-text  text-transparent">
            Our Commitments
          </h1>
          <div className='flex flex-col gap-4'>
            {comitments.map((item,index)=>(
                <div className='flex gap-6 items-center ' key={index}>
                    <div className=' w-auto p-[3px] h-[90%] bg-custom-darkblue rounded-lg'></div>
                    <div className='flex flex-col gap-2'>
                        <h1 className=' text-xl font-semibold text-custom-darkblue'>{item.name}</h1>
                        <h4 className=' text-custom-textgray text-sm/[22px]'>{item.desc}</h4>
                    </div>
                </div>
            ))}
          </div>
            </div>
            <div className=' w-full lg:w-[40%]  flex flex-col gap-6'>
                 <h1 className="xl:text-3xl text-2xl font-semibold w-fit flex flex-row gap-2 items-center  bg-linear-to-r  from-custom-darkblue  to-custom-green  bg-clip-text  text-transparent">
            Solutions We Providew
          </h1>
          <div className=' grid grid-cols-2 gap-4 h-full'>
            {solutions.map((item,index)=>(
                <div key={index} className=' h-auto'>
                    <Image src={item} alt='' width={365} height={318} className=' w-full h-full object-cover rounded-lg'/>
                </div>
            ))}
          </div>
            </div>
        </div>
      
    </div>
  )
}

export default ServiceComitmentSection
