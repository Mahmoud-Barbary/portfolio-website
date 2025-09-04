// Highlights component for the portfolio website
// Displays three highlight cards for Software, Video, and Games projects

import React from 'react';
import './Highlights.css';
import { getHighlights } from '../../data/projects.js';

function Highlights({ onNavigate }) {
  // Get highlight projects from data
  const highlights = getHighlights();
  
  // Convert to array format for mapping
  const highlightsArray = [
    { category: 'Software', project: highlights.software },
    { category: 'Video', project: highlights.video },
    { category: 'Games', project: highlights.games }
  ];

           const handleCardClick = (category) => {
           // Navigate to the appropriate page
           if (onNavigate) {
             onNavigate(category);
           }
         };

  return (
    <section className="highlights" aria-labelledby="highlights-title">
      <div className="highlights-content">
        <h2 id="highlights-title" className="highlights-title">Project Highlights</h2>
        <p className="highlights-subtitle">A glimpse into my work across different mediums</p>
        
        <div className="highlights-grid">
          {highlightsArray.map(({ category, project }) => (
            <div
              key={project.id}
              className="highlight-card"
              onClick={() => handleCardClick(category.toLowerCase())}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleCardClick(category.toLowerCase());
                }
              }}
            >
              <div className="card-thumbnail">
                {project.media.type === 'youtube' ? (
                  <iframe
                    src={project.media.src}
                    title={project.media.alt}
                    className="thumbnail-video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <img
                    src={project.media.src}
                    alt={project.media.alt}
                    className="thumbnail-image"
                  />
                )}
                <div className="card-category">{category}</div>
                {project.status === 'in-progress' && (
                  <div className="status-badge">In Progress</div>
                )}
              </div>
              
              <div className="card-content">
                <h3 className="card-title">{project.title}</h3>
                <p className="card-description">{project.description}</p>
                <div className="card-cta">
                  <span>View more</span>
                  <span className="arrow">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Highlights;
