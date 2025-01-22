import React from 'react'
import styles from './productItem.module.css';
const ProductItemComponent = ({tag,title,image,url}) => {
  return (
    <div className={styles.item_box}>
        <div className={styles.item_wrapper}>
            <div className={styles.item_inner}>
                <div className={styles.item_heading}>
                    {tag && <span className={styles.badge}>{tag}</span> }
                    {title && <h2>{title}</h2>}
                    
                </div>
                {/*<div className={styles.small}><p>Plakrore maheten. Astronens ...</p></div>*/}
                <div className={styles.item_botm}>
                    <a className="read-more" href="">Read More<i className="fa fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
        <div className={styles.item_media}>
            {image && 
            <img decoding="async" src={image} alt="slider image"/>
            }
                
            </div>
    </div>
  )
}

export default ProductItemComponent