import React from 'react'
import styles from './iconBox4.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar ,faStarHalfAlt} from "@fortawesome/free-solid-svg-icons";


const IconBox4Component = ({ratingDesc,rev}) => {
  return (
    <div className={styles.iconBox4}>
    
        <div className={styles.ratingBox}>
            <ul>
            <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStarHalfAlt} />
            </ul>
            <h5>{ratingDesc}<span>{rev}</span></h5>
        </div>
        </div>
        
  )
}

export default IconBox4Component