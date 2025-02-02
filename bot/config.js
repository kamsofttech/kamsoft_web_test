
// import DogPicture from '@/components/chatbot/dogPictureApi/DogPicture';
import { createChatBotMessage } from 'react-chatbot-kit';
import ButtonWidget from '../components/chatbot/button/ButtonWidget';
import MoodOptions from '../components/chatbot/button/MoodOptions';
import AboutUsOptions from '../components/chatbot/MenuItems/AboutUsOptions';
import CustomHeaderComponent from '../components/ChatbotComponent/CustomHeaderComponent';
import OptionButton from '../components/chatbot/button/OptionButton';
import CustomDrawer from '../components/chatbot/Drawer/CustomDrawer';
import { Footer } from 'antd/lib/layout/layout';
import PlusButton from '../components/chatbot/button/PlusButton';
import CombinedHeader from '../components/chatbot/MultipleHeader/CombinedHeader';
import SubmenuOptions from '../components/chatbot/submenus/SubmenuOptions';

const botName = 'HELPDESK';

const getMoodOptions = (actionProvider) =>{

  return [

    {
      text: 'About Us',
      handler: () => actionProvider.AboutUs(),
      id: 1,
    },
    {
      text: 'Committees',
      handler: () => actionProvider.getJokes(),
      id: 2,
    },
    {
      text: 'Certificates',
      handler: () => actionProvider.handleGoodMood(),
      id: 3,
    },
    {
      text: 'NOCs',
      handler: () => actionProvider.getJokes(),
      id: 4,
    },
    {
      text: 'Forms/Downloads',
      handler: () => actionProvider.getJokes(),
      id: 5,
    },
    {
      text: 'Media Links',
      handler: () => actionProvider.getJokes(),
      id: 6,
    },
    {
      text: 'Gallery',
      handler: () => actionProvider.getJokes(),
      id: 7,
    },
    {
      text: 'Reporting',
      handler: () => actionProvider.getJokes(),
      id: 8,
    },
  ];

}






const config = ()=> {
  return{
  initialMessages: [createChatBotMessage(`Welcome! Choose your option`,
    {
      widget: 'buttonWidget',
    }
  ),
],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: '#376B7E',
    },
    chatButton: {
      // backgroundColor: '#5ccc9d',
    },

  },
  customComponents: {
    // header: () => <CustomHeaderComponent />,
    // header: (props) => <PlusButton actionProvider={props.actionProvider} /> //Addbutton to footer,
     header: (props) => <CombinedHeader actionProvider = {props} />
  },
  widgets: [
    {
      widgetName: 'buttonWidget',
      widgetFunc: ({actionProvider}) => <ButtonWidget actionProvider = {actionProvider}/>,
    },
    {
      widgetName: 'getJoke',
      widgetFunc: ({actionProvider}) => <ButtonWidget actionProvider = {actionProvider}/>
    },
    {
      widgetName: 'MoodOptions',
      widgetFunc: ({actionProvider}) => <MoodOptions actionProvider={actionProvider} 
      
      options = {getMoodOptions}
      />
      
    },
    {
      widgetName: 'AboutUsOptions',
      widgetFunc: ({actionProvider}) => <AboutUsOptions actionProvider={actionProvider} 
      
      // options = {getMoodOptions}
      />
      
    },
    {
      widgetName: 'OptionButton',
      widgetFunc: ({actionProvider}) => <OptionButton actionProvider={actionProvider} 
      
      // options = {getMoodOptions}
      />
      
    },
  //   {
  //     widgetName: "drawerWidget",
  //     widgetFunc: () => <CustomDrawer  openDrawer= {true} closeDrawer={true}  data={"hello world"}/>,
  //     // mapStateToProps: ["drawerWidget"],
  // },



  
    {
      widgetName: "submenuOptions",
      widgetFunc: (data) => <SubmenuOptions data={data} />
    },

  ],
}
};

export default config;

