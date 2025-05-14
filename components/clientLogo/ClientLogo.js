import React from 'react'
import styles from './clientLogo.module.css'
import { Col, Container, Row } from 'react-bootstrap'

import { useUserContext } from '../context/UserContext';
import Marquee from 'react-fast-marquee';

const ClientLogo = () => {
    const { sec4, setSec4 } = useUserContext()
    const sec4Ref = React.useRef('')
    setSec4(sec4Ref)
    return (
        <section id='sec4' ref={sec4Ref} className={styles.client_logo_section}>
            <Container className={styles.client_logo_container}>
                <Row className={styles.row}>

                    <Col lg={7} className={styles.offset_lg_4}>
                        <Marquee pauseOnHover speed={50} className={styles.mar_box}>
                           <a href="#"><img src="/images/clients/c18.png" /></a>
                            <a href="#"><img src="/images/clients/c19.jpg" /></a>
                            <a href="#"><img src="/images/clients/c20.png" /></a>
                            <a href="#"><img src="/images/clients/c21.png" /></a>
                            <a href="#"><img src="/images/clients/c30.png" /></a>
                            <a href="#"><img src="/images/clients/c22.png" /></a>
                            <a href="#"><img src="/images/clients/c23.png" /></a>
                            <a href="#"><img src="/images/clients/c24.png" /></a>
                            <a href="#"><img src="/images/clients/c25.png" /></a>
                            <a href="#"><img src="/images/clients/c26.png" /></a>
                            <a href="#"><img src="/images/clients/c27.png" /></a>
                            <a href="#"><img src="/images/clients/c28.png" /></a>
                            <a href="#"><img src="/images/clients/c29.png" /></a>
                            <a href="#"><img src="/images/clients/c1.png" /></a>
                            <a href="#"><img src="/images/clients/c2.png" /></a>
                            <a href="#"><img src="/images/clients/c13.png" /></a>
                            <a href="#"><img src="/images/clients/c4.png" /></a>
                            <a href="#"><img src="/images/clients/c5.png" /></a>
                            <a href="#"><img src="/images/clients/c6.jpg" /></a>
                            <a href="#"><img src="/images/clients/c8.png" /></a>
                            <a href="#"><img src="/images/clients/c12.jpg" /></a>
                            <a href="#"><img src="/images/clients/c9.png" /></a>
                            <a href="#"><img src="/images/clients/c15.png" /></a>
                            <a href="#"><img src="/images/clients/c16.png" /></a>
                            <a href="#"><img src="/images/clients/c17.png" /></a>
                        </Marquee>
                       
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ClientLogo