import React from 'react'
import styles from './iconBox7.module.css'

const IconBox7Component = ({year}) => {
  return (
    <div className={styles.iconBox7}>
        <h5>We're
            <br/>
            since
            <br/>
            <span className={styles.iconBox7year}>{year}</span>
        </h5>
    </div>
  )
}

export default IconBox7Component