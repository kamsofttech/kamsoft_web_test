import React from 'react'
import styles from './headerStyle.module.css';
import { Navbar, Container } from 'react-bootstrap'

import { useRouter } from 'next/router';
import { Button, Space } from 'antd';
import NavigationStyle1Component from '@/components/navigation/navigationStyle1/NavigationStyle1Component';
import TopExtraNavComponent from './TopExtraNavComponent';
import { useUserContext } from '@/components/context/UserContext';

const HeaderStyle1Component = () => {
    const {sec5,setDisplay } = useUserContext()
    const router=useRouter()
    const[sticky,setSticky]=React.useState(null)
    const[bg,setBg]=React.useState(null)
    const[btnClick,setBtnClick]=React.useState(false)
    const[isFixed,setIsFixed]=React.useState(null)
    const {sec3,tabKey,setTabKey,serTabKey, setSerTabKey } = useUserContext()
      
      const onMenuClick=(tabId)=>{
            setTabKey(`${6}`)
            router.push({
                pathname:'aboutUs',
                query:{tabKey:`${6}`}
            })
           
            
            
            
        }
    React.useEffect(()=>{
        const handleScroll = () => {
            var scroll = window.pageYOffset
        
            if (scroll > 100) {
                //console.log('scorll=', true)
                setIsFixed('is_fixed')
                setBg('bg-white')
                setDisplay('inline-block')
                
            } else {
                //console.log('scorll=', false)
                setIsFixed(null)
                setBg(null)
                setDisplay('none')
            }
        }
        window.addEventListener("scroll", handleScroll);
        return()=>{
          window.removeEventListener('scroll', handleScroll);
        }
      },[])
    return (
        
        <header className={`${styles.site_header} header `}>
            <TopExtraNavComponent isFixed={isFixed}/>
		<div className={`sticky-header main-bar-wraper navbar-expand-lg ${isFixed && styles.is_fixed}`}>
            <div className={`${styles.main_bar} ${bg}`}>
                
                <Container>
                    {/*<!-- website logo -->*/}
                     {/*<!-- nav toggle button -->*/}
                     <button onClick={()=>setBtnClick(!btnClick)} 
                    className={btnClick?`${styles.navbar_toggler} ${styles.open} navicon justify-content-end`:`${styles.navbar_toggler} collapsed navicon justify-content-end `} 
                    type="button" 
                    data-toggle="collapse" 
                    data-target="#navbarNavDropdown" 
                    aria-controls="navbarNavDropdown" 
                    aria-expanded={btnClick?"true":"false"} 
                    aria-label="Toggle navigation">
                        <span className={btnClick?`${styles.bar_icon} ${styles.barOpen}`:`${styles.bar_icon}`}>
                        <span></span>
						<span></span>
						<span></span>
                        </span>
						
					</button>
                    <div className={styles.logo_header}>
						<a><img src='/images/logo.png' alt='logo'/></a>
					</div>
                   
                    {/*<!-- extra nav -->*/}
                    <div className={styles.extra_nav}>
                    <Space style={{display:btnClick?'none':'flex'}}>
                        <Button size='large' icon={<i className="fa-solid fa-border-none"></i>} className='btn_drawer'/>
                        <Button onClick={()=>onMenuClick()} size='large' className='btn_primary2'>Let&apos;s Talk</Button>
                    </Space>
                        
                    </div>
                    {/*<!-- Quik search -->*/}
                    {/*<div className="dlab-quik-search ">
                        <form action="#">
                            <input name="search" value="" type="text" className="form-control" placeholder="Type to search">
                            <span id="quik-search-remove"><i className="ti-close"></i></span>
                        </form>
                    </div>*/}
                    {/*<!-- main nav -->*/}
                    <div className={btnClick?`${styles.header_nav} navbar-collapse ${styles.show} collapse ${isFixed==null?`justify-content-end`:'justify-content-end'}`:`${styles.header_nav} navbar-collapse collapse ${isFixed==null?``:''} `} id="navbarNavDropdown">
						<div className={`${styles.logo_header} d-md-block d-lg-none`}>
							<a href="#"><img src='/images/logo.png' alt='logo'/></a>
						</div>
                        {/*<MenuItemComponent/>*/}
                        <NavigationStyle1Component btnClick={btnClick} setBtnClick={setBtnClick}/>
						{/*<div className="kam-social-icon">
							<ul>
								<li><a className="site-button circle fa fa-facebook" ></a></li>
								<li><a className="site-button  circle fa fa-twitter" ></a></li>
								<li><a className="site-button circle fa fa-linkedin" ></a></li>
								<li><a className="site-button circle fa fa-instagram" ></a></li>
							</ul>
						</div>*/}		
                    </div>
                </Container>
            </div>
        </div>
        
    </header>
        
    )
}

export default HeaderStyle1Component