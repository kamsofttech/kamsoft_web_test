import React from 'react'
import styles from './testimonialItem.module.css'

const TestimonialNewItem = ({prof_img,test_content,author_name,author_post}) => {
  return (
    <div className={styles.test_item}>
        <div className={styles.item_img}>
            <img src={prof_img}/>
        </div>
        <div className={styles.test_details}>
            <p>{test_content}</p>
        </div>
        <div className={styles.test_author_det}>
            <h6>{author_name}</h6>
            <span>{author_post}</span>
        </div>
    </div>
  )
}

export default TestimonialNewItem