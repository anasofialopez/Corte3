import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { Context } from './Context'

export const Homepage = () => {
  let { isLoggedIn } = useContext(Context);
	const { logout } = useContext(Context);
	const { user } = useContext(Context);
	const navigate = useNavigate();


  console.log(isLoggedIn);
  
	const logOut = () => {
		logout();
		navigate("/login");
	};


  return (
    <>
      <h1>Estas logeado</h1>
      <h2>Tu información</h2>
      <a> {`User: ${user.user}`} </a>
			<a> {`Password: ${user.password}`} </a>
			<button onClick={() => logOut()}> Log out </button>
    </>
  )
}
