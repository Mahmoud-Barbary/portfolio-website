// Header component for the portfolio website
// This component contains the navigation bar with name, social links, and resume button

import React from 'react';
import './Header.css';
import linkedinIcon from '../../assets/social/linkedin.png';
import linkedinFillIcon from '../../assets/social/linkedin fill.png';
import githubIcon from '../../assets/social/github.png';

// Main Header component function
function Header({ onNavigate, currentPage }) {
  // Function to handle resume preview
  // Opens resume PDF in a new tab for preview/download
  const handleResumePreview = () => {
    window.open('./resume.pdf', '_blank', 'noopener,noreferrer');
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

           // Function to handle navigation clicks
         const handleNavClick = (section) => {
           if (onNavigate) {
             onNavigate(section);
           }
         };

  return (
    // Header container with CSS class for styling
    <header className="header">
      {/* Left side: Name */}
      <div className="header-left">
                       <button
                 className="name-button"
                 onClick={() => {
                   scrollToTop();
                   if (onNavigate) {
                     onNavigate('home');
                   }
                 }}
                 aria-label="Return to top of page"
               >
          <h1 className="name">Mahmoud Barbary</h1>
        </button>
      </div>

      {/* Center: Navigation links */}
      <nav className="header-nav">
        <button
          className={`nav-link ${currentPage === 'software' ? 'active' : ''}`}
          onClick={() => handleNavClick('software')}
          aria-label="View Software Projects"
        >
          <svg className="nav-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
          </svg>
          <span>Software</span>
        </button>

        <button
          className={`nav-link ${currentPage === 'video' ? 'active' : ''}`}
          onClick={() => handleNavClick('video')}
          aria-label="View Video Projects"
        >
          <svg className="nav-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/>
          </svg>
          <span>Video</span>
        </button>

        <button
          className={`nav-link ${currentPage === 'games' ? 'active' : ''}`}
          onClick={() => handleNavClick('games')}
          aria-label="View Game Projects"
        >
          <svg className="nav-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-10 7H8v3H6v-3H3v-2h3V8h2v3h3v2zm4.5 2c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4-3c-.83 0-1.5-.67-1.5-1.5S18.67 10 19.5 10s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
          </svg>
          <span>Games</span>
        </button>
      </nav>

      {/* Right side: Social links and resume button */}
      <div className="header-right">
        {/* LinkedIn icon - opens LinkedIn profile in new tab */}
                       <button
                 className="social-link linkedin"
                 onClick={() => handleSocialClick('https://www.linkedin.com/in/mahmoud-ibrahim-barbary/')}
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
                 onClick={() => handleSocialClick('https://github.com/Mahmoud-Barbary')}
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
          onClick={handleResumePreview}
          aria-label="View Resume"
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
