import { ServicesData } from '@/lib/servicesData'
import React from 'react'
import ServiceProductCard from '../card/ServiceProductCard'

const MainServicePage = () => {
   const nonSeoServices = ServicesData.filter(item => item.category !== "SEO")
  return (
   <div className=" flex  justify-center items-center">
      <div className=" w-ful max-w-[1300px]  lg:p-8 p-4 flex flex-col gap-4">
          <div className=" grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-4">
        {nonSeoServices.map((item, index) => (
          <div key={index} className=" w-full h-full">
            <ServiceProductCard imgsrc={item.serviceImg} name={item.heading} desc={item.description} />
          </div>
        ))}
      </div>
        </div>
    </div>
  )
}

export default MainServicePage
