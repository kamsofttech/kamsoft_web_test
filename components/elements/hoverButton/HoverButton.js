import React from 'react'
import styles from './hoverButton.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const HoverButton = ({bgcolor,t_color,button_text}) => {
  return (
    <a href='' style={{background: bgcolor, color:t_color}}>{button_text} <FontAwesomeIcon icon={faArrowRight}/></a>
  )
}

export default HoverButton