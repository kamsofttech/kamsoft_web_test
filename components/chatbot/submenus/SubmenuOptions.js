
import React from 'react';
import styles from "./SubmenuOptions.module.css"

import { useRouter } from 'next/router';
import { setTabKey } from '@/redux/menu/menuActions';
import { connect } from 'react-redux';

const SubmenuOptions = ({data,setTabKey}) => {
  const router = useRouter();
  console.log("All submenuItems:", data);
  // const messageId = useSelector((state) => state.
  // messageId.messageId);
// console.log("m",messageId);
const  result = data.payload.items;
const mainMenu = data.payload.menu;
console.log("mmm",mainMenu);
console.log("rrr",result);
// console.log(result && result.filter(c => c.id == messageId));
  if (!data || data.length === 0) {
    return <div>No submenu options available.</div>;
  }
 function goToPage(pathId, catCode, desc,title,uri,iscomplete){
     const tUri=uri.split('/')
     console.log('turi',tUri)
     if (tUri.length<=3) {
        setTabKey(uri)
                router.push({
                    pathname: `/${pathId}/`,
                    query: { catCode: catCode, desc: desc,title:title,uri:uri,iscomplete:iscomplete }
                })
     } else {
        setTabKey('/'+tUri[2]+'/')
                router.push({
                    pathname: `/${pathId}/`,
                    query: { catCode: catCode, desc: desc,title:title,uri:'/'+tUri[2]+'/',iscomplete:iscomplete }
                })
     }
                
 }


  return (
    <div className={styles.container}>
    {
      result.map((c)=> <button onClick={() => goToPage(mainMenu.node.route.link + '/' + c.node.route.link, c.node.route.code, c.node.label, mainMenu.node.label, c.node.uri, c.node.route.iscomplete)} className={styles.button}>{c.node.label}</button>)
    }
    </div>
  );
}
const mapDispatchTopProps=dispatch=>({
  setTabKey:data=>dispatch(setTabKey(data))
}) 

export default connect(null,mapDispatchTopProps) (SubmenuOptions);
