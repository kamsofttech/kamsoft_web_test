import React from 'react'
import styles from './outProject.module.css'
import { Container, Row , Col } from 'react-bootstrap'
import HeadingNew from '../headingNew/HeadingNew'
import ProjectBox from '../elements/projectBox/ProjectBox'

const OurProjectComponent = () => {
  return (
    <section className={styles.projecgt_sec}>
        <Container className={styles.project_con}>
            <Row>
                <HeadingNew main_title={"Our Recent Projects"}/>
            </Row>
            <Row>
                <Row>
                    <Col lg="4" md="4" sm="6" xs="12"><ProjectBox bgimg={"url('/images/kamsoft.png')"} title={"Kamsoft"}/></Col>
                    <Col lg="4" md="4" sm="6" xs="12"><ProjectBox bgimg={"url('/images/kamsoft.png')"} title={"Kamsoft"}/></Col>
                    <Col lg="4" md="4" sm="6" xs="12"><ProjectBox bgimg={"url('/images/kamsoft.png')"} title={"Kamsoft"}/></Col>
                </Row>

                <Row>
                <Col lg="4" md="4" sm="6" xs="12"><ProjectBox bgimg={"url('/images/kamsoft.png')"} title={"Kamsoft"}/></Col>
                <Col lg="4" md="4" sm="6" xs="12"><ProjectBox bgimg={"url('/images/kamsoft.png')"} title={"Kamsoft"}/></Col>
                <Col lg="4" md="4" sm="6" xs="12"><ProjectBox bgimg={"url('/images/kamsoft.png')"} title={"Kamsoft"}/></Col>
                </Row>
            </Row>
        </Container>
    </section>
  )
}

export default OurProjectComponent