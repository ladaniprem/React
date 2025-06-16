import { useState,useContext } from 'react'
import { UserContext } from '../Context/UserContext' 
function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {setUser} = useContext(UserContext);
    const handleSubmit = (e) => {
      e.preventDefault();
      setUser({
         username : username,
         password : password
      })
    }
  return (
    <div className="login-container">
      <h2>Login</h2>
      <input type='text' placeholder='username' value={username} onChange={(e)=>setUsername(e.target.value)}/>
      <input type='password' placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
