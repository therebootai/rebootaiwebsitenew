"use client";
import DesctopHeader from "@/components/global/DesctopHeader";
import Footer from "@/components/global/FooterSection";
import MobileFixFooter from "@/components/global/MobileFixFooter";
import { ReactNode } from "react";

interface TemplateProps {
  children?: ReactNode;
}

const MainPageTemplate: React.FC<TemplateProps> = ({ children }) => {
  return (
    <>
      <div className="flex w-full h-full flex-col overflow-x-hidden font-elmessiri">
        <div className=" z-[1000] w-full">
          <div className=" flex justify-center items-center z-[1000]">
            <DesctopHeader />
          </div>
        </div>

        <div className=" ">
          {children}
        </div>
        <Footer/>
        <MobileFixFooter/>
      </div>
    </>
  );
};

export default MainPageTemplate;
