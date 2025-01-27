import React from 'react'
import styles from './mvAboutBox2.module.css'
import { Col, Row, Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import MVFeatureBox2 from '../elements/mvFeatureBox2/MVFeatureBox2'

const MVAboutbox2 = () => {
    return (
        <section className={styles.mvabout2_sec}>
            <Container className={styles.mvabout2_con}>
                <Row className={styles.row1}>
                    <Col lg="6">
                        <h2>Three reasons why you should choose our service</h2>
                    </Col>
                    <Col lg="6" className={styles.column2}>
                        <a href=''>Let’s Get Started  <FontAwesomeIcon icon={faArrowRight} /></a>
                    </Col>
                </Row>
                <Row>
                    <Col lg="4" md="6" mb="4"><MVFeatureBox2 image={'/images/blog/01.jpg'} title={"Mission and vision"} desc={"Our Vision & Mission are both helping our team to achieve the goal. We identify the clients' requirements and provide the best solutions."} /></Col>
                    <Col lg="4" md="6" mb="4"><MVFeatureBox2 image={'/images/blog/02.jpg'} title={"Our challenges"} desc={"We take pride in helping our clients deliver marvelous results when it comes to their projects. From data to performance, we’ve got you covered."} /></Col>
                    <Col lg="4" md="6" mb="4"><MVFeatureBox2 image={'/images/blog/03.jpg'} title={"Meet the our team"} desc={"Meet our institute leaders and the hard-working personalities who deliver innovative concepts to corporations like yours."} /></Col>
                </Row>
            </Container>
        </section>
    )
}

export default MVAboutbox2