import React from 'react'
import styles from './featureIcon.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FeatureIconComponent = ({order,icon,title,desc}) => {
  return (
    <div className={`${styles.featureIcon} ${order=='3'?styles.lastIcon:''}`}>
        <div className={styles.iconImage}>
            <a>
            <FontAwesomeIcon icon={icon} className={styles.icon} />
            </a>
           
        </div>
        <div className={styles.featureInfo}>
            <h5>{title}</h5>
            <p>{desc}</p>
        </div>
    </div>
  )
}

export default FeatureIconComponent