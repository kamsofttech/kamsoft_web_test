import React from 'react'
import styles from './breadcumbStyle1.module.css';
import { Container } from 'react-bootstrap';
import { useRouter } from 'next/router';
const BreadcumbStyle1 = ({title,pageName}) => {
  const router=useRouter()
  console.log('route',router)
  return (
    <div className={styles.breadcrumb}>
      <Container>
        <div className={styles.bread_crumb_head}>
          <div className={styles.breadcrumb_title}>
            <h2>{router.query.cat}</h2>
          </div>
          {/*<div className={styles.breadcrumb_list}>
            <ul>
              <li><a href="#">Home </a></li>
              <li><a href="#">{title} </a></li>
              <li>{pageName}</li>
            </ul>
          </div>*/}
        </div>
        {/*<div className="breadcrumb-border-img">
          <img src="assets/img/bg/line-bg.png" className="img-fluid" alt="Image" />
        </div>*/}
      </Container>

    </div>
  )
}

export default BreadcumbStyle1