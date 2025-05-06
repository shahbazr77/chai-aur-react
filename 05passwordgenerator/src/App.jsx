import { useState,useCallback,useEffect,useRef } from 'react'

function App() {
  
  const [length, setLength] = useState(8);
  const [numberAllowed,setNumberAllowed] = useState(false);
  const [charAllowed,setCharAllowed] = useState(false);
  const [password,setPassword] = useState('');
  const [bgcolor,setBgcolor] = useState('blue');
  //userRef
  const passwordRef = useRef(null);



const passwordGenerator = useCallback(() => {
  let pass = '';
  let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  if(numberAllowed) str += '0123456789';
  if(charAllowed) str += '!@#$%^&*()_+-=[]{}|;:,.<>?~';

  for(let i=1;i <= length;i++){
    let rand = Math.random();
    // console.log('i',i);
    // console.log('str.length',str.length);
    // console.log('Math.random()',rand);
    // console.log('Math.random() * str.length + 1====',rand * str.length + 1);
    // console.log('Math.random() * str.length + 1 fllor====',Math.floor(rand * str.length + 1));
    // console.log(str.charAt(1));
     let char = Math.floor(rand * str.length + 1);
     pass += str.charAt(char);

  }
  
  setPassword(pass);
}, [length, numberAllowed, charAllowed]);

useEffect(() =>{
  passwordGenerator();
},[length,numberAllowed,charAllowed,passwordGenerator])

useEffect(() =>{
  setBgcolor('blue');
},[password])

const copyPasswordToClipboard = useCallback(() => {
 // window.navigator.clipboard.writeText(password);
  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange(0,50);
  window.navigator.clipboard.writeText(password);
  setBgcolor('gray');
},[password])

  return (
    <>
     <div className='w-full max-w-[700px] mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
     <h1 className='text-4xl font-bold text-center text-white my-3'>Password Generator</h1>
       <div className="flex shadow rounded-lg overglow-hidden mb-4">
        <input type='text' value={password} className='bg-white outline-none w-full py-1 px-3' placeholder='Password' readOnly ref={passwordRef}/>
        <button className='outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0'  onClickCapture={copyPasswordToClipboard} style={{backgroundColor:bgcolor}}>Copy</button>
       </div>
       <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type='range' min={6} max={100} value={length} className='cursor-pointer' onChange={(e) => {setLength(e.target.value)}}/>
          <label>Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type='checkbox' defaultChecked={numberAllowed} id='numberInput' onChange={() => {setNumberAllowed((prev) => !prev)}}/>
          <label htmlFor='numberInput'>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type='checkbox' defaultChecked={charAllowed} id='charInput' onChange={() => {setCharAllowed((prev) => !prev)}}/>
          <label htmlFor='charInput'>Characters</label>
        </div>
        </div>


         <button className='w-full  text-white px-3 py-2 rounded-lg bg-amber-600'>Test Button</button>


      </div>      
    
    </>
  )
}

export default App
