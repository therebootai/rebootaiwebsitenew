

// please read this -------------->  This page actual   app/service/page.tsx 

import FaqTechnology from "@/components/service/FaqTechnology";
import MainPageTemplate from "@/template/MainPageTemplate";

import React from "react";

const page = () => {
  const leftContent = {
    
    items: [
      {
        question: "What services do you offer?",
        answer:
          "We specialize in AI, web development, and digital transformation for enterprises. ",
      },
      {
        question: "How can I get started?",
        answer:
          "You can reach out via our contact page or schedule a consultation with our team.",
      },
      {
        question: "What services do you offer?",
        answer:
          "We specialize in AI, web development, and digital transformation for enterprises.",
      },
      {
        question: "How can I get started?",
        answer:
          "You can reach out via our contact page or schedule a consultation with our team.",
      },
      {
        question: "What services do you offer?",
        answer:
          "We specialize in AI, web development, and digital transformation for enterprises.",
      },
      {
        question: "How can I get started?",
        answer:
          "You can reach out via our contact page or schedule a consultation with our team.",
      },
    ],
  };
  return (
    <>
      <MainPageTemplate>
        <FaqTechnology leftContent={leftContent} />
      </MainPageTemplate>
    </>
  );
};

export default page;
