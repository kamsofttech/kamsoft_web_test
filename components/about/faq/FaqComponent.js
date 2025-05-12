import React from 'react'
import styles from './faq.module.css'
import { Container } from 'react-bootstrap'
import { Collapse, Space, theme } from 'antd';
import { ArrowUpOutlined } from '@ant-design/icons';
function FaqComponent() {
 
    const text = `
  From two to five he worked at his trade. The rest of the evening until 10 he spent in music, or diversion of some sort. This time is used also to put things in their places. In the last thing before retiring was examination of the day. At the age of 79, he ascribed his health to temperance; the acquisition of misfortune to industry and frugality; the confidence of his country to sincerity and justice.
`;

    return (
        <section className={styles.fq_section}>
            <Container className={styles.fq_container}>
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
                                label: 'I have some questions about privacy. Who can I ask?',
                                children: <p>{text}</p>,
                                },
                                {
                                key: '2',
                                label: 'What is the cost of a Service Agreement?',
                                children: <p>{text}</p>,
                                },
                            ]}
                        />
                    
                    
                </div>
            </Container>
        </section>
    )
}

export default FaqComponent