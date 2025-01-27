import React from 'react'
import styles from './tabCareerWithUs.module.css'
import ChecklistComponent from '../checklist/ChecklistComponent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Row, Col } from 'react-bootstrap'

const TabCareerWithUs = () => {
  return (
    <Row>
      <Col sm="5" className={styles.column1}>
        <img src='/images/about/07.jpg' />
      </Col>
      <Col sm="7" className={styles.column2}>
        <h2>Are you the best?</h2>
        <p>There’s always room for intelligent people who are excited about the digital world and are continually looking forward to seeing what’s next.</p>
        <h5>Why work with us?</h5>
        <Row className={styles.row2}>
          <Col md="6"> <ChecklistComponent items={["Flexible Time Off ",
            "24/7 parking. ",
            "Full medical benefits ",
            "Pto / vacation"
          ]} /></Col>
          <Col md="6"><ChecklistComponent items={["Flexible hours",
            "Collaborative environment",
            "Health, Dental, And Vision",
            "Collaborative environment"
          ]} /></Col>
        </Row>
        <a href=''>View Available Positions <FontAwesomeIcon icon={faArrowRight} /></a>
      </Col>
    </Row>
  )
}

export default TabCareerWithUs