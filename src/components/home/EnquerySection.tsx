import Image from 'next/image'
import React from 'react'
import FormCard from '../card/FormCard'

const EnquerySection = () => {
  return (
     <div className="relative w-full flex justify-center py-6 h-full">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10 h-full">
        <Image
          src="/images/formbg1.png"
          alt="background"
          width={2500}
          height={2200}
          className="object-cover object-left w-full h-full max-md:rotate-90"
        />
      </div>

      <div className="flex flex-col md:flex-row items-center gap-4 px-4  w-full">
        {/* Vertical Text */}
        <div className="w-[80px] flex justify-center">
          <div className="text-xl font-semibold text-center text-custom-darkblue md:-rotate-90 text-nowrap">
           Book a Service <br/> <span className='bg-linear-to-r  from-custom-darkblue  to-custom-green  bg-clip-text  text-transparent'>Call Today</span> 
          </div>
        </div>

        {/* Form Container */}
        <div className="">
          <FormCard />
        </div>
      </div>
    </div>
  )
}

export default EnquerySection
