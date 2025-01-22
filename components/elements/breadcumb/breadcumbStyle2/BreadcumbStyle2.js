import React from 'react'
import styles from './breadcumbStyle2.module.css'
import { images } from '@/next.config'
import { Col, Container, Row } from 'react-bootstrap'
import HeaderInnerNav from '../../header-inner-nav/HeaderInnerNav'

const BreadcumbStyle2 = ({ background,main_title, sub_title }) => {
  return (
    <div className={styles.breadcumb2} style={{ background: background }} >
      <Container className={styles.container}>
        <Row className={styles.row}>
          <Col md="8">
            <div className={styles.header_inner_title}>
              <h1>{main_title}</h1>
              <p>{sub_title}</p>
            </div>
          </Col>
        </Row>
      </Container>
      <HeaderInnerNav/>
    </div>
  )
}

export default BreadcumbStyle2