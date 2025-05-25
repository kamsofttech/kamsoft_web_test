import React from 'react'
import styles from './pfBox.module.css'
const PfBoxComponent = ({aKey,handleSwiper}) => {
    const[aId,setAid]=React.useState(0)
    const items = [
    {
      key: 0,
      label: 'Goverment Sector',
      
    },
    {
      key: 1,
      label: 'Tour&Travel/Farm',
     
    },
    {
      key: 2,
      label: 'Logistics',
      
    },
    {
      key: 3,
      label:'Printing & Packaging',
      
    },
    {
      key: 4,
      label: 'Manufacturing/Mining',
      
    },
    {
      key: 5,
      label: 'Retail/Finance',
      
    },
    {
      key: 6,
      label:'Institution/Education',
      
    },
    
    
    
    {
      key: 7,
      label: 'HealthCare/Utilities',
      
    },
  ];
  return (
    <div className={styles.pfBox}>
            <div className={styles.header}>
              <h5 style={{color:'#fff'}}><i class="fas fa-wrench"></i> Our Website Development Expertise Includes:</h5>
            </div>

            <div className={styles.gridWrapper}>
              {items.map((x, y) => (
                <div onClick={()=>handleSwiper(y)}  className={`${styles.pf_item} ${aKey==y?styles.pfActive:''}`} key={y} >
                  <a>{x.label}</a>
                  <i className={`fa-solid fa-arrow-right ${styles.ic}`}></i>
                  
                </div>
              ))}
            </div>
          </div>
  )
}

export default PfBoxComponent