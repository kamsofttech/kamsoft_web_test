import React from 'react'
import styles from './mainNew.module.css'
import { Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const MainNewComponent = () => {
    return (
        <section className={styles.about_sec}>
            <Container className={styles.pd80}>
                <div className={styles.pro_box}>
                    <Row>
                        <Col md="6">
                            <div className={styles.leftTitle}>
                                <h1>Live, Work, Create…</h1>
                                <p>Ten years plus experience helped us to create a process that guarantees high productivity and profitability for your solution.</p>
                                <div className={styles.leftInfo}>
                                    <h4>+(704) 279-1249</h4>
                                    <ul>
                                        <li><a><FontAwesomeIcon icon={faFacebook} style={{ color: "white" }} /></a></li>
                                        <li><a><FontAwesomeIcon icon={faTwitter} style={{ color: "white" }} /></a></li>
                                        <li><a><FontAwesomeIcon icon={faLinkedin} style={{ color: "white" }} /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col md="6">
                            <div className={styles.rightInfo}>
                                <img src={'/images/slider/05.jpg'} />
                            </div></Col>
                    </Row>
                </div>
            </Container>
        </section>
    )
}

export default MainNewComponent