import React from 'react'
import styles from './teamPicture.module.css'

const TeamPicture = ({image}) => {
  return (
    <div className={styles.team}>
        <div className={styles.teambg}></div>
        <div className={styles.team_img}>
            <img src={image}/>
        </div>
        <div className={styles.teamInfo}>
            <a></a>
            <p></p>
            <ul className={styles.connect}>
                <li><a></a></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    </div>
  )
}

export default TeamPicture