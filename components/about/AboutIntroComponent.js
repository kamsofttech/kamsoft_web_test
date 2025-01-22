import React from 'react'
import { Container } from 'react-bootstrap'
import styles from './aboutIntro.module.css';
import TitleMainComponent from '../elements/title/TitleMainComponent';
import TitleCenterComponent from '../elements/title/TitleCenterComponent';
import { Button } from 'antd';
import CounterComponent from '../elements/counters/CounterComponent';
import { Fade } from 'react-awesome-reveal';
const AboutIntroComponent = ({secId}) => {
    //console.log('secId',secId)
  return (
    <section className={styles.ab_intro}>
            <Container className={styles.pd80}>
                <TitleCenterComponent title={'Welcome to Seven Wonders Trading'}/>
                <Fade direction='up'>
                <h6>Seven Wonders Trading is a proprietorship company founded in 2003 with a vision to bring the finest international premium food and beverage brands to Goa.</h6>
                <p>We offer a wide range of products including jams, Cadbury chocolates, flavored chocolates, drinking chocolates, Nestlé chocolates, cereals, noodles, millets, snacks, vermicelli, pasta, and malted beverages. Our exclusive Fishlicious line includes tuna chunks, flavored tuna, mackerel and sauce. We ensure effective and timely delivery for all our offerings.</p>
                </Fade>
                <div className={styles.counter_box}>
                    <CounterComponent count={5458} desc={'Franches Involved'}/>
                    <CounterComponent count={5458} desc={'Franches Involved'}/>
                    <CounterComponent count={5458} desc={'Franches Involved'}/>
                    <CounterComponent count={5458} desc={'Franches Involved'}/>
                </div>
                <Button size='large' className='btn_primary2 mt_30'>View more</Button>
            </Container>

        </section>
  )
}

export default AboutIntroComponent