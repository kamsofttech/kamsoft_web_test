import React from 'react'
import styles from './portfolio.module.css'
import { Col, Row } from 'react-bootstrap'
import NumberChecklist from '../elements/numberedChecklist/NumberChecklist'
import NumberCheklistWhite from '../elements/numberedChecklist/NumberCheklistWhite'
const PfRightComponent = () => {
  return (
    <div className={styles.pf_right_box}>
      <Row>
        <Col md={6}>
          <div className={styles.lbox_top_cont}>
                <i className="flaticon-monitor"></i>
                <h4 >We have been building our experience effectively since</h4>
                <span>2002</span>
          </div>
        </Col>
        <Col md={6}>
        <div className={styles.lbox_top_cont}>
        <img src="/images/portfolio/04.jpg"/>
        </div>
        </Col>
      </Row>
      <Row style={{marginTop:30}}>
        <Col md={8}>
        <div className={styles.rbox_btm_cont}>
        <p>Work on the best projects for the best clients. Our clients are some of the most forward-looking companies in the world.</p>
        <p>Ten years plus experience helped us to create a process that guarantees high productivity and profitability for your solution. We have expertise in all technology stacks and can adapt your product to meet your users’ requirements and the market’s needs.</p>
        </div>
        </Col>
        <Col md={4}>
        <div className={styles.lbox_btm_cont}>
        <NumberCheklistWhite
                    numbers={["01", "02", "03", "04", "05", "06"]}
                    points={["Technical analysis",
                      "Planning and Idea",
                      "Design and Copywriting",
                      "Front- & Back-End Coding",
                      "Quality Assurance",
                      "Testing and Launch"
                    ]} />
        </div>
        </Col>
      </Row>
    </div>
  )
}

export default PfRightComponent