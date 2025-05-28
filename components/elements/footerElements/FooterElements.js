import React, { useActionState } from 'react'
import styles from './footerElements.module.css'
import { useUserContext } from '@/components/context/UserContext'
import { useRouter } from 'next/router'

const FooterElements = ({title,items,type}) => {
  const {sec3,tabKey,setTabKey,serTabKey, setSerTabKey } = useUserContext()
  const router=useRouter()
  const onMenuClick=(tabId)=>{

        setTabKey('')
       if(type=='services'){

        setSerTabKey(`${tabId+1}`)
        if(router.pathname=='/'){
            //routeName.current.scrollIntoView({ behavior: 'smooth' });
            //setMenuId(id) 
            window.scrollTo(0,sec3.current.offsetTop-80)
        }else{
            //setMenuId(id) 
            router.push(`/#${'sec3'}`)
            //window.scrollTo(0,routeName.current.offsetTop-80)
        }
       }else{
        setTabKey(`${tabId+1}`)
        router.push({
            pathname:'aboutUs',
            query:{tabKey:`${tabId+1}`}
        })
       }
        
        
        
    }
  return (
    <div className={styles.footerElements}>
        <h5>{title}</h5>
        <ul className={styles.footerItems}>
        {items.map((item, index) => (
          <li onClick={()=>onMenuClick(index)} key={index}>
            <a>
            {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FooterElements