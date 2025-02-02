import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';



function ButtonWidget({actionProvider}) {
const dispatch = useDispatch();
  console.log(actionProvider);


  function handlefunction() {
    
    dispatch({ type: "OPEN_DRAWER" });
  };
  return (
    <div style={styles.container}>
      <Button style={styles.button}
onClick={() =>
        handlefunction()}>Click me, and I will provide you with all the options.</Button>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // height: '100vh',
  },
  button: {
    padding: '5px 5px',
    fontSize: '16px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};
export default ButtonWidget;
