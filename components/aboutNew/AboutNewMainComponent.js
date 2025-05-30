import React from 'react'
import styles from './about.module.css'
import { Col, Container, Row } from 'react-bootstrap'
import IconBox1Component from '../elements/iconBox1/IconBox1Component'
import IconBox2Component from '../elements/iconBox2/IconBox2Component'
import IconBox3Component from '../elements/iconBox3/IconBox3Component'
import IconBox4Component from '../elements/iconBox4/IconBox4Component'
import IconBox5Component from '../elements/iconBox5/IconBox5Component'
import IconBox7Component from '../elements/iconBox7/IconBox7Component'
import IconBox6Component from '../elements/iconBox6/IconBox6Component'
import LazyAutoplayVideo from '../mainNew/LazyAutoplayVideo'
import GlobeVideo from '../intro/GlobeVideo'
const AboutNewMainComponent = () => {
  return (
    <section className={styles.about_new_sec}>
      <Container className={styles.about_new_con}>
        <div className='pro_box'>
          <Row>
            <Col lg='3' md='6' className={styles.iconBox1}>
              <IconBox1Component title={"175+"} desc={"Successfully completed projects"} />
            </Col>
            <Col lg='5' md='6'className={styles.iconBox2}>
              <IconBox2Component video={"https://youtu.be/-Gh9WYDSrRA?si=fEaLMLdQwMuqjKgI"} />
            </Col>
            <Col lg='4' md='6' className={styles.iconBox3}>
              <IconBox3Component num={"12"} qEmp={"Qualified Employees"} enpDesc={"Work with our leaders and the hard-working personalities who deliver innovative concepts to corporations like yours."} />
            </Col>
          </Row>
          <Row>
            <Col lg='3' md='4'className={styles.iconBox4}>
              <IconBox4Component ratingDesc={"Rated 4.80 out of 5 based on over "} rev={" 1000 reviews"} />
            </Col>
            <Col lg='3' md='4'className={styles.iconBox5}>
              <IconBox5Component title={"Award-winning solution"} awardDesc={"We've got a few awards thanks to our amazing clients."} />
            </Col>
            <Col lg='3' md='4' className={styles.iconBox6}>
            <GlobeVideo video1={'images/intro/glob.mp4'}/>
            
              
            </Col>
            <Col lg='3' md='4'className={styles.iconBox7}>
            
              <IconBox7Component year={"2002"} />
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  )
}

export default AboutNewMainComponent
