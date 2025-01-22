"use client";
import React from 'react'
import styles from './flashScreen.module.css';
import { getMenuItems } from '@/lib/api';
import { setMenuItem } from '@/redux/menu/menuActions';
import { connect } from 'react-redux';
import { fetcher, fetcher as myFetcher } from '../../utils/fetcher';
import useSWR, { SWRConfig } from 'swr';
const FlashScreen=({children,setMenuItem})=> {
  const { data, error } = useSWR('/api/getHeaderData', fetcher);
  setMenuItem(data)
  console.log('swr-data',data)
  
  const splashRef = React.useRef();
  const [display,setDisplay]=React.useState('none')
  React.useEffect(()=>{
    
    
    setTimeout(()=>{

        setDisplay('block');
      }, 500);
  }, [data]);
  return (
    <SWRConfig value={{
      refreshInterval: 10000,
      fetcher: myFetcher
    }}>
    <div className={styles.flash_loader}style={{display:display}} >
        {children}
    </div>
    </SWRConfig>
  )
  
}
const mapDispatchToProps=dispatch=>({
  setMenuItem:data=>dispatch(setMenuItem(data))
})
export default connect(null,mapDispatchToProps) (FlashScreen)