import ContactIcon from "@/icons/ContactIcon";
import React from "react";

const FormCard = () => {
  const services = [
    "Web Design",
    "UI/UX Design",
    "Web Apps",
    "CRM",
    "Digital Marketing",
    "Mobile App",
    "Digital Marketing",
    "Editing",
  ];
  return (
    <form className=" flex flex-col gap-4">
      <div className="flex flex-wrap gap-2 items-center">
        {services.map((item, index) => (
          <div
            key={index}
            className={`bg-custom-darkblue/10 text-custom-darkblue hover:bg-linear-to-b from-custom-lightblue to-custom-darkblue border-[0.4px] border-custom-darkblue px-3 text-xs py-2 rounded-md font-medium  hover:text-white transition-colors duration-700 cursor-pointer`}
          >
            {item}
          </div>
        ))}
      </div>
      <div className=" grid grid-cols-2 gap-4">
        <div>
          <input
            type="text"
            placeholder="Name"
            className="h-[3rem] bg-[#0061FF0D] rounded-md text-xs px-2 w-full focus:outline-1 outline-custom-darkblue"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Mobile Number or WhatsApp"
            className="h-[3rem] bg-[#0061FF0D] rounded-md text-xs px-2 w-full focus:outline-1 outline-custom-darkblue"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Email"
            className="h-[3rem] bg-[#0061FF0D] rounded-md text-xs px-2 w-full focus:outline-1 outline-custom-darkblue"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Message"
            className="h-[3rem] bg-[#0061FF0D] rounded-md text-xs px-2 w-full focus:outline-1 outline-custom-darkblue"
          />
        </div>
        <button className="btn">
          <ContactIcon className=" size-[1.5rem]" />
          Submit
        </button>
      </div>
    </form>
  );
};

export default FormCard;
