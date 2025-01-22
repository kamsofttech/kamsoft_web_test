import React from 'react'
import styles from './getIntouch2.module.css';
import { Form, message, Input, Button } from 'antd'
import Axios from 'axios';
import { CheckOutlined } from '@ant-design/icons';
import { Col, Row } from 'react-bootstrap';

const GetinTouchComponent2 = () => {
    const [form] = Form.useForm();
    const [erMsg,setErMsg]=React.useState('')
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    
    const onFinish = async (values) => {
        console.log('Success:', values);
        if (values.name!==undefined &&values.email!==undefined && values.phone!==undefined && values.values.message!==undefined) {
            const string = {
                userName: values.name,
                email: values.email,
                number: values.phone,
                msg: 'Name:' + values.name + '<br/> Email:' + values.email + '<br/> Mobile:' + values.phone + '<br/>' + values.message
            }
            Axios.post('api/sendEmail', { data: string })
                .then(({ data }) => {
                    console.log('maildata', data)
                    if (data == '1') {
                        form.resetFields()
                        message.success({
                            content: 'Your message Has been send successfully',
                            className: 'custom-class',
                            style: {
                                marginTop: '40vh',
                            },
                        });
                    } else {
                        message.error('Your message has not been send');
                        message.success({
                            content: 'Your message has not been send',
                            className: 'custom-class',
                            style: {
                                marginTop: '40vh',
                            },
                        });
                    }
                })

        }else{
            setErMsg('Please enter all information to send message')
            setTimeout(() => {
                setErMsg('')
            }, 6000);
        }
        

    }
    return (
        <div className={styles.get_form}>
            <Form
                layout='vertical'
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                size='large'
            >
                <Row>
                    <Col md={6}>
                        <Form.Item
                        name="name"
                        className={styles.form_item_input}
                        
                        >
                        <Input  placeholder="Name" />
                        </Form.Item>
                    </Col>
                    <Col md={6}>
                        <Form.Item
                        className={styles.form_item_input}
                        name="email"
                        
                        >
                    <Input placeholder="Email"
                    />
                </Form.Item>
                    </Col>
                </Row>
                
                
                <Form.Item
                    className={styles.form_item_input}
                    name="phone"
                    
                >
                    <Input placeholder="Phone"
                    />
                </Form.Item>

                <Form.Item
                    name="message"
                    className={styles.form_item_input}
                    
                >
                    <Input.TextArea  placeholder="Messages" />
                </Form.Item>
                <Form.Item >
                    <Button size='large' type="primary" className='btn_primary2' htmlType="submit">
                    Send message
                    </Button>
                    
                </Form.Item>
                {erMsg && <p className={styles.er_msg}>{erMsg}</p>}
            </Form>
        </div>
    )
}

export default GetinTouchComponent2