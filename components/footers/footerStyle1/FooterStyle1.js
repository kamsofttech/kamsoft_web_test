import React from 'react'
import { Container, Row,Col } from 'react-bootstrap';
import styles from './footerStyle1.module.css';
import SocialLinkButtonStyle1 from '@/components/elements/buttons/socialLinkButton/socialLinkButtonStyle1/SocialLinkButtonStyle1';
import ListStyle1Component from '@/components/elements/listGroup/listStyle1/ListStyle1Component';
import CopyRightStyle1 from '@/components/elements/copyrights/copyrightStyle1/CopyRightStyle1';
import { Bounce, Fade } from 'react-awesome-reveal';
import SocialLinkButtonStyle from '@/components/elements/footer_buttons/socialLinkButton/socialLinkButtonStyle1/SocialLinkButtonStyle';

const FooterStyle1 = () => {
  return (
    <footer className={styles.footer}>

            <div className={styles.footer_top}>
                <div className={styles.footer_border_img}>
                    <img src="/images/footerStyle1/line-bg1.png" alt="image" />
                </div>
                <Container>
                    <Row>
                        <Col lg={4} md={6} sm={8}>
                            <div className={`${styles.foot_box} footer-widget footer-about `}>
                                <div className="footer-app-content">
                                    <div className={styles.footer_content_heading}>
                                        <Fade  cascade damping={0.2}>
                                        <h4>Seven Wonders </h4>
                                        <h6>Stockist and Distributors</h6>
                                        <p>Seven Wonders Trading is a recognized importer and distributor of premium food and beverage brands, providing a diverse range of high-quality products. </p>
                                        <span>clive@sevenwonderstrading.com</span>
                                        </Fade>
                                    </div>
                                    {/*<div className={styles.download_app}>
                                        <a href="#"><img src="/images/footerStyle1/google-pay.png" alt="google play" /></a>
                                        <a href="#"><img src="/images/footerStyle1/app-store.png" alt="app store" /></a>
                                    </div>*/}
                                    <SocialLinkButtonStyle />
                                    
                                    
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={8}>
                          <div className={styles.nh_box}>
                             <div className={styles.nh_inner}>
                                <Bounce cascade damping={0.5}>
                                <h4 className="widget-title">Need Help?</h4>
                                </Bounce>
                                <div className="widget-body">
                                    <Bounce  cascade damping={0.5}>
                                    <div className={styles.comp_phone}>(+91) 9421872905/9822134352</div>
                                    <div className={styles.comp_works}>
                                    <p>Monday – Friday: 9:00-20:00</p>
                                    <p>Saturady: 11:00 – 15:00</p>
                                    </div>
                                    <p><a className={styles.comp_mail} href="mailto:clive@sevenwonderstrading.com">clive@sevenwonderstrading.com</a></p>
                                    <div className="company-social"></div>
                                    </Bounce>
                                    </div>
                             </div>
                         </div>  
                            
                            
                        </Col>
                        <Col lg={2} md={3} sm={4}>
                            <ListStyle1Component 
                                heading={"Products"} 
                                listItem={[
                                    {itemName:'Nuts / Mixes / Berries / Dried Fruits',itemUrl:'/Apartments'},
                                    {itemName:'Condiments / Pickles / Sauces',itemUrl:'/Home'},
                                    {itemName:'Fishlicious',itemUrl:'/Office'},
                                    {itemName:'Healthy Cookies / Canned Range',itemUrl:'/Villas'},
                                    {itemName:'Noodles / Vermicelli / Pasta',itemUrl:'/Flat'}
                                ]}
                            />
                            
                        </Col>
                        <Col lg={2} md={4} sm={4}>
                            <ListStyle1Component 
                                heading={"Store Information"} 
                                listItem={[
                                    {itemName:'About Seven Wonders',itemUrl:'/Mayurbhanj'},
                                    {itemName:'Return Policy',itemUrl:'/Balasore'},
                                    {itemName:'Affiliate Program',itemUrl:'/Soro'},
                                    {itemName:'Store Locator',itemUrl:'/Jaleswara'},
                                    {itemName:'Latest Products',itemUrl:'/Haladipada'}
                                ]}
                            />
                            
                        </Col>
                        
                    </Row>
                </Container>
            </div>
            <CopyRightStyle1 companyName={'Seven Wonders'} year={'2024'}/>
            
            

        </footer>
  )
}

export default FooterStyle1