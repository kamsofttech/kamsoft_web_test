/**
 * PortFolio Section
 * Code By:Pradeep Das ,Date:08/05/2025
 */
import React from 'react'
import styles from './portfolio.module.css'
import { Col, Container, Row } from 'react-bootstrap'
import HeadingNew from '../headingNew/HeadingNew'
import PfLeftComponent from './PfLeftComponent'
import PfRightComponent from './PfRightComponent'

const PortfolioComponent = () => {
  return (
    <section className={styles.pf_sec}>
      <Container className={styles.pf_con}>
      
        <div className={styles.pf_cont}>
        <Row>
            <Col lg={4}>
            <PfLeftComponent/>
            </Col>
            <Col lg={8}>
            <PfRightComponent/>
            </Col>
        </Row>
        
        </div>
      </Container>
    </section>
  )
}

export default PortfolioComponent