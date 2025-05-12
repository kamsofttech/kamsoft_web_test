import React from 'react'
import styles from './historyEvents.module.css'
import { Col, Row } from 'react-bootstrap'

const HistoryEvents = ({year}) => {
    const yearData = {
      
        2010: {
          title: "2010",
          desc: " They often mean leaving the perception of security in order to discover your personal freedom. These are the changes that will bring happiness and satisfaction into your life. Just go there now.",
          italText:"10 years out… having made a decade of changes. Imagine living the life you want to live.",
          secondDesc:"The best way is to develop and follow a plan. Start with your goals in mind and then work backwards to develop the plan. What steps are required to get you to the goals? Make the plan as detailed as possible. Try to visualize and then plan for, every possible setback. Commit the plan to paper and then keep it with you at all times. Review it regularly and ensure that every step takes you closer to your Vision and Goals."
        },
        2014: {
            title: "2014",
            desc: "Have some fun and hypnotize yourself to be your very own “Ghost of Christmas future” and see what the future holds for you. Success is something of which we all want more. Most people believe that success is difficult.",
            italText:"Get the oars in the water and start rowing. Execution is the single biggest factor in achievement.",
            secondDesc:"The price is something not necessarily defined as financial. It could be time, effort, sacrifice, money or perhaps, something else. The point is that we must be fully aware of the price and be willing to pay it"
        },
        2016: {
            title: "2016",
            desc: "He sells his farm and hikes off over the horizon, never to be heard from again. Rumors say that years later he died destitute, never having found the diamonds he spent his life seeking.",
            italText:"I don’t think the deciding factor was the desire. Lots of people come here to Japan, but never quite find out how to stay. ",
            secondDesc:"Instead, it seems to be more a matter of what they can allow themselves to have. Some people call this a sense of deserving. Others call it a sense of entitlement. No matter what term you use, it’s basically the same thing."
        },
        2018: {
            title: "2018",
            desc: "Introspection is the trick. Understand what you want, why you want it and what it will do for you. This is a critical factor, and as such, is probably the most difficult step. For this reason, most people never complete this aspect – then wonder why life is so difficult!",
            italText:"“Nothing changes until something moves” – this is the battle cry of author and journalist Robert Ringer. And he is absolutely correct",
            secondDesc:"Without clarity, you send a very garbled message out to the Universe. We know that the Law of Attraction says that we will attract what we focus on, so if we don’t have clarity, we will attract confusion."
        },
        2020: {
            title: "2020",
            desc: "Make no mistake, the new owner already had money, or he could not have bought the land. There’s nothing in this story to make us think he was dreaming about riches, vast or otherwise. No burning desire. But he got the goodies.",
            italText:"Once you have a clear understanding of what you want, it is critical that you engage in goal setting – specifically setting SMART goals",
            secondDesc:"Focus is having the unwavering attention to complete what you set out to do. There are a million distractions in every facet of our lives."
          },
        2012: {
            title: "2012",
            desc: " What is the exact sequence of events that will take you to where you want to be? Have a think consciously of what you need to do. Every outcome begins with the first step.",
            italText:"When you decide you want to have a romantic meal for two, there are many steps that you need to perform in order for that to happen..",
            secondDesc:"This is the beginning of creating the life that you want to live. Know what the future holds for you as a result of the choice you can make today."
          },
      };
  return (
    <div className={styles.eventContent}>
        <Row className={styles.row}>
            <Col md="4" className={styles.column1}>
            <h1>{yearData[year]?.title}</h1>
            </Col>
            <Col md="8" className={styles.column2}>
            <div className={styles.timelineText}>
                <h6>{yearData[year]?.desc}</h6>
                <p className={styles.p1}>{yearData[year]?.italText}</p>
                <p className={styles.p2}>{yearData[year]?.secondDesc}</p></div></Col>
        </Row>
    </div>
  )
}

export default HistoryEvents