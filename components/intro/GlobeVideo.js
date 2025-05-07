import React, { useState, useEffect, useRef } from 'react';
import styles from './globe.module.css'
const GlobeVideo = ({video1}) => {

    const [isInView, setIsInView] = useState(false); // State to track if video is in view 
    const videoRef = useRef(null); // Ref to access the video element 

    useEffect(() => {

        // Create an Intersection Observer to track when the video is in view 
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting); // Set state based on whether video is visible 
            },
            { threshold: 0.5 } // Trigger when at least 50% of the video is in view 
        );

        if (videoRef.current) {
            observer.observe(videoRef.current); // Observe the video element 
        }

        return () => observer.disconnect(); // Cleanup observer on unmount 
    }, []);
useEffect(() => {
        if (videoRef.current) {
            if (isInView) {
                videoRef.current.play();
            } else {
                videoRef.current.pause();
            }
        }
    }, [isInView]);
    return (

        <div style={{ width: "100%", height: "auto",position: 'relative' }} > {/* Wrapper with minimum height */}
            <video
                ref={videoRef}
                src={video1}
                muted
                loop
                playsInline
                style={{ width: "100%", height: "auto" ,filter: `grayscale(1)`}}
            />
            <div className={styles.globeBox}>
        <span>256+</span>
        <h5>Clients around the globe</h5>
        <div></div>
    </div>
        </div>
    );
};

export default GlobeVideo;