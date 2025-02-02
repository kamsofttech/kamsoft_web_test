import React from 'react'
import styles from './technologyWeUse.module.css'
import { Col, Container, Row } from 'react-bootstrap'
import TechnologyImage from '../elements/technologyImage/TechnologyImage'
import HeadingNew from '../headingNew/HeadingNew'

const TechnologyWeUse = () => {
    return (
        <section className={styles.technologyWeUse_sec}>
            <Container className={styles.technologyWeUse_con}>
                <Row>
                    <Row className={styles.title}>
                        <HeadingNew main_title={"Inside Our Tech Arsenal"} />
                    </Row>
                    <Col >
                        <Row>
                            <Col><TechnologyImage iconImage={'/images/technology-logo/react-logo.png'} /></Col>
                            <Col><TechnologyImage iconImage={'/images/technology-logo/nextjs-logo.png'} /></Col>
                            <Col><TechnologyImage iconImage={'/images/technology-logo/mongodb-logo.png'} /></Col>
                            <Col><TechnologyImage iconImage={'/images/technology-logo/expressjs-logo.png'} /></Col>
                            <Col><TechnologyImage iconImage={'/images/technology-logo/php-logo.png'} /></Col>
                        </Row>
                        <Row>
                            <Col><TechnologyImage iconImage={'/images/technology-logo/react-logo.png'} /></Col>
                            <Col><TechnologyImage iconImage={'/images/technology-logo/nextjs-logo.png'} /></Col>
                            <Col><TechnologyImage iconImage={'/images/technology-logo/mongodb-logo.png'} /></Col>
                            <Col><TechnologyImage iconImage={'/images/technology-logo/expressjs-logo.png'} /></Col>
                            <Col><TechnologyImage iconImage={'/images/technology-logo/php-logo.png'} /></Col>
                        </Row>

                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default TechnologyWeUse