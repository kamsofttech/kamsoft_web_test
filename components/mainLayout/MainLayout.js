import { Layout } from 'antd'
import React from 'react'
import FooterStyle1 from '../footerNew/FooterNewComponent';
import HeaderStyle1Component from '../header/headerStyle1/HeaderStyle1Component';
//import MouseCircleComponent from '../elements/mouseCircle/MouseCircleComponent';
import CustomCursor from '../elements/cursur/CustomCursor';
import { UserProvider } from '../context/UserContext';
import BackToTopComponent from '../backToTop/BackToTopComponent';


const { Header, Content, Footer } = Layout;

const MainLayout = ({ children }) => {

  return (
    <Layout className={'main_wrapper'}>
      {/* <MouseCircleComponent/> */}
      <CustomCursor />
      <UserProvider>
        <HeaderStyle1Component />

        <Content>
          {children}
        </Content>
        <FooterStyle1 />
        <BackToTopComponent/>
      </UserProvider>
    </Layout>

  )
}


export default MainLayout
