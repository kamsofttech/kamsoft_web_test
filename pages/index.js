import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import AboutNewMainComponent from "@/components/aboutNew/AboutNewMainComponent";
import ActionBoxComponent from "@/components/actionBox/ActionBoxComponent";
import CaseStudyComponent from "@/components/caseStudy/CaseStudyComponent";
import Chatbot from "@/components/ChatbotComponent/Chatbot";
import DisplayTabs from "@/components/displayTabs/DisplayTabs";
import FeatureBoxComponent from "@/components/featureBox/FeatureBoxComponent";
import GoogleReviewsComponent from "@/components/googleReviews/GoogleReviewsComponent";
import MainNewComponent from "@/components/mainNew/MainNewComponent";
import OurServicesNewComponent from "@/components/ourServicesNew/OurServicesNewComponent";
import PerfomanceComponent from "@/components/perfomance/PerfomanceComponent";
import ServicesImage from "@/components/serviceAboutImage/ServicesImage";
import TestimonialNewComponent from "@/components/testimonialNew/TestimonialNewComponent";
import { fetchMenuData } from "@/redux/menu/menuActions";
import TechnologyWeUse from "@/components/technologyWeUse/TechnologyWeUse";
import OurProjectComponent from "@/components/ourProjectComponent/OurProjectComponent";
import TalkToUs from "@/components/talkToUsComponent/TalkToUs";
import OurExpertiseComp from "@/components/ourExpertise/OurExpertiseComp";

const Home = () => {
  const [nav, setNav] = useState(false);
  const [data, setData] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMenuData());

  }, [dispatch]); 

  return (
    <>
      <MainNewComponent />
      <TechnologyWeUse />
      <OurProjectComponent />
      <OurExpertiseComp />
      <AboutNewMainComponent />
      <OurServicesNewComponent />
      <ActionBoxComponent />
      <FeatureBoxComponent />
      <PerfomanceComponent />
      <TestimonialNewComponent />
      <ServicesImage />
      <CaseStudyComponent />
      <DisplayTabs />
      <GoogleReviewsComponent />
      <Chatbot />
      <TalkToUs/>
    </>
  );
};

export default Home;
