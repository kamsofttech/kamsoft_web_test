
import AboutNewMainComponent from "@/components/aboutNew/AboutNewMainComponent";
import ClientLogo from "@/components/clientLogo/ClientLogo";
import ContactNewComponent from "@/components/contact/ContactNewComponent";
import MainNewComponent from "@/components/mainNew/MainNewComponent";
import OurServicesNewComponent from "@/components/ourServicesNew/OurServicesNewComponent";
import PortfolioComponent from "@/components/portfolio/PortfolioComponent";
import Seo from "@/components/seo/Seo";
import TechnologyComponent from "@/components/technology/TechnologyComponent";
import TestimonialNewComponent from "@/components/testimonialNew/TestimonialNewComponent";
import { getSchemaOrg, siteMeta } from "@/lib/seo-config";
import React, { useEffect, useState } from "react";

const Home = () => {
   const seo = {
    title: `${siteMeta.name} | ERP/API Solution and Service Provider,Goa,Pune and Delhi`,
    description: "ERP/API Solution and Service Provider,Goa,Pune and Delhi",
    keywords:"ERP implemention and support,Oracle JDEdward,software developement,RFID,RFID solutions,data process automation,website developement,real time tracking monitoring system,IOT,IOT solution,customized/application program interface developer,Data analytical/analyst,school Management,SMS,spot billing system ",
    url: `${siteMeta.url}/`,
    image: siteMeta.defaultImage,
    schema: getSchemaOrg({
      type: 'organization',
      title: siteMeta.name,
      url: siteMeta.url
    })
  }
return (
    <>
    <Seo {...seo}/>
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