import React from 'react'
import styles from './car.module.css'
import { Col, Container, Row } from 'react-bootstrap'
import { Collapse, Space, theme } from 'antd';
import { ArrowUpOutlined } from '@ant-design/icons';
import SectionTitle from '@/components/elements/sectionTitle/SectionTitle';
function CareersComponent() {
 
    const text = `
  From two to five he worked at his trade. The rest of the evening until 10 he spent in music, or diversion of some sort. This time is used also to put things in their places. In the last thing before retiring was examination of the day. At the age of 79, he ascribed his health to temperance; the acquisition of misfortune to industry and frugality; the confidence of his country to sincerity and justice.
`;

    return (
        <section className={styles.fq_section}>
            <Container className={styles.fq_container}>
                <Row className={styles.row1}>
                    <Col md="9">
                        <SectionTitle heading_title={"Current career opportunities at Kamsoft technologies"}
                        items={["Positive pleasure-oriented goals are much more powerful motivators than negative fear-based ones."]}/>
                    </Col>
                </Row>
                <div className={styles.fq_box}>
                    
                        
                        <Collapse
                        size='large'
                        bordered={false}
                        accordion 
                        expandIcon={({ isActive }) => <ArrowUpOutlined rotate={isActive ? 0 : 180} />}
                        expandIconPosition='end'
                            
                            defaultActiveKey={['1']}
                            items={[
                                {
                                key: '1',
                                label: 'IT & Security Manager',
                                children: <p>{text}</p>,
                                },
                                {
                                key: '2',
                                label: 'Senior React Developer',
                                children: <p>{text}</p>,
                                },
                            ]}
                        />
                    
                    
                </div>
            </Container>
        </section>
    )
}

export default CareersComponent