import React from 'react'
import styles from './portfolio.module.css'
import { Col, Container, Row } from 'react-bootstrap'

const Portfolio = () => {
  return (
    <section className={styles.portfolio_section}>
        <Container fluid>
            <Row className={styles.row1}>
                <Col md="6" lg="3"><a><img src='/images/gallery/e1.jpg' /></a></Col>
                <Col md="6" lg="3"><a><img src='/images/gallery/e2.jpg'/></a></Col>
                <Col md="6" lg="3"><a><img src='/images/gallery/e3.jpg'/></a></Col>
                <Col md="6" lg="3"><a><img src='/images/gallery/e4.jpg'/></a></Col>
            </Row>
            <Row className={styles.row2}>
            <Col md="6" lg="3"><a><img src='/images/gallery/e5.jpg'/></a></Col>
                <Col md="6" lg="3"><a><img src='/images/gallery/e6.jpg'/></a></Col>
                <Col md="6" lg="3"><a><img src='/images/gallery/e7.jpg'/></a></Col>
                <Col md="6" lg="3"><a><img src='/images/gallery/e8.jpg'/></a></Col>
            </Row>
        </Container>
    </section>
  )
}

export default Portfolio