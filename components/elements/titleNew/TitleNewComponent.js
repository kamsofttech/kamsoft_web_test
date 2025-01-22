import React from 'react'
import styles from './titleNewComponent.module.css'

const TitleNewComponent = ({sub_title,main_title,desc}) => {
  return (
    <div className={styles.titleNew}>
        <span>{sub_title}</span>
        <h3>{main_title}</h3>
        <p>{desc}</p>
    </div>
  )
}

export default TitleNewComponent