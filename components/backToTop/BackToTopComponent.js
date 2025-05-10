import React from 'react'
import styles from './backtotop.module.css'
import { useUserContext } from '../context/UserContext'
const BackToTopComponent = () => {
    const { sec1,display } = useUserContext()
  return (
    <div onClick={()=>window.scrollTo(0,sec1.current.offsetTop-80)} id="back-to-top" style={{display:display}} className={styles.back_to_top}>up</div>
  )
}

export default BackToTopComponent