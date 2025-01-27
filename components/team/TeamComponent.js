import React from 'react'
import styles from './teamComponent.module.css'
import { Col, Container, Row } from 'react-bootstrap'
import SectionTitle from '../elements/sectionTitle/SectionTitle'
import TeamPicture from '../elements/teamMembers/TeamPicture'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faUser } from '@fortawesome/free-solid-svg-icons'

const TeamComponent = () => {
  return (
    <section className={styles.teamComp_section}>
      <Container className={styles.teamComp_container}>
        <Row className={styles.row}>
          <Col lg="9">
            <SectionTitle heading_title={"Meet our heroes"} items={["Our team is friendly, talkative, and fully reliable."]} />
          </Col>
        </Row>
        <Row>
          <Col xl="2" md="3" sm="4"><TeamPicture image={"/images/team/01.jpg"} membername={"Aaron Sharp"} post={"Chief People Officer"} /></Col>
          <Col xl="2" md="3" sm="4"><TeamPicture image={"/images/team/02.jpg"} membername={"Homer Reyes"} post={"Vice President"} /></Col>
          <Col xl="2" md="3" sm="4"><TeamPicture image={"/images/team/03.jpg"} membername={"Felica Queen"} post={"Team Leader"} /></Col>
          <Col xl="2" md="3" sm="4"><TeamPicture image={"/images/team/04.jpg"} membername={"Sara Lisbon"} post={"Production Manager"} /></Col>
          <Col xl="2" md="3" sm="4"><TeamPicture image={"/images/team/05.jpg"} membername={"Michael Bean"} post={"Quality control"} /></Col>
          <Col xl="2" md="3" sm="4"><TeamPicture image={"/images/team/06.jpg"} membername={"Alice Williams "} post={"Marketing manager"} /></Col>
          <Col xl="2" md="3" sm="4"><TeamPicture image={"/images/team/07.jpg"} membername={"Paul Flavius"} post={"Human resources"} /></Col>
          <Col xl="2" md="3" sm="4"><TeamPicture image={"/images/team/08.jpg"} membername={"Anne Smith"} post={"Sales and Marketing"} /></Col>
          <Col xl="2" md="3" sm="4"><TeamPicture image={"/images/team/09.jpg"} membername={"Mellissa Doe"} post={"Marketing Expert"} /></Col>
          <Col xl="2" md="3" sm="4"><TeamPicture image={"/images/team/10.jpg"} membername={"Ben Aguilar"} post={"Community"} /></Col>
          <Col xl="2" md="3" sm="4"><TeamPicture image={"/images/team/11.jpg"} membername={"Kim Hamilton"} post={"Developer"} /></Col>
          <Col xl="2" md="3" sm="4">
            <div className={styles.teamApplyPosition}>
              <div className={styles.teamIcon}>
                <FontAwesomeIcon icon={faUser} />
              </div>
              <div className={styles.teamInfo}>
                <a href=''>Apply for positions <FontAwesomeIcon icon={faArrowRight} /></a>
              </div>
            </div></Col>
        </Row>
      </Container>
    </section>
  )
}

export default TeamComponent