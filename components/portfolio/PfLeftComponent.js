import React, { useRef } from 'react'
import styles from './portfolio.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation, FreeMode } from 'swiper/modules';
const PfLeftComponent = ({swiperRef,handleSlideChange}) => {
      //const swiperRef = useRef(null);
      const handleTap = () => {
    const swiper4 = swiperRef.current.swiper;
    if (swiper4?.autoplay?.running) {
      swiper4?.autoplay.stop();
    } else {
      swiper4?.autoplay.start();
    }
  };

    return (
        <div className={styles.pf_left_box}>
            <div className={styles.pf_title}>
                <h3>Our Portfolio</h3>
                <p>Web Portal Application Development</p>
            </div>
            <div onMouseOver={handleTap}  onTouchStart={handleTap} className={styles.pf_swiper}>
                <Swiper
                    ref={swiperRef}
                    slidesPerView={1}
                    spaceBetween={30}
                    freeMode={true}
                    onSlideChange={(index) => handleSlideChange(index)}
                    onSwiper={(swiper) => {
                            swiperRef.current = swiper;
                        }} 
                    //loop={true}
                    // autoplay={{
                    //     delay: 2500,
                    //     pauseOnMouseEnter:true,
                    //     disableOnInteraction: true,
                    // }}


                    modules={[Autoplay, Pagination, Navigation, FreeMode]}
                    className="mySwiper" >
                    <SwiperSlide >
                        <div className={styles.pf_item}>
                            <div className={styles.pf_img} style={{ backgroundImage: `url(/images/portfolio/p1.jpg)` }}>
                                {/* <img src="/images/portfolio/03.jpg"/> */}
                            </div>
                            <div className={styles.pf_info}>
                                <a className={styles.pf_info_title} href="#">🏛️ Goverment Sector  </a>
                                <a className={styles.pf_info_subTitle} href="#">Power Energy/Village Panchayat</a>
                                <p className="mt-2">E-Governance platforms likes Taxes and Fees, digital house hold records, Village Infra structure and resources.
Smart Governance: Blockchain for transparency, AI in policy-making.</p>
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
                                <a className={styles.pf_info_title} href="#">🌍🌾 Tour & Travel + Farm Stay</a>
                                <a className={styles.pf_info_subTitle} href="#">Streamlining Logistics, Agri-Tech, and Tourism
</a>
                                <p className="mt-2">We specialize in smart digital solutions for logistics optimization, agri-tech innovations, and seamless travel & stay management.</p>
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
                                <a className={styles.pf_info_title} href="#">⚓ Logistics</a>
                                <a className={styles.pf_info_subTitle} href="#">Seamless Solutions for Modern Logistics</a>
                                <p className="mt-2"> we empower businesses across logistics, warehousing, and supply chain industries with advanced digital solutions designed to streamline every stage of material handling</p>
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
                                <a className={styles.pf_info_title} href="#">🎨🖨️ Printing & Packaging</a>
                                <a className={styles.pf_info_subTitle} href="#">Smart Web Solutions for Print & Pack Leaders</a>
                                <p className="mt-2">Elevate your printing and packaging brand with a modern, SEO-ready, mobile-optimized website tailored for your industr</p>
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
                                <a className={styles.pf_info_title} href="#">⚙️⛏️ Manufacturing/Mining</a>
                                <a className={styles.pf_info_subTitle} href="#">Digital Solutions Built for Modern Manufacturing</a>
                                <p className="mt-2">Custom-built digital tools to automate, monitor, and manage every stage of your manufacturing workflow.</p>
                                <a href="#" className={styles.icon_btn}><i className="fas fa-long-arrow-alt-right"></i></a>
                            </div>
                        </div>
                       
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className={styles.pf_item}>
                            <div className={styles.pf_img} style={{ backgroundImage: `url(/images/portfolio/p7.jpg)` }}>
                                {/* <img src="/images/portfolio/03.jpg"/> */}
                            </div>
                            <div className={styles.pf_info}>
                                <a className={styles.pf_info_title} href="#">🛒💰 Retail/Finance</a>
                                <a className={styles.pf_info_subTitle} href="#">Empowering with Engaging & Scalable Websites</a>
                                <p className="mt-2">From e-commerce/Finance platforms to brand showcase sites, we create fast, mobile-friendly, and secure retail websites designed to boost sales, enhance customer experience, and scale with your business growth.</p>
                                <a href="#" className={styles.icon_btn}><i className="fas fa-long-arrow-alt-right"></i></a>
                            </div>
                        </div>
                       
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className={styles.pf_item}>
                            <div className={styles.pf_img} style={{ backgroundImage: `url(/images/portfolio/p8.jpg)` }}>
                                {/* <img src="/images/portfolio/03.jpg"/> */}
                            </div>
                            <div className={styles.pf_info}>
                                <a className={styles.pf_info_title} href="#">🎓 Institution/Education</a>
                                <a className={styles.pf_info_subTitle} href="#">Transforming Learning with Modern Web Platforms</a>
                                <p className="mt-2">We build dynamic, user-friendly websites that enhance student engagement, simplify administration, and showcase your institution’s unique strengths — all optimized for seamless access and growth.</p>
                                <a href="#" className={styles.icon_btn}><i className="fas fa-long-arrow-alt-right"></i></a>
                            </div>
                        </div>
                       
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className={styles.pf_item}>
                            <div className={styles.pf_img} style={{ backgroundImage: `url(/images/portfolio/p9.jpg)` }}>
                                {/* <img src="/images/portfolio/03.jpg"/> */}
                            </div>
                            <div className={styles.pf_info}>
                                <a className={styles.pf_info_title} href="#">🏥⚡ HealthCare/Utilities</a>
                                <a className={styles.pf_info_subTitle} href="#"> Innovative Web Solutions for Healthcare & Utilities</a>
                                <p className="mt-2">Secure, scalable websites that simplify patient care and optimize energy management—driving efficiency and engagement across industries.</p>
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