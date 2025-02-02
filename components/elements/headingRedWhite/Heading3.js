import React from 'react'
import styles from './heading3.module.css'

const Heading3 = ({f_title,s_title,sub_title}) => {
  return (
    <div className={styles.heading_title}>
        <h2><span>{f_title}</span>{s_title}</h2>
        <p>{sub_title}</p>
    </div>
  )
}

export default Heading3