// updated the code of the themes and colors 
import './App.css'
import { useState,useCallback,useEffect} from 'react';
function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');
  const [copied, setCopied] = useState(false);

  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if(numberAllowed) {
      str += '0123456789';
    }
    if(charAllowed) {
      str += '!@#$%^&*()_+[]{}|;:,.<>?';
    }

    for(let i=1; i<=length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
    setCopied(false);
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const [theme, setTheme] = useState('blue'); // Default theme
  
  const themes = {
    blue: {
      gradient: 'from-blue-400 to-purple-600',
      bgGradient: 'from-gray-900 to-gray-800',
      textGradient: 'from-cyan-300 to-blue-300',
      buttonGradient: 'from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500',
      shadowGlow: 'shadow-blue-500/20'
    },
    green: {
      gradient: 'from-green-400 to-teal-600',
      bgGradient: 'from-gray-900 to-gray-800',
      textGradient: 'from-green-300 to-teal-300',
      buttonGradient: 'from-green-500 to-teal-600 hover:from-teal-600 hover:to-green-500',
      shadowGlow: 'shadow-green-500/20'
    },
    red: {
      gradient: 'from-red-400 to-orange-600',
      bgGradient: 'from-gray-900 to-gray-800',
      textGradient: 'from-red-300 to-orange-300',
      buttonGradient: 'from-red-500 to-orange-600 hover:from-orange-600 hover:to-red-500',
      shadowGlow: 'shadow-red-500/20'
    },
    purple: {
      gradient: 'from-purple-400 to-pink-600',
      bgGradient: 'from-gray-900 to-gray-800',
      textGradient: 'from-purple-300 to-pink-300',
      buttonGradient: 'from-purple-500 to-pink-600 hover:from-pink-600 hover:to-purple-500',
      shadowGlow: 'shadow-purple-500/20'
    }
  };

  return (
    <div className={`min-h-screen bg-gradient-to-b ${themes[theme].bgGradient} py-8 px-4 animate-gradient-x`}>
      <div className="w-full max-w-md mx-auto transition-all duration-500 hover:scale-105 animate-fade-in">
        <h1 className={`text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r ${themes[theme].gradient} mb-8 animate-bounce-slow`}>
          Password Generator
        </h1>
        
        <div className={`bg-gray-800 rounded-xl shadow-2xl p-6 border border-gray-700 transition-all duration-300 hover:${themes[theme].shadowGlow} animate-slide-up`}>
          <div className="flex shadow-lg rounded-lg overflow-hidden mb-6 transform transition duration-300 hover:translate-y-[-4px] hover:shadow-glow">
            <input 
              type="text" 
              value={password} 
              className="outline-none w-full py-3 px-4 bg-gray-700 text-white font-mono text-lg animate-shimmer"
              style={{
                background: 'linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.85) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 0 5px rgba(255,255,255,0.5)',
                backgroundSize: '200% 100%',
                backgroundImage: 'linear-gradient(90deg, #ff5e7d, #ff9671, #ffc75f, #f9f871, #90ee90, #0099ff, #a78bfa, #ff8bce)',
              }}
              placeholder="Password" 
              readOnly 
            />
            <button 
              onClick={copyToClipboard}
              className={`outline-none px-4 py-0.5 shrink-0 transition-all duration-300 transform active:scale-95 ${
                copied ? 'bg-green-600 animate-pulse' : `bg-gradient-to-r ${themes[theme].buttonGradient} animate-pulse-slow`
              } text-white font-medium`}
            >
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
          
          <div className="space-y-4 animate-fade-in-delay">
            <div className="flex flex-col transition-all duration-300 hover:scale-[1.02]">
              <label className={`text-transparent bg-clip-text bg-gradient-to-r ${themes[theme].textGradient} mb-2 animate-text-glow`}>Length: {length}</label>
              <input 
                type="range"
                min={6}
                max={100}
                value={length}
                className={`cursor-pointer accent-${theme === 'blue' ? 'blue' : theme === 'green' ? 'green' : theme === 'red' ? 'red' : 'purple'}-600 transition-all duration-300 hover:animate-pulse`}
                onChange={(event) => {setLength(event.target.value)}}
              />
            </div>
            
            <div className="flex space-x-6 animate-slide-in-right">
              <div className="flex items-center gap-x-2 transition-transform duration-300 hover:translate-x-1 hover:text-blue-400">
                <input 
                  type="checkbox"
                  checked={numberAllowed}
                  id="numberAllowed"
                  onChange={() => {setNumberAllowed((prev) => !prev)}}
                  className={`w-4 h-4 accent-${theme === 'blue' ? 'blue' : theme === 'green' ? 'green' : theme === 'red' ? 'red' : 'purple'}-600 animate-pulse-slow`} 
                />
                <label htmlFor="numberAllowed" className={`text-transparent bg-clip-text bg-gradient-to-r ${themes[theme].textGradient} transition-all duration-300`}>Numbers</label>
              </div>
              
              <div className="flex items-center gap-x-2 transition-transform duration-300 hover:translate-x-1 hover:text-blue-400">
                <input 
                  type="checkbox"
                  checked={charAllowed}
                  id="characterInput"
                  onChange={() => {setCharAllowed((prev) => !prev)}}
                  className={`w-4 h-4 accent-${theme === 'blue' ? 'blue' : theme === 'green' ? 'green' : theme === 'red' ? 'red' : 'purple'}-600 animate-pulse-slow`} 
                />
                <label htmlFor="characterInput" className={`text-transparent bg-clip-text bg-gradient-to-r ${themes[theme].textGradient} transition-all duration-300`}>Characters</label>
              </div>
            </div>
          </div>
          
          {/* Theme switcher */}
          <div className="mt-6 pt-4 border-t border-gray-700 animate-fade-in-delay-longer">
            <p className={`text-transparent bg-clip-text bg-gradient-to-r ${themes[theme].textGradient} mb-3 text-sm font-medium`}>Change Theme:</p>
            <div className="flex justify-center space-x-3">
              <button 
                onClick={() => setTheme('blue')}
                className={`w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-600 transition-transform duration-300 ${theme === 'blue' ? 'ring-2 ring-white scale-110' : 'opacity-70 hover:opacity-100'}`}
                aria-label="Blue theme"
              />
              <button 
                onClick={() => setTheme('green')}
                className={`w-8 h-8 rounded-full bg-gradient-to-r from-green-400 to-teal-600 transition-transform duration-300 ${theme === 'green' ? 'ring-2 ring-white scale-110' : 'opacity-70 hover:opacity-100'}`}
                aria-label="Green theme"
              />
              <button 
                onClick={() => setTheme('red')}
                className={`w-8 h-8 rounded-full bg-gradient-to-r from-red-400 to-orange-600 transition-transform duration-300 ${theme === 'red' ? 'ring-2 ring-white scale-110' : 'opacity-70 hover:opacity-100'}`}
                aria-label="Red theme"
              />
              <button 
                onClick={() => setTheme('purple')}
                className={`w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-600 transition-transform duration-300 ${theme === 'purple' ? 'ring-2 ring-white scale-110' : 'opacity-70 hover:opacity-100'}`}
                aria-label="Purple theme"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App

// Note :- useCallback is a React hook that allows you to memoize a function, preventing it from being recreated on every render unless its dependencies change.
// The useCallback hook in React is used to cache a function definition between re-renders, improving performance by preventing unnecessary function recreations. 
// It is particularly useful when passing callbacks to child components that rely on referential equality to avoid unnecessary re-renders.

// Key Features:
// - Memoizes a function so it doesn't get recreated on every render.
// - Optimizes performance when passing functions as props to child components.
// - Works well with React.memo to prevent unnecessary re-renders.