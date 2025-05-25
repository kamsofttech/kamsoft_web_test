import React from 'react'
import { Col, Row } from 'react-bootstrap'
import TitleNewComponent from '../elements/titleNew/TitleNewComponent'
import NumberChecklist from '../elements/numberedChecklist/NumberChecklist'
import ImageComponent from '../elements/imageComponent/ImageComponent'
import styles from './ourServicesNew.module.css'
const WebsiteTabComponent = () => {
  return (
    <div className={styles.full_box_3}>
      <Row>
        <Col md="7">
          <div className={styles.box_3}>
            <Row>
              <Col md={7}>
                <TitleNewComponent sub_title={"Years of experience"} main_title={"Web & Mobile App Development Services"} desc={"We deliver high-quality static and dynamic websites, e-commerce platforms, and custom web and mobile applications tailored to your business needs for a seamless digital experience."} />
              </Col>
              <Col md={5}>
              <NumberChecklist
              numbers={[ "07", "08", "09", "10", "11", "12"]}
              points={[
                "Backend Development & API Integration",
                "Payment Gateway Integration",
                "Responsive & Mobile-Friendly Design",
                "Website & App Maintenance & Support",
                "SEO-Friendly Development",
                "Cloud Hosting & Deployment Solutions",
              ]} />
                
              </Col>
            </Row>
            <Row>
              <Col md={7}>
              <NumberChecklist
              numbers={["01", "02", "03", "04", "05", "06"]}
              points={["Static Website Design & Development",
                "Dynamic Website Development with CMS Integration",
                "E-commerce Website Development (B2B/B2C)",
                "Custom Web Application Development",
                "Cross-Platform Mobile App Development (iOS & Android)",
                "UI/UX Design & Prototyping",
                
              ]} />
               {/* <h6>Package start from<b>$600</b></h6> */}
              </Col>
              <Col md={5}>
              <div className={styles.badge}>
                  <div className={styles.badgeRound}>
                    <h4><span>175+</span>Projects</h4>
                  </div>
                  <p>With a proven track record of over 175+ successfully delivered and live projects since 2005</p>
                  <a href="#">View Case Study</a>
                </div>
              </Col>
            </Row>
            
           
          </div>
        </Col>
        
        <Col md="5"><ImageComponent image={'/images/services/wenBg.jpg'} />
        </Col>
      </Row>

    </div>
  )
}

export default WebsiteTabComponent