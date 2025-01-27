import {React, useState} from 'react'
import styles from './displayTabs.module.css'
import { Col, Container, Row } from 'react-bootstrap'
import { Tabs } from 'antd';
import "antd/dist/reset.css";
import TabMissionVission from '../elements/tabs/TabMissionVission';
import TabOurChallenges from '../elements/tabs/TabOurChallenges';
import TabTechnologyPartners from '../elements/tabs/TabTechnologyPartners';
import TabMeetOurTeam from '../elements/tabs/TabMeetOurTeam';
import TabCareerWithUs from '../elements/tabs/TabCareerWithUs';

const DisplayTabs = () => {
    const { TabPane } = Tabs;
    const [activeTab, setActiveTab] = useState("1");
    return (
        <section className={styles.displayTabs_sec}>
            <Container className={styles.displayTabs_con}>
                <Row className={styles.head_row}>
                    <Col lg="10">
                        <div className={styles.title_box}>
                            <div className={styles.left_title}>
                                <p>Established in</p>
                                <h3>2010</h3>
                            </div>
                            <div className={styles.right_title}>
                                <h2>We enable constant enterprise transformation at speed and scale.</h2>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md="3">
                        <div className={styles.tab_container}>
                            <Tabs defaultActiveKey="1"
                                tabPosition="left"
                                activeKey={activeTab}
                                className={styles.tab_div}
                                onChange={(key) => setActiveTab(key)}>
                                <TabPane tab={<a className={`${styles.tab_title}`} aria-details={"Mission and Vission"} >Mission and Vission </a>} key="1" />
                                <TabPane tab={<a className={`${styles.tab_title}`} aria-details={"Our Challenges"} >Our Challenges </a>} key="2" />
                                <TabPane tab={<a className={`${styles.tab_title}`} aria-details={"Technology Partner"} >Technology Partner </a>} key="3" />
                                <TabPane tab={<a className={`${styles.tab_title}`} aria-details={"Meet Our Team"} >Meet Our Team </a>} key="4"/>
                                <TabPane tab={<a className={`${styles.tab_title}`} aria-details={"Career with us"} >Career with us</a>} key="5"/>
                            </Tabs>
                        </div>

                    </Col>
                    <Col md="9">
                        <div className={styles.content_container}>
                            {activeTab === "1" && <TabMissionVission />}
                            {activeTab === "2" && <TabOurChallenges />}
                            {activeTab === "3" && <TabTechnologyPartners />}
                            {activeTab === "4" && <TabMeetOurTeam />}
                            {activeTab === "5" && <TabCareerWithUs />}
                        </div>
                    </Col>

                </Row>
            </Container>
        </section>
    )
}

export default DisplayTabs