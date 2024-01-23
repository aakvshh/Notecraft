'use client'
import React, { useEffect, useState } from "react";
import Image from 'next/image';
import './Navbar.css'
const Navbar = () => {
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setScrolling(scrollTop > 0); // You can adjust the threshold as needed
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return(
        <>
         <div className={`header ${scrolling ? 'opaque' : ''}`}>
        <div className="logo-container">
        <Image src="/images/logo.jpg" alt="NoteCraft Logo" width={50} height={50} />
        <span className="logo-text">NoteCraft</span>
            </div>

        <input type="checkbox" id="nav_check" hidden/>
        <nav>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                {/* <li>
                    <a href="/main">Main</a>
                </li> */}
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                <a href="/contact">Contact</a>
                </li>
                
            </ul>
        </nav>
        <label htmlFor="nav_check" className="hamburger">
            <div></div>
            <div></div>
            <div></div>
        </label>
    </div>

  </>
    );
}   

export default Navbar