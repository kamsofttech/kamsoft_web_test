

// import React from 'react';

// const ActionProvider = ({ createChatBotMessage, setState, children }) => {

//   const handleHello =  () => {
//     const bothello = createChatBotMessage('Hello.Nice to meet you');
  
//   setState((prev) => ({
//     ...prev,
//     messages: [...prev.messages, bothello],
//   }));

//   };
// const giveDogpic = () => {

//   const botMessage = createChatBotMessage('Here is a nice dog picture for you!',
//   {
//     widget: 'dogPicture',
//   }

//   );

//   setState((prev) => ({
//     ...prev,
//     messages: [...prev.messages, botMessage],
// }));



//   };








//   return (
//     <div>
//       {React.Children.map(children, (child) => {
//         return React.cloneElement(child, {
//           actions: {
//             handleHello,
//             giveDogpic,
//           },
//         });
//       })}
//     </div>
//   );
// };

// export default ActionProvide
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setMessageId } from "../redux/ChatBot/chatbotAction";

const intro =
  "I'm a Computer Science student at UCLA and an aspiring software engineer. What do you want to know about me?";
const  AboutUsIntro = "Which option would you like to choose from the AboutUs Page?";


  // const info = [
  //   {
  //     AboutUsIntro : "Which option would you like to choose from the AboutUs Page?",
  //     widget: "AboutUsOptions"
  //   },

  // ]


class ActionProvider {

  constructor(createChatBotMessage, setStateFunc,setPayload) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.setPayload = setPayload
    this.dispatch = useDispatch();
  }

  greet() {

    const greetingMessage = this.createChatBotMessage(
      'AI chat in development...'
    );
    this.UpdateChatbotState(greetingMessage);
  }


  dogPics() {

    const dogMessage = this.createChatBotMessage(
      'display dogs'
    );
    this.UpdateChatbotState(dogMessage); 
  }


   async getJokes(){
    //  useEffect(() => {
    //   const Joke = async () => {
        try{
          const result =  await axios.get("https://v2.jokeapi.dev/joke/Any?type=single");
          console.log(result.data.joke)
          const message = this.createChatBotMessage(
            `Let me tell you a joke: ${result.data.joke}`
            // {
            //   widget: 'jokeOptions',
            // }
          );
          this.UpdateChatbotState(message);
  
        }
        catch(error)
        {
          console.log("error:",error);
        }
      }
     
  // Joke();
  //    },[])
  // const Joke = await (
  //   await fetch('https://v2.jokeapi.dev/joke/Any?type=single')
  // ).json();
  // const message = this.createChatBotMessage(
  //   `Let me tell you a joke: ${Joke.joke}`
  // );
  // this.UpdateChatbotState(message);
  // }

  handleGoodMood() {
    const message = this.createChatBotMessage(intro, 
    );
    this.UpdateChatbotState(message);
  }

 
  AboutUs() {
    const message = this.createChatBotMessage(AboutUsIntro ,
      {
        widget: 'AboutUsOptions'
      }
    );
    this.UpdateChatbotState(message);
  }

  handleOpenDrawer = () => {
    const message = this.createChatBotMessage("Opening drawer...", {
      widget: "drawerWidget",
    });
    this.UpdateChatbotState(message);
  };
  


  handleSubOptions = (items,menuItem) => {
    if(!items || items.length === 0) {
      console.log("No items to display");
      const message = this.createChatBotMessage("No options provided");
      console.log("hello",message);
      this.UpdateChatbotState(message);
      return;
    }
    console.log("Submenu items recieved:", items);
  
    // const menus = menuItem.node.route.link;
  console.log("menuuuu",menuItem.node.label)
    const message = this.createChatBotMessage(`Here are the ${menuItem.node.label} options:`, {
      widget: "submenuOptions",
     payload: { items: items, menu: menuItem },
    });

    console.log("hello",message);
    this.dispatch(setMessageId(message.id));
    this.UpdateChatbotState(message);
  }


  UpdateChatbotState(message){
    console.log( "mw:",message);
    this.setPayload({message})
  this.setState((prevState) => ({
    ...prevState,
    messages:
    // messages: (message.widget === "submenuOptions" || message.widget == null)
    // ? [
    //     ...prevState.messages.filter((msg) => msg.widget !== "submenuOptions"),
    //     message,
    // ] 
    [...prevState.messages, message],
  }));

  }

}

export default ActionProvider;