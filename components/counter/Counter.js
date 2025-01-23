import React from 'react'
import styles from './counter.module.css'
import { Col, Container, Row } from 'react-bootstrap'
import CounterElement from '../elements/counterElements/CounterElement'
import { faSmile , faTrophy, faHandFist, faBullhorn} from "@fortawesome/free-solid-svg-icons";

const Counter = () => {
  return (
    <section className={styles.counter_section}>
        <Container className={styles.counter_container}>
            <Row className={styles.row}>
                <Col lg="3" sm="6"><CounterElement c_icon={faSmile} end_num={1790} desc={"Happy Clients"}/></Col>
                <Col lg="3" sm="6"><CounterElement c_icon={faTrophy} end_num={245} desc={"Skilled Experts"}/></Col>
                <Col lg="3" sm="6"><CounterElement c_icon={faHandFist} end_num={491} desc={"Finished Projects"}/></Col>
                <Col lg="3" sm="6"><CounterElement c_icon={faBullhorn} end_num={1090} desc={"Media Posts"}/></Col>
            </Row>
        </Container>
    </section>
  )
}

export default Counter