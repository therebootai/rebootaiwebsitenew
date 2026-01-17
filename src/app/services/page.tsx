
import SubPageBanner from '@/components/global/SubPageBanner'
import MainServicePage from '@/components/servicepage/MainServicePage'
import MainPageTemplate from '@/template/MainPageTemplate'
import React from 'react'

const ServicePage = () => {


  return (
    <MainPageTemplate>
      <SubPageBanner heading='Services'/>
      <MainServicePage/>
    </MainPageTemplate>
  )
}

export default ServicePage
