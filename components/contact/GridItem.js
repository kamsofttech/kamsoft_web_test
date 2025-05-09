import React from 'react'
import styles from './industryItem.module.css'
const GridItem = ({icon,title}) => {
    return (
        <div className={styles.indItem}>
            <div className={styles.ind_icon}>
                <i className={icon}></i>
            </div>
            <a href="#" className={styles.ind_title}>{title}</a>
        </div>
    )
}

export default GridItem