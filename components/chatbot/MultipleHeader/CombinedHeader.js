import React from 'react';
import CustomHeaderComponent from '../../ChatbotComponent/CustomHeaderComponent';
import CustomDrawer from '../Drawer/CustomDrawer';
import DrawerMenu from '../Drawer/DrawerMenu.js';

const CombinedHeader = ({actionProvider}) => {
  return (
    <div>
      <CustomHeaderComponent  />
      <CustomDrawer actionProvider={actionProvider}/>
      <DrawerMenu />
    </div>
  );
}

export default CombinedHeader;
