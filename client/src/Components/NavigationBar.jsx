import React from "react"
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className = 'NavBar'>

                <LinkHTMLAttributes className = 'NavBar-item' to = '/home'>Homepage</LinkHTMLAttributes>
                <LinkHTMLAttributes className = 'NavBar-item' to = '/home'>Register</LinkHTMLAttributes>
                <LinkHTMLAttributes className = 'NavBar-item' to = '/home'>Login</LinkHTMLAttributes>
                <LinkHTMLAttributes className = 'NavBar-item' to = '/home'>Classes</LinkHTMLAttributes>
                <LinkHTMLAttributes className = 'NavBar-item' to = '/home'>Group Events</LinkHTMLAttributes>

        </div>
    )

}
export default NavBar