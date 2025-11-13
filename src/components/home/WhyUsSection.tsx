"use client";

import { useState } from "react";

const WhyUsSection = () => {
  const [activeTab, setActiveTab] = useState("mission");

  return (
    <section className="w-full bg-white">
      
      <div className="max-w-[1200px] mx-auto lg:p-8 p-4">
       
        <div className="text-left mb-5">
          <p className="text-sm text-gray-500 tracking-widest pb-4">Why Us</p>
          <h2 className="text-3xl md:text-3xl font-bold">
            Why Choose <span className="bg-linear-to-r  from-custom-darkblue  to-custom-green  bg-clip-text  text-transparent">Business</span> With Us?
          </h2>
        </div>

       
        <div className="flex flex-col lg:flex-row items-start gap-8">
         
          <div className="w-full lg:w-2/3">
          
            <div className="flex flex-wrap gap-3 mb-6">
              <button
                onClick={() => setActiveTab("mission")}
                className={`px-5 py-2 rounded-md font-medium transition ${
                  activeTab === "mission"
                    ? "bg-[linear-gradient(90deg,#0061ff,#4fa0ff)] text-white"
                    : "bg-[#FFFFFF] text-gray-500 hover:bg-gray-200 border-[0.4px] border-gray-300"
                }`}
              >
                Mission & Vision
              </button>
              <button
                onClick={() => setActiveTab("leads")}
                className={`px-5 py-2 rounded-md font-medium transition ${
                  activeTab === "leads"
                    ? "bg-[linear-gradient(90deg,#0061ff,#4fa0ff)] text-white"
                    : "bg-[#FFFFFF] text-gray-500 hover:bg-gray-200 border-[0.5px] border-gray-300"
                }`}
              >
                Why Need Business Leads
              </button>
              <button
                onClick={() => setActiveTab("brand")}
                className={`px-5 py-2 rounded-md font-medium transition ${
                  activeTab === "brand"
                    ? "bg-[linear-gradient(90deg,#0061ff,#4fa0ff)] text-white"
                   : "bg-[#FFFFFF] text-gray-500 hover:bg-gray-200 border-[0.5px] border-gray-300"
                }`}
              >
                Why Make Brand Identity
              </button>
            </div>

    
            <div className="bg-white ">
              {activeTab === "mission" && (
                <div className="grid md:grid-cols-2 gap-8 md:divide-x-[2px] md:divide-[#CCCCCC]">
                 
                  <div className="md:pr-5">
                    <h3 className="text-xl font-semibold mb-3 text-custom-darkblue">
                      Mission
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Lorem ipsum dolor sit amet consectetur. Mattis felis velit
                      enim feugiat pellentesque non ut. Cum quis consectetur neque
                      phasellus mauris urna integer. Proin lacus lorem facilisis
                      convallis dolor nullam. Cursus dolor ullamcorper pellentesque
                      leo scelerisque amet faucibus sem sed.
                    </p>
                  </div>

                  <div className="md:pl-5">
                    <h3 className="text-xl font-semibold mb-3 text-custom-darkblue">
                      Vision
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Lorem ipsum dolor sit amet consectetur. Posuere et tellus
                      lorem tristique scelerisque. At mauris etiam morbi in sagittis
                      tristique hendrerit. Lectus ac ornare tincidunt nibh mattis
                      egestas faucibus. Eget congue purus quis senectus viverra ut
                      felis.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === "leads" && (
                <div>
                  <h3 className="text-xl font-semibold text-custom-darkblue">
                    Why Need Business Leads
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Business leads are the foundation of customer acquisition.
                    They help you identify and connect with potential clients who
                    are genuinely interested in your services, improving sales
                    efficiency and driving consistent growth.
                    Business leads are the foundation of customer acquisition.
                    They help you identify and connect with potential clients who
                    are genuinely interested in your services, improving sales
                    efficiency and driving consistent growth.
                    Business leads are the foundation of customer acquisition.
                    They help you identify and connect with potential clients who
                    are genuinely interested in your services, improving sales
                  </p>
                </div>
              )}

              {activeTab === "brand" && (
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-custom-darkblue">
                    Why Make Brand Identity
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    A strong brand identity creates recognition, trust, and
                    emotional connection with your audience. It helps distinguish
                    your business in a crowded market and strengthens long-term
                    loyalty.
                    A strong brand identity creates recognition, trust, and
                    emotional connection with your audience. It helps distinguish
                    your business in a crowded market and strengthens long-term
                    loyalty.
                    A strong brand identity creates recognition, trust, and
                    emotional connection with your audience. It helps distinguish
                    your business in a crowded market and strengthens long-term
                    loyalty.
                  </p>
                </div>
              )}
            </div>
          </div>

          
           <div className="w-full lg:w-1/3">

            {/* <ContactForm />  call ContactForm  from components */}
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
