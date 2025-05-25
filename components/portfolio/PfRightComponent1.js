import React from 'react'
import styles from './portfolio.module.css'
import { Col, Row } from 'react-bootstrap'
import NumberChecklist from '../elements/numberedChecklist/NumberChecklist'
import NumberCheklistWhite from '../elements/numberedChecklist/NumberCheklistWhite'
import { Tabs } from 'antd'
import PfTabItemCcomponent from './PfTabItemCcomponent'
const PfRightComponent = () => {
  const onChange = key => {
    console.log(key);
  };
  const items = [
    {
      key: '1',
      label: <div className={styles.tabTitle}><a>Goverment Sector</a></div>,
      children:<PfTabItemCcomponent title={'Goverment Sector (Power Energy/Village Panchayat)'} desc={''} icon={''} content={''}/>,
    },
    {
      key: '2',
      label: <div className={styles.tabTitle}><a>Tour&Travel/Farm</a></div>,
      children:<PfTabItemCcomponent title={'Tour&Travel/Farm'} desc={'Streamlining logistics, agri-tech innovations, and Travel & Stay tourism management.'} icon={''} content={''}/>,
    },
    {
      key: '3',
      label: <div className={styles.tabTitle}><a>Logistics</a></div>,
      children:<PfTabItemCcomponent title={'Logistics'} desc={' Driving seamless transportation, warehousing, and distribution.'} icon={''} content={''}/>,
    },
    {
      key: '4',
      label: <div className={styles.tabTitle}><a>Printing & Packaging</a></div>,
      children:<PfTabItemCcomponent title={'Printing & Packaging'} desc={''} icon={''} content={''}/>,
    },
    {
      key: '5',
      label: <div className={styles.tabTitle}><a>Manufacturing/Mining</a></div>,
      children: <PfTabItemCcomponent title={'Manufacturing & Mining'} desc={'Optimizing operations, automation, and supply chain efficiency.'} icon={''} content={''}/>,
    },
    {
      key: '6',
      label: <div className={styles.tabTitle}><a>Retail/Finance</a></div>,
      children:<PfTabItemCcomponent title={'Retail & Finance'} desc={'Enhancing customer experiences, digital transformation, and financial solutions.'} icon={''} content={''}/>,
    },
    {
      key: '7',
      label: <div className={styles.tabTitle}><a>Institution/Education</a></div>,
      children:<PfTabItemCcomponent title={'Institution & Education'} desc={'Empowering learning environments with cutting-edge technology.'} icon={''} content={''}/>,
    },
    
    
    
    {
      key: '8',
      label: <div className={styles.tabTitle}><a>HealthCare/Utilities</a></div>,
      children:<p>1</p>,
    },
  ];
  return (
    <div className={styles.pf_right_box}>
      <div style={{lineHeight:1.2}} className={styles.lbox_top_cont}>
                <span>Since 2002</span>
                {/* <h4 ><i class="fas fa-globe"></i> Website Development Portfolio</h4> */}
                <p style={{color:'#fff'}}>With vast experience and a client-centric approach,
we help businesses thrive in a competitive landscape. Partner with us for industry-leading excellence.</p>
          </div>
      <div className=''>
         <h5 style={{color:'#fff'}}><i class="fas fa-wrench"></i> Our Website Development Expertise Includes:</h5>
         <Tabs  indicator={{size:0}} className={styles.serTab} centered defaultActiveKey="1" items={items} onChange={onChange} />
      </div>
      
    </div>
  )
}

export default PfRightComponent