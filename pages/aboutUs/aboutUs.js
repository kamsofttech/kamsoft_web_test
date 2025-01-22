import ActionBoxComponent from '@/components/actionBox/ActionBoxComponent'
import ClientLogo from '@/components/clientLogo/ClientLogo'
import Counter from '@/components/counter/Counter'
import BreadcumbStyle2 from '@/components/elements/breadcumb/breadcumbStyle2/BreadcumbStyle2'
import History from '@/components/history/History'
import Portfolio from '@/components/portfolio/Portfolio'
import TestimonialNewComponent from '@/components/testimonialNew/TestimonialNewComponent'
import React from 'react'


const aboutUs = () => {
  return (
  <div>
    <BreadcumbStyle2 main_title={"About Hi-soft"} sub_title={"Our Expertise. Know more about what we do"} background={"url('/images/header-inner/01.jpg') no-repeat center center/cover"}/>
    <History/>
    <Portfolio/>
    <Counter/>
    <TestimonialNewComponent/>
    <ClientLogo/>
    <ActionBoxComponent/>
    </div>
  )
}

export default aboutUs