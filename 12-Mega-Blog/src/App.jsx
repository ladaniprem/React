import './App.css'
import { useState,useEffect } from 'react';
import  { useDispatch } from 'react-redux';
import  authServiceInstance from './appwrite/auth';
import {login,logout} from './features/authSlice';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
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
    }, []);
    
  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gradient-to-br from-indigo-900 via-indigo-700 to-indigo-500 text-white'>
      <h1 className='w-full text-center text-3xl font-bold'>Mega-Blog</h1>
      <div className='w-full block'>
      <Header />
      <main>
       {/* TODO: <Outlet /> */}
      </main>
      <Footer />
      </div>
    </div>
  ) : null; 
}

export default App
