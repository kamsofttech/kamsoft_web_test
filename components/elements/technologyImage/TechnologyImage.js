import React from 'react'
import styles from './technologyImage.module.css'

const TechnologyImage = ({iconImage}) => {
  return (
    <div className={styles.tech_imageBox}>
        <img src={iconImage}/>
    </div>
  )
}

export default TechnologyImage