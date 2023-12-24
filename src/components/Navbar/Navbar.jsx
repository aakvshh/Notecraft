import React from "react";
import Image from 'next/image';
import './Navbar.css'
const Navbar = () => {
    
    return(
        <>
         <div className="header">
        <div class="logo-container">
        <Image src="/images/logo.jpg" alt="NoteCraft Logo" width={50} height={50} />
        <span className="logo-text">NoteCraft</span>
            </div>

        <input type="checkbox" id="nav_check" hidden/>
        <nav>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/main">Main</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                <a href="/contact">Contact</a>
                </li>
                
            </ul>
        </nav>
        <label for="nav_check" class="hamburger">
            <div></div>
            <div></div>
            <div></div>
        </label>
    </div>

  </>
    );
}   

export default Navbar