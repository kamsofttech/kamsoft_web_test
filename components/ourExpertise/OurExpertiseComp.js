import React from 'react'
import styles from './ourExpertise.module.css'
import { Col, Container, Row } from 'react-bootstrap'
import Heading3 from '../elements/headingRedWhite/Heading3'
import OurExpertiseItems from './OurExpertiseItems'

const OurExpertiseComp = () => {
    return (
        <section className={styles.ourExpertise_sec}>
            <Container className={styles.ourExpertise_con}>
                <Row className="justify-content-center">
                    <Col lg='8'>
                        <Heading3 f_title={"Our Expertise -"} s_title={" What we have others Don’t"}
                            sub_title={"We have expertise in all technology stacks and can adapt your product to meet your users’ requirements and the market’s needs."} />
                    </Col>
                </Row>
                <Row className={styles.row2}>
                    <Col className="mb-4 text-center" lg='3' md='6'><OurExpertiseItems image={"/images/technology-logo/php-logo.png"} title={"PHP"}
                        items={[" - WordPress ", " - CakePHP ", " - YII2"]} /></Col>
                    <Col className="mb-4 text-center" lg='3' md='6'><OurExpertiseItems image={"/images/technology-logo/php-logo.png"} title={"PHP"}
                        items={[" - WordPress ", " - CakePHP ", " - YII2"]} /></Col>
                    <Col className="mb-4 text-center" lg='3' md='6'><OurExpertiseItems image={"/images/technology-logo/php-logo.png"} title={"PHP"}
                        items={[" - WordPress ", " - CakePHP ", " - YII2"]} /></Col>
                    <Col className="mb-4 text-center" lg='3' md='6'><OurExpertiseItems image={"/images/technology-logo/php-logo.png"} title={"PHP"}
                        items={[" - WordPress ", " - CakePHP ", " - YII2"]} /></Col>
                    <Col className="mb-4 mb-lg-0 text-center" lg='3' md='6'><OurExpertiseItems image={"/images/technology-logo/php-logo.png"} title={"PHP"}
                        items={[" - WordPress ", " - CakePHP ", " - YII2"]} /></Col>
                    <Col className="mb-4 mb-lg-0 text-center" lg='3' md='6'><OurExpertiseItems image={"/images/technology-logo/php-logo.png"} title={"PHP"}
                        items={[" - WordPress ", " - CakePHP ", " - YII2"]} /></Col>
                    <Col className="mb-4 mb-lg-0 text-center" lg='3' md='6'><OurExpertiseItems image={"/images/technology-logo/php-logo.png"} title={"PHP"}
                        items={[" - WordPress ", " - CakePHP ", " - YII2"]} /></Col>
                    <Col className="mb-4 mb-lg-0 text-center" lg='3' md='6'><OurExpertiseItems image={"/images/technology-logo/php-logo.png"} title={"PHP"}
                        items={[" - WordPress ", " - CakePHP ", " - YII2"]} /></Col>
                </Row>
            </Container>
        </section>
    )
}

export default OurExpertiseComp