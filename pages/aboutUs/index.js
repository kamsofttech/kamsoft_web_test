import ActionBoxComponent from '@/components/actionBox/ActionBoxComponent'

import Counter from '@/components/counter/Counter'
import BreadcumbStyle2 from '@/components/elements/breadcumb/breadcumbStyle2/BreadcumbStyle2'

import Portfolio from '@/components/portfolio/Portfolio'
import TestimonialNewComponent from '@/components/testimonialNew/TestimonialNewComponent'
import React from 'react'
import AbouTabComponent from '../../components/about/AbouTabComponent'


const aboutUs = () => {
  return (
  <div style={{background:'#fff'}}>
    <BreadcumbStyle2 main_title={"About Kamsoft"} sub_title={"Our Expertise. Know more about what we do"} background={"url('/images/header-inner/01.jpg') no-repeat center center/cover"}/>
    <AbouTabComponent/>
    
    <Portfolio/>
    <Counter/>
    <TestimonialNewComponent/>
    
    </div>
  )
}

export default aboutUs