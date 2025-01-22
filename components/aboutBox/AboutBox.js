import React from 'react'
import styles from './aboutBox.module.css'
import { Container, Row,Col } from 'react-bootstrap'
import SectionTitle from '../elements/sectionTitle/SectionTitle'
const AboutBox = () => {
  return (
    <section className={styles.section}>
        <Container className={styles.container}>
            <Row className={styles.row}>
                <Col lg="9">
                <SectionTitle heading_title={"Making a decision to do something this is the first step. We all know that nothing moves until someone makes a decision."}
                items={["Franklin’s extraordinary success in life and politics can be attributed to his perseverance to overcome his personal liabilities, and his desire to constantly become better. Next time you really want to achieve something, take time to focus on your own personal journal.",
                    "I truly believe Augustine’s words are true and if you look at history you know it is true. There are many people in the world with amazing talents who realize only a small percentage of their potential. We all know people who live this truth."
                ]}/>
                </Col>
            </Row>
            <Row className={styles.row2}>
                <Col sm="6"><img src={"/images/about/10.jpg"}/></Col>
                <Col sm="6"><img src={"/images/about/11.jpg"}/></Col>
            </Row>
        </Container>
    </section>
  )
}

export default AboutBox