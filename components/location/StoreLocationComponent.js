import React from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import styles from './storeLocation.module.css';
import LocationComponent from './LocationComponent';
import { Space } from 'antd';
import GetinTouchComponent from '../getInTouch/GetinTouchComponent';
import { Fade, Zoom } from 'react-awesome-reveal';
const StoreLocationComponent = () => {
  return (
    <section className={styles.store_sec}>
        <Container>
            <Row>
                <Col md={6}>
                    <div className={styles.loc_box}>
                        <div className={styles.loc_cap}>
                            <Fade direction='left'>
                            <h2>Store Location</h2>
                            </Fade>
                        </div>
                        <Space size={50}>
                        <LocationComponent 
                        location={'madgaon'}
                        address={'Shop No. 1,Pritam Residency,ChandravaddoFatorda,Margoa ,Goa - 403602'}
                        gstn={'30AKAPM5220G1ZV'}
                        email={'clive@sevenwonderstrading.com'}
                        phone={'+91 9421872905/9822134352'}
                        />
                        {/*<LocationComponent 
                        location={'Vasco'}
                        address={'M/S. Seabird Marine Services Office 3/87/A(13), Rakhi Appts., Next To Uma Petrol Pump, Mundvel, Vasco-Da-Gama, Goa.'}
                        gstn={'GSTN6789HJGF'}
                        email={'pkd@3455.com'}
                        phone={'+91 9853785519'}
                        />*/}
                        <div className={styles.store_map}>

                        </div>
                        </Space>
                        
                    </div>
                </Col>
                <Col md={6}>
                        <div className={styles.loc_cap}>
                            <Zoom>
                            <h2>Get In Touch</h2>
                            </Zoom>
                        </div>
                        <GetinTouchComponent/>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default StoreLocationComponent