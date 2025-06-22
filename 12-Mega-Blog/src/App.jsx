import './App.css'
import { useState,useEffect } from 'react';
import  { useDispatch } from 'react-redux';
import  authServiceInstance from './appwrite/auth';
import {login,logout} from './features/authSlice';
function App() {
  
   const [loading, setLoading] = useState(true);
   const dispatch = useDispatch()
  //  console.log(import.meta.env.REACT_APP_APPWRITE_URL);
   // typescript me sometime so error of the not end of the ! mark in env file.


    useEffect(() => {
      authServiceInstance.getCurrentUser().then((userData) => {
       if (userData) {
        dispatch(login({
          userData: userData,
        }))
       } else {
          dispatch(logout());
       }
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        dispatch(logout());
      })
      // Finally block to set loading to false
      // This ensures that loading state is updated regardless of success or failure
      // This is useful for showing a loading spinner or similar UI element
      .finally(() => {
        setLoading(false);
      })
    }, [dispatch]);
    
  return !loading ? (
    <div className='min-h-sc'>Mega- Blog</div>
  ) : null; 
}

export default App
