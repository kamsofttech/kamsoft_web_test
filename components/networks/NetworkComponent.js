import React from 'react'
import styles from './network.module.css';
import { Col,Row, Container } from 'react-bootstrap';
import CounterComponent from '../elements/counters/CounterComponent';
const NetworkComponent = () => {
  return (
    <section className={styles.net_sec}>
        <Container className={styles.pd80}>
            <Row>
                <Col md={3}>
                    <CounterComponent count={5458} desc={'Franches Involved'}/>
                </Col>
                <Col md={3}>
                    <CounterComponent count={5458} desc={'Franches Involved'}/>
                </Col>
                <Col md={3}>
                    <CounterComponent count={5458} desc={'Franches Involved'}/>
                </Col>
                <Col md={3}>
                    <CounterComponent count={5458} desc={'Franches Involved'}/>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default NetworkComponent