"use client";

import TechnologyRight from "../global/TechnologyRight";
import TechnologyLeft from "./TechnologyLeft";

export default function TechnologySection() {
  return (
    <section
      className="max-w-[1200px] mx-auto rounded-lg lg:p-8 p-4"
      style={{
        background:
          "radial-gradient(50% 50% at 50% 50%, rgba(0, 97, 255, 0.09) 0%, rgba(0, 97, 255, 0) 100%)",
      }}
    >
      <div className="md:flex-row flex flex-col gap-4 lg:gap-6  items-stretch border-[0.4px] border-gray-300 md:p-10 p-2 rounded-lg">
        <div className="md:w-[50%] w-full">
        <TechnologyLeft />
        </div>
       <div className=" w-full md:w-[50%]">
        <TechnologyRight/>
        </div>
      </div>
    </section>
  );
}
