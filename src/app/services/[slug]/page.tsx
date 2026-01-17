
import React from 'react'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { ServicesData } from '@/lib/servicesData'
import SubPageBanner from '@/components/global/SubPageBanner'
import OurClientSection from '@/components/home/OurClientSection'
import FaqTechnology from '@/components/service/FaqTechnology'
import ServiceComitmentSection from '@/components/servicepage/ServiceComitmentSection'
import ServicePage1stSection from '@/components/servicepage/ServicePage1stSection'
import MainPageTemplate from '@/template/MainPageTemplate'
import ServiceWhyChooseSection from '@/components/servicepage/ServiceWhyChooseSection'
import ServicesPortfolioSection from '@/components/servicepage/ServicesPortfolioSection'
// 1. Sub-Types for nested arrays/objects

export interface ImgContent {
  imgsrc: string;
  alt: string;
}

export interface VideoContent {
  video: string;
  text: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Commitment {
  name: string;
  desc: string;
}

export interface Solution {
  src: string;
}

// These are optional based on your previous code context
export interface WhyChooseData {
  heading: string;
  details: string[];
}

export interface ReadySectionData {
  name: string;
  details: string;
}

export interface PortfolioItem {
  imgsrc: string;
  alt: string;
}

// 2. Main Service Data Interface

export interface ServiceItem {
  slug: string;
  metaTitle: string;
  metaDesc: string;
  heading: string;
  description: string;
  category: string;
  serviceImg: string;
  
  // Nested Objects
  imgcontent: ImgContent;
  videoContent: VideoContent;
  
  // Arrays
  leftContent: FaqItem[];
  comitments: Commitment[]; // Kept spelling as per your data
  solutions: Solution[];

  // Optional fields (Use ? if some services don't have these)
  whyChoose?: WhyChooseData;
  readySection?: ReadySectionData;
  portfolios?: PortfolioItem[];
  audiosrc?:string
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = ServicesData.find((p) => p.slug === slug);

  if (!product) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: product.metaTitle,
    description: product.metaDesc,
  };
}


export function generateStaticParams() {
  return ServicesData.map((item) => ({
    slug: item.slug,
  }));
}


const ServiceDetailsPages = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  

  const product = (ServicesData as ServiceItem[]).find((p) => p.slug === slug);

  if (!product) {
    return notFound();
  }
  const { 
    heading, 
    description, 
    comitments, 
    solutions, 
    leftContent,
    imgcontent,
    videoContent,
    whyChoose,
    readySection,
    portfolios ,
    audiosrc
  } = product;

  return (
    <MainPageTemplate>
      <SubPageBanner heading="Our Services" />
      
      <ServicePage1stSection heading={heading} description={description } imgcontent={imgcontent} videoContent={videoContent} audiosrc={audiosrc} />
      
      <OurClientSection showSection={false} />
      
      <ServiceComitmentSection comitments={comitments} solutions={solutions} />
      <ServiceWhyChooseSection whyChoose={whyChoose} readySection={readySection}/>
      <ServicesPortfolioSection portfolios={portfolios}/>
      
      <FaqTechnology leftContent={leftContent} />
    </MainPageTemplate>
  );
};

export default ServiceDetailsPages;