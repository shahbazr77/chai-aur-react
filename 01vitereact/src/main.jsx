import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// function MyApp(){
//     return(
//         <div>
//             <h1>Custom App | Chai</h1>
//         </div>
//     )
// }

// const reactElement = {
//     type: "a",
//     props: {
//         href: "https://www.google.com/pakistan",
//         target: "_blank"
//     },
//     children: "Click me to visit google"
// }

// const anotherElement = (
//     <a href="https://www.google.com/pakistan" target="_blank">Visit Google</a>
// )


const anotherUser = "shahbaz333";


const reactElementnew  = React.createElement(
    'a',
    {
        href: "https://www.google.com/pakistan",
        target: "_blank",
    },
    'Click me to visit google',
    anotherUser

)

createRoot(document.getElementById('root')).render(

   // anotherElement
  // reactElementnew
//     <MyApp />
//    // MyApp=();



reactElementnew

)
