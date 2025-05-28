import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styles from './ourServicesNew.module.css'

import HeadingDefault from '../headingNew/HeadingDefault'
import { Tabs } from 'antd';
import WebsiteTabComponent from './WebsiteTabComponent'
import SeoTabComponent from './SeoTabComponent'
import ErpTabComponent from './ErpTabComponent'
import AndroidTabComponent from './AndroidTabComponent'
import { useUserContext } from '../context/UserContext'
import ITConsultiongTabComponent from './ITConsultiongTabComponent';
const OurServicesNewComponent = () => {
  const{sec3,setSec3,serTabKey, setSerTabKey}=useUserContext()
      const  sec3Ref=React.useRef('')
      setSec3(sec3Ref)
  const onChange = key => {
    console.log(key);
    setSerTabKey(key)
  };
  const items = [
    {
      key: '1',
      label: <div className={styles.tabTitle}><a>Web and Mobile App Development</a></div>,
      children: <WebsiteTabComponent/>,
    },
    {
      key: '2',
      label: <div className={styles.tabTitle}><a>Digital Marketing & SEO</a></div>,
      children: <SeoTabComponent/>,
    },
    {
      key: '3',
      label: <div className={styles.tabTitle}><a>RFID Workflow Automation</a></div>,
      children:<AndroidTabComponent/>,
    },
    
    {
      key: '4',
      label: <div className={styles.tabTitle}><a>IT Consulting</a></div>,
      children: <ITConsultiongTabComponent/>,
    },
    {
      key: '5',
      label: <div className={styles.tabTitle}><a>ERP & Interoperability</a></div>,
      children:<ErpTabComponent/>,
    },
  ];
  return (
    <section id='sec3' ref={sec3Ref} className={styles.our_serviceNew_sec}>
      <Container className={styles.our_serviceNew_con}>
        <div className='pro_box_1'>
          <HeadingDefault main_title={'Smart Solutions for the Digital Age – From Development to Optimization.'} sub_title={'Discover our full suite of digital solutions; We take pride in serving our clients deliver marvelous results when it comes to their projects. From data to performance, we’ve got you covered-all tailored to drive growth and innovation.'} />

          <div className='box_1'>
          <Tabs indicator={{size:0}} className={styles.serTab} centered defaultActiveKey={serTabKey} activeKey={serTabKey} items={items} onChange={onChange} />
            
          </div>
          
          
          
        </div>
      </Container>
    </section>
  )
}

export default OurServicesNewComponent