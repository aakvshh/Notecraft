'use client'
import React, { useEffect, useState } from "react";
import Image from 'next/image';
import Link from 'next/link';
import './Navbar.css'
const Navbar = () => {
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setScrolling(scrollTop > 0); 
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
        <Image src="/images/logoo.png" alt="NoteCraft Logo" width={50} height={50} className="logo" />
        <span className="logo-text">NoteCraft</span>
            </div>

        <input type="checkbox" id="nav_check" hidden/>
        <nav>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                <Link href="/contact">Contact</Link>
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