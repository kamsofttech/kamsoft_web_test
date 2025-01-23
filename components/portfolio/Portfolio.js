import React from 'react'
import styles from './portfolio.module.css'
import { Col, Container, Row } from 'react-bootstrap'

const Portfolio = () => {
  return (
    <section className={styles.portfolio_section}>
        <Container fluid>
            <Row className={styles.row1}>
                <Col md="6" lg="3"><a><img src='/images/gallery/01.jpg' /></a></Col>
                <Col md="6" lg="3"><a><img src='/images/gallery/02.jpg'/></a></Col>
                <Col md="6" lg="3"><a><img src='/images/gallery/03.jpg'/></a></Col>
                <Col md="6" lg="3"><a><img src='/images/gallery/04.jpg'/></a></Col>
            </Row>
            <Row className={styles.row2}>
            <Col md="6" lg="3"><a><img src='/images/gallery/05.jpg'/></a></Col>
                <Col md="6" lg="3"><a><img src='/images/gallery/06.jpg'/></a></Col>
                <Col md="6" lg="3"><a><img src='/images/gallery/07.jpg'/></a></Col>
                <Col md="6" lg="3"><a><img src='/images/gallery/08.jpg'/></a></Col>
            </Row>
        </Container>
    </section>
  )
}

export default Portfolio