// Hero component for the portfolio website
// This is the main landing section with photo and intro text

import React from 'react';
import './Hero.css';
import profilePhoto from '../../assets/profile/Mahmoud-Photo.png';

// Main Hero component function
function Hero() {
  return (
    // Hero section container
    <section className="hero">
      {/* Left side: Photo */}
      <div className="hero-photo">
        {/* Your actual photo */}
        <img 
          src={profilePhoto} 
          alt="Mahmoud Barbary - Software Developer and Video Editor" 
          className="profile-photo"
        />
      </div>

      {/* Right side: Intro text */}
      <div className="hero-content">
        {/* Large bold statement */}
        <h1 className="hero-statement">
          <span className="hero-greeting">Hi! I'm </span>
          <span className="hero-name">Mahmoud</span>
        </h1>
        
        {/* Your title/role */}
        <h2 className="hero-title">Software Developer, Video Editor & Aspiring Game Developer</h2>
        
                       {/* Brief description with different structure */}
               <div className="hero-description">
                 <p className="description-line">I'm a creator and developer who thrives on creativity and hard work. As a top-achieving international student, I've learned to adapt quickly, pick up new skills fast, and pour everything into what I build.</p>
                 <p className="description-line">My passion is <span className="highlight">bringing creativity and technology together</span> — whether through software development, video editing, game design, or exploring something entirely new.</p>
               </div>
      </div>
    </section>
  );
}

// Export the component so it can be imported in other files
export default Hero;
