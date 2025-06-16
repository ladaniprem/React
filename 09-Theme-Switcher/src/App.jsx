import { useState, useEffect } from 'react';
import './App.css'
import Card from './Components/Card'
import ThemeBtn from './Components/ThemeBtn'
import { ThemeProvider } from './Contexts/Theme'
function App() {
 const [themeMode, setThemeMode] = useState("dark");

 const LightTheme = () => {
  setThemeMode("light");
 }

 const darkTheme = () => {
  setThemeMode("dark");
 }

 // actual change in theme 

 useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(themeMode);

 }, [themeMode])
 

  return (
    <ThemeProvider value={{themeMode, LightTheme, darkTheme}}>
      <h1 className='p-4 bg-gray-700 text-yellow-500'>Theme Switcher</h1>
      <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
      <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
        {/* Themebutton */}
        <ThemeBtn />
      </div>
      <div className="w-full max-w-sm mx-auto">
        {/* card */}
         < Card />
      </div>
      </div>
      </div>
      
    </ThemeProvider>
  )
}

export default App
