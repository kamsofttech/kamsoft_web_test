import React from 'react'
import styles from './perfomance.module.css'
import { Col, Row, Container } from 'react-bootstrap'
import CountUp from 'react-countup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import ChecklistComponent from '../elements/checklist/ChecklistComponent';
import { Progress } from 'antd'

const PerfomanceComponent = () => {


  return (
    <section className={styles.perfomance_sec}>
      <Container className={styles.perfomance_con}>
        <div className='pro_box'>
          <Row>
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
                    <img src='/images/perfomance/14.jpg'></img>
                    <div className={styles.counterBox}>
                      <div className={styles.counterContent}>
                        <span><CountUp enableScrollSpy separator="" delay={1} end={235} /></span>
                        <label>Finished Projects</label>
                      </div>
                    </div>
                  </div></Col>
              </Row>
            </Col>
            <Col lg="6">
              <div className={styles.column2}>
                <h2>We enable constant enterprise transformation at speed and scale.</h2>
                <div className={styles.progress}>
                  <Progress percent={95} strokeColor={'#3a3a3a'} />

                </div>
              </div>

              <div className={styles.rating_box}>
                <ul>
                  <li><b>5</b><FontAwesomeIcon icon={faStar} style={{ color: '#ffc107' }} /></li>
                </ul>
                <h6>Rated 4.80 out of 5 based on over <span> 1000+ reviews</span></h6>
              </div>
              <div className={styles.column2_row2}>
                <Row mt="4">

                  <Col md="4">
                    <ChecklistComponent items={["The old expression is absolutely true ",
                      "SMART is an acronym for Specific,",
                      "Introspection is the trick."
                    ]} /></Col>
                  <Col md="4"><ChecklistComponent items={["You are going on a cruise,",
                    "we will attract confusion.",
                    "From my perspective then"
                  ]} /></Col>

                </Row>
              </div>

            </Col>
          </Row>
        </div>
      </Container>
    </section>
  )
}

export default PerfomanceComponent