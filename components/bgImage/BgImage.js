import React from 'react'
import styles from './bgImage.module.css'
import { Col, Container, Row } from 'react-bootstrap'

const BgImage = () => {
  return (
    <section className={styles.bgImage_sec}>
        <Container fluid className={styles.bgImage_container}>
            <Row className={styles.row}>
                <Col sm="12"><img className={styles.img} src="/images/bg/07.png"/></Col>
            </Row>
        </Container>
    </section>
  )
}

export default BgImage