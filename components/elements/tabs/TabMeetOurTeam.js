import React from 'react'
import styles from './tabMeetOurTeam.module.css'
import { Col, Row } from 'react-bootstrap'
import TeamPicture from '../teamMembers/TeamPicture'

const TabMeetOurTeam = () => {
  return (
    <Row className={styles.row1}>
      <Col sm="5" className={styles.column1}>
        <img src="/images/about/02.jpg" />
      </Col>
      <Col sm="7" className={styles.column2}>
        <Row className={styles.row2}>
          <Col xs="12" className={styles.column2_head}>
            <h4>Meet Our Leaders</h4>
            <p>Meet our leaders and the hard-working personalities who deliver innovative concepts to corporations like yours.</p>
          </Col>
          <Col xl="4" sm="6" xs="6"><TeamPicture image={'/images/team/01.jpg'} membername={"Avalon Carey"} post={"Chief People Officer"} /></Col>
          <Col xl="4" sm="6" xs="6"><TeamPicture image={'/images/team/02.jpg'} membername={"Homer Reyes"} post={"Vice President"} /></Col>
          <Col xl="4" sm="6" xs="6"><TeamPicture image={'/images/team/03.jpg'} membername={"Alice Williams"} post={"Team Leader"} /></Col>
          <Col xs="6" className={styles.button}>
            <a href=''>View Our Team</a>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default TabMeetOurTeam