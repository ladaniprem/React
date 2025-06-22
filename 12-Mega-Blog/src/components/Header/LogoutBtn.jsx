import { useDispatch } from 'react-redux'
import authServiceInstance from '../../appwrite/config'
import {  logout } from '../../features/authSlice'

function LogoutBtn() {
  const dispatch = useDispatch(); 
  const logoutHandler =  () => {
    try {
        authServiceInstance.logout().then(() => {
          dispatch(logout());
          console.log("Logout successful");
         });
    
    } catch (error) {
      console.error("Logout failed:", error);
      
    }
  }
  return (
    <div>
      <button
        onClick={logoutHandler}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-transform duration-200 transform hover:scale-105 shadow-md"
      >
        Logout
      </button>
    </div>
  )
}

export default LogoutBtn
