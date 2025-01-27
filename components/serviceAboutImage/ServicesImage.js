import React from 'react'
import styles from './servivesImage.module.css'
import { Col, Row, Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const ServicesImage = () => {
    return (
        <section className={styles.serviceimage_sec}>
            <Container fluid className={styles.serviceimage_con}>
                <Row>
                    <Col md="6" style={{ padding: 0 }}>
                        <div className={styles.bgImg1}>
                            <img src="/images/bg/services2.jpg" />
                        </div>
                    </Col>
                    <Col md="6" style={{ padding: 0 }}>
                        <div className={styles.bgImg2}>
                            <div className={styles.bgContent}>
                                <h4>capabilities</h4>
                                <h1>What we offer our clients </h1>
                                <a>view services <FontAwesomeIcon icon={faArrowRight} /></a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ServicesImage