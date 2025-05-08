import React from 'react'
import { Col, Row } from 'react-bootstrap'
import TitleNewComponent from '../elements/titleNew/TitleNewComponent'
import ImageComponent from '../elements/imageComponent/ImageComponent'
import styles from './ourServicesNew.module.css'
const ErpTabComponent = () => {
  return (
    <div>
        <Row>
              <Col md="6">
                <div className={styles.box_1}>
                  <TitleNewComponent sub_title={"Streamline Your Business with a "} main_title={"Smarter ERP Solution"} desc={"Success isn’t really that difficult. There is a significant portion of the population here in North America, that actually want and need success to be hard! Why? So they then have a built-in excuse when things don’t go their way!"} />
                  <br />
                  <blockquote className={styles.blockquote}>
                    For those of you who are serious about having more, doing more, giving more and being more, success is achievable with some understanding of what to do.
                    <cite className={styles.b_cite}> - InVisionApp Inc</cite>
                  </blockquote>
                  <a className={styles.view} href="#">View case study</a>
                </div>
              </Col>
              <Col md="6">
                <div>
                  <ImageComponent image={'/images/feature-info/01.jpg'} />
                </div></Col>
            </Row>
    </div>
  )
}

export default ErpTabComponent