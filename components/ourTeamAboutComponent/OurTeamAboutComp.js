import React from 'react'
import styles from './ourTeamAbout.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import CountUp from 'react-countup'

const OurTeamAboutComp = () => {
  return (
    <section className={styles.ourTeamAbout_section}>
      <Container className={styles.ourTeamAbout_container}>
        <Row className={styles.row}>
          <Col lg="6"><div className={styles.section_title}>
            <h2>We enable constant enterprise transformation at speed and scale.</h2>
            <p>We all carry a lot of baggage, thanks to our upbringing. The majority of people carry with them, an entire series of self-limiting beliefs that will absolutely stop, and hold them back from, success. Things like “I’m not good enough”, “I’m not smart enough”, “I’m not lucky enough”, and the worst,</p>
            <a href="">Know More About <FontAwesomeIcon icon={faArrowRight} /></a>
          </div>
          </Col>
          <Col lg="6">
            <Row>
              <Col sm="6">
                <div className={styles.column1_column1_images}>
                  <img src='/images/perfomance/05.jpg'></img>
                  <img src='/images/perfomance/06.jpg'></img>
                </div>
              </Col>
              <Col sm="6">
                <div className={styles.column1_column2}>
                  <img src='/images/about/07.jpg'></img>
                  <div className={styles.counterBox}>
                    <div className={styles.counterContent}>
                      <span><CountUp enableScrollSpy separator="" delay={1} end={491} /></span>
                      <label>Finished Projects</label>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default OurTeamAboutComp