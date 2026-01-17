"use client";

import React, { useEffect, useState } from "react";
import { FaChevronRight } from "react-icons/fa6";
import TechnologyRight from "../global/TechnologyRight";
import useElementHeight from "@/hooks/useElementHeight";

interface LeftContentProps {
  
    question: string;
    answer: string;
 
}

interface TechnologySectionProps {
  leftContent: LeftContentProps[];
}

const FaqTechnology: React.FC<TechnologySectionProps> = ({ leftContent }) => {
  const [openIndex, setOpenIndex] = useState(0);
     const [rightSideHeight, leftSideRef] = useElementHeight<HTMLDivElement>();
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="w-full flex justify-center ">
      <div
        className="w-full max-w-[1200px] flex flex-col lg:p-8 p-4 "
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(0, 97, 255, 0.09) 0%, rgba(0, 97, 255, 0) 100%)",
        }}
      >
        <div>
          <h2 className="text-xl md:text-2xl font-semibold  mb-3">
            <span className="bg-linear-to-r  from-custom-darkblue  to-custom-green  bg-clip-text  text-transparent">
              {" "}
              Frequently Asked Question ?
            </span>
          </h2>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start gap-4 md:gap-6 w-full">
          <div className="md:w-1/2 w-full overflow-y-scroll no-scrollbar" style={{
          height: isSmallScreen ? "auto" : `${rightSideHeight}px`,
        }}>
            <div className="rounded-xl w-full">
              {leftContent.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={index}
                    className={`rounded-md transition-all mb-2 w-full ${
                      isOpen
                        ? "border-[0.2px] border-transparent bg-gradient-to-r from-custom-mediumblue to-custom-lightblue p-[0px] rounded-md"
                        : "border border-gray-300"
                    }`}
                  >
                    <div className={`rounded-md bg-white w-full`}>
                      <button
                        onClick={() => handleToggle(index)}
                        className={`w-full flex justify-between items-center text-left py-4 px-3 cursor-pointer transition-colors duration-300 ${
                          isOpen
                            ? "bg-linear-to-br from-custom-mediumblue to-custom-lightblue  rounded-t-md text-white"
                            : " text-gray-800"
                        }`}
                      >
                        <span className="font-medium w-full">{item.question}</span>
                        <FaChevronRight
                          className={`transform transition-transform duration-300 text-[12px] ${
                            isOpen
                              ? "rotate-90 text-white"
                              : "rotate-0 text-gray-600"
                          }`}
                        />
                      </button>

                      <div
                        className={`overflow-hidden transition-all duration-300 w-full ${
                          isOpen ? "max-h-40 p-4" : "max-h-0 p-0"
                        }`}
                      >
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
<div className=" md:w-[50%] w-full" ref={leftSideRef}>
          <TechnologyRight />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqTechnology;
