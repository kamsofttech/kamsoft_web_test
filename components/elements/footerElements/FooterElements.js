import React from 'react'
import styles from './footerElements.module.css'

const FooterElements = ({title,items}) => {
  return (
    <div className={styles.footerElements}>
        <h5>{title}</h5>
        <ul className={styles.footerItems}>
        {items.map((item, index) => (
          <li key={index}><a>
            {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FooterElements