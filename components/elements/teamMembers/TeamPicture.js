import React from 'react'
import styles from './teamPicture.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faFacebookF, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

const TeamPicture = ({image, membername, post}) => {
  return (
    <div className={styles.team}>
        <div className={styles.teambg}></div>
        <div className={styles.team_img}>
            <img src={image}/>
        </div>
        <div className={styles.teamInfo}>
            <a href='' >{membername}</a>
            <p>{post}</p>
            <ul className={styles.connect}>
                <li><a><FontAwesomeIcon icon={faFacebook} style={{color:"blue"}}/></a></li>
                <li><a><FontAwesomeIcon icon={faTwitter}/></a></li>
                <li><a><FontAwesomeIcon icon={faLinkedin}/></a></li>
            </ul>
        </div>
    </div>
  )
}

export default TeamPicture