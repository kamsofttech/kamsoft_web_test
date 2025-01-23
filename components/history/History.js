import { React, useState } from 'react'
import styles from './history.module.css'
import { Col, Container, Row } from 'react-bootstrap'
import { Slider } from "antd";
import HistoryEvents from '../elements/historyEvents/HistoryEvents';
import SectionTitle from '../elements/sectionTitle/SectionTitle';

const History = () => {
    const [selectedYear, setSelectedYear] = useState("2010");

    return (
        <section className={styles.history_section}>
            <Container className={styles.history_container}>
                <Row className={styles.row1}>
                    <Col md="9">
                    <SectionTitle heading_title={"Established 2010 in Hi-soft has been offering world-class information technology."}
                    items={["Positive pleasure-oriented goals are much more powerful motivators than negative fear-based ones. Although each is successful separately, the right combination of both is the most powerful motivational force known to humankind."]}/>
                    </Col>
                </Row>
                <Row className={styles.row2}>
                    <Col md="10">
                        <div className={styles.timeline}>
                            <Slider min={2010} max={2020} marks={{ 2010: "2010", 2012: "2012", 2014: "2014", 2016: "2016", 2018: "2018", 2020: "2020"}} step={2} defaultValue={selectedYear} onChange={(value) => setSelectedYear(value)} />
                            <div className={styles.event_content}>
                                <HistoryEvents year={selectedYear} />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default History