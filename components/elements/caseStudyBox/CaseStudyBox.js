import React from 'react'
import styles from './caseStudyBox.module.css'

const CaseStudyBox = ({image,sub_title,title,desc}) => {
  return (
    
        <div className={styles.caseStudyBox}>
            <div className={styles.caseStudyBox_img}>
                <img src={image} />
            </div>
            <div className={styles.caseStudyBox_content}>
                <span>{sub_title}</span>
                <h4>{title}</h4>
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default CaseStudyBox