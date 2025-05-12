import React from 'react'
import styles from './aboutUs.module.css'
import { Container } from 'react-bootstrap'
import { Tabs } from 'antd';
import History from '@/components/history/History';
import ProcessBox from '../processBox/ProcessBox';
import TeamComponent from '../team/TeamComponent';
import OurValuesComponent from './ourValues/OurValuesComponent';
import FaqComponent from './faq/FaqComponent';
import CareersComponent from './careers/CareersComponent';
import ContactNewComponent from './contact/ContactNewComponent';
import { useUserContext } from '../context/UserContext';
import { useRouter } from 'next/router';
const AbouTabComponent = () => {
  const router=useRouter()
  const {setTabInfo,tabKey, setTabKey}=useUserContext();
  //const[tabKey,setTabKey]=React.useState('1')
  React.useEffect(()=>{
    //setTabKey(router.query.tabKey)
    const [filterData]=items.filter(k=>k.key==tabKey).map(d=>d)
        setTabInfo({
          title:filterData?.title,
          desc:filterData?.desc
        })
    //console.log('filterData',filterData)
    
  },[tabKey])
    const onChange = key => {
        console.log(key);
        setTabKey(key)
        // const [filterData]=items.filter(k=>k.key==key).map(d=>d)
        // setTabInfo({
        //   title:filterData?.title,
        //   desc:filterData?.desc
        // })
        //router.push(`/aboutUs?tabKey=${key}`, undefined, { shallow: true })
        
      };
    const items = [
        {
          key: '1',
          label: <div className={styles.tabTitle}><a>About Us</a></div>,
          title:'About Kamsoft',
          desc:'Our Expertise. Know more about what we do',
          children:<History/>,
        },
        {
          key: '2',
          label: <div className={styles.tabTitle}><a>Careers</a></div>,
          title:'Careers',
          desc:'Give yourself the power of responsibility. Remind yourself the only thing stopping you is yourself.',
          children:<CareersComponent/>,
        },
        {
          key: '3',
          label: <div className={styles.tabTitle}><a>How we work</a></div>,
          title:'How we work',
          desc:'Make a list of your achievements toward your long-term goal and remind yourself that intentions don’t count, only action’s.',
          children:<ProcessBox/>,
        },
        
        {
          key: '4',
          label: <div className={styles.tabTitle}><a>Our team</a></div>,
          title:'Meet Our Team',
          desc:'Let success motivate you. Find a picture of what epitomizes success to you and then pull it out when you are in need of motivation.',
          children:<TeamComponent/>,
        },
        {
            key: '5',
            label: <div className={styles.tabTitle}><a>Our values</a></div>,
            title:'Our Values',
            desc:'For those of you who are serious about having more, doing more, giving more and being more, success is achievable with some understanding',
            children:<OurValuesComponent/>,
          },
          {
            key: '6',
            label: <div className={styles.tabTitle}><a>FAQ</a></div>,
            title:'Frequently Asked Questions',
            desc:'Positive pleasure-oriented goals are much more powerful motivators than negative fear-based ones.',
            children: <FaqComponent/>,
          },
          {
            key: '7',
            label: <div className={styles.tabTitle}><a>Contact us</a></div>,
            title:'Contact us',
            desc:'Drop us a line! We’ll set up a time to chat over the phone or in-person to know more about your business needs',
            children:<ContactNewComponent/>,
          },
      ];
  return (
    <section className={styles.ab_sec}>
     
            <div className={styles.ab_tab_box}>
            <Tabs indicator={{size:0}} activeKey={tabKey} className={styles.abTab} centered defaultActiveKey={tabKey} items={items} onChange={onChange} />
            </div>
        
    </section>
  )
}

export default AbouTabComponent