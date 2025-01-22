import React from 'react'
import styles from './imageComponent.module.css'

const ImageComponent = ({image}) => {
  return (
    <div className={styles.image_box}>
      <img src={image}/>
    </div>
  )
}

export default ImageComponent
