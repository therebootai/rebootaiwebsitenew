"use client";

import { useState } from "react";
import EnquerySection from "./EnquerySection";

const WhyUsSection = () => {
  const [activeTab, setActiveTab] = useState("mission");

  return (
    <section className="w-full ">
      
      <div className="max-w-[1200px] mx-auto lg:p-8 p-4 flex flex-col gap-4 w-full">
        
       
        <div className="text-left ">
          <p className="text-sm text-gray-500 tracking-widest pb-4">Why Us</p>
          <h2 className="text-3xl md:text-3xl font-bold">
            Why Choose <span className="bg-linear-to-r  from-custom-darkblue  to-custom-green  bg-clip-text  text-transparent">Business</span> With Us?
          </h2>
        </div >
        <div className=" flex flex-row gap-4">

       
        <div className="flex flex-col gap-4 w-[40%]">
           <div className="flex flex-wrap gap-3 ">
              <button
                onClick={() => setActiveTab("mission")}
                className={`px-5 py-2 rounded-md font-medium transition ${
                  activeTab === "mission"
                    ? "bg-linear-to-b from-custom-lightblue to-custom-darkblue text-white"
                    : "bg-custom-darkblue/20 text-custom-darkblue hover:bg-linear-to-b from-custom-lightblue to-custom-darkblue border-[0.4px] border-custom-darkblue hover:text-white transition-colors duration-700"
                }`}
              >
                Our Mission
              </button>
              <button
                onClick={() => setActiveTab("vission")}
                className={`px-5 py-2 rounded-md font-medium transition ${
                  activeTab === "vission"
                    ? "bg-linear-to-b from-custom-lightblue to-custom-darkblue text-white"
                    : "bg-custom-darkblue/20 text-custom-darkblue hover:bg-linear-to-b from-custom-lightblue to-custom-darkblue border-[0.4px] border-custom-darkblue hover:text-white transition-colors duration-700"
                }`}
              >
                Our Vision
              </button>
            </div>
              <div className=" ">
              {activeTab === "mission" && (
                <div className=" text-sm">
                   
                    <p className="text-gray-600 leading-relaxed">
                    Our core business is to create and develop intelligent digital solutions, which will streamline business processes to deliver measurable outcomes. Basically, we are involved in creating a very efficient web site, mobile application, ERP, and custom software that is the precise solution to the unique issues of every client. We do embrace ourselves with strategy in every project we undertake and we ensure a comprehensive development of such projects and in providing the measurable return, it is our pledge. With the inclusion of on-going education, technological innovation, and collaboration with clients, we developed simplifying the use of digital tools as our ultimate objective and quality technology not exclusive to few. Our mission is to be the digital companion of the business and accompany them throughout the entire journey, starting with the first idea to the implementation and beyond.
                    </p>
                
                
                </div>
              )}
                {activeTab === "vission" && (
                <div className=" text-sm">
                    <p className="text-gray-600 leading-relaxed">
                     We desire to be the best technology partner of businesses across the whole of India, by providing them innovative future-ready scalable, and digital solutions. We aim at enabling any company to make it easy to have smart, efficient and scalable digital solutions, whether it is a start up or a large enterprise. We will be determined to employ modern and yet realistic technology to indeed drastically transform the way business is conducted and not just passively. We believe in making a difference, simplifying, and maintaining the online experiences of our customers. In essence, we find ourselves playing the major role in the expansion of the digital economy in diverse fields by being dependable and the application of the most recent developmental practices which will render the businesses the power they need to thrive in the digital world.  
                    </p>

                
                </div>
              )}
            </div>
         
   

        </div>
        
        <div className=" w-[60%] h-full">
          <EnquerySection/>
        </div>
        </div>
        </div>
    </section>
  );
};

export default WhyUsSection;
