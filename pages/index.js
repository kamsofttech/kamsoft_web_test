
import AboutNewMainComponent from "@/components/aboutNew/AboutNewMainComponent";
import ActionBoxComponent from "@/components/actionBox/ActionBoxComponent";
import CaseStudyComponent from "@/components/caseStudy/CaseStudyComponent";
import DisplayTabs from "@/components/displayTabs/DisplayTabs";
import FeatureBoxComponent from "@/components/featureBox/FeatureBoxComponent";


import MainNewComponent from "@/components/mainNew/MainNewComponent";
import OurServicesNewComponent from "@/components/ourServicesNew/OurServicesNewComponent";
import PerfomanceComponent from "@/components/perfomance/PerfomanceComponent";
import ServicesImage from "@/components/serviceAboutImage/ServicesImage";

import TestimonialNewComponent from "@/components/testimonialNew/TestimonialNewComponent";
import React, { useEffect, useState } from "react";
import { ToggleButton, Button } from "react-bootstrap";
const Home = () => {
  const [secId, setSecId] = React.useState(1)
  const sec1 = React.useRef('')
  const sec2 = React.useRef('')
  const sec3 = React.useRef('')


  return (
    <>


      { /*<a onClick={()=>window.scrollTo(0,sec2.current.offsetHeight)}>click</a>*/}
      <MainNewComponent />
      {/* <SliderBottomComponent/> */}
      <AboutNewMainComponent />
      <OurServicesNewComponent />
      <ActionBoxComponent />
      <FeatureBoxComponent />
      <PerfomanceComponent />
      <TestimonialNewComponent />
      <ServicesImage/>
      <CaseStudyComponent/>
      <DisplayTabs/>
    </>
  );
};

export default Home;