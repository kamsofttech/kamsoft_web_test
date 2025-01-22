
import OurServicesComponent from "@/components/Services/OurServicesComponent";
import AboutIntroComponent from "@/components/about/AboutIntroComponent";
import AboutNewMainComponent from "@/components/aboutNew/AboutNewMainComponent";
import ActionBoxComponent from "@/components/actionBox/ActionBoxComponent";
import FeatureBoxComponent from "@/components/featureBox/FeatureBoxComponent";

import StoreLocationComponent from "@/components/location/StoreLocationComponent";
import MainNewComponent from "@/components/mainNew/MainNewComponent";
import OurServicesNewComponent from "@/components/ourServicesNew/OurServicesNewComponent";
import PartnerComponent from "@/components/partners/PartnerComponent";
import PerfomanceComponent from "@/components/perfomance/PerfomanceComponent";
import SliderBottomComponent from "@/components/slider/SliderBottomComponent";
import SliderMainComponent from "@/components/slider/SliderMainComponent";
import TestimonialComponent from "@/components/testimonial/TestimonialComponent";
import TestimonialNewComponent from "@/components/testimonialNew/TestimonialNewComponent";
import React, { useEffect, useState } from "react";
import { ToggleButton,Button } from "react-bootstrap";
const Home = () => {
  const [secId,setSecId]=React.useState(1)
  const sec1=React.useRef('')
  const sec2=React.useRef('')
  const sec3=React.useRef('')
 
  
 return (
    <>
    

     { /*<a onClick={()=>window.scrollTo(0,sec2.current.offsetHeight)}>click</a>*/}
    <MainNewComponent/>
    {/* <SliderBottomComponent/> */}
    <AboutNewMainComponent/>
    <OurServicesNewComponent/>
    <ActionBoxComponent/>
    <FeatureBoxComponent/>
    <PerfomanceComponent/>
   <TestimonialNewComponent/>
    
    </>
  );
};

export default Home;