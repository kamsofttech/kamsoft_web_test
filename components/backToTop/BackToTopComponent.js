import React from 'react'
import styles from './backtotop.module.css'
import { useUserContext } from '../context/UserContext'
const BackToTopComponent = () => {
    const { sec1,display,topSecRef } = useUserContext()
  return (
    <div onClick={()=>window.scrollTo(0,topSecRef.current.offsetTop)} id="back-to-top" style={{display:display}} className={styles.back_to_top}>up</div>
  )
}

export default BackToTopComponent