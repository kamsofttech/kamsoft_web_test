import React from 'react'
import styles from './iconBox2.module.css'
import ReactPlayer from 'react-player'

const IconBox2Component = ({video}) => {
  return (
    <div className={styles.iconBox2}>
        <ReactPlayer url={video} className='video-box' width={"100%"} height={"100%"}/>
        <span >Working with Kamsoft Technologies</span>
    </div>
  )
}

export default IconBox2Component