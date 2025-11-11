"use client";

import ContactIcon from "@/icons/ContactIcon";
import { useRef } from "react";

export default function TechnologyLeft() {
  const btnRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="md:w-1/2 flex flex-col justify-center">
      <h2 className="text-3xl font-bold text-gray-900">
        We Are Using Latest Technology Tools{" "}
        <span className="text-blue-600">Smart AI-Powered</span> Solution
      </h2>
      <p className="text-gray-600 mt-4">
        Lorem ipsum dolor sit amet consectetur. Nisi id urna turpis tincidunt
        sagittis. Ipsum quam lorem curabitur metus ipsum. Cras bibendum maecenas
        vulputate nam pharetra amet morbi a ac. Purus integer habitant ultrices
        sapien. Quam feugiat at amet turpis tempor turpis ut. Mauris in bibendum
        tellus nulla odio tincidunt.
      </p>

      <div className="mt-6 inline-flex">
        <button className="btn flex items-center gap-2" ref={btnRef}>
          <ContactIcon className="w-4 h-4" />
          Get Free Consultation
        </button>
      </div>
    </div>
  );
}
