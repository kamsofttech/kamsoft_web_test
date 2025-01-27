import React from 'react'
import styles from './tabmissionVision.module.css'
import { Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCrosshairs, faEye } from '@fortawesome/free-solid-svg-icons'

const TabMissionVission = () => {
  return (
    <Row>
      <Col sm="5" className={styles.column1}>
        <img src="/images/about/01.jpg" />
      </Col>
      <Col sm="7" className={styles.column2}>
        <h4><FontAwesomeIcon icon={faCrosshairs} style={{ color: "red" }} /> Our Mission</h4>
        <p>Our mission is to be the industry's premier service provider company concentrated on fulfilling the maximum to our clients. </p>
        <h4><FontAwesomeIcon icon={faEye} style={{ color: "red" }} /> Our Vision</h4>
        <p>Our Vision is to be a top Web Design company in the IT sector and progress in our current position in the market. </p>
        <h6>Our Vision and Mission are both encouraging our team to accomplish the goal. We recognize the clients' requirements, analyze them, and provide the best solutions. We satisfy our clients by our services and implements it with more capable software solution approaches.</h6>
      </Col>
    </Row>
  )
}

export default TabMissionVission