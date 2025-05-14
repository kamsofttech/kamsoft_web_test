import React from 'react'
import ChecklistComponent from '../elements/checklist/ChecklistComponent'
import TitleNewComponent from '../elements/titleNew/TitleNewComponent'
import { Col, Row } from 'react-bootstrap'
import ImageComponent from '../elements/imageComponent/ImageComponent'
import styles from './ourServicesNew.module.css'
const SeoTabComponent = () => {
  return (
    <div className={styles.full_box_2}>
            <Row>
              <Col md="5">
                <ImageComponent image={'/images/feature-info/02.jpg'} />
                </Col>
              <Col md="7">
                <div className={styles.box_2}>
                  <TitleNewComponent sub_title={"Speed up you website"} main_title={"Digital Marketing & SEO Services"} desc={"Boost your online visibility and drive targeted traffic with our comprehensive digital marketing and SEO services, tailored to grow your brand and increase conversions. "} />
                  
                  <Row>
                    <Col md={6}>
                    <ChecklistComponent items={["  Website SEO Audit & Optimization. ",
                    " Keyword Research & Strategy",
                    " On-Page & Off-Page SEO",
                    " Content Marketing",
                    " Search Engine Marketing (SEM) / Pay-Per-Click (PPC)",
                    " Social Media Marketing & Management",
                    
                  ]} />
                    </Col>
                    <Col md={6}>
                    <ChecklistComponent items={[
                    " Email Marketing Campaigns",
                    " Analytics & Performance Reporting",
                    " Local SEO & Google Business Optimization",
                    " Link Building Strategies",
                    " Competitor Analysis",
                    " Mobile & Voice Search Optimization",
                  ]} />
                    </Col>
                  </Row>
                  
                </div>
                </Col>
            </Row>
          </div>
  )
}

export default SeoTabComponent