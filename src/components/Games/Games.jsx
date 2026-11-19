import React, { useRef, useEffect } from 'react';
import './Games.css';
import { getProjectsByCategory } from '../../data/projects.js';

const gamesProjects = getProjectsByCategory('games');

// Main Games component function
function Games() {
  const videoRefs = useRef({});

  useEffect(() => {
    // Create intersection observer to handle video autoplay on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          if (entry.isIntersecting) {
            // Video is visible - play it
            const playPromise = video.play();
            if (playPromise !== undefined) {
              playPromise.catch(() => {});
            }
          } else {
            // Video is not visible - pause it
            video.pause();
          }
        });
      },
      {
        threshold: 0.25,
        rootMargin: '100px 0px'
      }
    );

    // Observe all video elements
    Object.values(videoRefs.current).forEach((video) => {
      if (video) {
        observer.observe(video);
      }
    });

    // Cleanup
    return () => {
      Object.values(videoRefs.current).forEach((video) => {
        if (video) {
          observer.unobserve(video);
        }
      });
    };
  }, []);

  return (
    <section className="games">
      {/* Page header */}
      <div className="games-header">
        <h1 className="games-title">Game Projects</h1>
                       <p className="games-subtitle">A growing collection of my game development work and interactive projects</p>
      </div>

      {/* Projects grid */}
      <div className="games-projects">
        {gamesProjects.map((project) => (
          <div key={project.id} className="games-project">
            {/* Project media */}
            <div className="project-media">
              {project.media.type === 'video' ? (
                       <video
                         ref={(el) => (videoRefs.current[project.id] = el)}
                         className="project-video"
                         muted
                         loop
                         playsInline
                         preload="none"
                         poster={project.media.poster}
                       >
                         <source src={project.media.src} type="video/mp4" />
                       </video>
              ) : (
                <img
                  src={project.media.src}
                  alt={project.media.alt}
                  className="project-image"
                />
              )}
              {project.status === 'in-progress' && (
                <div className="status-badge">In Progress</div>
              )}
            </div>

            {/* Project content */}
            <div className="project-content">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
              
              {project.note && (
                <div className="project-note">
                  <p>{project.note}</p>
                </div>
              )}
              
              {/* Technology stack */}
              <div className="project-tech">
                <h3>Technologies Used:</h3>
                <div className="tech-tags">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>

              {/* Project highlights */}
              <div className="project-highlights">
                <h3>Key Features:</h3>
                <ul className="highlights-list">
                  {project.highlights.map((highlight, index) => (
                    <li key={index} className="highlight-item">{highlight}</li>
                  ))}
                </ul>
              </div>

              {/* Project links */}
              <div className="project-links">
                {project.links.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className={`project-link ${link.kind}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Game Projects Reference */}
      <div className="games-reference">
        <h2 className="reference-title">Additional Game Projects</h2>
        <p className="reference-description">
          I've also developed <strong>Chess</strong> and <strong>Solitaire</strong> games, 
          which showcase my eagerness for game development and early applicable skills. These projects 
          represent a solid foundation and entry into the field, building fundamental game logic 
          and interactive mechanics. You can find them in the <a href="#software" onClick={() => window.location.hash = 'software'}>Software Projects</a> section.
        </p>
      </div>
    </section>
  );
}

export default Games;
