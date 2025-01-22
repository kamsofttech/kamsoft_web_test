import React from 'react'
import styles from './processBox.module.css'
import { Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight } from "@fortawesome/free-solid-svg-icons";
import HorizontalFeatureBox from '../elements/horizontalFeatureInfo/HorizontalFeatureBox';

const ProcessBox = () => {
  return (
    <section className={styles.section}>
        <Container className={styles.section}>
            <Row className={styles.row}>
                <Col md="6">
                <div className={styles.section_title}>
                    <h2>Smart strategy & excellent performance</h2>
                    <p>Process that guarantees high productivity and profitability for your solution.</p>
                    <a href="">Let's Start Project <FontAwesomeIcon icon={faArrowRight}/></a>
                </div>
                </Col>
                <Col md="6">
                <div className={styles.feature_info_styles}>
                    <div className={styles.feature_info_inner}>
                        <HorizontalFeatureBox p_num={"01"} title={"Analysis"} desc={"Then with that thing in mind, follow these simple steps. Step One: Get yourself nice and relaxed and settled. Concentrate on your breathing, engage in the moment and spend some time being still, quiet and drift inside of your own mind. Hypnotize yourself here. "}/>
                        <HorizontalFeatureBox p_num={"02"} title={"Design"} desc={"That is your imagination doing that. You know the sound that your feet make when you walk across gravel don’t you? You can imagine it, but you are not hearing it in your ears, are you? Just imagine these things as best as you can."}/>
                        <HorizontalFeatureBox p_num={"03"} title={"Development"} desc={"Become aware of the temperature, the sights, the sounds and enjoy walking along the path of your life. Make it sensory rich and get comfortable with the idea. Imagine the feeling of your feet walking along the path and the sound they make."}/>
                        <HorizontalFeatureBox p_num={"04"} title={"Testing"} desc={"Engage with the idea of really being there. Step Three: Imagine that a few more steps ahead there is a place where the path splits, where is goes off to the left and off to the right. Pause here for a few moments and have a think."}/>
                        <HorizontalFeatureBox p_num={"05"} title={"Go-Live"} desc={"Think about that as you stand at this place where the path splits. You want to make a decision and commit to one of these paths. Before you make that decision, we are going to see what each path holds for your future."}/>
                    </div>
                </div></Col>
            </Row>
        </Container>
    </section>
  )
}

export default ProcessBox