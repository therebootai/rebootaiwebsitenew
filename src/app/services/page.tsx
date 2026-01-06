import SubPageBanner from '@/components/global/SubPageBanner'
import OurClientSection from '@/components/home/OurClientSection'
import ServiceComitmentSection from '@/components/servicepage/ServiceComitmentSection'
import ServicePage1stSection from '@/components/servicepage/ServicePage1stSection'
import MainPageTemplate from '@/template/MainPageTemplate'
import React from 'react'

const ServicePage = () => {
  return (
    <MainPageTemplate>
        <SubPageBanner heading='Our Services'/>
        <ServicePage1stSection/>
        <OurClientSection showSection={false}/>
        <ServiceComitmentSection/>
    </MainPageTemplate>
  )
}

export default ServicePage
