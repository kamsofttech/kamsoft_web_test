import React from 'react'
import styles from './testimonial.module.css'
import { Col, Row, Container } from 'react-bootstrap'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import TestimonialNewItem from '../testimonialNew/TestimonialNewItem';

const TestimonialNewComponent = ({ secId }) => {
   const [sKey, setSKey] = React.useState(0)
   const slideChange = (key) => {
      setSKey(key.activeIndex)
   }
   return (
      <section className={styles.testimoni_new_sec}>
         <Container className={styles.testimoni_new_con}>
            <div className={styles.pro_box}>
               <Swiper spaceBetween={30}
                  onSlideChange={(index) => slideChange(index)}
                  navigation={true} autoplay={true} modules={[Navigation, Autoplay]} className={styles.mySwiper}>
                  <SwiperSlide className={sKey == 0 ? `${styles.slideActive}` : ''} >
                     <TestimonialNewItem prof_img={'/images/avatar/01.jpg'} test_content={"So thrilled with my new website! The team brought my vision to life with elegance, functionality, and style. As a beauty therapist with 21+ years of experience, this platform now reflects the professionalism and passion behind Maty’s Brow. Highly recommended!"}
                        author_name={"Matilda Fernandes"} author_post={"Founder of Maty’s Brow, Dublin, Ireland"} linkUrl={"https://matysbrow.com/"} />
                  </SwiperSlide>
                  <SwiperSlide className={sKey == 0 ? `${styles.slideActive}` : ''} >
                     <TestimonialNewItem prof_img={'/images/avatar/02.jpg'} test_content={"Kamsoft Technologies understood the technical and visual requirements of the pharma packaging industry for crafting a top-tier website for Vimal Art Printery! Their design captured the precision and quality we stand for in pharma packaging. Highly professional, responsive, and creative!"}
                        author_name={"Mr. Sandesh R. Dhareshwar"} author_post={"CEO, Vimal Art Printery, Ponda, Goa"} linkUrl={"https://vimalartprintery.com/"} />
                  </SwiperSlide>
                  <SwiperSlide className={sKey == 0 ? `${styles.slideActive}` : ''} >
                     <TestimonialNewItem prof_img={'/images/avatar/03.jpg'} test_content={"We are extremely pleased with the outstanding website developed by Kamsoft Technologies created for Apurva Engineering Works! They turned our complex marine and industrial services into a sleek, professional digital platform. Big thanks to the team for their top-notch design and support!"}
                        author_name={"Mr. Samir U. S. Juwarkar"} author_post={"Co-founder cum CEO, Apurva Engineering Works, Raia Salcete, Goa"} linkUrl={"https://apurvaengineering.com/"} />
                  </SwiperSlide>
                  <SwiperSlide className={sKey == 0 ? `${styles.slideActive}` : ''} >
                     <TestimonialNewItem prof_img={'/images/avatar/04.jpg'} test_content={"Kamsoft’s team was highly professional, communicative, and deeply understood the industrial domain, which made the entire development process smooth and efficient. Thanks to their expertise, we’ve seen a noticeable increase in online inquiries and customer engagement."}
                        author_name={"Virendra Surve"} author_post={"CEO, Sharada industries, Ponda, Goa"} linkUrl={"https://sharadaindustry.com/"} />
                  </SwiperSlide>

               </Swiper>
            </div>
         </Container>
      </section>
   )
}

export default TestimonialNewComponent