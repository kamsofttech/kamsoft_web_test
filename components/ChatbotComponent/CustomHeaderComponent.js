import React from 'react';
import styles from "./CustomHeader.module.css"
import { useDispatch } from 'react-redux';
import { toggleChatbot } from '../../redux/ChatbotClose/chatbotAction';
import { CloseOutlined } from '@ant-design/icons';
function CustomHeaderComponent() {


  const dispatch = useDispatch();

  function handleClose() {
    dispatch(toggleChatbot());
  }
  return (
    <div className={styles.customHeader}>
      <h1>HELP DESK</h1>
      <button onClick={handleClose}><CloseOutlined/></button>
      </div>
     
  );
}

export default CustomHeaderComponent;
