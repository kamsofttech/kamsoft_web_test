import React from 'react';
import { setUserData } from '../redux/menu/menuAction';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectUserData } from '../redux/menu/menuSelector';
import { setMyData } from '../redux/menu/menuAction';
import { selectMyData } from '../redux/menu/menuSelector';
const redux = ({setUserData,userData,setMyData,myData}) => {
  setUserData('Laxamn')
console.log('useData',userData)
   setMyData('Viraj')
console.log('myData',myData)
  return (
    <div>
      
    </div>
  );
}
//for storing
const mapDispatchToProps=(dispatch)=>({
  setUserData:data=>dispatch(setUserData(data)),
  setMyData: data => dispatch(setMyData(data))
})
//for fetching
const mapStateToProps=createStructuredSelector({
  userData:selectUserData,
  myData: selectMyData
})
export default  connect(mapStateToProps,mapDispatchToProps) (redux);
