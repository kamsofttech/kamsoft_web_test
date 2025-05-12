import { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: 'Guest', loggedIn: false });
  const [sec1, setSec1] = useState('')
  const [sec2, setSec2] = useState('')
  const [sec3, setSec3] = useState('')
  const [sec4, setSec4] = useState('')
  const [sec5, setSec5] = useState('')
  const [display, setDisplay] = useState('none')
  const [tabInfo, setTabInfo] = useState('')
  const [tabKey, setTabKey] = useState('1')
  const [topSecRef,setTopSecRef]= useState('')
  return (
    <UserContext.Provider 
    value={{ 
      user, 
      setUser,
      sec1,setSec1,
      sec2,setSec2,
      sec3,setSec3,
      sec4,setSec4,
      sec5, setSec5,
      display, setDisplay,
      tabInfo, setTabInfo,
      tabKey, setTabKey,
      topSecRef,setTopSecRef
      }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
