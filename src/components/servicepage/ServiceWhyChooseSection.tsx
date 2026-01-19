import ContactIcon from '@/icons/ContactIcon'
import React from 'react'

interface WhyChooseData {
  heading: string;
  details: string[]; 
}


interface ReadySectionData {
  name: string;
  details: string; 
}

interface ServiceWhyChooseSectionProps {
  whyChoose?: WhyChooseData;   
  readySection?: ReadySectionData; 
}

const ServiceWhyChooseSection:React.FC<ServiceWhyChooseSectionProps> = ({whyChoose,readySection}) => {
      const details = whyChoose?.details ?? [];

  if (details.length === 0 || !readySection) return null;
  return (
    <>
  
   <div className="flex justify-center items-center ">
      <div className=" w-full max-w-[1200px] lg:pt-16 lg:p-8  p-4 flex flex-col lg:flex-row gap-4">
        {whyChoose ?(
        <div className='w-[60%] flex flex-col gap-4'>
            <h2 className='xl:text-3xl text-2xl font-semibold w-fit flex flex-row gap-2 items-center  bg-linear-to-r  from-custom-darkblue  to-custom-green  bg-clip-text  text-transparent'>{whyChoose.heading}</h2>
            <div className='flex flex-col gap-2'>
                {whyChoose.details.map((item,index)=>(
                    <div className=' flex flex-row  gap-2' key={index}>
                        <div className=' w-auto'>
                            <ContactIcon color='#0061FF' className=' size-6'/>
                        </div>
                        <div className=' w-full text-base' dangerouslySetInnerHTML={{__html:item}}>
                            
                        </div>
                    </div>
                ))}
            </div>

        </div>) :null}
        {readySection ? (
            <div className='flex flex-col gap-4 justify-between w-[40%]'>
              <div className=' flex flex-col gap-4'>
                <h2 className='xl:text-3xl text-2xl font-semibold w-fit flex flex-row gap-2 items-center  bg-linear-to-r  from-custom-darkblue  to-custom-green  bg-clip-text  text-transparent'>{readySection.name}</h2>
                <div className=' flex flex-row gap-2 '>
                    <div className='w-auto  '>
                        <div className=' w-1 h-full bg-custom-darkblue'></div>

                    </div>
                    <div className=' text-custom-textgray text-sm' dangerouslySetInnerHTML={{__html:readySection.details}}>
                        
                    </div>
                </div>
                </div>
                   <button className=" h-[3rem]  flex gap-2 text-white text-base font-medium justify-center items-center bg-linear-to-r from-custom-darkblue via-custom-mediumblue to-custom-lightblue rounded-lg">
            <ContactIcon className=" size-[1.5rem]" /> Contact Us Today!
          </button>
            </div>
        ):null}
        </div>
    </div>
    </>
  )
}

export default ServiceWhyChooseSection
