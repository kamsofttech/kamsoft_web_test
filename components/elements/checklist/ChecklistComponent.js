import React from 'react';
import styles from './checklist.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const ChecklistComponent = ({ items }) => {
  return (
    <div className={styles.checklist}>
      <ul className={styles.checklistItems}>
        {items.map((item, index) => (
          <li key={index}>
            <FontAwesomeIcon 
              icon={faCheck} 
              style={{ color: "rgb(239, 49, 57)", fontSize: "16px" , paddingRight:"5px"}} 
            /> 
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ChecklistComponent;
