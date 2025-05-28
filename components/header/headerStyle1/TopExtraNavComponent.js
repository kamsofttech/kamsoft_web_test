import { Dropdown, Space, Popover } from 'antd'
import React from 'react'
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';
import styles from './topextra.module.css';
import { Container } from 'react-bootstrap';
import { useUserContext } from '@/components/context/UserContext';

const TopExtraNavComponent = ({ isFixed }) => {
    const topSecRef=React.useRef('')
    
    const{tabKey, setTabKey,setTopSecRef}=useUserContext()
    setTopSecRef(topSecRef)
    console.log('tabKey',tabKey)
    const router = useRouter()
    function handleClick(id) {
        setTabKey(id)
        router.push({
            pathname:'aboutUs',
            query:{tabKey:id}
        })
        
    }
    
    return (
        <section ref={topSecRef} className={styles.topExtra}>
            <Container>
        <div className='main_top_nav bg-red-c'>
            <div className={styles.for_full_flex}>
                <div className={styles.for_first}>
                                            {/* <div className={styles.forfl}>
                                            <div className='icon-box'>
                                                <i className="fa fa-envelope" aria-hidden="true"></i>
                                            </div>
                                            <h6>info@marathecaterers.com</h6>
                                            </div> */}
                                        <div className={styles.forfl}>
                                            <div className='icon-box'>
                                                <i className="fa fa-envelope" aria-hidden="true"></i>
                                            </div>
                                            <h6>mail@kamsoft.co.in
                                            </h6>
                                            </div>
                                        <div className={styles.forfl}>
                                            <div className='icon-box'>
                                                <i className="fa fa-phone" aria-hidden="true"></i>
                                            </div>
                                            <h6>+91 9423879030 / 7756036120</h6>
                                            </div>
                                        <div className={styles.forfl}>
                                            <div className='icon-box'>
                                                <i className="fa fa-map-marker" aria-hidden="true"></i>
                                            </div>
                                            <h6>Vasco-da-gama, Goa-403802 ,India</h6>
                                            </div>
                                            </div>
                                            

                            <div className={styles.for_second}>
                            {/* <a onClick={()=>router.push(`/`)}><i class="fa-solid fa-house"></i></a> */}
                                    <a className={`${tabKey=='1'?styles.active:''}`} onClick={()=>handleClick('1')}><h6>About us</h6></a>
                                    <a className={`${tabKey=='2'?styles.active:''}`} onClick={()=>handleClick('2')}><h6>Careers</h6></a>
                                    <a className={`${tabKey=='3'?styles.active:''}`} onClick={()=>handleClick('3')}><h6>How We Work</h6></a>
                                    {/* <a className={`${tabKey=='4'?styles.active:''}`} onClick={()=>handleClick('3')}><h6>Our values</h6></a> */}
                                    <a className={`${tabKey=='5'?styles.active:''}`} onClick={()=>handleClick('5')}><h6>FAQ</h6></a>
                                    <a className={`${tabKey=='6'?styles.active:''}`}onClick={()=>handleClick('6')}><h6>Contact Us</h6></a>
                                   
                                    
                                </div>
                            </div>

            </div>
            </Container>
            </section>


    )
}

export default TopExtraNavComponent