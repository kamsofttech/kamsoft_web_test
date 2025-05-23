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
                <span>Since 2002</span>
                <h4 ><i class="fas fa-globe"></i> Website Development Portfolio</h4>
                <p style={{color:'#fff'}}>We take pride in delivering high-quality, custom-built websites that combine modern design, seamless functionality, and optimized performance. Our portfolio showcases a diverse range of projects tailored to meet the unique needs of each client—across industries, scales, and technologies.</p>
          </div>
          <div className={styles.rbox_btm_cont}>
             <h5 style={{color:'#fff'}}><i class="fas fa-wrench"></i> Our Website Development Expertise Includes:</h5>
             <div className={styles.cont_ul}>
              <ul>
                <li><h6>Corporate & Business Websites</h6>
                {/* <p>Clean, professional designs that establish brand credibility and generate leads.</p> */}
                </li>
                <li><h6>E-Commerce Platforms</h6>
                {/* <p>Scalable online stores with smooth user experience, secure checkout, and inventory integration.</p> */}
                </li>
                <li><h6>Government & Public Sector Portals</h6>
                {/* <p>Accessible, secure, and informative platforms built for transparency and citizen engagement.</p> */}
                </li>
                
                <li><h6>Educational & Institutional Websites</h6>
                {/* <p>Structured content layouts, multi-user systems, and integrations for learning management.</p> */}
                </li>
                <li><h6>Real Estate, Travel, and Hospitality Sites</h6>
                {/* <p>Visually driven websites with advanced booking, listing, and map-based features.</p> */}
                </li>
                <li><h6>Custom CMS & Admin Panels</h6>
                {/* <p>Built with WordPress, Payload CMS, or headless frameworks for easy content management.</p> */}
                </li>
                
              </ul>
             </div>
        
        </div>
        </Col>
        <Col md={6}>
        <div className={styles.lbox_top_cont}>
          {/* <img src="/images/portfolio/04.jpg"/> */}
          
            <h5 style={{color:'#fff'}}><i class="fas fa-rocket"></i>  Why Our Portfolio Stands Out</h5>
             <div className={styles.cont_ul}>
              <ul>
                <li><h6><i class="fa-solid fa-bullseye"></i> User-Centered Design:<span> Every website is crafted with the end-user in mind—ensuring intuitive navigation and engaging visuals.</span></h6></li>
                <li><h6><i class="fa-solid fa-gear"></i> Performance Optimized:<span> Fast-loading pages with clean code, SEO best practices, and high Lighthouse scores.</span></h6></li>
                <li><h6><i class="fa-solid fa-shield-halved"></i> Security Firs:<span> SSL, data protection, and regular audits built into the development lifecycle.</span></h6></li>
                <li><h6><i class="fa-solid fa-arrows-rotate"></i> Fully Customizable:<span> No cookie-cutter templates—each project is uniquely tailored.</span></h6></li>
                <li><h6><i class="fa-solid fa-arrow-up-right-dots"></i> Built for Growth:<span> Scalable codebases and modular design systems ready for future enhancements.</span></h6></li>
                
                
              </ul>
             </div> 
        </div>
        {/* <div className={styles.lbox_btm_cont}>
        <NumberCheklistWhite
                    numbers={["01", "02", "03", "04", "05", "06"]}
                    points={["Technical analysis",
                      "Planning and Idea",
                      "Design and Copywriting",
                      "Front- & Back-End Coding",
                      "Quality Assurance",
                      "Testing and Launch"
                    ]} />
        </div> */}
        </Col>
      </Row>
      
    </div>
  )
}

export default PfRightComponent