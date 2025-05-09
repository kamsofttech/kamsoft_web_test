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
                    <li><a href='#'>About us</a></li>
                    <li><a href='#'>Careers</a></li>
                    <li><a href='#'>How we work</a></li>
                    <li><a href='#'>Our team</a></li>
                    <li><a href='#'>Mission and vision</a></li>
                    <li><a href='#'>Our values</a></li>
                </ul>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default HeaderInnerNav