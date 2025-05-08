import React from 'react'
import styles from './footerNew.module.css'
import { Col, Row, Container } from 'react-bootstrap'
import FooterElements from '../elements/footerElements/FooterElements'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope,faLocationDot } from "@fortawesome/free-solid-svg-icons";

const footerNew = () => {
    return (
        <section className={styles.footerNew_sec}>
            <Container fluid>
            <Row>
                <Col lg ="6">
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
                        <p>©Copyright 2020 <a href='#'>Kamsoft Technologies</a> All Rights Reserved</p>
                    </div>
                    
                </Col>
                <Col lg ="6" className={styles.foot_box2}>
                <div className={styles.foot_box1}>
                        <Row><Col lg ="6">
                                <a>
                                    <img src='./images/logo.png' />
                                </a>
                                <p>Kamsoft, provides innovative automation and unique web designs for different type of industries work to suit their requirements and expectations. </p>
                        </Col>
                            <Col lg ="6"className={styles.foot_details} >
                               
                                    <h5>Head office</h5>
                                    <p><FontAwesomeIcon icon={faLocationDot} style={{ color: "#1dbb26" }} /> Bhumika Gr.floor, Opp.Maimolem Lake, Vasco-da-gama, Goa-403802 ,India</p>
                                    <p><FontAwesomeIcon icon={faWhatsapp} style={{ color: "#1dbb26" }} /> +(91) 9423879030</p>
                                    <p><FontAwesomeIcon icon={faEnvelope} style={{ color: "#1dbb26" }} /> letstalk@hisoft.com</p>
                                    <h4><a> +(91) 9423879030 / 7756036120</a></h4>
                                </Col>
                        </Row>
                    </div>  


                </Col>
            </Row>

            </Container>
        </section>
    )
}

export default footerNew