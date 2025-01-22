import AboutSectionComponent from '@/components/about/approches/AboutSectionComponent'
import BreadcumbStyle1 from '@/components/elements/breadcumb/breadcumbStyle1/BreadcumbStyle1'
import GetinTouchComponent from '@/components/getInTouch/GetinTouchComponent'
import StoreLocationComponent from '@/components/location/StoreLocationComponent'
import MissionComponent from '@/components/mission/MissionComponent'
import NetworkComponent from '@/components/networks/NetworkComponent'
import PartnerComponent from '@/components/partners/PartnerComponent'
import TestimonialComponent from '@/components/testimonial/TestimonialComponent'
import WhyUSComponent from '@/components/whyus/WhyUSComponent'
import React from 'react'

const aboutUs = () => {
  return (
    <div>
        <BreadcumbStyle1 title={'About Us'} />
        <AboutSectionComponent/>
        <WhyUSComponent/>
        <MissionComponent/>
        <NetworkComponent/>
        <TestimonialComponent/>
        <StoreLocationComponent/>
        <PartnerComponent/>
    </div>
  )
}

export default aboutUs