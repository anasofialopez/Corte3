import React from 'react'
import { Link,NavLink,Route,Routes } from 'react-router-dom'
import Logito from '../assets/Img/Logito.png'

export const NavComponent = () => {
  return (
    <div>
        <div className='Nav'>
            <img src={Logito}/>
            <Link className="Links" to="/login">Login</Link>
            <Link className="Links" to="/">Home</Link>
        </div>
    </div>
  )
}
