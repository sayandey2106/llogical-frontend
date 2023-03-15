import React from 'react'
import { NavLink ,useNavigate } from 'react-router-dom'
export default function LoginBtn() {
    const navigate = useNavigate()
  return (

      <div>
    {
        
        !localStorage.getItem('auth_token') ?
        <NavLink to="/login">
        <button href="#" class="p-2 m-1 btn btn-sm btn-primary" >Login <i class="fa-solid fa-right-to-bracket mx-2"></i></button></NavLink>
:  <button href="#" class="p-2 m-1 btn btn-sm" onClick={()=>{localStorage.removeItem('auth_token') 
navigate('/')} } ><i class="fa-solid fa-right-from-bracket mx-2"></i>Logout</button>
    }

    </div>
  )
}
