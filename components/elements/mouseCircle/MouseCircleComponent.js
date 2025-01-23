import React, { useState, useEffect } from 'react';
import styles from './mouseCircle.module.css';
import { useMouseMove, useValue, animate, withEase } from "react-ui-animate";
const CURSOR_SIZE = 30;
const CURSOR_SIZE1 = 8;
const MouseCircleComponent = () => {
    const x = useValue(0);
    const y = useValue(0);
    const x1 = useValue(0);
    const y1 = useValue(0);
  useMouseMove(({ mouseX, mouseY }) => {
    x.value = withEase(mouseX - CURSOR_SIZE / 2);
    y.value = withEase(mouseY - CURSOR_SIZE / 2);
  });
  useMouseMove(({ mouseX, mouseY }) => {
    x1.value = withEase(mouseX - CURSOR_SIZE1 / 2);
    y1.value = withEase(mouseY - CURSOR_SIZE1 / 2);
  });
  return (
    <>
      {/* Outer circle */}
      <div >
      <animate.div
      style={{
        width: CURSOR_SIZE,
        height: CURSOR_SIZE,
        backgroundColor: "transparent",
        border:'1px solid #000',
        borderRadius: "50%",
        translateX: x.value,
        translateY: y.value,
        position:'fixed',
        zIndex:'999999'
      }}
    />
    <animate.div
      style={{
        width: CURSOR_SIZE1,
        height: CURSOR_SIZE1,
        backgroundColor: "#1dba26",
        borderRadius: "50%",
        translateX: x1.value,
        translateY: y1.value,
        position:'fixed',
        zIndex:'999999'
      }}
    />
      </div>
      
      
    </>
  );
};

export default MouseCircleComponent;