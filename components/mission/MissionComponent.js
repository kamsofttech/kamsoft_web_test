import React from 'react'
import styles from './mission.module.css';
import { Container } from 'react-bootstrap';
import TitleMainComponent from '../elements/title/TitleMainComponent';
const MissionComponent = () => {
  return (
    <section className={styles.mission}>
        <Container className={styles.pd80}>
        <TitleMainComponent title={'Our Business Approches'} desc={''} />
        <div className={styles.mission_box}>
            <h6>Our business approach is proactive, strategic, and professional, allowing us the flexibility to meet the evolving needs of our customers.
            We offer a wide range of products including jams, Cadbury chocolates, flavored chocolates, drinking chocolates, Nestlé chocolates, cereals, noodles, millets, snacks, vermicelli, pasta, and malted beverages. Our exclusive Fishlicious line includes tuna chunks, flavored tuna, mackerel and sauce. We ensure effective and timely delivery for all our offerings.</h6>
        </div>
        </Container>
    </section>
  )
}

export default MissionComponent