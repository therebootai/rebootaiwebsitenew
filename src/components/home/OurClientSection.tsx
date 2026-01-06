"use client";

import { Client_Data } from "@/lib/clientData";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import styles from "../css/OurClientSection.module.css";

type Props = { showSection?: boolean };

const OurClientSection: React.FC<Props> = ({showSection = true}) => {

  // Render one pass of the client cards (your original design preserved)
  const renderItems = () =>
    Client_Data.map((item, index) => (
      <section key={`client-${index}`} className="">
        <section className="md:p-2 h-[4.5rem] md:h-[5rem] xlg:h-[6rem] w-[8rem] md:w-[10rem] xlg:w-[12rem] rounded-md md:rounded-lg flex justify-center items-center border border-[#EEEEEE]">
          <Image
            src={item.imgsrc}
            alt={item.imgalt}
            width={244}
            height={20}
            className="object-contain h-full"
          />
        </section>
      </section>
    ));

  return (
    <div className="flex justify-center items-center">
      <div className="w-full max-w-[1200px] lg:p-8 p-4 flex flex-col gap-4">
        {showSection ? (
        <div className="flex flex-col gap-2">
          <h4>Our Clients</h4>
          <div className="flex justify-between items-center ">
            <h1 className="text-custom-black text-xl md:text-2xl lg:text-3xl font-semibold">
              Empowering Across Industry Leaders with
              <span className="bg-linear-to-r from-custom-darkblue to-custom-green bg-clip-text text-transparent">
              {" "}  Advanced AI
              </span>{" "}
              Solutions
            </h1>
          </div>
        </div>
        ):""}

        {/* Scroller wrapper (auto & infinite) */}
        <div
          className={`${styles.scroller} flex flex-row gap-4 `} // gap here is fine; track uses 1rem too
          // Slow movement; tune "40s" → "60s" for slower, "25s" for faster
          style={{ ["--duration" as any]: "200s" }}
        >
          {/* The trick: duplicate the list back-to-back for a seamless loop */}
          <div className={styles.track}>
            {renderItems()}
            {renderItems()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurClientSection;
