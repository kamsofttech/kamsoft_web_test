import React from 'react'
import styles from './footerNew.module.css'
import { Col, Row, Container } from 'react-bootstrap'
import FooterElements from '../elements/footerElements/FooterElements'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const footerNew = () => {
    return (
        <section className={styles.about_sec}>
            <Container fluid>
            <Row>
                <Col lg ="6">
                    <div className={styles.foot_box1}>
                        <Row><Col lg ="6">
                                <a>
                                    <img src='./images/gallery/logo-light.svg' />
                                </a>
                                <p>We also know those epic stories</p>
                        </Col>
                            <Col lg ="6"className={styles.foot_details} >
                               
                                    <h5>Head office</h5>
                                    <p>214 West Arnold St. New York, NY 10002</p>
                                    <p><FontAwesomeIcon icon={faWhatsapp} style={{ color: "#ef3139" }} /> +(704) 279-1249</p>
                                    <p><FontAwesomeIcon icon={faEnvelope} style={{ color: "#ef3139" }} /> letstalk@hisoft.com</p>
                                    <h4><a> +(704) 279-1249</a></h4>
                                </Col>
                        </Row>
                    </div>
                </Col>
                <Col lg ="6" className={styles.foot_box2}>
                    <div className={styles.foot_box2_items}>
                        <Row>
                            <Col lg ="6" sm="6" className={styles.foot_box2_col1}>
                                <FooterElements title={"IT Services"} items={["Data Synchronization",
                                    "Content Management",
                                    "Content Delivery",
                                    "Transaction Processing",
                                    "Process Automation"
                                ]} /></Col>
                            <Col lg ="6"  sm="6">
                                <FooterElements title={"Company"} items={["Event Processing",
                                    "Information Security",
                                    "Mobile Platforms",
                                    "Communications",
                                    "Careers"
                                ]} /></Col>
                        </Row>
                        <p>©Copyright 2020 <a href='#'>hi-soft</a> All Rights Reserved</p>
                    </div>


                </Col>
            </Row>

            </Container>
        </section>
    )
}

export default footerNew