import Image from 'next/image'
import React from 'react'

interface Commitment {
  name: string
  desc: string
}

interface SolutionImage {
  src: string  // or `src: string | any` if using dynamic imports
  alt?: string
}

interface ServiceComitmentSectionProps {
  comitments: Commitment[]
  solutions: SolutionImage[]
}

const ServiceComitmentSection: React.FC<ServiceComitmentSectionProps> = ({ 
  comitments, 
  solutions 
}) => {
  return (
    <div className='flex justify-center items-center'>
      <div className="w-full max-w-[1200px] lg:p-8 p-4 flex flex-col md:flex-row gap-4">
        <div className='w-full md:w-[60%] flex flex-col gap-6'>
          <h1 className="xl:text-3xl text-2xl font-semibold w-fit flex flex-row gap-2 items-center bg-linear-to-r from-custom-darkblue to-custom-green bg-clip-text text-transparent">
            Our Commitments
          </h1>
          <div className='flex flex-col gap-4'>
            {comitments.map((item, index) => (
              <div className='flex gap-3 lg:gap-6 items-center' key={index}>
                <div className='w-auto p-[2px] h-[90%] bg-custom-darkblue rounded-lg'></div>
                <div className='flex flex-col gap-2'>
                  <h1 className='lg:text-xl md:text-sm text-base font-semibold text-custom-darkblue'>{item.name}</h1>
                  <h4 className='text-custom-textgray md:text-xs text-sm lg:text-sm/[22px]'>{item.desc}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className='w-full md:w-[40%] flex flex-col gap-6'>
          <h1 className="xl:text-3xl text-2xl font-semibold w-fit flex flex-row gap-2 items-center bg-linear-to-r from-custom-darkblue to-custom-green bg-clip-text text-transparent">
            Solutions We Provide
          </h1>
          <div className='grid grid-cols-2 gap-2 lg:gap-4 h-full'>
            {solutions.map((item, index) => (
              <div key={index} className='h-full w-full relative'>
                <Image 
                  src={item.src} 
                  alt={item.alt || `Solution ${index + 1}`}
                  width={365} 
                  height={318} 
                  className='w-full h-full object-cover rounded-lg'
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceComitmentSection
