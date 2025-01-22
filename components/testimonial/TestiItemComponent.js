import React from 'react'
import styles from './testimonial.module.css';
import { Rate } from 'antd';

const TestiItemComponent = ({image,desc,name,post}) => {
  return (
    
    <div className={styles.testi_item}>
            <div className={styles.avtar}>
                <img decoding="async" src={image} alt="Testimonial"/>
            </div>
            <div className={styles.testi_details}>
                <Rate className={styles.c_rate} allowHalf defaultValue={4} />
                <div className={styles.c_name}>{name}</div>
                <div className={styles.c_post}>{post}</div>
                <div className={styles.c_desc}>
                    <p>{desc} </p>
                </div>
            </div>
        </div>
       
  )
}

export default TestiItemComponent