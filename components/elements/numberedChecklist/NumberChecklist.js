import React from 'react';
import styles from './numberChecklist.module.css';

const NumberChecklist = ({ points = [], numbers = [] }) => {
  return (
    <div className={styles.numberChecklist}>
      <ul>
        {points.map((point, index) => (
          point && ( // Only render if the point is truthy
            <li key={index}>
              <span>{numbers[index]}</span>{point}
            </li>
          )
        ))}
      </ul>
    </div>
  );
};

export default NumberChecklist;
