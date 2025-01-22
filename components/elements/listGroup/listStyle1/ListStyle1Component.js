import React from 'react'
import styles from './listStyle1.module.css';
import { Fade } from 'react-awesome-reveal';
const ListStyle1Component = ({heading,listItem}) => {
    return (
        <div className={styles.footer_widget_list}>
            <div className={styles.footer_content_heading}>
                <Fade direction='down'>
                <h4>{heading}</h4>
                </Fade>
            </div>
            <ul>
                <Fade direction='up' cascade damping={0.2}>
                {listItem.map((i,idx)=>
                <li key={idx}><a href={i.itemUrl}>{i.itemName}</a></li>
                )}
                </Fade>
            </ul>
        </div>
    )
}

export default ListStyle1Component