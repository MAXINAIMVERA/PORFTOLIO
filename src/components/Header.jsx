import React from 'react';
import '../styles/Header.css'
import logo from '../assets/logo.png'

const Header = () => {
    
    return (
        <div id='container-header'>
            <div>
                <img src={logo} alt="logo" id='logo'/>
            </div>
            <nav className='stroke'>
                <ul>
                    <li><a href="http://localhost:3000">Home</a></li>
                    <li><a href="http://localhost:3000">About Me</a></li>
                    <li><a href="http://localhost:3000">Projects</a></li>
                    <li><a href="http://localhost:3000">Contact</a></li>
                </ul>
            </nav>
        </div>
        
    )
}

export default Header;