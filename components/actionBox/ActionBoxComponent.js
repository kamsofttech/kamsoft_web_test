import React from 'react';
import styles from './actionBox.module.css';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ActionBoxComponent = () => {
  return (
    <section className={styles.about_sec}>
      <Container className={styles.pd80}>
        <div className='pro_box'>
          <div className={styles.action_box}>
            <h2>Tell us about your idea, and we’ll make it happen.</h2>
            <h6>Have a brand problem that needs to be solved? We’d love to hear about it!</h6>
            <div className={styles.getStartedBox2}>
              <a href='#'>Let’s Get Started
                <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ActionBoxComponent;
