import React from 'react'
import styles from './productTab.module.css';
import { Tabs, Card, Button, Spin, Skeleton } from 'antd';
import { Col, Row } from 'react-bootstrap';
import ProductItemComponent from './ProductItemComponent';
import { useRouter } from 'next/router';
import { createStructuredSelector } from 'reselect';
import { selectIsLoading, selectMenuItem, selectProductItem, selectProductTabKey, selectSubCatData } from '@/redux/menu/menuSelector';
import { connect } from 'react-redux';
import { setProductTabKey } from '@/redux/menu/menuActions';
import axios from 'axios';
const { TabPane } = Tabs;
const ProductsTabComponent = ({subCatItem,fetch,productItem,isLoading,tabKey,setTabKey}) => {
    const router=useRouter()
    const[tabLayout,setTablLayout]=React.useState(null)
    const[isLoad,setIsload]=React.useState(false)
    const[tKey,setTKey]=React.useState('')
    //const [filterData]=header.headerMenuItems.filter(f=>f.pageID==1914).map(x=>x.children)
    //const[isLoading,setIsLoading]=React.useState(false)
    
  //console.log('tablekey',tabKey)
    React.useEffect(()=>{
      

            function handleResize() {
              if (window.matchMedia("(min-width: 1400px)").matches) {
                setTablLayout("left")
               
                // Viewport is less or equal to 700 pixels wide
                //console.log("min-width: 1400px")
              } else if(window.matchMedia("(min-width: 1200px)").matches) {
                setTablLayout("left")
               
                // Viewport is greater than 700 pixels wide
                //console.log("min-width: 1200px")
              }else if(window.matchMedia("(min-width: 992px)").matches){
                setTablLayout("left")
                
                //console.log("min-width: 1200px")
              }else if(window.matchMedia("(min-width: 768px)").matches){
                setTablLayout("top")
                
                //console.log("min-width: 768px")
              }else if(window.matchMedia("(min-width: 576px)").matches){
                setTablLayout("top")
                
                //console.log("min-width: 768px")
              }else{
                setTablLayout("top")
                
                //console.log("min-width: 576px")
              }
            
            }
            handleResize()
            window.addEventListener('resize', handleResize)
         

    },[])
    
    const onTabClickHandle=(key)=>{

        setTabKey(key)
        fetch(key)
        //router.push(`/our-products/${pData.title}?catCode=${key}`, undefined, { shallow: true })
    }
  return (
    <div className={styles.prod_tab_box}>
      <Skeleton loading={isLoad} active>
        <Tabs onTabClick={(key)=>onTabClickHandle(key)} activeKey={tabKey.toString()} size='large' type="card" className={styles.prod_tabs} tabPosition={tabLayout}>
            {subCatItem && subCatItem.map((d,idx)=>
            <TabPane  className={styles.tab_content} tab={<h6 className={styles.tab_title}>{d.name}</h6>} key={d.id}>
                
                <Skeleton loading={isLoading} active>
                    <Row>
                    

                    {productItem && productItem.products.map((item,idx)=>
                    <Col key={idx} md={6}>
                        <ProductItemComponent tag={item.attributes.length>=1?item.attributes[0].options:'NA'} title={item.name} image={item.images[0].src}/>
                    </Col>
                )}
                   
                </Row>
                </Skeleton> 
            </TabPane>
        )}
           
        </Tabs>
        </Skeleton>
    </div>
  )
}
const mapStateToProps=createStructuredSelector({
    tabKey:selectProductTabKey,
    menuItems:selectMenuItem,
    productItem:selectProductItem,
    subCatItem:selectSubCatData,
    isLoading:selectIsLoading
})
const mapDispatchToProps=dispatch=>({
    setTabKey:data=>dispatch(setProductTabKey(data))
})
export default connect(mapStateToProps,mapDispatchToProps) (ProductsTabComponent)