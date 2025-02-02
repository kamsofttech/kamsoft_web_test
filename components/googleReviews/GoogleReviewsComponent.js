import { React, useEffect, useState } from 'react'
import styles from './googleReviews.module.css'
import { Container, Row } from 'react-bootstrap'
import axios from "axios";
import { Rate } from 'antd';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { FreeMode, Pagination, Navigation } from 'swiper/modules';



const GoogleReviewsComponent = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const { data } = await axios.get('api/reviews')
        console.log('data', data)
        setReviews(data.result.reviews)
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }

    };

    fetchReviews();
  }, []);
  return (
    <section className={styles.review_sec}>
      <Container className={styles.review_con}>
        <Row className={styles.row1}>
          <h2>Google Reviews</h2></Row>
        <Row><Swiper
          className={styles.swipper_box}
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[FreeMode, Pagination, Navigation]}
        >
          {reviews.length > 0 ? (
            reviews.map((review, index) => (

              <SwiperSlide>
                <div key={index} className={styles.reviewBox}>
                  <div className={styles.review_author_det}><img src={`${review.profile_photo_url}`} /><h5>{review.author_name}</h5></div>
                  <p><Rate disabled defaultValue={review.rating} /></p>
                  <p>{review.text}</p>
                </div></SwiperSlide>
            ))
          ) : (
            <p>No reviews available.</p>
          )}
        </Swiper>
        </Row>
      </Container>
    </section>
  )
}

export default GoogleReviewsComponent