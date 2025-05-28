import React from 'react'
import styles from './contactNew.module.css'
import { Col, Container, Row } from 'react-bootstrap'
import { Button, Form, Input, message,notification } from "antd";
import axios from 'axios';
import IndustryItem from './IndustryItem';
import { useUserContext } from '../context/UserContext';
const ContactNewComponent = () => {
    const { sec5, setSec5 } = useUserContext()
    const sec5Ref = React.useRef('')
    setSec5(sec5Ref)
    const [form] = Form.useForm();
    const [erMsg, setErMsg] = React.useState('')
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const onFinish = async (values) => {
        try {
            const res = await axios.post('/api/sendEmail',
                {
                    name:values.name,
                    email:values.email,
                    phone:values.phone,
                    comment:values.comment
                })
            //console.log(res)
            if (res.status == 200) {

                form.resetFields()
                notification.success({
                message: `Email`,
                description: 'Your message Has been sent successfully',
                placement:'bottomRight',
                });
               
            } else {
                notification.error({
                message: `Email`,
                description: 'Your message has not been sent',
                placement:'bottomRight',
                });
               
            }




        } catch (error) {
            console.error("Email sending error: ", error);
            notification.error({
                message: `Email`,
                description: error,
                placement:'bottomRight',
            });
        }
    };
    return (
        <section id='sec5' ref={sec5Ref} className={styles.cont_sec}>
            <Container fluid style={{ padding: 0 }}>
                <Row className={`${styles.cont_row} g-0`}>
                    <Col xl={4} lg={6} md={6}>
                        <div className={styles.cont_map}>
                            <iframe style={{ filter: 'grayscale(1)' }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29046.64049947941!2d73.81807170607793!3d15.391063312345928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfc7e5cb1b9227%3A0xe3661f84899f92f9!2sKamsoft%20Technologies!5e0!3m2!1sen!2sin!4v1746776140799!5m2!1sen!2sin" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </Col>
                    <Col xl={4} lg={6} md={6}>
                        <div className={styles.cont_form}>
                            <h4>Complete the form below. We will respond as soon as possible.</h4>
                            <Form
                                layout='vertical'
                                form={form}
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                                size='large'
                                initialValues={{
                                    name: '',
                                    email: '',
                                    phone:'',
                                    comment:''
                                }}
                                className={styles.form_box}
                            >
                                <Row>
                                    <Col md={6}>
                                        <Form.Item
                                            name="name"
                                            className={styles.form_item_input}
                                            rules={[{ required: true,message:'Name is required!' }]}
                                        >
                                            <Input  placeholder="Name" />
                                        </Form.Item>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Item
                                            className={styles.form_item_input}
                                            name="email"
                                            rules={[{ required: true,message:'Email is required!' }]}
                                        >
                                            <Input placeholder="Email"/>
                                        </Form.Item>
                                    </Col>
                                </Row>


                                <Form.Item
                                    className={styles.form_item_input}
                                    name="phone"
                                    rules={[{ required: true,message:'Phone is required!' }]}
                                >
                                    <Input placeholder="Phone"
                                    />
                                </Form.Item>

                                <Form.Item
                                    name="comment"
                                    className={styles.form_item_input}
                                    rules={[{ required: true,message:'Messaage is required!' }]}
                                >
                                    <Input.TextArea placeholder="Enquiry Description" />
                                </Form.Item>
                                <Form.Item >
                                    <Button style={{ borderRadius: 50, fontWeight: 700, padding: '24px 34px' }} block size='large' type="primary" className='btn_primary2' htmlType="submit">
                                        Get in Touch
                                        <span><i className="fas fa-arrow-right"></i></span>
                                    </Button>

                                </Form.Item>
                                {erMsg && <p className={styles.er_msg}>{erMsg}</p>}
                            </Form>
                        </div>
                    </Col>
                    <Col xl={4} lg={12}>
                        <div className={styles.cont_right}>
                            <div className={styles.contHead}>
                                <h2>We excel in our industry so that you can get in yours.</h2>
                                <p>See some of the industries we have vast experience working in as a full-service marketing agency.</p>
                            </div>

                            <div className=''>
                                <IndustryItem />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

        </section>
    )
}

export default ContactNewComponent