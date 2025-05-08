import React from 'react'
import styles from './techBox.module.css'
const TechBoxComponent = ({ img, title, item,imgWidth }) => {
    return (
        <div className={styles.techBox}>
            {img &&
            <img style={{width:imgWidth}} alt='' src={img} /> 
            }
            
            <h5>{title && title}</h5>
            <ul class="list-inline">
                {item && item.map((i,idx)=>
                <li key={idx}> - {i}</li>
                )}
                
                
            </ul>
        </div>
    )
}

export default TechBoxComponent