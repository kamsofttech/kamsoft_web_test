import { faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styles from './mvFeatureBox.module.css'

const MVFeatureBox = ({bgcolor,title,desc,icon}) => {
  return (
    <div className={styles.mvfeature_box} style={{background: bgcolor}}>
        <div className={styles.mvFeature_icon}>
            <FontAwesomeIcon icon={icon}/>
            <h4>{title}</h4>
        </div>
        <div className={styles.mvFeature_content}>
            <p>{desc}</p>
        </div>
    </div>
  )
}

export default MVFeatureBox