import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


export default function Protected({children,authentication=true}) {

  const navigate =  useNavigate();
  const [loader,setLoader] = useState(true);
  const authStatus = useSelector((state)=> state.auth.status)

   useEffect(() => {
       // true && false !==true => true && true
      //  let authvalue = authStatus=== true ? true : false;

        if (authentication && authStatus !== authentication ) {
          navigate('/login');
        }
        // false && true !== true => false && false
        else if (!authentication && authStatus !== authentication) {
         navigate('/')
        }
        setLoader(false);

        // easy simple way
        //  if(authStatus === true) {
        //   navigate('/')
        //  }
        //  else if(authStatus === false){
        //   navigate('/login')
        //  }
        // else {
        //   setLoader(false);
        // }
   },[authStatus, navigate,authentication])

  return  (
    <>
      {loader ? <div className='loader'>Loading...</div> : children}
    </>
  )
}