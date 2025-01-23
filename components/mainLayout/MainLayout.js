import { Layout } from 'antd'
import React from 'react'
import FooterStyle1 from '../footerNew/FooterNewComponent';
import HeaderStyle1Component from '../header/headerStyle1/HeaderStyle1Component';
import MouseCircleComponent from '../elements/mouseCircle/MouseCircleComponent';
import CustomCursor from '../elements/cursur/CustomCursor';


const { Header, Content, Footer } = Layout;

const MainLayout = ({children}) => {
 
  return (
    <Layout  className={'main_wrapper'}>
      {/* <MouseCircleComponent/> */}
      <CustomCursor/>
          <HeaderStyle1Component/>

          <Content>
              {children}
          </Content>
          <FooterStyle1/>
      </Layout>
    
  )
}


export default MainLayout
