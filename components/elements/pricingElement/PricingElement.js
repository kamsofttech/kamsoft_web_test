import React from 'react'
import styles from './pricingElement.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const PricingElement = ({bgcolor,h_color,p_color,price_color,pricing_title,plan_desc,price,items}) => {
  return (
    <div className={styles.pricing} style={{background: bgcolor}}>
        <h4 style={{color: h_color}}>{pricing_title}</h4>
        <p style={{color: p_color}}>{plan_desc}</p>
        <span className={styles.pricing_price} style={{color: p_color}}>
            <sup style={{color: h_color}}>$</sup>
            <strong style={{color: price_color}}>{price}</strong>/month
        </span>
        <ul className={styles.pricing_list}>
            {items.map((item, index) => (
                      <li style={{color: p_color}} key={index}>
                        {item}
                      </li>
                    ))}
        </ul>
        <a style={{color: h_color}}>Select Plan <FontAwesomeIcon icon={faArrowRight} style={{color: h_color}}/></a>
    </div>
  )
}

export default PricingElement