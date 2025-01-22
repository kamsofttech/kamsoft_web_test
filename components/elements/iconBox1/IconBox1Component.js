import React from 'react'
import styles from './iconBox1.module.css'
const IconBox1Component = ({title,desc}) => {
  return (
    <div className={styles.iconBox1}>
        
        <h1>{title}</h1>
        <h4>{desc}</h4>

    </div>
  )
}

export default IconBox1Component