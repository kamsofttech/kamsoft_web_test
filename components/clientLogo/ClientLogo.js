import React from 'react'
import styles from './clientLogo.module.css'
import { Col, Container, Row } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation, FreeMode } from 'swiper/modules';
import { useUserContext } from '../context/UserContext';

const ClientLogo = () => {
    const{sec4,setSec4}=useUserContext()
          const  sec4Ref=React.useRef('')
          setSec4(sec4Ref)
    return (
        <section id='sec4' ref={sec4Ref} className={styles.client_logo_section}>
            <Container className={styles.client_logo_container}>
                <Row  className={styles.row}>
                    
                    <Col lg={7} className={styles.offset_lg_4}>
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
                            className={`${styles.client_swiper} mySwiper`} >
                            <SwiperSlide ><img src="/images/award-logo/01.svg"/></SwiperSlide>
                            <SwiperSlide><img src="/images/award-logo/02.svg" /></SwiperSlide>
                            <SwiperSlide><img src="/images/award-logo/03.svg" /></SwiperSlide>
                            <SwiperSlide><img src="/images/award-logo/04.svg" /></SwiperSlide>
                            <SwiperSlide><img src="/images/award-logo/05.svg" /></SwiperSlide>
                            <SwiperSlide><img src="/images/award-logo/06.svg" /></SwiperSlide>
                        </Swiper>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ClientLogo