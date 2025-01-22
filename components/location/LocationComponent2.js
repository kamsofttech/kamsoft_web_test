import React from 'react'
import styles from './location2.module.css';
const LocationComponent2 = ({location,address,phone,email,gstn}) => {
  return (
    <div className={styles.loc_item}>
        {location&& <h5>{location}</h5>}
        
        <div className={styles.loc_add}>
            {address &&  <a href="#"><i className="fa fa-map-marker" aria-hidden="true"></i>{address}</a>}
            {gstn && <a href="#"><i className="fa-solid fa-file-invoice"></i>{gstn}</a>}
            {email && <a href="#"><i className="fa fa-envelope" aria-hidden="true"></i>{email}</a>}
            {phone &&  <a href="#"><i className="fa-solid fa-phone-volume"></i>{phone}</a>}
           
        </div>
        
        
    </div>
  )
}

export default LocationComponent2