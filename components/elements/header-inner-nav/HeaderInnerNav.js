import React from 'react'
import styles from './headerInnerNav.module.css'
import {Col, Container, Row } from 'react-bootstrap'

const HeaderInnerNav = () => {
  return (
    <div className={styles.headerInnerNav}>
        <Container className={styles.container}>
            <Row className={styles.row}>
                <Col className={styles.column1}>
                <ul className={styles.columnItems}>
                    <li><a href='/aboutUs/aboutUs'>About us</a></li>
                    <li><a href="/aboutUs/careers">Careers</a></li>
                    <li><a href="/aboutUs/howWeWork">How we work</a></li>
                    <li><a href="/aboutUs/ourTeam">Our team</a></li>
                    <li><a href="/aboutUs/missionVission">Mission and vision</a></li>
                    <li><a href="/aboutUs/our_values">Our values</a></li>
                </ul>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default HeaderInnerNav