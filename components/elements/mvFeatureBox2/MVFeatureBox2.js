import React from 'react'
import styles from './mvFeatureBox2.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const MVFeatureBox2 = ({ image, title, desc }) => {
    return (
        <div className={styles.mvfeatureBox2}>
            <div className={styles.mvfeatureBox2_img}>
                <img src={image} />
            </div>
            <div className={styles.mvfeatureBox2_content}>
                <h4>{title}</h4>
                <p>{desc}</p>
                <a href=''><FontAwesomeIcon icon={faArrowRight} /></a>
            </div>
        </div>
    )
}

export default MVFeatureBox2