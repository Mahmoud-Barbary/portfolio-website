// Main App component - this is the root component of our portfolio website
import React from 'react'
import './App.css'
import Header from './components/Header/Header.jsx'
import Hero from './components/Hero/Hero.jsx'
import Education from './components/Education/Education.jsx'

// Main App function component
function App() {
  return (
    // Main app container
    <div className="App">
      {/* Header component - contains navigation and branding */}
      <Header />
      
      {/* Main content area - we'll add more components here later */}
      <main className="main-content">
        {/* Hero and Education side by side */}
        <div className="hero-education-container">
          {/* Hero section - main landing area with photo and intro */}
          <Hero />
          
          {/* Education section - university information with graduation photo */}
          <Education />
        </div>
        
        {/* TODO: Add Video Introduction section */}
        {/* TODO: Add Projects section */}
        {/* TODO: Add Experience section */}
        {/* TODO: Add Contact section */}
      </main>
    </div>
  )
}

// Export the App component
export default App
