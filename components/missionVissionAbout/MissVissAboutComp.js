import React from 'react'
import styles from './missVissAbout.module.css'
import { Container } from 'react-bootstrap'
import { Col, Row } from 'react-bootstrap'
import SectionTitle from '../elements/sectionTitle/SectionTitle'
import MVFeatureBox from '../elements/mvAboutFeatureBox/MVFeatureBox'
import { faCrosshairs, faEye } from '@fortawesome/free-solid-svg-icons'

const MissVissAboutComp = () => {
  return (
    <section className={styles.missvissAbout_sec}>
      <Container className={styles.missvissAbout_con}>
        <Row className={styles.row1}>
          <Col lg="9">
            <SectionTitle heading_title={"We enable constant enterprise transformation at speed and scale."}
              items={["We are a creative company, who works with passion and love. We provide the best services you need. We help you to get better, We take pride in helping our clients deliver marvelous results when it comes to their projects. From data to performance, we’ve got you covered."]} />
          </Col>
        </Row>
        <Row className={styles.row2}>
          <Col sm="6"><MVFeatureBox bgcolor={"#022d62"} icon={faEye} title={"Our Vision"}
            desc={"To make these virtues a habit, himself on his daily actions. In a journal he drew a table with a row for every virtue and a column for every day of the week."} /></Col>
          <Col sm="6"><MVFeatureBox bgcolor={"#ef3139"} icon={faCrosshairs} title={"Our Mission"}
            desc={"We also know those epic stories, those modern-day legends surrounding the early failures of such supremely successful folks as Michael Jordan and Bill Gates."} /></Col>
        </Row>
      </Container>
    </section>
  )
}

export default MissVissAboutComp