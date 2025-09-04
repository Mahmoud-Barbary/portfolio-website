// Main App component - this is the root component of our portfolio website
import React, { useState } from 'react'
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
  const [currentPage, setCurrentPage] = useState('home');

  // Function to handle navigation
  const handleNavigation = (page) => {
    setCurrentPage(page);
    // Ensure we land at the top of the new page
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    });
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
              videoUrl="https://www.youtube.com/embed/3nKEdhypIQw?modestbranding=1&rel=0&controls=1"
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
