import React from 'react'
import styles from './horizontalFeatureBox.module.css'

const HorizontalFeatureBox = ({p_num,title,desc}) => {
  return (
    <div className={styles.feature_info_item}>
        <div className={styles.feature_info_num}>
            <span>{p_num}</span>
        </div>
        <div className={styles.feature_info_content}>
            <h5>{title}</h5>
            <p>{desc}</p>
        </div>
    </div>
  )
}

export default HorizontalFeatureBox