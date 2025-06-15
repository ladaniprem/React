import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
//import { jsx as _jsx } from 'react/jsx-runtime'

function MyApp(){
  return(
    <div>
      <h1>custom App</h1>
    </div>
  )
} 
// Note : React elements are plain objects, not functions. directly access nahi kar sakhte kuki requriment honi chiye
// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

 const anotheUser = " Learn react with prem";
// const anotherElement =(
//   <a href='https://google.com' target='_blank'>visit google</a>
// )

const ReactElement = React.createElement(
  'a', // first parameter is tag
  {href: 'https://google.com', target: '_blank'},// second parameter is object of attributes
  'click me to visit google',anotheUser // third parameter is children or text
)

// function call hai MyApp() output same milta but practice sahi nahi hai

// createRoot(document.getElementById('root')).render(
  
//     MyApp(),
//     {/* <MyApp /> */}
    
// )

createRoot(document.getElementById('root')).render(

     <StrictMode>
  {/* <MyApp />  */}
   {/* {anotherElement} */}
  {ReactElement}
   {/* <App /> */}
    </StrictMode>,
)

// their use the bundler to behind the scene work(syntax coverted etc)it like babel,vite etc.