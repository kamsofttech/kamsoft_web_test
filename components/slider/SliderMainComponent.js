import React from 'react'
import styles from './SliderMain.module.css';
import { Container } from 'react-bootstrap';
import { Swiper, SwiperSlide } from "swiper/react";
//import { getBannerData } from '../../lib/api';
import "swiper/css";
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Button } from 'antd';

const SliderMainComponent = ({secId}) => {
    console.log('secId',secId)
    const[sKey,setSKey]=React.useState(0)
    const slideChange=(key)=>{
        setSKey(key.activeIndex)
        //console.log('keyys',key.activeIndex)
    }
  return (
    <section className={styles.sectionSlide}>
        <Swiper spaceBetween={30}  
        onSlideChange={(index) => slideChange(index)}
        navigation={true} modules={[Navigation]} className={styles.mySwiper}>
                 <SwiperSlide className={sKey==0?`${styles.slideActive}`:''}>
                    <img alt='slid1' src='images/slider/slider1.jpg'/>
                    <div className={styles.slider_content}>
                        <h2>For a truly Fishlicious ... <br/> experience, Goan trusts</h2>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit quia consequuntur magni dolores eos qui ratione
                            </p>
                            <Button size='large' className='btn_primary2'>See the Price</Button>
                          
                    </div>
                
                 </SwiperSlide>
                 <SwiperSlide className={sKey==1?`${styles.slideActive}`:''}>
                    <img alt='slid1' src='images/slider/slider2.jpg'/>
                    <div className={styles.slider_content}>
                    <h2>World of Rostaa. ... <br/>  India’s leading super foods</h2>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit quia consequuntur magni dolores eos qui ratione
                            </p>
                            <Button size='large' className='btn_primary2'>See the Price</Button>
                    </div>
                
                 </SwiperSlide>
                 <SwiperSlide className={sKey==2?`${styles.slideActive}`:''}>
                    <img alt='slid1' src='images/slider/slider1.jpg'/>
                    <div className={styles.slider_content}>
                    <h2>World of Rostaa. ... <br/>  India’s leading super foods</h2>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit quia consequuntur magni dolores eos qui ratione
                            </p>
                            <Button size='large' className='btn_primary2'>See the Price</Button>
                    </div>
                
                 </SwiperSlide>
              
            </Swiper>
        
    </section>
  )
}

export default SliderMainComponent