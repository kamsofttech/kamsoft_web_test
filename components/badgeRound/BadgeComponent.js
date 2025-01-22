import React from 'react'
import styles from './badge.module.css'

const BadgeComponent = ({summary}) => {
  return (
    <div className={styles.badge}>
        <div className={styles.badgeRound}>
            <h4><span>30+</span>Million</h4>
        </div>
        <p>{summary}</p>
        <a></a>
    </div>
  )
}

export default BadgeComponent