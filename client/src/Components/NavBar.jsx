import React from 'react'
import { NavLink } from 'react-router-dom'

import '../Styles/NavBar.css'

const NavBar = () => {
	return (
		<div className='navbar'>

			<NavLink className='navbar-item' to='/'>Home</NavLink>
			<NavLink className='navbar-item' to='/login'>Login</NavLink>

			{/* to be implemented */}
			<NavLink className='navbar-item' to='/'>Register</NavLink>
			<NavLink className='navbar-item' to='/'>Profile</NavLink>

		</div>
	)
}

export default NavBar