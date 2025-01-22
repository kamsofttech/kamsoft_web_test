import React from 'react'
import styles from './contact.module.css';
import { Col, Container, Row } from 'react-bootstrap';
import TitleMainComponent from '../elements/title/TitleMainComponent';
import { Space } from 'antd';
import LocationComponent2 from '../location/LocationComponent2';
import GetinTouchComponent2 from '../getInTouch/GetinTouchComponent2';
const ContactUsoCmponent = () => {
  return (
    <section className={styles.cont_sec}>
        <Container className={styles.pd80}>
            <Row>
                <Col md={7}>
                    <div className={styles.cont_box}>
                    <TitleMainComponent title={'How Can We Help You?'} desc={''} />
                    <p className={styles.cont_desc}>
                    Seven Wonders Trading is a proprietorship company founded in 2003 with a vision to bring the finest international premium food and beverage brands to Goa.
                    </p>
                    <div className={styles.cont_btm}>
                        <Space size={50} className={styles.ne}>
                        <LocationComponent2 
                        location={'madgaon'}
                        address={'Shop No 1,Ground Floor,Preetam Residency,Chandrawaddo,Fatorda,South, Margao, South Goa-403602, Goa, India'}
                        gstn={'30AKAPM5220G1ZV'}
                        email={'clive@sevenwonderstrading.com'}
                        phone={'+91 9421872905/9822134352'}
                        />
                        {/*<LocationComponent2 
                        location={'Vasco'}
                        address={'Shop No 1,Ground Floor,Preetam Residency,Chandrawaddo,Fatorda,South, Margao, South Goa-403602, Goa, India'}
                        gstn={'GST30AKAPM5220G1ZV'}
                        email={'pkd@3455.com'}
                        phone={'+91 9853785519'}
                        />*/}
                        </Space>
                    </div>
                    </div>
                    
                </Col>
                <Col md={5}>
                        <div className={styles.loc_cap}>
                            <h2>Get In Touch</h2>
                            <p className={styles.cont_desc}>
                            Seven Wonders Trading is a recognized importer and distributor of premium food and beverage brands, providing a diverse range of high-quality products.
                            </p>
                        </div>
                        <GetinTouchComponent2/>
                </Col>
            </Row>
       
        </Container>
    </section>
  )
}

export default ContactUsoCmponent