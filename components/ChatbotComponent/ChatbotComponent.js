import React, { useRef } from 'react';
import Chatbot from 'react-chatbot-kit'
import config from '../../bot/config';
import styles from "./ChatbotComponent.module.css"

import MessageParser from '../../bot/MessageParser';
import ActionProvider from '../../bot/ActionProvider';
import PlusButton from '../chatbot/button/PlusButton';
// import MessageParser from '@/bot/MessageParser';
// import MessageParser from '../bot/MessageParser';
// import ActionProvider from '../bot/ActionProvider';
// import ActionProvider from '../bot/ActionProvider';
function ChatbotComponent() {
  // const chatbotBodyRef = useRef(null);
  const inputMessCont =document.getElementsByClassName("react-chatbot-kit-chat-input-container")
  console.log("")
  return (
    <div className={styles.ChatbotComponent}>
        {/* Chatbot body*/}
      <div>
      
       <Chatbot
       
        config={config()}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
      </div>
      {/* Custom Plus Button */}
      {/* <PlusButton chatbotBodyRef={chatbotBodyRef} /> */}
    </div>
  );
}

export default ChatbotComponent;
