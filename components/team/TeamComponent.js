import React from 'react'
import styles from './teamComponent.module.css'
import { Col, Container, Row } from 'react-bootstrap'
import SectionTitle from '../elements/sectionTitle/SectionTitle'

const TeamComponent = () => {
  return (
    <section className={styles.section}>
        <Container className={styles.container}>
            <Row className={styles.row}>
                <Col lg="9">
                <SectionTitle heading_title={"Meet our heroes"} items={["Our team is friendly, talkative, and fully reliable."]}/>
                </Col>
            </Row>
            <Row>
                <Col xl="2" md="3" sm="4"></Col>
            </Row>
        </Container>
    </section>
  )
}

export default TeamComponent