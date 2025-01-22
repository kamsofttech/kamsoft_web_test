import React from 'react'
import styles from './newsBox.module.css'
import HoverButton from '../hoverButton/HoverButton'

const NewsBox = ({title,desc,button_text}) => {
  return (
    <div className={styles.news_info}>
        <div className={styles.news_content}>
            <h4>{title}</h4>
            <p>{desc}</p>
            <HoverButton button_text={button_text}/>
        </div>
    </div>
  )
}

export default NewsBox