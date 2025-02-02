import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleChatbot } from '../../../redux/ChatbotClose/chatbotAction';
import { LinkOutlined, PrinterOutlined, MutedOutlined, ClearOutlined, CloseOutlined } from '@ant-design/icons';
import { Popconfirm, Button } from 'antd';
import styles from './DrawerMenu.module.css'; // Import your styles

const DrawerMenu = () => {
  const dispatch = useDispatch();

  const handleEndConversation = () => {
    dispatch(toggleChatbot());
  };

  return (
    <div className={styles.menuBar}>
      <button data-tooltip="Add attachment">
        <LinkOutlined style={{ fontSize: '15px', color: 'black' }} />
      </button>
      <button data-tooltip="Print transcript">
        <PrinterOutlined style={{ fontSize: '15px', color: 'black' }} />
      </button>
      <button data-tooltip="Mute">
        <span>
          <MutedOutlined style={{ fontSize: '15px', color: 'black' }} />
        </span>
        :<span>On</span>
      </button>
      <button data-tooltip="Clear history">
        <ClearOutlined style={{ fontSize: '15px', color: 'black' }} />
      </button>

      {/* Popconfirm for End Conversation */}
      <Popconfirm
        title="End Conversation"
        description="Are you sure you want to end the conversation?"
        onConfirm={handleEndConversation}
        okText="Yes"
        cancelText="No"
        overlayClassName={styles.custom_popconfirm} // Add custom class for z-index styling
      >
        <Button danger data-tooltip="End conversation">
          <CloseOutlined style={{ fontSize: '15px', color: 'black' }} />  
        </Button>
      </Popconfirm>
    </div>
  );
};

export default DrawerMenu;
