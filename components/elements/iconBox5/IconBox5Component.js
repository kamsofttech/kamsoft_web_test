import React from 'react'
import styles from './iconBox5.module.css'
// import icon from '../../../public/images/breadcumb/'

const IconBox5Component = ({title,awardDesc}) => {
  console.log("here => ",awardDesc)
    return (
    <div className={styles.iconBox5}>
        <h5>{title}</h5>
        <img src={'/images/gallery/award.svg'} />
        <p>{awardDesc}</p>
    </div>
  )
}

export default IconBox5Component