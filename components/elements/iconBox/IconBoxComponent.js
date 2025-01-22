import React from 'react'
import styles from './iconBox.module.css';
const IconBoxComponent = ({title,desc,image}) => {
  return (
    <div className={styles.box_item}>
        <div className={styles.avtar}>
               <img decoding="async" src={image} alt="Testimonial"/>
            </div>
            <div className={styles.box_details}>
                
                <div className={styles.box_title}>{title}</div>
                
                <div className={styles.box_desc}>
                    <p>{desc} </p>
                </div>
            </div>
    </div>
  )
}

export default IconBoxComponent