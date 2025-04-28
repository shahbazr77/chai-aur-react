import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx';

function App() {
  const [count, setCount] = useState(0);

  let myObj ={
    username : "shahbaz",
    age : 20,
    city : "karachi"
  }

  return (
   <> 
    <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
    Tailwind Test
  </h1>
  
  <Card userName="Shahbaz Ahmad" buttonText="Clicke me" someObj={myObj}/>
  <Card userName="Waqas Ahmad" buttonText="Vist me"/>

  </>
    
  )
}

export default App
