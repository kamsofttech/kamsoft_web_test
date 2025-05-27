import { React, useState } from 'react'
import styles from './history.module.css'
import { Col, Container, Row } from 'react-bootstrap'
import { Slider } from "antd";
import HistoryEvents from '../elements/historyEvents/HistoryEvents';
import SectionTitle from '../elements/sectionTitle/SectionTitle';

const History = () => {
    const [selectedYear, setSelectedYear] = useState("2002");

    return (
        <section className={styles.history_section}>
            <Container className={styles.history_container}>
                <Row className={styles.row1}>
                    <Col md="9">
                    <SectionTitle heading_title={"Established in 2002, Kamsoft Technologies delivers world-class IT solutions."}
                    items={[
                        "At Kamsoft Technologies, we specialize in crafting intelligent automation solutions and distinctive web designs and application development tailored to the unique needs of diverse industries. We believe your website or portal should do more than just look good—it should communicate your brand, showcase your products, and drive engagement.",
                        "Our designs are intuitive, responsive, and strategically aligned to spark interest and guide users toward action. Alongside web development, we also offer comprehensive digital services to amplify your online reach and business impact.Let your digital presence speak volumes—with Kamsoft."
                        ]}/>
                    </Col>
                </Row>
                <Row className={styles.row2}>
                    <Col md="10">
                        <div className={styles.timeline}>
                            <div style={{textAlign:'center'}}>
                                <h2>2002 - 2019: Foundation Under Sister Company</h2>
                                <p>Operated under the flagship of a sister company, delivering specialized software solutions.</p>
                            </div>
                           
                            <Slider className={styles.his_slider} min={1999} max={2024} marks={{ 2002: "2002", 2014: "2014", 2019: "2019", 2022: "2022",2024: "2024"}} step={2}  defaultValue={selectedYear} onChange={(value) => setSelectedYear(value)} />
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