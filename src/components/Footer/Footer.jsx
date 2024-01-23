import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>    
    <div class="footer-col">
            <h4>NoteCraft</h4>
            <ul>
                {/* <li><a href="#">Address</a></li> */}
                <li><a href="#">notecraft@gmail.com</a></li>

            </ul>
        </div>
        <div class="footer-col">
            <h4>Address</h4>
            <ul>
                <li><a href="#">Notecraft, Pune</a></li>

            </ul>
        </div>
        <div class="footer-col">
            <h4>company</h4>
            <ul>
                <li><a href="/about">about</a></li>
                <li><a href="/contact">contact us</a></li>
            </ul>
        </div>
        <div class="footer-col">
            <h4>follow us</h4>
            <div class="links">
                <a href="#"><i class="fab fa-linkedin-in"></i></a>
                <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
            </div>
        </div>
    </footer>
  );
};

export default Footer;