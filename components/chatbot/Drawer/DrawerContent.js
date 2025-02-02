import { Col, Row } from 'antd';
import React from 'react';
 import  styles from "./CustomDrawer.module.css"

import { connect } from 'react-redux';
import { selectMenuData } from '../../../redux/menu/menuSelector';
import { useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

//const data = ["About Us", "Committees","Certificates","NOC's","Forms,Downloads","Media Links","Gallery","Reporting"]


const DrawerContent = ({menuData, actionProvider}) => {
  

  const dispatch = useDispatch();
  function ClickButton(item) {
    console.log("items:",item);
  
   const subMenu = item.node.childItems?.edges;
   console.log("subMenu",subMenu);

    // Fetch the submenus for the clicked item
    if (subMenu && subMenu.length > 0) {
      // console.log("Submenus:", subMenu);

      // Optionally send the submenus to the actionProvider to display in the chatbot
      actionProvider.handleSubOptions(subMenu,item);
    } else {
      console.log("No submenus available for this item.");
    }
    dispatch({ type: "TOGGLE_DRAWER" });
  } 
  
  return (
    <>
    <Row className={styles.contentRow} gutter={[5, 5]}>
    {
      
      menuData.map((item, index)=> (
        <Col className={styles.contentColoumn} xs={12} sm={12} md={6} lg={6} key={index}>
        <button style={{ width: "100%", height: "50px" }} onClick={(e) => ClickButton(item)}>{item.node.label}</button>
        </Col>
      ))}
    
    
    </Row>
    </>
  );
}

const mapStateToProps = createStructuredSelector({
    menuData: selectMenuData
})



export default connect (mapStateToProps,null)(DrawerContent);
