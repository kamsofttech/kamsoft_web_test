import React from 'react'
import styles from './counter.module.css';

import CountUp from 'react-countup';
const CounterComponent = ({count,desc}) => {
    
    return (
        <div className={styles.counter_style}>
            <div class="">
                <span className={styles.counter}><CountUp enableScrollSpy useEasing separator=""  delay={2} end={count} /></span>
            </div>
            <span className={styles.counter_text}>{desc}</span>
        </div>
    )
}

export default CounterComponent