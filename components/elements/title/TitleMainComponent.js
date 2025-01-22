import React from 'react'
import styles from './titleMain.module.css';
import {Fade} from "react-awesome-reveal";
const TitleMainComponent = ({title,desc}) => {
    return (
       

        <div  className={styles.main_title}>
            <Fade direction='left' cascade>
            <h2>{title}</h2>
            <h5>{desc}</h5>
            </Fade>
        </div>
        
    )
}

export default TitleMainComponent