import React from 'react';
import { NavLink, Link } from "react-router-dom"
import logo from '../assets/book-logo.svg'

export default function Header() {

    return (
        <header>
            <Link className="site-logo" to="/">
                <img src={logo} width={60} alt='logo' /> 
                #<span className='logo-text'>Story</span>AI
            </Link>
            <nav>
                <NavLink className={({ isActive }) => isActive ? "active-link" : null} to="/leaderboard" >Leaderboard</NavLink>
            </nav>
        </header>
    )
}