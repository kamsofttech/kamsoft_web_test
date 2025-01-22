import React from 'react'
import styles from './copyright.module.css';
import { Container } from 'react-bootstrap';
import { Fade } from 'react-awesome-reveal';
const CopyRightStyle1 = ({year,companyName}) => {
    return (
        <div className={styles.footer_bottom}>
            <Container className={styles.cont}>
                <div className={styles.footer_bottom_content}>
                    <div className={styles.copyright}>
                        <Fade>
                        <p>Copyright <span>{year}</span> - All right reserved <span>{companyName}</span> </p>
                        </Fade>
                    </div>
                    {/*<div className={styles.company_logo}>
                        <p>a product of</p>
                        <a href="#" target="_blank"><img src="assets/img/company-logo.png" alt="Logo" /></a>
                    </div>*/}
                </div>
            </Container>
        </div>
    )
}

export default CopyRightStyle1