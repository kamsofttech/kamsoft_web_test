import React from 'react'
import styles from './titleCenter.module.css';
import { Fade } from 'react-awesome-reveal';
const TitleCenterComponent = ({title}) => {
  return (
    <div className={styles.title_center}>
      <Fade direction='down'>
        <h2>{title}</h2>
        </Fade>
    </div>
  )
}

export default TitleCenterComponent