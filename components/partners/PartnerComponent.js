import React from 'react'
import styles from './partner.module.css';
import { Container } from 'react-bootstrap';
import TitleCenterComponent2 from '../elements/title/TitleCenterComponent2';
import Marquee from 'react-fast-marquee';
import { Fade } from 'react-awesome-reveal';
const PartnerComponent = () => {
  return (
    <section className={styles.part_sec}>
        <Container className={styles.pd80}>
        <div className={styles.pd_lr}>
            <TitleCenterComponent2 title={'Our Business Partners'}/>
            <Fade direction='up'>
            <h6>We partner with a number of premium brands, building their presence in Goa. Notable partners include Saksham, Slurrp Farm, Rostaa, Pure Foods, and Fishlicious, all of which entrust Seven Wonders Trading to represent their brands on an exclusive basis in Goa-India.</h6>
            </Fade>
            </div>
            <div className={styles.mar_box}>
            <Marquee speed={50}><a href=""><img decoding="async" src="/images/clients/l1.jpg"/></a>
                <a href=""><img decoding="async" src="/images/clients/l2.jpg"/></a>
                <a href=""><img decoding="async" src="/images/clients/l3.jpg"/></a>
                <a href=""><img decoding="async" src="/images/clients/l4.jpg"/></a>
                <a href=""><img decoding="async" src="/images/clients/l5.jpg"/></a>
                <a href=""><img decoding="async" src="/images/clients/l6.jpg"/></a>
                <a href=""><img decoding="async" src="/images/clients/l7.jpg"/></a>
                <a href=""><img decoding="async" src="/images/clients/l8.jpg"/></a>
                <a href=""><img decoding="async" src="/images/clients/l9.jpg"/></a>
                <a href=""><img decoding="async" src="/images/clients/l10.jpg"/></a>
                <a href=""><img decoding="async" src="/images/clients/l10.jpg"/></a>
                <a href=""><img decoding="async" src="/images/clients/l11.jpg"/></a>
                <a href=""><img decoding="async" src="/images/clients/l12.jpg"/></a>
                <a href=""><img decoding="async" src="/images/clients/l13.jpg"/></a>
                <a href=""><img decoding="async" src="/images/clients/l14.jpg"/></a>
                <a href=""><img decoding="async" src="/images/clients/l15.jpg"/></a>
                <a href=""><img decoding="async" src="/images/clients/l16.jpg"/></a>
                <a href=""><img decoding="async" src="/images/clients/l17.jpg"/></a>
                <a href=""><img decoding="async" src="/images/clients/l18.jpg"/></a>
            </Marquee>
            </div>
        </Container>
    </section>
  )
}

export default PartnerComponent