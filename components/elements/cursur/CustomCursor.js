import React, { useEffect, useRef, useState } from "react";
import styles from './customCursor.module.css';;

const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const outerCircleRef = useRef(null);
  const innerCircleRef = useRef(null);
  const outerCirclePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const followMouse = () => {
      const speed = 0.1; // Adjust this for smoother/slower delay
      outerCirclePosition.current.x +=
        (mousePos.x - outerCirclePosition.current.x) * speed;
      outerCirclePosition.current.y +=
        (mousePos.y - outerCirclePosition.current.y) * speed;

      if (outerCircleRef.current) {
        outerCircleRef.current.style.transform = `translate(${outerCirclePosition.current.x}px, ${outerCirclePosition.current.y}px)`;
      }

      if (innerCircleRef.current) {
        innerCircleRef.current.style.transform = `translate(${mousePos.x}px, ${mousePos.y}px)`;
      }

      requestAnimationFrame(followMouse);
    };

    followMouse();
  }, [mousePos]);

  return (
    <>
      <div className={styles.cursor_outer} ref={outerCircleRef}></div>
      <div className={styles.cursor_inner} ref={innerCircleRef}></div>
    </>
  );
};

export default CustomCursor;
