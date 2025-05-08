import React from 'react'
import ChecklistComponent from '../elements/checklist/ChecklistComponent'
import TitleNewComponent from '../elements/titleNew/TitleNewComponent'
import { Col, Row } from 'react-bootstrap'
import ImageComponent from '../elements/imageComponent/ImageComponent'
import styles from './ourServicesNew.module.css'
const SeoTabComponent = () => {
  return (
    <div className={styles.full_box_2}>
            <Row>
              <Col md="6">
                <ImageComponent image={'/images/feature-info/02.jpg'} />
                </Col>
              <Col md="6">
                <div className={styles.box_2}>
                  <TitleNewComponent sub_title={"Speed up you website"} main_title={"Search Engine Optimization"} desc={"So you have a website but no one visiting it? Use a past defeat as a motivator. Remind yourself you have nowhere to go except up as you have already been at the bottom. This process is implemented in several ways. Here are a few examples: "} />
                  <ChecklistComponent items={["  We make sure that the right keyword is in the page title. ",
                    "  We make sure that the right keyword is in the meta description. ",
                    "  We make sure that the right keyword is in the HTML heading tag. ",
                    "  The keyword must be relevant to your industry. ",
                    "  It cannot be “Copied” from another website. "
                  ]} />
                </div></Col>
            </Row>
          </div>
  )
}

export default SeoTabComponent