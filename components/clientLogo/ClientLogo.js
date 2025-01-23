import React from 'react'
import styles from './clientLogo.module.css'
import { Col, Container, Row } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation, FreeMode } from 'swiper/modules';

const ClientLogo = () => {
    return (
        <section className={styles.client_logo_section}>
            <Container className={styles.client_logo_container}>
                <Row className={styles.row}>
                    <Col xl="3" lg="4" md="4">
                        <div className={styles.desc_text}>
                            <h5>Awards and Nominees</h5>
                        </div>
                    </Col>
                    <Col xl="9" md="8">
                        <Swiper
                        
                            slidesPerView={3}
                            spaceBetween={30}
                            freeMode={true}
                            loop={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}


                            modules={[Autoplay, Pagination, Navigation, FreeMode]}
                            className="mySwiper" >
                            <SwiperSlide ><img src="/images/award-logo/01.svg"/></SwiperSlide>
                            <SwiperSlide><img src="/images/award-logo/02.svg"/></SwiperSlide>
                            <SwiperSlide><img src="/images/award-logo/03.svg"/></SwiperSlide>
                            <SwiperSlide><img src="/images/award-logo/04.svg"/></SwiperSlide>
                            <SwiperSlide><img src="/images/award-logo/05.svg"/></SwiperSlide>
                            <SwiperSlide><img src="/images/award-logo/06.svg"/></SwiperSlide>
                        </Swiper>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ClientLogo