import React from 'react'
import styles from './pricingBox.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import SectionTitle from '../elements/sectionTitle/SectionTitle'
import PricingElement from '../elements/pricingElement/PricingElement'

const PricingBox = () => {
    return (
        <section className={styles.section}>
            <Container className={styles.container}>
                <Row className={styles.row}>
                    <Col lg="9">
                        <SectionTitle heading_title={"Choose the plan that works for you"} items={["Our pricing works for enterprises of all sizes. Starting at just $19 per month"]} />
                    </Col>
                </Row>
                <Row>
                    <Col><PricingElement pricing_title={"Basic"} plan_desc={"Only the basics - Everything you need to get started. Best for startup"}
                        price={"19"} items={["5 Analytics Campaign", "Branded Reports", "500 Keywords",
                            "0 Social Account", "Phone & Email Support"]} h_color="#022d62" p_color="#626262"
                        price_color=" #022d62" /></Col>

                    <Col><PricingElement pricing_title={"Standard"} plan_desc={"When you are ready to grow, We will grow with you. Get a Standard plan"}
                        price={"39"} items={["30 Analytics Campaign", "Branded Reports", "700 Keywords",
                            "100 Social Account", "Phone & Email Support"]} h_color=" #ffffff" p_color=" #ffffff"
                        price_color=" #ef3139" bgcolor="#022d62"/></Col>

                    <Col><PricingElement pricing_title={"Professional"} plan_desc={"Ready to kick it up a notch? Go for big with Professional membership"}
                        price={"69"} items={["50 Analytics Campaign", "Branded Reports", "900 Keywords",
                            "200 Social Account", "Phone & Email Support"]} h_color=" #022d62" p_color=" #626262"
                        price_color=" #022d62" /></Col>
                </Row>
            </Container>
        </section>
    )
}

export default PricingBox