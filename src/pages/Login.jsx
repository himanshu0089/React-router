import React from 'react'
import { useAuth } from '../components/UseAuthContext';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Login() {
  const {isLoggedIn,setIsLoggedIn}=useAuth();
  const navigate=useNavigate();
  const location=useLocation()
  const loginStatus=()=>{
    setIsLoggedIn(isLoggedIn=>!isLoggedIn);
    navigate(location.state.from.pathname, {replace:true})
  }
  return (
    <div>Did you get the key ?
       <button onClick={() => loginStatus() }>
          {isLoggedIn ? "Logout" : "Login"}
        </button>
    </div>
    
  )
}