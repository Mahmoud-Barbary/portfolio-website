import React, { useRef, useEffect } from 'react';
import './Video.css';
import { getProjectsByCategory } from '../../data/projects.js';

const videoProjects = getProjectsByCategory('video');

function Video() {
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
    <section className="video">
      {/* Page header */}
      <div className="video-header">
        <h1 className="video-title">Video Projects</h1>
        <p className="video-subtitle">A showcase of my video editing and content creation work</p>
      </div>

      {/* Projects grid */}
      <div className="video-projects">
        {videoProjects.map((project) => (
          <div key={project.id} className="video-project">
            <div className="project-media">
              {project.media.type === 'youtube' ? (
                <iframe
                  src={project.media.src}
                  title={project.media.alt}
                  className="project-video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
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
              )}
              {project.status === 'in-progress' && (
                <div className="status-badge">In Progress</div>
              )}
            </div>
            <div className="project-content">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
              <div className="project-highlights">
                <h3>Key Features:</h3>
                <ul className="highlights-list">
                  {project.highlights.map((highlight, index) => (
                    <li key={index} className="highlight-item">{highlight}</li>
                  ))}
                </ul>
              </div>
              {project.links && project.links.length > 0 && (
                <div className="project-links">
                  {project.links.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`link-button ${link.kind}`}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Video;
