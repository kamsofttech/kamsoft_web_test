import BreadcumbStyle1 from '@/components/elements/breadcumb/breadcumbStyle1/BreadcumbStyle1'
import ProductMainComponent from '@/components/products/ProductMainComponent'
import React from 'react'

const product = () => {
  return (
    <>
    <BreadcumbStyle1 title={'Our Products'}/>
    <ProductMainComponent/>
    </>
  )
}

export default product