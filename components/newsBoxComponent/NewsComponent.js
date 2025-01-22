import React from 'react'
import styles from './newComponent.module.css'
import { Col, Container, Row } from 'react-bootstrap'
import NewsBox from '../elements/newsBox/NewsBox'

const NewsComponent = () => {
  return (
    <section className={styles.section}>
        <Container className={styles.container}>
            <Row className={styles.row}>
                <Col sm="6" lg="4"><NewsBox title={"Careers"} desc="Walkout 10 years into your future and feel how it feels to carry on doing the same thing." button_text={"View Positions"}/></Col>
                <Col sm="6" lg="4"><NewsBox title={"Latest News"} desc="This path is just like today, with one difference: you have 10 fewer years remaining in your life." button_text={"Read Articles"}/></Col>
                <Col sm="6" lg="4"><NewsBox title={"Contact"} desc="I want you to think about how you will feel in 10 years if you continue doing the exact same things." button_text={"Get in Touch"}/></Col>
            </Row>
        </Container>
    </section>
  )
}

export default NewsComponent