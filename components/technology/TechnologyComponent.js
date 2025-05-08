import React from 'react'
import styles from './technology.module.css'
import { Col, Container, Row } from 'react-bootstrap'
import HeadingNew from '../headingNew/HeadingNew'
import TechBoxComponent from './TechBoxComponent'
const TechnologyComponent = () => {
  return (
    <section className={styles.tech_sec}>
      <Container className={styles.tech_con}>
      <HeadingNew  main_title={'Our Expertise - What we have others Don’t'} sub_title={'We have expertise in all technology stacks and can adapt your product to meet your users’ requirements and the market’s needs.'} />
        <div className={styles.tech_cont}>
        <Row>
            <Col md={2}>
            <TechBoxComponent item={['Payload','Strapi','Wordpress']} title={'CMS'} img={'images/icon/payload.svg'}/>
            </Col>
            <Col md={2}>
            <TechBoxComponent item={['React','Next Js','Redux']} title={'Js'} img={'images/icon/js.svg'}/>
            </Col>
            <Col md={2}>
            <TechBoxComponent item={['Wordpress','Laravel','Symphony']} title={'Php'} img={'images/icon/php.svg'}/>
            </Col>
            <Col md={2}>
            <TechBoxComponent imgWidth={'50%'} item={['MySql','Postgres','MongoDb']} title={'MySql'} img={'images/icon/sql.svg'}/>
            </Col>
            <Col md={2}>
            <TechBoxComponent  item={['React Native','Flutter','Kotlin']} title={'Android'} img={'images/icon/android.svg'}/>
            </Col>
            <Col md={2}>
            <TechBoxComponent imgWidth={'50%'} item={['JDE','Flutter','Odoo']} title={'ERP'} img={'images/icon/odoo.svg'}/>
            </Col>
        </Row>
        
        </div>
      </Container>
    </section>
  )
}

export default TechnologyComponent