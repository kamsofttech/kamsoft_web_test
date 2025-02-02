import React, { useState } from "react";
import { Drawer , Button, theme } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import styles from "./CustomDrawer.module.css"
import DrawerMenu from "./DrawerMenu.js";
import DrawerContent from "./DrawerContent.js";
import { useDispatch, useSelector } from "react-redux";
const CustomDrawer = ({ actionProvider }) => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.drawer.open); // Access drawer state
    return (
      
          <>
          <div onClick={() => dispatch({ type: "OPEN_DRAWER" })} // Dispatch open action
           className={`react-chatbot-kit-chat-input-container ${styles.CustomButton}`}>  
            <PlusOutlined />
            </div>
            <Drawer 
            title= "Choose Your Option"
            onClose={() => dispatch({ type: "CLOSE_DRAWER" })} // Dispatch close action
            open={isOpen}
             placement="bottom"
             size="small"
             height={200}
             
             bodyStyle={{ 
             padding: "0%",
            //  margin: "0%"
              }}
        getContainer={false}
             >
             <div className={styles.DrawerMainContainer}>
             {/* <DrawerMenu /> */}
             <div className={styles.DrawerContent}>
              <DrawerContent actionProvider={actionProvider} />
             </div>
        </div>
              

            </Drawer>
          </>
      
    );
};

export default CustomDrawer;
