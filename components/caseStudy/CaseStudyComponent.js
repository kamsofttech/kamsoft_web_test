import React from 'react'
import styles from './caseStudyComponent.module.css'
import CaseStudyBox from '../elements/caseStudyBox/CaseStudyBox'
import { Row, Col, Container } from 'react-bootstrap'

const CaseStudyComponent = () => {
    return (
        <section className={styles.caseStudy_sec}>
            <Container className={styles.caseStudy_con}>
                <Row className={styles.row1}>
                    <Col lg="6">
                        <h2>Success Stories</h2>
                    </Col>
                </Row>
                <Row>
                    <Col lg="3" md="6"><CaseStudyBox image={"/images/blog/01.jpg"} sub_title={"fintech case study"} title={"Simulated training platform for training traders"} desc={"Generating multi-million dollar revenue through a web portal and train future traders"} /></Col>
                    <Col lg="3" md="6"><CaseStudyBox image={"/images/blog/01.jpg"} sub_title={"fintech case study"} title={"Simulated training platform for training traders"} desc={"Generating multi-million dollar revenue through a web portal and train future traders"} /></Col>
                    <Col lg="3" md="6"><CaseStudyBox image={"/images/blog/01.jpg"} sub_title={"fintech case study"} title={"Simulated training platform for training traders"} desc={"Generating multi-million dollar revenue through a web portal and train future traders"} /></Col>
                    <Col lg="3" md="6"><CaseStudyBox image={"/images/blog/01.jpg"} sub_title={"fintech case study"} title={"Simulated training platform for training traders"} desc={"Generating multi-million dollar revenue through a web portal and train future traders"} /></Col>
                </Row>
            </Container>
        </section>
    )
}

export default CaseStudyComponent