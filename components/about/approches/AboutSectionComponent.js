import React from 'react'
import { Container } from 'react-bootstrap'
import TitleCenterComponent2 from '../../elements/title/TitleCenterComponent2'
import styles from './aboutSection.module.css';
const AboutSectionComponent = () => {
  return (
    <section className={styles.abt_sec}>
        <Container className={styles.pd80}>
            <div className={'styles.pd_lr'}>
                <TitleCenterComponent2 title={'About Seven Wonders Trading'}/>
                <h6>Seven Wonders Trading is a proprietorship company founded in 2003 with a vision to bring the finest international premium food and beverage brands to Goa. </h6>
                <p> Initially focused on distribution in North Goa, despite being based in the south, we started by offering imported European food products.
                Today, Seven Wonders Trading is a recognized importer and distributor of premium food and beverage brands, providing a diverse range of high-quality products. We take pride in sourcing fine foods and beverages from across the globe.</p>
            </div>
        </Container>
    </section>
  )
}

export default AboutSectionComponent