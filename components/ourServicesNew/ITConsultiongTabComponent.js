import React from 'react'
import { Col, Row } from 'react-bootstrap'
import TitleNewComponent from '../elements/titleNew/TitleNewComponent'
import ImageComponent from '../elements/imageComponent/ImageComponent'
import styles from './ourServicesNew.module.css'
import ChecklistComponent from '../elements/checklist/ChecklistComponent'
const ITConsultiongTabComponent = () => {
  return (
    <div>
        <Row>
              <Col md="12">
                <div className={styles.box_1}>
                  <TitleNewComponent sub_title={"Streamline Your Business with a "} main_title={"IT Consulting Services"} desc={"Expert IT consulting to help you plan, implement, and optimize technology solutions that drive business growth, enhance security, and improve operational efficiency."} />
                  <Row>
                    <Col md={4}>
                    <ChecklistComponent items={[
                    " IT infrastructure assessment and planning",
                    " ROI Analysis",
                    " Technology strategy and roadmap development",
                    " Cloud computing consulting and migration",
                    " Cybersecurity risk assessment and solutions",
                    " IT project management and implementation",
                    " Business continuity and disaster recovery planning",
                    

                    
                  ]} />
                    </Col>
                    <Col md={4}>
                    <ChecklistComponent items={[
                    " Digital transformation strategy",
                    " Software selection and vendor evaluation",
                    " Network architecture and optimization",
                    " IT Regulatory compliance and governance advisory",
                    " AI & Automation Consulting",
                    " Managed IT Services",
                    " Vendor Negotiation Support ",
                  ]} />
                    </Col>
                    <Col md="4">
                <div>
                  <ImageComponent image={'/images/feature-info/01.jpg'} />
                </div></Col>
                  </Row>
                  <br />
                  <blockquote className={styles.blockquote}>
                    For those of you who are serious about having more, doing more, giving more and being more, success is achievable with some understanding of what to do.
                    <cite className={styles.b_cite}> - InVisionApp Inc</cite>
                  </blockquote>
                  <a className={styles.view} href="#">View case study</a>
                </div>
                
              </Col>
              
            </Row>
    </div>
  )
}

export default ITConsultiongTabComponent