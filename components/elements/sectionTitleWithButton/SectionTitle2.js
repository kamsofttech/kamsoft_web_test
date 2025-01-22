import React from 'react'
import styles from './sectionTitle2.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight } from "@fortawesome/free-solid-svg-icons";

const SectionTitle2 = ({title_heading,title_button,title_desc}) => {
  return (
    <div className={styles.section_title}>
                    <h2>{title_heading}</h2>
                    <p>{title_desc}</p>
                    <a href="">{title_button}<FontAwesomeIcon icon={faArrowRight}/></a>
                </div>
  )
}

export default SectionTitle2