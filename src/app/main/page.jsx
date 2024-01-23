// components/ImageStack.js
'use client'
import React from 'react';
import styles from './page.css'; // Import the CSS file for styling
import Navbar from '../../components/Navbar/Navbar.jsx'
import Footer from '../../components/Footer/Footer.jsx'
const ImageStack = () => {
  const handleMouseMove = (e) => {
    // Calculate the movement distance based on mouse position
    const moveDistanceX = (e.clientX / window.innerWidth - 0.5) * 40; // Adjust the multiplier as needed
    const moveDistanceY = (e.clientY / window.innerHeight - 0.5) * 40;

    // Apply the movement to the clouds image
    document.getElementById('clouds').style.transform = `translate(${moveDistanceX}px, ${moveDistanceY}px)`;
  };

  const handleMouseLeave = () => {
    // Reset the position when the cursor leaves the image
    document.getElementById('clouds').style.transform = 'translate(0, 0)';
  };

  return (
    <>
    <Navbar/>
    <div className={styles.imageStack} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <div className={styles.imageContainer}>
        <img id="clouds" src="/images/clouds.png" alt="Clouds" className={styles.cloudsImage} />
        <img src="/images/main.jpg" alt="Other Image" className={styles.otherImage} />
      </div>
    </div>
    </>
  );
};

export default ImageStack;
