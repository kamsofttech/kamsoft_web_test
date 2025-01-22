import ContactUsoCmponent from '@/components/contact/ContactUsoCmponent'
import BreadcumbStyle1 from '@/components/elements/breadcumb/breadcumbStyle1/BreadcumbStyle1'
import React from 'react'

const contactUs = () => {
  return (
    <>
    <BreadcumbStyle1 title={'Contact Us'} />
    <ContactUsoCmponent/>
    </>
  )
}

export default contactUs