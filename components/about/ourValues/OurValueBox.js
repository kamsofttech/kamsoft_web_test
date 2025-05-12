import React from 'react'
import styles from './valueBox.module.css'
const OurValueBox = ({count,title,desc}) => {
  return (
    <div className={styles.ovBox}>
        <div className={styles.ovBox_header}>
            <span>{count}</span>
            <h5 className={styles.ov_title}>{title}</h5>
        </div>
        <p className="mt-4 mb-0">{desc}</p>
    </div>
  )
}

export default OurValueBox