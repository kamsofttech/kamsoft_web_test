import React from 'react'
import styles from './sliderBottom.module.css';
import { Col, Container, Row } from 'react-bootstrap';
import { Rate, Space } from 'antd';
import CountUp from 'react-countup';
import SocialLinkButtonStyle1 from '../elements/buttons/socialLinkButton/socialLinkButtonStyle1/SocialLinkButtonStyle1';
import { Fade } from 'react-awesome-reveal';
const SliderBottomComponent = () => {
    return (
        <section className={styles.sb_box}>
            <Container>
                <Row>
                    <Col md={4}>
                        <Space className={styles.wid_n}>
                            <div className={styles.rating_box}>
                                <div className={styles.rating_overt}><h4 className={styles.counter}><CountUp enableScrollSpy decimal='1' separator=""  delay={1} end={4} /></h4></div>
                                <div className="rating_stion">
                                    <Rate className={styles.ant_rate} allowHalf defaultValue={4} />
                                </div>
                                <div className={styles.rating_text}><h6>144 <i className="fa-brands fa-google"></i> Google Reviews</h6></div>
                            </div>
                            <div className={styles.rating_box}>
                                <div className={styles.rating_overt}><h4 className={styles.counter}><CountUp enableScrollSpy  separator=""  delay={1} end={14} /></h4></div>
                                <div className={styles.rating_text}><h6>Years of Experience</h6></div>
                            </div>
                            
                        </Space>

                    </Col>
                    <Col md={8}>
                    <div className={styles.add_box}>
                        <Fade direction='down' cascade damping={0.2}>
                        <h6>We are ready !! you want to change the world. We’re here to help</h6>
                        
                        <Space size={10} className={styles.sp}>
                        <div className={styles.fl}>
                        <a href="#"><i className={`${styles.icon} fa-solid fa-file-invoice`}></i>GST - 30AKAPM5220G1ZV</a>
                        <a href="#"><i className={`${styles.icon} fa fa-envelope`} aria-hidden="true"></i>clive@sevenwonderstrading.com</a>
                        <a href="#"><i className={`${styles.icon} fa-solid fa-phone-volume`}></i>+91 9421872905/9822134352</a> 
                        <a href="#"><i className={`${styles.icon} fa fa-map-marker`} aria-hidden="true"></i>Margoa, Goa-403602</a>
                        </div>
                        </Space>
                        
                        </Fade> 
                        <div className={styles.icon}>
                            <Fade direction='up'>
                            <SocialLinkButtonStyle1/>
                            </Fade>
                        </div>
                              
                            </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default SliderBottomComponent