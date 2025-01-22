import React from 'react'
import styles from './counterElement.module.css'
import CountUp from 'react-countup';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CounterElement = ({c_icon,end_num,num,desc}) => {
  return (
    <div className={styles.counterBox}>
        <div className={styles.counterIcon}>
        <FontAwesomeIcon icon={c_icon} style={{ fontSize: "50px", opacity: 0.5 }} />
        </div>
        <div className={styles.counter_content}>
            <span><CountUp enableScrollSpy separator="" delay={1} end={end_num} />{num}</span>
            <label>{desc}</label>
        </div>
    </div>
  )
}

export default CounterElement