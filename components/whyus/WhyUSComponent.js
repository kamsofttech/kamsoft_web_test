import React from 'react'
import styles from './whyUS.module.css';
import { Col, Container, Row } from 'react-bootstrap';
import TitleCenterComponent from '../elements/title/TitleCenterComponent';
import IconBoxComponent from '../elements/iconBox/IconBoxComponent';
const WhyUSComponent = () => {
  return (
    <section className={styles.wy_sec}>
        <Container>
            <div className={styles.wy_box}>
                <div className={styles.pd80}>
                    <TitleCenterComponent title={'Why Choose Us '}/>
                    <h6> Our exclusive Fishlicious line includes tuna chunks, flavored tuna, mackerel and sauce. We ensure effective and timely delivery for all our offerings.</h6>
                </div>
                <div className={styles.wy_content}>
                    <Row>
                        <Col md={4}>
                            <IconBoxComponent 
                                title={'Natural Organic Product'}
                                desc={'Vivamus vel magna non mi gravida ultr sed ut turpis.'}
                                image={'images/whyus/icon1.png'}
                            />
                        </Col>
                        <Col md={4}>
                            <IconBoxComponent 
                                title={'Packaging Design'}
                                desc={'Vivamus vel magna non mi gravida ultr sed ut turpis.'}
                                image={'images/whyus/icon1.png'}
                            />
                        </Col>
                        <Col md={4}>
                            <IconBoxComponent 
                                title={'Best Quality Cocoa'}
                                desc={'Vivamus vel magna non mi gravida ultr sed ut turpis.'}
                                image={'images/whyus/icon1.png'}
                            />
                        </Col>
                    </Row>
                    
                </div>
            </div>
            
        </Container>
    </section>
)
}

export default WhyUSComponent