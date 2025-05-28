import React from 'react'
import styles from './navigationStyle.module.css';
import { useRouter } from 'next/router';

import { useUserContext } from '@/components/context/UserContext';
const NavigationStyle1Component = ({btnClick,setBtnClick,menuItems}) => {
    const router=useRouter()
    const {sec1,sec2,sec3,sec4,setTabKey } = useUserContext()
    console.log('user',router)
    const [menuId,setMenuId]=React.useState('1')
    const [subMenuId,setSubMenuId]=React.useState('')
    const [arrowType,setArrowType]=React.useState('arrow_left')
    const [arrowIcon,setArrowIcon]=React.useState('fa-angle-right')
    const [menuCLick,setMenuCLick]=React.useState(false)
    const [subMenuCLick,setSubMenuCLick]=React.useState(false)
   // const{headers}=menuItems.data
    const [menuItem,setMenuItem]=React.useState('')
    const onMenuClick=(id,routeName,secId)=>{
        setTabKey('')
        if (btnClick) {
            setSubMenuId('') 
            setSubMenuCLick(!subMenuCLick) 
           setMenuId(id) 
           setMenuCLick(!menuCLick)
        }
        if(router.pathname=='/'){
            //routeName.current.scrollIntoView({ behavior: 'smooth' });
            setMenuId(id) 
            window.scrollTo(0,routeName.current.offsetTop-80)
        }else{
            setMenuId(id) 
            router.push(`/#${secId}`)
            //window.scrollTo(0,routeName.current.offsetTop-80)
        }
        
        //router.push(`/${routeName=='home'?'/':routeName}`)
    }
    
    React.useEffect(()=>{
     if (router.pathname=='/aboutUs') {
        setMenuId('')
     }   
    //console.log(menuItems)
    if (menuItems!==undefined){
        const{header}=menuItems.data
        setMenuItem(header)
    }
        //for responsive
        function handleResize() {
            if (window.matchMedia("(min-width: 1400px)").matches) {
                setArrowType('arrow_down')
                setArrowIcon('fa fa-chevron-down')
                setBtnClick(false)
              // Viewport is less or equal to 700 pixels wide
              //console.log("min-width: 1400px")
            } else if(window.matchMedia("(min-width: 1200px)").matches) {
                setArrowType('arrow_down')
                setArrowIcon('fa fa-chevron-down')
                setBtnClick(false)
              // Viewport is greater than 700 pixels wide
              //console.log("min-width: 1200px")
            }else if(window.matchMedia("(min-width: 992px)").matches){
                setArrowType('arrow_down')
                setArrowIcon('fa fa-chevron-down')
                setBtnClick(false)
              //console.log("min-width: 1200px")
            }else if(window.matchMedia("(min-width: 768px)").matches){
                setArrowType('arrow_right')
                setArrowIcon('fa fa-angle-right')
              
              //console.log("min-width: 768px")
            }else if(window.matchMedia("(min-width: 576px)").matches){
                setArrowType('arrow_right')
                setArrowIcon('fa fa-angle-right')
              //console.log("min-width: 768px")
            }else{
              setArrowType('arrow_right')
              setArrowIcon('fa fa-angle-right')
              
              //console.log("min-width: 576px")
            }
          
          }
          
          handleResize()
          window.addEventListener('resize', handleResize)

    },[menuItems,router])
    
    console.log('menuId',menuId)
    return (
        <>

            <ul className={`${styles.nav} navbar-nav`}>
                {/* {menuItem && menuItem.headerMenuItems.map((m,mix)=>{
                    if (m.children.length==0) {
                        return(
                            <li key={mix} className={menuId==mix ?`${styles.active} ${styles.menuOpen}`:``}>
                                <a onClick={()=>onMenuClick(m.pageID,m.pageSlug)}>{m.title}</a>

                            </li>
                        )
                        
                    } else {
                        return(
                            <li key={mix} className={menuId==mix ?`${styles.active} ${styles.menuOpen}`:``}> <a onClick={()=>onMenuClick(mix)}> {m.title}<i className={`fa fa-chevron-down`}></i></a>
                                <ul className={styles.sub_menu}  style={{display:btnClick?menuId==mix?'block':'none':'block'}}>
                                    {m.children.map((s,six)=>
                                    <li key={six}><a onClick={() => goToPage(m.pageSlug,s.title,s.pageID)} href="#">{s.title}</a></li>
                                )}
                                    
                                </ul>
                            </li>
                        )
                        
                    }
                    
                }
            
            )} */}
               <li  className={menuId=='1' ?`${styles.active} ${styles.menuOpen}`:``}>
                    <a onClick={()=>onMenuClick('1',sec1,'sec1')}>Home</a>
                    
                </li>
                
                <li className={menuId=='3' ?`${styles.active} ${styles.menuOpen}`:``}>
                    <a onClick={()=>onMenuClick('3',sec2,'sec2')}>Our Expertise</a>
                </li>
                <li className={menuId=='4' ?`${styles.active} ${styles.menuOpen}`:``}>
                    <a onClick={()=>onMenuClick('4',sec3,'sec3')}>Services & Solutions</a>
                </li>
                <li className={menuId=='5' ?`${styles.active} ${styles.menuOpen}`:``}>
                    <a onClick={()=>onMenuClick('5',sec4,'sec4')}>Portfolios</a>
                </li>
                {/*<li className={menuId=='4' ?`active ${styles.menuOpen} ${styles.has_mega_menu}`:`${styles.has_mega_menu}`} > <a onClick={()=>onMenuClick('4')}>Our Products <i className={`fa fa-chevron-down`}></i> </a>
                    <ul className={styles.mega_menu}  style={{display:btnClick?menuId=='4' ?'block':'none':"flex"}}>
									<li><a >Product e-Brochure</a>
										<ul>
											<li><a href="shortcode-buttons.html"><i className="ti-mouse"></i> Buttons</a></li>
											<li><a href="shortcode-icon-box-styles.html"><i className="ti-layout-grid2"></i> Icon box styles</a></li>
											<li><a href="shortcode-pricing-table.html"><i className="ti-layout-grid2-thumb"></i> Pricing table</a></li>
											<li><a href="shortcode-toggles.html"><i className="ti-layout-accordion-separated"></i> Toggles</a></li>
											<li><a href="shortcode-team.html"><i className="ti-user"></i> Team</a></li>
											<li><a href="shortcode-animation-effects.html"><i className="ti-layers-alt"></i> Animation Effects</a></li>
										</ul>
									</li>
									<li> <a >Media Articles</a>
										<ul>
											<li><a href="shortcode-carousel-sliders.html"><i className="ti-layout-slider"></i> Carousel sliders</a></li>
											<li><a href="shortcode-image-box-content.html"><i className="ti-image"></i> Image box content</a></li>
											<li><a href="shortcode-tabs.html"><i className="ti-layout-tab-window"></i> Tabs</a></li>
											<li><a href="shortcode-counters.html"><i className="ti-timer"></i> Counters</a></li>
											<li><a href="shortcode-shop-widgets.html"><i className="ti-shopping-cart"></i> Shop Widgets</a></li>
											<li><a href="shortcode-filters.html"><i className="ti-check-box"></i> Gallery Filters</a></li>
										</ul>
									</li>
									<li> <a >Stories</a>
										<ul>
											<li><a href="shortcode-accordians.html"><i className="ti-layout-accordion-list"></i> Accordians</a></li>
											<li><a href="shortcode-dividers.html"><i className="ti-layout-list-post"></i> Dividers</a></li>
											<li><a href="shortcode-images-effects.html"><i className="ti-layout-media-overlay"></i> Images effects</a></li>
											<li><a href="shortcode-testimonials.html"><i className="ti-comments"></i> Testimonials</a></li>
											<li><a href="shortcode-pagination.html"><i className="ti-more"></i> Pagination</a></li>
											<li><a href="shortcode-alert-box.html"><i className="ti-alert"></i> Alert box</a></li>
										</ul>
									</li>
									<li> <a >White papers </a>
										<ul>
											<li><a href="shortcode-icon-box.html"><i className="ti-layout-media-left-alt"></i> Icon Box</a></li>
											<li><a href="shortcode-list-group.html"><i className="ti-list"></i> List group</a></li>
											<li><a href="shortcode-title-separators.html"><i className="ti-layout-line-solid"></i> Title Separators</a></li>
											<li><a href="shortcode-all-widgets.html"><i className="ti-widgetized"></i> Widgets</a></li>
											<li><a href="shortcode-carousel-sliders.html"><i className="ti-layout-slider"></i> Carousel sliders</a></li>
											<li><a href="shortcode-image-box-content.html"><i className="ti-image"></i> Image box content</a></li>
										</ul>
									</li>
								</ul> 
                </li>*/}
                
                {/*<li className={menuId=='7' ?`active ${styles.menuOpen}`:``}> <a onClick={()=>onMenuClick('7')}> Features<i className={`fa fa-chevron-down`}></i></a>
                    <ul className={`${styles.sub_menu} tab-content`}  style={{display:btnClick?menuId=='7' ?'block':'none':'block'}}>
                        <li className={subMenuId=='7.1' ?`active ${styles.menuOpen}`:``}>
                            <a onClick={()=>onSubMenuClick('7.1')} href="#">Printed Foil  <i class="fa fa-angle-right"></i></a>
                            <ul className={styles.sub_menu} style={{display:btnClick?subMenuId=='7.1' ?'block':'none':'block'}}>
								<li className={styles.sub_sub_menu}><a href="header-style-1.html">Header 1</a></li>
								<li className={styles.sub_sub_menu}><a href="header-style-2.html">Header 2</a></li>
							</ul>
                        </li>
                        <li className={subMenuId=='7.2' ?`active ${styles.menuOpen}`:``}>
                            <a onClick={()=>onSubMenuClick('7.2')} href="#">Printed Leaflets  <i class="fa fa-angle-right"></i></a>
                            <ul className={styles.sub_menu} style={{display:btnClick?subMenuId=='7.2' ?'block':'none':'block'}}>
								<li className={styles.sub_sub_menu}><a href="header-style-1.html">Header 1</a></li>
								<li className={styles.sub_sub_menu}><a href="header-style-2.html">Header 2</a></li>
							</ul>
                        </li>
                    </ul>
                </li>*/}
                
            </ul>
        </>

    )
}

export default NavigationStyle1Component