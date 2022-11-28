import React from 'react'
import { NavLink } from 'react-router-dom'
import { useEffect, useContext } from 'react'
import { userContext } from '../contexts/userContext'
import '../Styles/NavBar.css'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


const NavBar = () => {

    const { state, dispatch } = useContext(userContext);
    useEffect(() => {
        if (localStorage.getItem('user')) {
            const user = JSON.parse(localStorage.getItem('user'))
            dispatch({ type: "USER", payload: user })
        }
    }, [dispatch]);

    const deleteUser = () => {
        dispatch({ type: "CLEAR", payload: null })
        localStorage.setItem('user', null);
    }

    return (
        <div className='navbar'>

            {state
                ?
                (
                    <>
                        <NavLink className='navbar-item' to='/home'>Home</NavLink>
                        <NavLink className='navbar-item' to='/profile'>Profile</NavLink>
                        <NavLink className='navbar-item' onClick={() => {
                            deleteUser();
                            toast.success('Logout Successful', {
                                position: toast.POSITION.TOP_RIGHT,

                            });

                        }} to='/login'>Logout</NavLink>
                    </>
                )
                :
                (
                    <>
                        <NavLink className='navbar-item' to='/login'>Login</NavLink>
                        <NavLink className='navbar-item' to='/register'>Register</NavLink>
                    </>

                )}


            {/* to be implemented */}
            {/* <NavLink className='navbar-item' to='/'>Profile</NavLink> */}
            <ToastContainer />
        </div>
    )
}

export default NavBar