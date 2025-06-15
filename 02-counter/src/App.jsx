import { useState } from 'react';
import './App.css'

function App() {

  // const [ counter,setCounter] = useState(15); // this is the hook in react so that we can use the state in react.
    let [ counter, setCounter] = useState(0); // setcounter is a function that allows you to update the state and their premCounter is vaild any name to be use it.
  // useState is a hook that allows you to add state to functional components.
 // when the use the const their show the content values not updating the values in the react.
  // let counter =  5; 
  // const increment = ()=>{
    // counter = counter + 1;
    // counter = counter + 1; // this is not the correct way to update the state in react.
    // setCounter(counter);
    // if (counter < 20) {
    //   setCounter(counter + 1);
    // }
    // console.log("increment called" + counter);

    // Interview Qustion and solution 
  // Qustion ka Output 
      //  const increment = ()=> {
      //     setCounter(counter + 1);
      //     setCounter(counter + 1);
      //     setCounter(counter + 1);
      //     setCounter(counter + 1);
      //  }

      // solution 
      const increment = ()=> {
          setCounter((prevCounter) => prevCounter + 1);
          setCounter((prevCounter) => prevCounter + 1);
          setCounter((prevCounter) => prevCounter + 1);
          setCounter((prevCounter) => prevCounter + 1);
       }
  const Decrement = ()=>{
    if(counter <= 0){
      setCounter(0);
    } else {
      setCounter(counter - 1);
    }
  }
  //   console.log("decrement called"+ counter);
    // counter = counter - 1;
    // counter = counter - 1; // this is not the correct way to update the state in react.
    // setCounter(counter);
  //   setCounter(counter-1);  
  //   if(counter<=0){
  //     //counter = 0;
  //     setCounter(counter);
  //   }
  //   else{
  //     counter = 0;
  //   }
  // } 
     return (
   <>
     <h1>Ladani prem</h1>
     <h2>counter value : {counter}</h2>

     <button onClick={increment}>increment{counter}</button>
     <br/>
     <button onClick={Decrement}>decrement{counter}</button>
     <p>footer:{counter}</p>
     </>
   ) 
}

export default App;

//problem :- UI udates React can handles it so that at one time only function is updates it.
//their provide the {counter} values thier show multiplay function so their should be the trouble .
// //solution :- we can use the hooks in react so that is the importance of the hook reqirement .