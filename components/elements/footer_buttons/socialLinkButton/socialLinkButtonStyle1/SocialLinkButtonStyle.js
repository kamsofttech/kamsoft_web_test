import React from 'react'
import styles from './SocialLinkButtonStyle1.module.css';
const SocialLinkButtonStyle = () => {
    return (
        <div className={`footer-new ${styles.social_links}`}>
            <h4>Connect with us</h4>
            <ul>
                <li><a href="#"><i className="fa-brands fa-facebook-f hi-icon"></i></a></li>
                <li><a href="#"><i className="fa-brands fa-instagram hi-icon"></i></a></li>
                <li><a href="#"><i className="fa-brands fa-behance hi-icon"></i></a></li>
                <li><a href="#"><i className="fa-brands fa-twitter hi-icon"></i></a></li>
                <li><a href="#"><i className="fa-brands fa-pinterest-p hi-icon"></i></a></li>
                <li><a href="#"><i className="fa-brands fa-linkedin hi-icon"></i></a></li>
            </ul>
        </div>
    )
}

export default SocialLinkButtonStyle