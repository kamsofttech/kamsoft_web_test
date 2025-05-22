import React, { useRef } from 'react'
import styles from './portfolio.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation, FreeMode } from 'swiper/modules';
const PfLeftComponent = () => {
      const swiperRef = useRef(null);
      const handleTap = () => {
    const swiper = swiperRef.current.swiper;
    if (swiper.autoplay.running) {
      swiper.autoplay.stop();
    } else {
      swiper.autoplay.start();
    }
  };

    return (
        <div className={styles.pf_left_box}>
            <div className={styles.pf_title}>
                <h3>Our Portfolio</h3>
            </div>
            <div onMouseOver={handleTap}  onTouchStart={handleTap} className={styles.pf_swiper}>
                <Swiper
                    ref={swiperRef}
                    slidesPerView={1}
                    spaceBetween={30}
                    freeMode={true}

                    loop={true}
                    autoplay={{
                        delay: 2500,
                        pauseOnMouseEnter:true,
                        disableOnInteraction: true,
                    }}


                    modules={[Autoplay, Pagination, Navigation, FreeMode]}
                    className="mySwiper" >
                    <SwiperSlide >
                        <div className={styles.pf_item}>
                            <div className={styles.pf_img} style={{ backgroundImage: `url(/images/portfolio/p1.jpg)` }}>
                                {/* <img src="/images/portfolio/03.jpg"/> */}
                            </div>
                            <div className={styles.pf_info}>
                                <a className={styles.pf_info_title} href="#">🏛️ Village Panchayat Website Development </a>
                                <a className={styles.pf_info_subTitle} href="#">Government of Goa</a>
                                <p className="mt-2">We successfully designed and developed a comprehensive suite of websites for all Village Panchayats across the state of Goa, as part of a digital governance initiative led by the Government of Goa. This ambitious project aimed to empower grassroots administration by bringing transparency, accessibility, and digital connectivity to every village through dedicated online platforms.</p>
                                <a href="#" className={styles.icon_btn}><i className="fas fa-long-arrow-alt-right"></i></a>
                            </div>
                        </div>
                       
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className={styles.pf_item}>
                            <div className={styles.pf_img} style={{ backgroundImage: `url(/images/portfolio/p2.jpg)` }}>
                                {/* <img src="/images/portfolio/03.jpg"/> */}
                            </div>
                            <div className={styles.pf_info}>
                                <a className={styles.pf_info_title} href="#">🏡 Farmhouse Website Development</a>
                                <a className={styles.pf_info_subTitle} href="#">Modern Web Solutions for Premium Rural Getaways</a>
                                <p className="mt-2">We have successfully designed and developed a portfolio of custom farmhouse websites, catering to the growing demand for rural retreats, agritourism, and private holiday rentals. These websites were created for individual farmhouse owners and farmstay businesses, offering a seamless digital presence that reflects the unique charm and personality of each property.</p>
                                <a href="#" className={styles.icon_btn}><i className="fas fa-long-arrow-alt-right"></i></a>
                            </div>
                        </div>
                       
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className={styles.pf_item}>
                            <div className={styles.pf_img} style={{ backgroundImage: `url(/images/portfolio/p3.jpg)` }}>
                                {/* <img src="/images/portfolio/03.jpg"/> */}
                            </div>
                            <div className={styles.pf_info}>
                                <a className={styles.pf_info_title} href="#">⚓ Shipbuilding Website Development</a>
                                <a className={styles.pf_info_subTitle} href="#">Digital Presence for Maritime Engineering Excellence</a>
                                <p className="mt-2">We have successfully developed a series of shipbuilding company websites, tailored to showcase the engineering, craftsmanship, and innovation behind maritime infrastructure and vessel construction. These platforms were designed for shipyards, marine engineering firms, and offshore solution providers, aligning with the industries technical depth and global clientele expectations.</p>
                                <a href="#" className={styles.icon_btn}><i className="fas fa-long-arrow-alt-right"></i></a>
                            </div>
                        </div>
                       
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className={styles.pf_item}>
                            <div className={styles.pf_img} style={{ backgroundImage: `url(/images/portfolio/p4.jpg)` }}>
                                {/* <img src="/images/portfolio/03.jpg"/> */}
                            </div>
                            <div className={styles.pf_info}>
                                <a className={styles.pf_info_title} href="#">🎨🖨️  Art Printery Website Development</a>
                                <a className={styles.pf_info_subTitle} href="#">Elevating Creative Print Businesses Through Digital Excellence</a>
                                <p className="mt-2">We successfully designed and developed a series of custom websites for art printeries, helping these creative businesses showcase their artistic printing capabilities and reach a broader audience through a compelling digital presence. Each website was crafted to reflect the unique aesthetic and craftsmanship of the printery, while also offering powerful tools for customer engagement, portfolio display, and online orders.</p>
                                <a href="#" className={styles.icon_btn}><i className="fas fa-long-arrow-alt-right"></i></a>
                            </div>
                        </div>
                       
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className={styles.pf_item}>
                            <div className={styles.pf_img} style={{ backgroundImage: `url(/images/portfolio/p5.jpg)` }}>
                                {/* <img src="/images/portfolio/03.jpg"/> */}
                            </div>
                            <div className={styles.pf_info}>
                                <a className={styles.pf_info_title} href="#">⚙️ Engineering Product Website Development</a>
                                <a className={styles.pf_info_subTitle} href="#"> Showcasing Industrial Innovation Digitally</a>
                                <p className="mt-2">We successfully developed a full suite of websites for companies in the engineering products sector, helping manufacturers and industrial suppliers present their technical products and capabilities through powerful, high-performance digital platforms. These websites were designed to combine technical accuracy with modern design, giving engineering businesses a professional edge in both domestic and international markets.</p>
                                <a href="#" className={styles.icon_btn}><i className="fas fa-long-arrow-alt-right"></i></a>
                            </div>
                        </div>
                       
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className={styles.pf_item}>
                            <div className={styles.pf_img} style={{ backgroundImage: `url(/images/portfolio/p6.jpg)` }}>
                                {/* <img src="/images/portfolio/03.jpg"/> */}
                            </div>
                            <div className={styles.pf_info}>
                                <a className={styles.pf_info_title} href="#">🚤 Boat Building Website Development</a>
                                <a className={styles.pf_info_subTitle} href="#"> Digital Platforms for Marine Craftsmanship and Innovation</a>
                                <p className="mt-2">We have successfully designed and developed a full range of websites for boat building companies, highlighting their expertise in marine engineering, custom vessel fabrication, and innovative design. These websites serve as powerful digital assets for showcasing craftsmanship, attracting global clients, and managing project inquiries with professionalism and clarity.</p>
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