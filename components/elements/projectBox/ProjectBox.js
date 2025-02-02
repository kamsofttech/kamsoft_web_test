import React from 'react'
import styles from './project.module.css'

const ProjectBox = ({bgimg,title}) => {
  return (
    <a href='' className={styles.boxContainer}>
        <div className={styles.projectBox}>
          <img src="/images/monitor_mask.png"/>
        </div>
        <div className={styles.projectImage} style={{backgroundImage: bgimg}}></div>
        <h3>{title}</h3>
    </a>
  )
}

export default ProjectBox