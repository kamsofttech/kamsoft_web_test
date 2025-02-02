import { Button } from "react-bootstrap";
import styles from "./MoodOptions.module.css"

// const getMoodOptions = (actionProvider) =>{

//   return [

//     {
//       text: 'Doing great! Tell me about yourself',
//       handler: () => actionProvider.handleGoodMood(),
//       id: 1,
//     },
//     {
//       text: 'Having a bad day...',
//       handler: () => actionProvider.getJokes(),
//       id: 2,
//     },
//   ];

// }

function MoodOptions({actionProvider,options}) {

  
   const option = options(actionProvider);
  console.log(option);
  return (
    <div className= {styles.for_mood}>
      { option.map((options) => (
         <Button className={styles.forButton} key={options.id} onClick={options.handler}>
         {options.text}
       </Button>
      ))

      }
    </div>
  )
}

export default MoodOptions
