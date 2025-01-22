import React from 'react'
import styles from './pictureBox.module.css'
import { Col, Row, Container } from 'react-bootstrap'
import CountUp from 'react-countup';

const PictureBox = ({img1,img2,img3,end_num}) => {
    return (
        <Row>
            <Col sm="6">
                <div className={styles.column1_column1_images}>
                    <img src={img1}></img>
                    <img src={img2}></img>
                </div>
            </Col>
            <Col sm="6">
                <div className={styles.column1_column2}>
                    <img src={img3}></img>
                    <div className={styles.counterBox}>
                        <div className={styles.counterContent}>
                            <span><CountUp enableScrollSpy separator="" delay={1} end={end_num} /></span>
                            <label>Finished Projects</label>
                        </div>
                    </div>
                </div></Col>
        </Row>
    )
}

export default PictureBox