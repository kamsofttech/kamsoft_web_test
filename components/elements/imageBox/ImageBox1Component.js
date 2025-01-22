import React from 'react'
import styles from './imageBox1.module.css';
import { Button } from 'antd';
import { useRouter } from 'next/router';
import { setProductTabKey } from '@/redux/menu/menuActions';
import { connect } from 'react-redux';
const ImageBox1Component = ({image,url,desc,title,setTabKey,catCode}) => {
    const router=useRouter()
    const [isHovered, setIsHovered] = React.useState([]);

    const handleOverlayHover = () => {
        setIsHovered(true);
    };

    const handleOverlayLeave = () => {
        setIsHovered(false);
    };
    const goToPage=(url,cat)=>{
        setTabKey(`${cat}`)
        router.push(`${url}`)
        
    }
    return (
        <div className={styles.img_box} style={{ width: "100%", position: 'relative' }} onMouseEnter={handleOverlayHover} onMouseLeave={handleOverlayLeave}>
            <div className={`${styles.flex} ${styles.justifycenter} ${styles.imageBox}`}>
                <img src={image} className={`${styles.imgwidth} ${isHovered ? styles.hoverzoom : ''}`} />
                <div className={`${styles.overlay} ${isHovered ? styles.overlayhover : ''}`} ></div>
            </div>
            <div className={styles.ico_box}>
                <div className={`${styles.flex} ${styles.justifycenter} ${styles.rotatearrow} ${isHovered ? styles.rotateArrowHover : styles.rotateArrowNothover} ${styles.midCircle}`}>
                    <i className="fa fa-angle-up" aria-hidden="true"></i>
                </div>
            </div>
            
            <div className={`${styles.flex} ${styles.aligncenter} ${styles.wrap} ${styles.flexcolumn} ${styles.contentBox}`}>
                <h3>{title}</h3>
                {desc && 
                <p>{desc}</p>
                }
                
                <Button onClick={()=>goToPage(url,catCode)} className='btn_primary1 mt_15 mb_15'>View Details</Button>
            </div>
            
        </div>
    )
}
const mapDispatchToProps=dispatch=>({
    setTabKey:data=>dispatch(setProductTabKey(data))
})
export default connect(null,mapDispatchToProps) (ImageBox1Component)