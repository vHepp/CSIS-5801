import React from 'react'
import { NavLink } from 'react-router-dom'
import { useEffect, useContext } from 'react'
import { userContext } from '../contexts/userContext'
import '../Styles/NavBar.css'

const NavBar = () => {

    const {state, dispatch} = useContext(userContext);
    useEffect(() => {
        if (localStorage.getItem('user')) {
            const user = JSON.parse(localStorage.getItem('user'))
            dispatch({ type: "USER", payload: user })
        }
    }, [dispatch]);
	return (
		<div className='navbar'>

			<NavLink className='navbar-item' to='/'>Home</NavLink>
            {state ? ('') : (
               <>
                    <NavLink className='navbar-item' to='/login'>Login</NavLink>
                    <NavLink className='navbar-item' to='/register'>Register</NavLink>
                </>
                
            ) }
			
			<NavLink className='navbar-item' to='/profile'>Profile</NavLink>
			<NavLink className='navbar-item' to='/invite'>InviteTest</NavLink>

			{/* to be implemented */}
			{/* <NavLink className='navbar-item' to='/'>Profile</NavLink> */}

		</div>
	)
}

export default NavBar