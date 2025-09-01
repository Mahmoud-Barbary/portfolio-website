// Header component for the portfolio website
// This component contains the navigation bar with name, social links, and resume button

import React from 'react';
import './Header.css';
import linkedinIcon from '../../assets/linkedin.png';
import linkedinFillIcon from '../../assets/linkedin fill.png';
import githubIcon from '../../assets/github.png';

// Main Header component function
function Header() {
  // Function to handle resume download
  // This will be called when the resume button is clicked
  const handleResumeDownload = () => {
    // TODO: Add actual resume file and download logic
    console.log('Resume download clicked');
    // In the future, this could open a PDF or trigger a download
  };

  // Function to handle social link clicks
  // Opens social profiles in new tabs
  const handleSocialClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Function to scroll to top of page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    // Header container with CSS class for styling
    <header className="header">
      {/* Left side: Name */}
      <div className="header-left">
        <button 
          className="name-button"
          onClick={scrollToTop}
          aria-label="Return to top of page"
        >
          <h1 className="name">Mahmoud Barbary</h1>
        </button>
      </div>

              {/* Right side: Social links and resume button */}
        <div className="header-right">
          {/* LinkedIn icon - opens LinkedIn profile in new tab */}
          <button 
            className="social-link linkedin"
            onClick={() => handleSocialClick('https://linkedin.com/in/your-profile')}
            aria-label="LinkedIn Profile"
          >
            <img 
              src={linkedinIcon} 
              alt="LinkedIn" 
              className="social-icon-image linkedin-default"
            />
            <img 
              src={linkedinFillIcon} 
              alt="LinkedIn" 
              className="social-icon-image linkedin-hover"
            />
          </button>

          {/* GitHub icon - opens GitHub profile in new tab */}
          <button 
            className="social-link github"
            onClick={() => handleSocialClick('https://github.com/your-username')}
            aria-label="GitHub Profile"
          >
            <img 
              src={githubIcon} 
              alt="GitHub" 
              className="social-icon-image"
            />
          </button>

        {/* Resume download button */}
        <button 
          className="resume-button"
          onClick={handleResumeDownload}
          aria-label="Download Resume"
        >
          <span>Résumé</span>
          <span className="download-icon">↓</span>
        </button>
      </div>
    </header>
  );
}

// Export the component so it can be imported in other files
export default Header;
