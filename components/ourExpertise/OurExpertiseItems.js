import React from 'react'
import styles from './ourExpertiseItem.module.css'
import { Image } from 'react-bootstrap'

const OurExpertiseItems = ({image,items,title}) => {
  return (
    <div className={styles.itemBox}>
        <Image src={image} fluid center-block mx-auto w-25 />
        <h5>{title}</h5>
        <ul>
           {items.map((item, index) => (
                     <li key={index}>
                       {item}
                     </li>
                   ))}
        </ul>
    </div>
  )
}

export default OurExpertiseItems