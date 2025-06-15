import { useState } from 'react'
import './App.css'

function App() {
const [color,setColor] = useState("olive");
//In React, the useState hook initializes the color state with "olive". 
// When the page refreshes, the state resets to its initial value, which is "olive".
// If you want the color to persist even after refresh, you could store it in localStorage like this.

return( 
  <>
    <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
    <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-black px-3 py-2 rounded-xl">
    <button onClick={() => setColor("red")} className='outline-none px-4 py-1 rounded-full shadow-lg' style={{backgroundColor:"red"}}>Red</button>
    <button onClick={() => setColor("green")} className='outline-none px-4 py-1 rounded-full shadow-lg' style={{backgroundColor:"green"}}>Green</button>
    <button onClick={() => setColor("blue")} className='outline-none px-4 py-1 rounded-full shadow-lg' style={{backgroundColor:"blue"}}>Blue</button>
    <button onClick={() => setColor("yellow")} className='outline-none px-4 py-1 rounded-full shadow-lg' style={{backgroundColor:"yellow"}}>Yellow</button>
    <button onClick={() => setColor("cyan")} className='outline-none px-4 py-1 rounded-full shadow-lg' style={{backgroundColor:"cyan"}}>Cyan</button>
    <button onClick={() => setColor("pink")} className='outline-none px-4 py-1 rounded-full shadow-lg' style={{backgroundColor:"pink"}}>Pink</button>
    <button onClick={() => setColor("orange")} className='outline-none px-4 py-1 rounded-full shadow-lg' style={{backgroundColor:"orange"}}>Orange</button>
    <button onClick={() => setColor("purple")} className='outline-none px-4 py-1 rounded-full shadow-lg' style={{backgroundColor:"purple"}}>Purple</button>
    </div>
    </div>
   </div>
  </>
  )}

export default App
