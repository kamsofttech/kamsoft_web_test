import React from 'react';
import styles from "../button/MoodOptions.module.css"
import { Button } from 'react-bootstrap';
const getMoodOptions = (actionProvider) =>{

  return [

    {
      text: 'Village',
      handler: () => actionProvider.AboutUs(),
      id: 1,
    },
    {
      text: 'Panchayat Members',
      handler: () => actionProvider.getJokes(),
      id: 2,
    },
    {
      text: 'Message from Sarpanch',
      handler: () => actionProvider.handleGoodMood(),
      id: 3,
    },
    {
      text: 'Tenure of Sarpanch',
      handler: () => actionProvider.getJokes(),
      id: 4,
    },
    {
      text: 'V.P. Obligations',
      handler: () => actionProvider.getJokes(),
      id: 5,
    },
    {
      text: 'Taxes/Fees',
      handler: () => actionProvider.getJokes(),
      id: 6,
    },
    {
      text: 'Powers/Duties of Officers',
      handler: () => actionProvider.getJokes(),
      id: 7,
    },
    {
      text: 'Panchayat staff',
      handler: () => actionProvider.getJokes(),
      id: 8,
    },
    {
      text: 'Projects',
      handler: () => actionProvider.getJokes(),
      id: 9,
    },
  ];

}



function AboutUsOptions({actionProvider}) {

     const option = getMoodOptions(actionProvider)
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
  );
}

export default AboutUsOptions;
