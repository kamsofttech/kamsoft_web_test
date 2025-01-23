import React from 'react'
import styles from './testimonial.module.css'
import { Col, Row , Container} from 'react-bootstrap'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import TestimonialNewItem from '../testimonialNew/TestimonialNewItem';

const TestimonialNewComponent = ({secId}) => {
    console.log('secId',secId)
    const[sKey,setSKey]=React.useState(0)
    const slideChange=(key)=>{
        setSKey(key.activeIndex)
    }
  return (
    <section className={styles.testimoni_new_sec}>
    <Container className={styles.testimoni_new_con}>
      <div className={styles.pro_box}>
            <Swiper spaceBetween={30}  
        onSlideChange={(index) => slideChange(index)}
        navigation={true} modules={[Navigation]} className={styles.mySwiper}>
                 <SwiperSlide className={sKey==0?`${styles.slideActive}`:''} >
                    <TestimonialNewItem prof_img={'/images/avatar/01.jpg'} test_content={"We don't take ourselves too seriously, but seriously enough to ensure we're creating the best product and experience for our customers. I feel like Help Scout does the same."}
                    author_name={"Alice Williams"} author_post={"Vetrov Systems Development"}/>
                 </SwiperSlide>
                 <SwiperSlide className={sKey==0?`${styles.slideActive}`:''} >
                    <TestimonialNewItem prof_img={'/images/avatar/02.jpg'} test_content={"The Hi-soft database has been one of our current sources for recruitment, backed by a very experienced team who would go out of their way to make sure that requests are taken ahead."}
                    author_name={"Michael Bean"} author_post={"Web Developer"}/>
                 </SwiperSlide>
                 <SwiperSlide className={sKey==0?`${styles.slideActive}`:''} >
                    <TestimonialNewItem prof_img={'/images/avatar/01.jpg'} test_content={"We don't take ourselves too seriously, but seriously enough to ensure we're creating the best product and experience for our customers. I feel like Help Scout does the same."}
                    author_name={"Alice Williams"} author_post={"Vetrov Systems Development"}/>
                 </SwiperSlide>
                 <SwiperSlide className={sKey==0?`${styles.slideActive}`:''} >
                    <TestimonialNewItem prof_img={'/images/avatar/02.jpg'} test_content={"The Hi-soft database has been one of our current sources for recruitment, backed by a very experienced team who would go out of their way to make sure that requests are taken ahead."}
                    author_name={"Michael Bean"} author_post={"Web Developer"}/>
                 </SwiperSlide>
                 <SwiperSlide className={sKey==0?`${styles.slideActive}`:''} >
                    <TestimonialNewItem prof_img={'/images/avatar/01.jpg'} test_content={"We don't take ourselves too seriously, but seriously enough to ensure we're creating the best product and experience for our customers. I feel like Help Scout does the same."}
                    author_name={"Alice Williams"} author_post={"Vetrov Systems Development"}/>
                 </SwiperSlide>
                 <SwiperSlide className={sKey==0?`${styles.slideActive}`:''} >
                    <TestimonialNewItem prof_img={'/images/avatar/02.jpg'} test_content={"The Hi-soft database has been one of our current sources for recruitment, backed by a very experienced team who would go out of their way to make sure that requests are taken ahead."}
                    author_name={"Michael Bean"} author_post={"Web Developer"}/>
                 </SwiperSlide>
                 </Swiper>
      </div>
    </Container>
  </section> 
  )
}

export default TestimonialNewComponent