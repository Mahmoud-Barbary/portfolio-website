import React, { useRef, useEffect } from 'react';
import './Software.css';
import { getProjectsByCategory } from '../../data/projects.js';

const softwareProjects = getProjectsByCategory('software');

// Main Software component function
function Software() {
  const videoRefs = useRef({});

  useEffect(() => {
    // Create intersection observer to handle video autoplay on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          if (entry.isIntersecting) {
            // Video is visible - start playback
            const playPromise = video.play();
            if (playPromise !== undefined) {
              playPromise.catch(() => {});
            }
          } else {
            // Video is not visible - pause playback
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
    <section className="software">
      {/* Page header */}
      <div className="software-header">
        <h1 className="software-title">Software Projects</h1>
        <p className="software-subtitle">A collection of my software development work and technical projects</p>
      </div>

      {/* Projects grid */}
      <div className="software-projects">
        {softwareProjects.map((project) => (
          <div key={project.id} className="software-project">
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
                  loading="lazy"
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
    </section>
  );
}

export default Software;
