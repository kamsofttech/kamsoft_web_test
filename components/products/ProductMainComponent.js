import React from 'react'
import styles from './productMain.module.css';
import { Col, Container, Row } from 'react-bootstrap';
import ProductsTabComponent from './ProductsTabComponent';
import useSWR from 'swr';
import { fetcher } from '@/utils/fetcher';
import { useRouter } from 'next/router';
import { setIsLoading, setProductItem, setProductTabKey, setSubCatData } from '@/redux/menu/menuActions';
import { connect } from 'react-redux';
import axios from 'axios';
import { data } from 'autoprefixer';

const ProductMainComponent = ({setTabKey,setProductItem,setSubCatData,setIsLoading}) => {
  const route=useRouter()
  const { data, error,isLoading } = useSWR(() => '/api/products/getProductSubCatagory?pId=' + route.query.catCode, fetcher) ;
    const[catData,setCatdata]=React.useState('')
    const[pData,setPdata]=React.useState('')
  
    const[activeKey,setActiveKey]=React.useState('')
    console.log('isLoading',isLoading)
    async function fetch(id){
      setIsLoading(true)
      try {
          const {data}=await axios.post('/api/products',{catId:id.toString()})
          setPdata(data)
          console.log('product',data)
          setProductItem(data)

          setIsLoading(false)
      } catch (error) {
          setIsLoading(false)
      }
     
      

  }
    React.useEffect(()=>{
        if (data!==undefined) {
            const{prodSubCategory}=data
            //setCatdata(prodSubCategory)
            setSubCatData(prodSubCategory)
            fetch(prodSubCategory[0].id)
            setActiveKey(prodSubCategory[0].id)
            setTabKey(prodSubCategory[0].id)
        } 
    },[data,isLoading,error])
    console.log('pData',pData)
  return (
    <section className={styles.prod_sec}>
        <Container className={styles.pd80}>
          <ProductsTabComponent fetch={fetch}/>
         </Container>
    </section>
  )
}
const mapDispatchToProps=dispatch=>({
  setTabKey:data=>dispatch(setProductTabKey(data)),
  setProductItem:data=>dispatch(setProductItem(data)),
  setSubCatData:data=>dispatch(setSubCatData(data)),
  setIsLoading:data=>dispatch(setIsLoading(data))

})
export default connect(null,mapDispatchToProps) (ProductMainComponent)