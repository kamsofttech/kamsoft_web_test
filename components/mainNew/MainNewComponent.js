import React,{useState,useEffect} from 'react'
import styles from './mainNew.module.css'
import { Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { color, motion } from 'framer-motion';
const MainNewComponent = () => {
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
      });
      const [cursorVariant, setCursorVariant] = useState("default");
      useEffect(() => {
        const mouseMove = e => {
          setMousePosition({
            x: e.clientX,
            y: e.clientY
          })
        }
    
        window.addEventListener("mousemove", mouseMove);
    
        return () => {
          window.removeEventListener("mousemove", mouseMove);
        }
      }, []);
      const variants = {
        default: {
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
        },
        text: {
          height: 150,
          width: 150,
          x: mousePosition.x - 75,
          y: mousePosition.y - 75,
          backgroundColor: "#fff",
          color:'#1dbb26',
          mixBlendMode: "difference"
        }
      }
    
      const textEnter = () => setCursorVariant("text");
      const textLeave = () => setCursorVariant("default");
    return (
        <section className={styles.main_new_sec}>
            <Container className={styles.main_new_con}>
                <div className={styles.pro_box}>
                    <Row>
                        <Col md="6">
                            <div className={styles.leftTitle}>
                                <h1 onMouseEnter={textEnter} onMouseLeave={textLeave}> Live, Work, Create…</h1>
                                <p>Ten years plus experience helped us to create a process that guarantees high productivity and profitability for your solution.</p>
                                <motion.div
                                    className='cursor'
                                    variants={variants}
                                    animate={cursorVariant}
                                />
                                        <div className={styles.leftInfo}>
                                    <h4>+(704) 279-1249</h4>
                                    <ul>
                                        <li><a><FontAwesomeIcon icon={faFacebook} style={{ color: "white" }} /></a></li>
                                        <li><a><FontAwesomeIcon icon={faTwitter} style={{ color: "white" }} /></a></li>
                                        <li><a><FontAwesomeIcon icon={faLinkedin} style={{ color: "white" }} /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col md="6">
                            <div className={styles.rightInfo}>
                                <img src={'/images/slider/kam16-white.gif'} />
                            </div>
                          </Col>
                    </Row>
                </div>
            </Container>
        </section>
    )
}

export default MainNewComponent