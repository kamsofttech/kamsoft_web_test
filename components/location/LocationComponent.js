import React from 'react'
import styles from './location.module.css';
import { Fade } from 'react-awesome-reveal';
const LocationComponent = ({location,address,phone,email,gstn}) => {
  return (
    <div className={styles.loc_item}>
      <Fade direction='down' delay={0.5}>
        {location&& <h5>{location}</h5>}
        </Fade> 
        <div className={styles.loc_add}>
          <Fade direction='up' cascade damping={0.5}>
            {address &&  <a href="#"><i className="fa fa-map-marker" aria-hidden="true"></i>{address}</a>}
            {gstn && <a href="#"><i className="fa-solid fa-file-invoice"></i>{gstn}</a>}
            {email && <a href="#"><i className="fa fa-envelope" aria-hidden="true"></i>{email}</a>}
            {phone &&  <a href="#"><i className="fa-solid fa-phone-volume"></i>{phone}</a>}
            </Fade>
        </div>
        
        
    </div>
  )
}

export default LocationComponent