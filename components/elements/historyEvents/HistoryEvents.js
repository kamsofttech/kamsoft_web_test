import React from 'react'
import styles from './historyEvents.module.css'
import { Col, Row } from 'react-bootstrap'

const HistoryEvents = ({year}) => {
    const yearData = {
      
        2002: {
          title: "2002",
          miles:{
          caption:"Government of Goa Electricity Department",
          keys:[
            {
              keyName:"Developed a Billing System for:",
              keyItems:["Automated bill generation","Consumer ledger management","Units demand, collection, and balance reports"],
            }],
          },
          desc: "During 2002-2014",
          italText:"",
          secondDesc:"",
        },
        2014: {
            title: "2014",
            miles:{
            caption:"RFID Implementation in Mining & Academic",
            keys:[
              {
                keyName:"Mining Industry:",
                keyItems:["Security-enhanced activities, Real-time transport trip tracking", "Spot slip printing & activity flow automation","Excavation, Plant and Equipment machinery & production reporting","billing and MIS reporting"],
              },
              {
                keyName:"Academic Institutions:",
                keyItems:["RFID-based admit cards & attendance", "E-payment gateways & e-library transactions"],
              },
            ],
            },
            desc: "2014 Onwards:",
            italText:"",
            secondDesc:""
        },
        2019: {
            title: "2019",
            miles:{
            caption:"E-Portal & Application Development",
            keys:[
              {
                keyName:"Built web and mobile applications for:",
                keyItems:["MSMEs & Corporates (business process automation-B2B)"],
              },
              
            ],
            },
            desc: "2019: Formation of Kamsoft Technologies",
            italText:"",
            secondDesc:"Took over ownership under the new flagship Kamsoft Technologies, expanding into digital transformation."
        },
        2022: {
            title: "2022",
            miles:{
            caption:"Government of Goa – Directorate of Village Panchayat",
            keys:[
              {
                keyName:"Developed e-portals covering:",
                keyItems:["Village panchayat information & member directories","Tax/fee management & resource tracking","Scheme dissemination & developmental work updates"],
              },
              
            ],
            },
            desc: "2019 Onwards:",
            italText:"",
            secondDesc:""
        },
        2024: {
            title: "2024",
            miles:{
            caption:"",
            keys:[
              {
                keyName:"175+ Projects Delivered",
                keyItems:[],
              },
              {
                keyName:"100+ Clients Served",
                keyItems:[],
              },
              {
                keyName:"Expanding into AI, IoT, and Smart Governance",
                keyItems:[],
              },
              
            ],
            },
            desc: "Achievement (2024+)",
            italText:"",
            secondDesc:"From billing systems to blockchain-ready governance – two decades of trusted innovation"
        },
        
      };
  return (
    <div className={styles.eventContent}>
        <Row className={styles.row}>
            <Col md="4" className={styles.column1}>
            <h1>{yearData[year]?.title}</h1>
            </Col>
            <Col md="8" className={styles.column2}>
            <div className={styles.timelineText}>
                <h3>{yearData[year]?.desc}</h3>
                <div className=''>
                  
                  <h5>Key Milestones:</h5>
                  <h6>{yearData[year]?.miles?.caption}</h6>
                  <ul>
                    {yearData[year]?.miles?.keys.map((d,dix)=>
                    <li key={dix}><b>{d?.keyName}</b>
                    <ul style={{listStyle:'disc',paddingLeft:30}}>
                     { d.keyItems.map((x,xix)=>
                    <li key={xix} >{x}</li>
                    )}
                    </ul>
                    </li>
                    )}
                  </ul>
                </div>
                <p className={styles.p1}>{yearData[year]?.italText}</p>
                <p className={styles.p2}>{yearData[year]?.secondDesc}</p></div></Col>
        </Row>
    </div>
  )
}

export default HistoryEvents