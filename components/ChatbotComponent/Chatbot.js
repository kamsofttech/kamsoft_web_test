// import React, { useState } from 'react';
// import { Button } from 'antd';
// import styles from "./Chatbot.module.css"
// import ChatbotComponent from './ChatbotComponent';

// function Chatbot() {

 
//   const [open,SetOpen] = useState(false);

//   function handleChat(e) {
//      SetOpen(!open);
//      console.log(open)
//   }
//   return (
  
//       <div className={styles.chatbotContainer}>
//       <div className={styles.chat_icon}>
//        <button onClick={handleChat}>
           
//            <img src='../img/chatBot.png' alt="Chat Avatar" />
//        </button>
//    </div>
//    {open === true ?
// <ChatbotComponent /> :   <> </>}

//       </div>
//   );
// }

// export default Chatbot;

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleChatbot } from '../../redux/ChatbotClose/chatbotAction';
import ChatbotComponent from './ChatbotComponent'; // Your chatbot component
import styles from './Chatbot.module.css'; // Make sure you import the necessary styles

function Chatbot() {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.chatbot.isOpen); // Get the chatbot visibility state from Redux

  function handleChat(e) {
    dispatch(toggleChatbot()); // Dispatch action to toggle chatbot visibility
  }

  return (
    <div className={styles.chatbotContainer}>
      <div className={styles.chat_icon}>
        <button onClick={handleChat}>
          <img src='/images/chatBot.png' alt="Chat Avatar" />
        </button>
      </div>
      {open ? <ChatbotComponent /> : null} {/* Conditionally render the chatbot component */}
    </div>
  );
}

export default Chatbot;
