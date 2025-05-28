
import AboutNewMainComponent from "@/components/aboutNew/AboutNewMainComponent";
import ClientLogo from "@/components/clientLogo/ClientLogo";
import ContactNewComponent from "@/components/contact/ContactNewComponent";
import MainNewComponent from "@/components/mainNew/MainNewComponent";
import OurServicesNewComponent from "@/components/ourServicesNew/OurServicesNewComponent";
import PortfolioComponent from "@/components/portfolio/PortfolioComponent";
import TechnologyComponent from "@/components/technology/TechnologyComponent";
import TestimonialNewComponent from "@/components/testimonialNew/TestimonialNewComponent";
import React, { useEffect, useState } from "react";

const Home = () => {
return (
    <>
      <MainNewComponent />
      <AboutNewMainComponent />
      <TechnologyComponent/>
      <OurServicesNewComponent />
      <ClientLogo/>
      <PortfolioComponent/>
      
      <TestimonialNewComponent />
      <ContactNewComponent/>
      
    </>
  );
};

export default Home;