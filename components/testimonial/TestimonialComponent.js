import React from 'react'
import styles from './testimonial.module.css';
import { Container } from 'react-bootstrap';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import TitleCenterComponent2 from '../elements/title/TitleCenterComponent2';
import TestiItemComponent from './TestiItemComponent';
import { Fade } from 'react-awesome-reveal';

const TestimonialComponent = () => {
  return (
    <section className={styles.testi_sec}>
        <Container className={styles.pd80}>
            <div className={styles.pd_lr}>
            <TitleCenterComponent2 title={'Our Good Customers'}/>
            <Fade direction='up'>
            <h6>Seven Wonders Trading provides you the best range of jam, cadbury chocolate, flavor chocolate, drinking chocolate, chocolates & nestle chocolates with effective & timely delivery .</h6>
            </Fade>
            </div>
            
            <Swiper  
            spaceBetween={40} 
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                476: {
                    slidesPerView: 1,
                  },
                  991: {
                    slidesPerView: 3,
                  }
              }}
              
              modules={[Autoplay]} 
                      className="service-swiper"
                    >
                        
                        <SwiperSlide>
                          <Fade delay={0.5}>
                            <TestiItemComponent 
                            name='pradeep das'
                            post='Busines'
                            image={'https://klbtheme.com/partdo/wp-content/uploads/2022/10/avatar-02.jpg'}
                            desc={'Astropons intimitetskoordinator podiktigt. Egons nytons. Intrapomiheten krofyl. Lalanade bedade i vatreng e-krona.'}
                            />
                            </Fade>
                        </SwiperSlide>
                        <SwiperSlide>
                        <Fade delay={0.10}>
                            <TestiItemComponent 
                            name='Mohit Verma'
                            post='Busines'
                            desc={'Astropons intimitetskoordinator podiktigt. Egons nytons. Intrapomiheten krofyl. Lalanade bedade i vatreng e-krona.'}
                            image={'https://klbtheme.com/partdo/wp-content/uploads/2022/11/avatar-01.jpg'}/>
                            </Fade>
                        </SwiperSlide>
                        <SwiperSlide>
                            <TestiItemComponent 
                            name='Rameet Karjukar'
                            post='Busines'
                            desc={'Astropons intimitetskoordinator podiktigt. Egons nytons. Intrapomiheten krofyl. Lalanade bedade i vatreng e-krona.'}
                            image={'https://klbtheme.com/partdo/wp-content/uploads/2022/10/avatar-02.jpg'}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <TestiItemComponent 
                            name='Taniya Frandis'
                            post='Busines'
                            desc={'Astropons intimitetskoordinator podiktigt. Egons nytons. Intrapomiheten krofyl. Lalanade bedade i vatreng e-krona.'}
                            image={'https://klbtheme.com/partdo/wp-content/uploads/2022/10/avatar-02.jpg'}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <TestiItemComponent 
                            name='Sameer Kargaokar'
                            post='Construction'
                            desc={'Astropons intimitetskoordinator podiktigt. Egons nytons. Intrapomiheten krofyl. Lalanade bedade i vatreng e-krona.'}
                            image={'https://klbtheme.com/partdo/wp-content/uploads/2022/10/avatar-02.jpg'}/>
                        </SwiperSlide>
                        
                    </Swiper>
        </Container>
    </section>
  )
}

export default TestimonialComponent