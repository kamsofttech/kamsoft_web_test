import AboutBox from '@/components/aboutBox/AboutBox'
// import ClientLogo from '@/components/clientLogo/ClientLogo'
import BreadcumbStyle2 from '@/components/elements/breadcumb/breadcumbStyle2/BreadcumbStyle2'
// import NewsComponent from '@/components/newsBoxComponent/NewsComponent'
// import PricingBox from '@/components/pricingBox/PricingBox'
import ProcessBox from '@/components/processBox/ProcessBox'
import React from 'react'

const howWeWork = () => {
  return (
    <div>
        <BreadcumbStyle2 main_title={"About Hi-soft"} sub_title={"Our Expertise. Know more about what we do"} background={"url('/images/header-inner/09.jpg') no-repeat center center/cover"}/>
        {/* <AboutBox/> */}
        <ProcessBox/>
        {/* <PricingBox/>
        <ClientLogo/>
        <NewsComponent/> */}
    </div>
  )
}

export default howWeWork