// Software component for the portfolio website
// This page displays all software development projects

import React from 'react';
import './Software.css';

// Placeholder software projects data
const softwareProjects = [
  {
    id: 1,
    title: 'Human Pose Controlled Robot Arm',
    description: 'Real-time control of a Kinova Gen3 robotic arm using human pose estimation from a webcam via MediaPipe and ROS MoveIt.',
    longDescription: 'This project demonstrates advanced robotics control by using computer vision to track human movements and translate them into robotic arm commands. Built with Python, ROS, and MediaPipe for real-time pose detection.',
    tech: ['Python', 'ROS', 'MediaPipe', 'MoveIt', 'Computer Vision'],
    highlights: [
      'Real-time human pose detection',
      'ROS MoveIt integration',
      'Kinova Gen3 arm control',
      'Computer vision pipeline'
    ],
    media: {
      type: 'image',
      src: 'https://via.placeholder.com/800x400/8b5cf6/ffffff?text=Robot+Arm+Project',
      alt: 'Human pose controlled robot arm'
    },
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/Mahmoud-Barbary/human-pose-controlled-robot-arm',
        kind: 'github'
      }
    ],
    status: 'completed'
  },
  {
    id: 2,
    title: 'Medhat - Medical Chatbot App',
    description: 'AI-powered medical chatbot application designed to provide health information and assistance.',
    longDescription: 'A comprehensive medical chatbot built with modern web technologies, featuring natural language processing and medical knowledge integration.',
    tech: ['React', 'Node.js', 'AI/ML', 'Natural Language Processing'],
    highlights: [
      'AI-powered responses',
      'Medical knowledge base',
      'User-friendly interface',
      'Real-time chat functionality'
    ],
    media: {
      type: 'image',
      src: 'https://via.placeholder.com/800x400/8b5cf6/ffffff?text=Medical+Chatbot',
      alt: 'Medhat medical chatbot interface'
    },
    links: [
      {
        label: 'GitHub',
        href: '#',
        kind: 'github'
      }
    ],
    status: 'completed'
  },
  {
    id: 3,
    title: 'Chess Game',
    description: 'Complete chess game implementation built from scratch with full game logic and user interface.',
    longDescription: 'A fully functional chess game featuring all standard chess rules, move validation, check/checkmate detection, and an intuitive user interface.',
    tech: ['JavaScript', 'HTML5', 'CSS3', 'Game Logic'],
    highlights: [
      'Complete chess rules implementation',
      'Move validation and game state tracking',
      'Check and checkmate detection',
      'Responsive user interface'
    ],
    media: {
      type: 'image',
      src: 'https://via.placeholder.com/800x400/8b5cf6/ffffff?text=Chess+Game',
      alt: 'Chess game interface'
    },
    links: [
      {
        label: 'GitHub',
        href: '#',
        kind: 'github'
      }
    ],
    status: 'completed'
  },
  {
    id: 4,
    title: 'Solitaire Game',
    description: 'Classic solitaire card game implementation with smooth animations and intuitive controls.',
    longDescription: 'A polished solitaire game featuring the classic Klondike variant with smooth card animations, drag-and-drop functionality, and scoring system.',
    tech: ['JavaScript', 'HTML5', 'CSS3', 'Canvas API'],
    highlights: [
      'Smooth card animations',
      'Drag and drop functionality',
      'Auto-complete detection',
      'Score tracking system'
    ],
    media: {
      type: 'image',
      src: 'https://via.placeholder.com/800x400/8b5cf6/ffffff?text=Solitaire+Game',
      alt: 'Solitaire game interface'
    },
    links: [
      {
        label: 'GitHub',
        href: '#',
        kind: 'github'
      }
    ],
    status: 'completed'
  }
];

// Main Software component function
function Software() {
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
              {project.media.type === 'image' ? (
                <img
                  src={project.media.src}
                  alt={project.media.alt}
                  className="project-image"
                />
              ) : (
                <iframe
                  src={project.media.src}
                  title={project.media.alt}
                  className="project-video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
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
