import React from 'react';
import './Footer.css';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer>
            <div className="footer-col">
                <h4>NoteCraft</h4>
                <ul>
                    <li><Link href="#">notecraft@gmail.com</Link></li>
                </ul>
            </div>
            <div className="footer-col">
                <h4>Address</h4>
                <ul>
                    <li><Link href="#">Notecraft, Pune</Link></li>
                </ul>
            </div>
            <div className="footer-col">
                <h4>company</h4>
                <ul>
                    <li><Link href="/about">about</Link></li>
                    <li><Link href="/contact">contact us</Link></li>
                </ul>
            </div>
            <div className="footer-col">
                <h4>follow us</h4>
                <div className="links">
                    <Link href="#" style={{ backgroundImage: 'url(images/linkedin.png)' }}></Link>
                    <Link href="#" style={{ backgroundImage: 'url(images/facebook.png)' }}></Link>
                    <Link href="#" style={{ backgroundImage: 'url(images/twitter.png)' }}></Link>
                    <Link href="#" style={{ backgroundImage: 'url(images/instagram.png)' }}></Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
