// import React from 'react';

// const MessageParser = ({ children, actions }) => {
//   const parse = (message) => {
//     if(message.includes('hello')) {
//       console.log('hi');
//       actions.handleHello();
//     }
//     if(message.includes('dog')) {
//       console.log('hi');
//       actions.giveDogpic();
//     }
    
//   };

//   return (
//     <div>
//       {React.Children.map(children, (child) => {
//         return React.cloneElement(child, {
//           parse: parse,
//           actions,
//         });
//       })}
//     </div>
//   );
// };

// export default MessageParser;


class MessageParser {

  constructor(actionProvider){
    this.actionProvider = actionProvider;
  }
  

  parse(message)
  {
    this.actionProvider.greet();
  }
}




export default MessageParser;