// Games component for the portfolio website
// This page displays all game development projects

import React, { useRef, useEffect } from 'react';
import './Games.css';

// Games projects data
const withBase = (path) => `${import.meta.env.BASE_URL}${path}`;
const gamesProjects = [
  {
    id: 1,
    title: 'Project Clash',
    description: 'A strategic 2D sword-fighting game combining turn-based elements within real-time mechanics. Acts as a continuous learning project and as it expands, something that can be published and/or commercially sold.',
    longDescription: 'Project Clash is an ambitious 2D fighting game that blends strategic turn-based decision-making with real-time combat mechanics. Built from scratch using industry-standard design patterns, this project serves as both a learning platform and a potential commercial product. The game emphasizes clean, modular code architecture and comprehensive documentation.',
    tech: ['Godot', 'GDScript', 'Game Design', 'Pixel Art', 'Git'],
    highlights: [
      'Building logic and finite state machines from scratch',
      'Emphasizing clean, modular and well-documented code',
      'Learning art, animation and game engine workflows',
      'Utilizing multiple industry-standard design patterns'
    ],
    media: {
      type: 'video',
      src: withBase('media/project-clash.mp4'),
      alt: 'Project Clash 2D fighting game development'
    },
    links: [],
    status: 'in-progress'
  }
];

// Main Games component function
function Games() {
  const videoRefs = useRef({});

  useEffect(() => {
    // Ensure videos show first frame immediately
    Object.values(videoRefs.current).forEach((video) => {
      if (video) {
        video.currentTime = 0.1; // Seek to first frame
        video.load(); // Force load
      }
    });

    // Create intersection observer to handle video autoplay
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          if (entry.isIntersecting) {
            // Video is visible - play it
            video.play().catch(console.error);
          } else {
            // Video is not visible - pause it
            video.pause();
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of video is visible
        rootMargin: '0px 0px -10% 0px' // Start playing when video is 10% from bottom of viewport
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
                         preload="metadata"
                         loading="lazy"
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
