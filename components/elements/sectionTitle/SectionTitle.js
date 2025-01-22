import React from 'react'
import styles from './sectionTitle.module.css'

const SectionTitle = ({heading_title,items}) => {
  return (
        <div className={styles.sec_title}>
            <h2>{heading_title}</h2>
            
            {items.map((item, index) => (   
                <p key={index}>
                    {item}  
                    </p> 
                ))}
                 
        </div>
       
  )
}

export default SectionTitle