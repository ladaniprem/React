// import { useState } from 'react' 
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  // let myObj = {
  //   username:"prem",
  //   age:20
  // }
  // let myArr = [1,2,3,4]
  return (
    <> 
    <div>
      <h1 className='text-3xl font-bold text-center mb-8 bg-green-400 p-4 rounded-lg text-black shadow-md'>Tailwind Test</h1>  
      < Card channel = "prem_By_Edit" UserName = "prem Ladani" btnText = "click me" /> 
      <br />
      {/* < Card channel= "Edit_by_Prem" someObj = {myObj} manyObj = {myArr} />  */}
            < Card channel= "Edit_by_Prem" UserName = "Ladani prem" btnText = "visit me" />
      </div>
    </>
  )
}

export default App
