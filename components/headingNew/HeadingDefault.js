import React from 'react'
import styles from './headingDefault.module.css'

const HeadingDefault = ({main_title,sub_title}) => {
  return (
    <div className={styles.heading}>
        <h2>{main_title}</h2>
        <p>{sub_title}</p>    
    </div>
  )
}

export default HeadingDefault