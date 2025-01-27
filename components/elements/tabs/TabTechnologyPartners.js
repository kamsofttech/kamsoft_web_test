import React from 'react'
import styles from './tabtechnologyPartner.module.css'
import { Col, Row } from 'react-bootstrap'

const TabTechnologyPartners = () => {
  return (
    <Row>
        <Col className={styles.column1_img}>
        <img src={'/images/about/03.jpg'}/>
        </Col>
        <Col className={styles.column2}>
        <h4>Our Technology Partners</h4>
        <p>We partnered with Technology Managers to increase its skills at every step of the software development process.</p>
        <Row className={styles.column2_img}>
            <Col lg="4" className={styles.mb_4}><img src={'/images/client-logo/01.svg'}/></Col>
            <Col lg="4"className={styles.mb_4}><img src={'/images/client-logo/02.svg'}/></Col>
            <Col lg="4"className={styles.mb_4}><img src={'/images/client-logo/03.svg'}/></Col>
            <Col lg="4"className={styles.mb_4}><img src={'/images/client-logo/04.svg'}/></Col>
            <Col lg="4"className={styles.mb_4}><img src={'/images/client-logo/05.svg'}/></Col>
            <Col lg="4"className={styles.mb_4}><img src={'/images/client-logo/06.svg'}/></Col>
            <Col lg="4"className={styles.mb_4}><img src={'/images/client-logo/07.svg'}/></Col>
            <Col lg="4"className={styles.mb_4}><img src={'/images/client-logo/01.svg'}/></Col>
        </Row>
        <div className={styles.button}>
            <a href=''>Become a partner</a>
            </div>
        </Col>
    </Row>
  )
}

export default TabTechnologyPartners