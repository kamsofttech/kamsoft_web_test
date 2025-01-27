import React from 'react'
import styles from './tabOurChallenges.module.css'
import { Col, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const TabOurChallenges = () => {
  return (
    <Row>
      <Col sm="5" className={styles.column1}>
        <img src={'/images/about/04.jpg'} />
      </Col>
      <Col sm="7" className={styles.column2}>
        <h4>“We take pride in helping our clients deliver marvelous results when it comes to their projects. From data to performance, we’ve got you covered.”</h4>
        <p className={styles.author}>
          <span>Alice Williams</span> -
          <label>Sales and Marketing</label>
        </p>
        <p>We know this in our gut, but what can we do about it? How can we motivate ourselves? One of the most difficult aspects of achieving success is staying motivated over the long haul.</p>
        <a href=''>Learn more<FontAwesomeIcon icon={faArrowRight} /></a>
      </Col>
    </Row>
  )
}

export default TabOurChallenges