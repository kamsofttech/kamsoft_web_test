import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styles from './ourServices.module.css';
import TitleMainComponent from '../elements/title/TitleMainComponent';
import ImageBox1Component from '../elements/imageBox/ImageBox1Component';
import { getProductCatagory } from '@/lib/api';
import {Fade} from "react-awesome-reveal";
import useSWR from 'swr';
import { fetcher } from '@/utils/fetcher';
import { Skeleton } from 'antd';

const OurServicesComponent = ({secId}) => {
    const { data, error,isLoading } = useSWR('/api/products/getProductCategory', fetcher);
    const[catData,setCatdata]=React.useState('')
    
    console.log('isLoading',isLoading)
    React.useEffect(()=>{
        if (data!==undefined) {
            const{prodCategory}=data
            
            setCatdata(prodCategory)
        } 
    },[data,isLoading,error])
    console.log('datafff',catData)
    return (
        

   
        <section className={styles.our_service}>
            <Container className={styles.pd80}>
                <div data-aos="fade-left">
                    <TitleMainComponent  title={'Discover the products'} desc={'Seldolor sit amet consect etur'} />
                </div>
                
                <div className='pro_box'>
                    {/* <Row>
                        {catData && catData.map((d,idx)=>{
                            //const tempLink=d.uri.split('/')
                            const urlLink=`our-products/${d.name}?catCode=${d.id}`
                            //console.log('tempLink',tempLink[3])
                            return(
                                <Col key={idx} md={3}>
                                    <Fade cascade damping={0.1}>
                                     <ImageBox1Component url={urlLink} catCode={d.id} image={d.image!==null?d.image.src:''} title={d.name}  />
                                    </Fade>
                                    
                                </Col>
                            )
                        }
                        
                        )}
                    </Row> */}
                    
                </div>
            </Container>

        </section>
        
    )
}

export default OurServicesComponent