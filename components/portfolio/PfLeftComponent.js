import React from 'react'
import styles from './portfolio.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation, FreeMode } from 'swiper/modules';
const PfLeftComponent = () => {
    return (
        <div className={styles.pf_left_box}>
            <div className={styles.pf_title}>
                <h3>Our Portfolio</h3>
            </div>
            <div className={styles.pf_swiper}>
                <Swiper

                    slidesPerView={1}
                    spaceBetween={30}
                    freeMode={true}

                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}


                    modules={[Autoplay, Pagination, Navigation, FreeMode]}
                    className="mySwiper" >
                    <SwiperSlide >
                        <div className={styles.pf_item}>
                            <div className={styles.pf_img}>
                                <img src="/images/portfolio/03.jpg"/>
                            </div>
                            <div className={styles.pf_info}>
                                <a className={styles.pf_info_title} href="#">Financeoont</a>
                                <a className={styles.pf_info_subTitle} href="#">Finance</a>
                                <p className="mt-2">It is truly amazing the damage that we, as parents, can inflict on our children...</p>
                                <a href="#" className={styles.icon_btn}><i className="fas fa-long-arrow-alt-right"></i></a>
                            </div>
                        </div>
                       
                    </SwiperSlide>
                    
                </Swiper>
            </div>
        </div>
    )
}

export default PfLeftComponent