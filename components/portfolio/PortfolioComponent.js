/**
 * PortFolio Section
 * Code By:Pradeep Das ,Date:08/05/2025
 */
import React from 'react'
import styles from './portfolio.module.css'
import { Col, Container, Row } from 'react-bootstrap'
import HeadingNew from '../headingNew/HeadingNew'
import PfLeftComponent from './PfLeftComponent'
import PfRightComponent from './PfRightComponent'
import { Swiper, SwiperSlide } from "swiper/react";
const PortfolioComponent = () => {
  const swiperRef = React.useRef(null);
  const[aKey,setAKey]=React.useState(0)
  const handleSlideChange = (swiper) => {
      //console
        setAKey(swiper.activeIndex)
        swiperRef.current?.slideTo(swiper.activeIndex);
    };
    const handleSwiper = (key) => {
      setAKey(key)
      swiperRef.current?.slideTo(key);
    };
  return (
    <section className={styles.pf_sec}>
      <Container className={styles.pf_con}>
      
        <div className={styles.pf_cont}>
        <Row>
            <Col lg={4}>
            <PfLeftComponent swiperRef={swiperRef} handleSlideChange={handleSlideChange}/>
            </Col>
            <Col lg={8}>
            <PfRightComponent aKey={aKey} handleSwiper={handleSwiper} handleSlideChange={handleSlideChange}/>
            </Col>
        </Row>
        
        </div>
      </Container>
    </section>
  )
}

export default PortfolioComponent