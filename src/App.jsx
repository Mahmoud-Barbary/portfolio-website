// Main App component - this is the root component of our portfolio website
import React, { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header/Header.jsx'
import Hero from './components/Hero/Hero.jsx'
import Education from './components/Education/Education.jsx'
import IntroVideo from './components/IntroVideo/IntroVideo.jsx'
import Highlights from './components/Highlights/Highlights.jsx'
import Experience from './components/Experience/Experience.jsx'
import Software from './components/Software/Software.jsx'

// Main App function component
function App() {
  // Initialize current page from URL hash (e.g., #software). Default to 'home'.
  const getPageFromHash = () => (window.location.hash ? window.location.hash.slice(1) : 'home');
  const [currentPage, setCurrentPage] = useState(getPageFromHash());

  // Keep URL hash in sync and respect browser scroll restoration
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'auto';
    }

    const handleHashChange = () => {
      setCurrentPage(getPageFromHash());
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Function to handle navigation
  const handleNavigation = (page) => {
    if (page !== currentPage) {
      setCurrentPage(page);
      // Persist page in URL so refresh/back/forward stay on the same view
      window.location.hash = `#${page}`;
      // Optional: scroll to top on explicit navigation
      requestAnimationFrame(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      });
    }
  };

  // Render different pages based on current state
  const renderPage = () => {
    switch (currentPage) {
      case 'software':
        return <Software />;
      case 'home':
      default:
        return (
          <main className="main-content">
            {/* Hero and Education side by side */}
            <div className="hero-education-container">
              {/* Hero section - main landing area with photo and intro */}
              <Hero />
              
              {/* Education section - university information with graduation photo */}
              <Education />
            </div>

            {/* Video Introduction section */}
            <IntroVideo
              title="A Video Introduction"
              subtitle="Who I am and my journey thus far."
              videoUrl="https://www.youtube.com/embed/3nKEdhypIQw?modestbranding=1&rel=0&controls=0&playsinline=1"
            />

            {/* Project highlights section */}
            <Highlights onNavigate={handleNavigation} />
            
            {/* Experience timeline section */}
            <Experience />
          </main>
        );
    }
  };

  return (
    // Main app container
    <div className="App">
      {/* Header component - contains navigation and branding */}
      <Header onNavigate={handleNavigation} />
      
      {/* Render current page */}
      {renderPage()}
    </div>
  )
}

// Export the App component
export default App
