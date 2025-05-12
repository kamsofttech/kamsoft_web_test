
import React from 'react'
import styles from './contactNew.module.css'
import { Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import SectionTitle from '@/components/elements/sectionTitle/SectionTitle';
import { Card, Form, Input, Button } from 'antd';

const ContactNewComponent = () => {
    const [form] = Form.useForm();
    const [erMsg, setErMsg] = React.useState('')
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const onFinish = async (values) => {
        const { name, email, phone, comment } = values;
        // console.log("val",values)
        const subject = `Enquiry from ${name} (${phone})`;
        const msg = `<h6>Name: ${name}</h6>  <h6>Phone: ${phone} </h6>  <h6>Email: ${email} </h6>  ----------------------------  <p>${comment} </p>`;
        try {
            const res = await axios.post('/api/sendEmail',
                {
                    subject,
                    msg,
                    to: 'shreemarathecaterers@gmail.com',
                    from: "enquiry@shreemarathecaterers.com",
                    pass: "Enquiry@2025",
                    hostName: "mail.shreemarathecaterers.com"
                })
            console.log(res)
            if (res.status == 200) {
                //form.resetFields()
                message.success({
                    content: 'Your message Has been send successfully',
                    className: 'custom-class',
                    style: {
                        marginTop: '40vh',
                    },
                });
            } else {
                message.error('Your message has not been send');
            }




        } catch (error) {
            console.error("Email sending error: ", error);
            message.error('An unexpected error occurred.');
        }
    };
    return (
        <section className={styles.processBox_section}>
            <Container className={styles.processBox_container}>
                <Row className={styles.row1}>
                    <Col md="9">
                        <SectionTitle heading_title={"Contact us"}
                            items={["Drop us a line! We’ll set up a time to chat over the phone or in-person to know more about your business needs. All primary conferences are free of charge."]} />
                    </Col>
                </Row>
                <Row className={styles.row} >
                    <Col md="4">
                        <div className={styles.section_title}>
                            <h2>Let’s talk about what you want to accomplish and how we can make it happen.</h2>
                            <p>This is the beginning of creating the life that you want to live</p>
                            {/* <a href="">Lets Start Project <FontAwesomeIcon icon={faArrowRight}/></a> */}
                            {/* <div className={styles.mapBox}>
                            
                            {/* <a href="">Lets Start Project <FontAwesomeIcon icon={faArrowRight}/></a> 
                            <iframe style={{filter: 'grayscale(1)'}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29046.64049947941!2d73.81807170607793!3d15.391063312345928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfc7e5cb1b9227%3A0xe3661f84899f92f9!2sKamsoft%20Technologies!5e0!3m2!1sen!2sin!4v1746776140799!5m2!1sen!2sin" width="100%" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div> */}
                        </div>

                    </Col>
                    <Col md="8">
                        <div className={styles.feature_info_styles}>
                            <div className={styles.feature_info_inner}>
                                <Card hoverable>
                                    <div className={styles.cont_form}>
                                        <h4>Need assistance? please fill the form</h4>
                                        <Form
                                            layout='vertical'
                                            onFinish={onFinish}
                                            onFinishFailed={onFinishFailed}
                                            size='large'
                                            className={styles.form_box}
                                        >
                                            <Form.Item
                                                name="name"
                                                className={styles.form_item_input}

                                            >
                                                <Input placeholder="Name" />
                                            </Form.Item>
                                            <Form.Item
                                                className={styles.form_item_input}
                                                name="email"

                                            >
                                                <Input placeholder="Email"
                                                />
                                            </Form.Item>


                                            <Form.Item
                                                className={styles.form_item_input}
                                                name="phone"

                                            >
                                                <Input placeholder="Phone"
                                                />
                                            </Form.Item>

                                            <Form.Item
                                                name="comment"
                                                className={styles.form_item_input}

                                            >
                                                <Input.TextArea rows={8} placeholder="Enquiry Description" />
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
                                </Card>
                            </div>
                        </div></Col>
                </Row>
                <Row className={styles.row}  style={{marginTop:35}} >
                    <Col md="4">
                        <div className={styles.section_title}>
                            <h2 className={styles.mapTitle}>Doing business with us is easy</h2>

                            <a href="">Get Direction  <FontAwesomeIcon icon={faArrowRight} /></a>
                            {/* */}
                        </div>

                    </Col>
                    <Col md="8">
                        <div className={styles.feature_info_styles}>
                            <div className={styles.feature_info_inner}>
                                <div className={styles.mapBox}>
                                    <iframe style={{ filter: 'grayscale(1)' }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29046.64049947941!2d73.81807170607793!3d15.391063312345928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfc7e5cb1b9227%3A0xe3661f84899f92f9!2sKamsoft%20Technologies!5e0!3m2!1sen!2sin!4v1746776140799!5m2!1sen!2sin" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                            </div>
                        </div></Col>
                </Row>
            </Container>
        </section>
    )
}

export default ContactNewComponent