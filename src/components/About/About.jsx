import React from 'react';
import './About.css'
const About = () => {
  return (
    <div className="about-us-container">
      <div className="about-content">
        <h2>Welcome to NoteCraft!</h2>
        <p>
          NoteCraft is a platform dedicated to bringing the magic of music to your digital files.
          Whether you're a musician, music enthusiast, or just curious about the melodies hidden
          in your files, NoteCraft is here to turn your files into musical notations.
        </p>         
        <p>
          We are a group of engineers passionate about music, united by the belief that technology
          can enhance and elevate the musical experience. NoteCraft combines our love for coding
          with the world of music, providing innovative solutions for unlocking the potential
          hidden within your audio files.
        </p>
      </div>
      <div className="about-image">
        <img src="/images/about.jpg" alt="Team at NoteCraft" />
      </div>
    </div>
  );
};

export default About;
