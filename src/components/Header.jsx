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
                    <li><a href="header">Home</a></li>
                    <li><a href="#section">About Me</a></li>
                    <li><a href="#container-projects">Projects & Contact</a></li>
                </ul>
            </nav>
        </div>
        
    )
}

export default Header;