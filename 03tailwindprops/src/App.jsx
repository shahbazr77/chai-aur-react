import { useState } from 'react'
import './App.css'
import Card from './components/Card.jsx';

function App() {
  const [count, setCount] = useState(0);

  let myObj ={
    user : "shahbaz",
    age : 20,
    city : "Lahore"
  }

  let myObj2 ={
    user : "Waqas Object",
    age : 20,
    city : "Islamabad"
  }

  return (
   <> 
    <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
    Tailwind Test
  </h1>
  
  <Card userName="Shahbaz Ahmad" buttonText="Clicke me666" someObj={myObj}/>
  <Card userName="Waqas Ahmad" buttonText="Vist me" someObj={myObj2}/>

  </>
    
  )
}

export default App
