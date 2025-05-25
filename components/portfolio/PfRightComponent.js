import React from 'react'
import styles from './portfolio.module.css'
import { Col, Row } from 'react-bootstrap'

import { Tabs } from 'antd'

import PfBoxComponent from './PfBoxComponent'
const PfRightComponent = ({aKey,handleSlideChange,handleSwiper}) => {
  const onChange = key => {
    console.log(key);
  };
  
  return (
    <div className={styles.pf_right_box}>
      <div  className={styles.lbox_top_cont}>
                <span>Since 2002</span>
                {/* <h4 ><i class="fas fa-globe"></i> Website Development Portfolio</h4> */}
                <p style={{color:'#fff'}}>With vast experience and a client-centric approach,
we help businesses thrive in a competitive landscape. Partner with us for industry-leading excellence.</p>
          </div>
          <PfBoxComponent aKey={aKey} handleSwiper={handleSwiper}/>
      <div className=''>
         
        
      </div>
      
    </div>
  )
}

export default PfRightComponent