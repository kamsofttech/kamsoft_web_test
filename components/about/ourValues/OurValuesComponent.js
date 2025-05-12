import React from 'react'
import styles from './ourValue.module.css'
import { Col, Container, Row } from 'react-bootstrap'
import SectionTitle from '@/components/elements/sectionTitle/SectionTitle'
import OurValueBox from './OurValueBox'
const OurValuesComponent = ({}) => {
  return (
    <section className={styles.ov_section}>
            <Container className={styles.ov_container}>
                <Row className={styles.row1}>
                    <Col md="9">
                    <SectionTitle heading_title={"Our values shape how we work—delivering great user experiences powered by modern technology."}
                    items={["Each week he focused his attention on a different virtue. Over time, through repetition, he hoped to one day experience the pleasure of, He says that he carried out this personal examination for years."]}/>
                    </Col>
                </Row>
                <Row className={styles.row2}>
                    <Col md="3">
                        <OurValueBox count={'01'} title={'We know your business already'} desc={'The sad thing is the majority of people have no clue about what they truly want. They have no clarity.'}/>
                    </Col>
                    <Col md="3">
                        <OurValueBox count={'02'} title={'Building context – not just code'} desc={'What steps are required to get you to the goals? Make the plan as detailed as possible.'}/>
                    </Col>
                    <Col md="3">
                        <OurValueBox count={'03'} title={'We are responsive and flexible'} desc={'The sad thing is the majority of people have no clue about what they truly want. They have no clarity.'}/>
                    </Col>
                    <Col md="3">
                        <OurValueBox count={'04'} title={'10 years experience – and counting'} desc={'The sad thing is the majority of people have no clue about what they truly want. They have no clarity.'}/>
                    </Col>
                    <Col md="3">
                        <OurValueBox count={'05'} title={'Making the decision'} desc={'The sad thing is the majority of people have no clue about what they truly want. They have no clarity.'}/>
                    </Col>
                    <Col md="3">
                        <OurValueBox count={'06'} title={'Clarity – developing the Vision'} desc={'The sad thing is the majority of people have no clue about what they truly want. They have no clarity.'}/>
                    </Col>
                    <Col md="3">
                        <OurValueBox count={'07'} title={'Focus – having a plan'} desc={'The sad thing is the majority of people have no clue about what they truly want. They have no clarity.'}/>
                    </Col>
                    
                </Row>
            </Container>
        </section>
  )
}

export default OurValuesComponent