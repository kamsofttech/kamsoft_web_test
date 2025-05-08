import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styles from './ourServicesNew.module.css'
import HeadingNew from '../headingNew/HeadingNew'
import TitleNewComponent from '../elements/titleNew/TitleNewComponent'
import ImageComponent from '../elements/imageComponent/ImageComponent'
import ChecklistComponent from '../elements/checklist/ChecklistComponent'
import NumberChecklist from '../elements/numberedChecklist/NumberChecklist'
import HeadingDefault from '../headingNew/HeadingDefault'
import { Tabs } from 'antd';
import WebsiteTabComponent from './WebsiteTabComponent'
import SeoTabComponent from './SeoTabComponent'
import ErpTabComponent from './ErpTabComponent'
import AndroidTabComponent from './AndroidTabComponent'
const OurServicesNewComponent = () => {
  const onChange = key => {
    console.log(key);
  };
  const items = [
    {
      key: '1',
      label: <div className={styles.tabTitle}><a>Web App Development</a></div>,
      children: <WebsiteTabComponent/>,
    },
    {
      key: '2',
      label: <div className={styles.tabTitle}><a>Search Engine Optimization</a></div>,
      children: <SeoTabComponent/>,
    },
    {
      key: '3',
      label: <div className={styles.tabTitle}><a>Android Development</a></div>,
      children:<AndroidTabComponent/>,
    },
    
    {
      key: '4',
      label: <div className={styles.tabTitle}><a>ERP Solution</a></div>,
      children: <ErpTabComponent/>,
    },
  ];
  return (
    <section className={styles.our_serviceNew_sec}>
      <Container className={styles.our_serviceNew_con}>
        <div className='pro_box_1'>
          <HeadingDefault main_title={'Digital marketing services that help you grow.'} sub_title={'We take pride in helping our clients deliver marvelous results when it comes to their projects. From data to performance, we’ve got you covered.'} />

          <div className='box_1'>
          <Tabs indicator={{size:0}} className={styles.serTab} centered defaultActiveKey="1" items={items} onChange={onChange} />
            
          </div>
          
          
          
        </div>
      </Container>
    </section>
  )
}

export default OurServicesNewComponent