import React from 'react'
import styles from './featureBox.module.css'
import TitleNewComponent from '../elements/titleNew/TitleNewComponent'
import HeadingNew from '../headingNew/HeadingNew'
import { Col, Row,Container } from 'react-bootstrap'
import FeatureIconComponent from '../elements/featureIcon/FeatureIconComponent'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowRight , faLightbulb , faGem , faRocket} from "@fortawesome/free-solid-svg-icons";

const FeatureBoxComponent = () => {
  return (
    <section className={styles.about_sec}>
      <Container className={styles.pd80}>
        <div className='pro_box'>
          <Row>
          <HeadingNew main_title={"Smart strategy & excellent performance"} sub_title={"Process that guarantees high productivity and profitability for your solution."}/>
          </Row>
          <Row>
            <Col md="4">
            <FeatureIconComponent order="1" icon={faLightbulb}title={"Data Analysis "} desc={"We conduct thorough data collection and analysis of your institution’s current strengths and differentiators."}/>
            </Col>
            <Col md="4"> 
            <FeatureIconComponent order="2" icon ={faGem} title={"Making a plan"} desc={"We will work together with you to develop a plan that is actionable, feasible and tailored to your needs."}/>
            </Col>
            <Col md="4">
            <FeatureIconComponent order="3" icon={faRocket} title={"Deliver Result"} desc={"Our role in this step is to provide expertise where needed, to augment select initiatives as desired."}/>
            </Col>
          </Row>
          <Row>
            <div className={styles.getStartedBox}>
                <p>Our Managed IT services will help you succeed.</p>
                <a href='#'>Let’s Get Started
                <FontAwesomeIcon icon={faArrowRight} />
                </a>
            </div>
          </Row>
        </div>
      </Container>
    </section>
  )
}

export default FeatureBoxComponent