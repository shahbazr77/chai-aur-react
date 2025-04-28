import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

     const [custom_counter,setCustom_counter] =useState(1);


  let counter = 15;

  function addValue(){
    // console.log("add Value",Math.random());
   if(custom_counter<20){
    //setCustom_counter(custom_counter+1);
    // // setCustom_counter(custom_counter+1);
    // // setCustom_counter(custom_counter+1);
     setCustom_counter(prevCounter => prevCounter+1);
     setCustom_counter(prevCounter => prevCounter+1);
     setCustom_counter(prevCounter => prevCounter+1);
     
   }else{
    alert("Counter is maxed out");
   }
    

  }
  const removeValue = () =>{
    // console.log("add Value",Math.random());
  if(custom_counter>0){
    setCustom_counter(custom_counter-1);
  }else{
    alert("Counter is mined out");
  }
  }
  return (
    <>
     <h1>Counter Learing</h1>
     <h2>Counter Value:{custom_counter}</h2>
     <button onClick={addValue}>Add Value{custom_counter}</button>
     <br/>
     <button onClick={removeValue}>Remove Value{custom_counter}</button>
     <footer>
      <p>Footer{custom_counter}</p>
     </footer>
    </>
  )
}

export default App
