import React from 'react'
import styles from './iconBox3.module.css'
const IconBox3Component = ({num,qEmp,enpDesc}) => {
  return (
    <div className={styles.iconBox3}>
        <div className={styles.totEmp}>
            <h1>{num}</h1>
            <h5>{qEmp}</h5>
        </div>
        <div className={styles.empDesc}>
        <p>{enpDesc}</p>
        </div>
    </div>
  )
}

export default IconBox3Component