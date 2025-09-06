// Software component for the portfolio website
// This page displays all software development projects

import React, { useRef, useEffect } from 'react';
import './Software.css';

// Placeholder software projects data
const softwareProjects = [
  {
    id: 1,
    title: 'Medhat - Medical Chatbot App',
    description: 'Diagnosis/symptom checker that guides users through rule-based NLP and medical knowledge.',
    longDescription: 'A medical assistant focused on symptom checking and triage. Uses rule-based NLP and curated medical knowledge rather than heavy ML. Built with Python (Flask) and PostgreSQL.',
    tech: ['Python', 'Flask', 'PostgreSQL', 'Natural Language Processing'],
    highlights: [
      'AI-powered responses',
      'Medical knowledge base',
      'User-friendly interface',
      'Real-time chat functionality'
    ],
    media: {
      type: 'video',
      src: '/media/medhat.mp4',
      poster: '/media/medhat.jpg',
      alt: 'Medhat medical chatbot interface'
    },
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/Ayman-Marghani/Medhat',
        kind: 'github'
      }
    ],
    status: 'completed'
  },
  {
    id: 2,
    title: 'Chess Game',
    description: 'Complete chess game implementation with PvP and adjustable-difficulty PvE (AI).',
    longDescription: 'A fully functional chess game featuring all standard chess rules, move validation, check/checkmate detection, and an intuitive user interface. Supports local PvP and an AI opponent with selectable difficulty levels.',
    tech: ['C++', 'SFML', 'Git'],
    highlights: [
      'Complete chess rules implementation',
      'Move validation and game state tracking',
      'Check and checkmate detection',
      'Responsive user interface'
    ],
    media: {
      type: 'video',
      src: '/media/chess.mp4',
      poster: '/media/chess.jpg',
      alt: 'Chess game interface'
    },
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/Ayman-Marghani/Chess-Game',
        kind: 'github'
      }
    ],
    status: 'completed'
  },
  {
    id: 3,
    title: 'Solitaire Game',
    description: 'Classic solitaire card game implementation with smooth animations and intuitive controls.',
    longDescription: 'A polished solitaire game featuring the classic Klondike variant with smooth card animations, drag-and-drop functionality, and scoring system.',
    tech: ['C++', 'SFML', 'Git'],
    highlights: [
      'Smooth card animations',
      'Drag and drop functionality',
      'Auto-complete detection',
      'Score tracking system'
    ],
    media: {
      type: 'video',
      src: '/media/solitaire.mp4',
      poster: '/media/solitaire.jpg',
      alt: 'Solitaire game interface'
    },
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/AhmedWaleed9/Solitaire',
        kind: 'github'
      }
    ],
    status: 'completed'
  },
  {
    id: 4,
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
      type: 'video',
      src: '/media/robot-arm.mp4',
      poster: '/media/robot-arm.jpg',
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
    id: 5,
    title: 'Delivery Coordination System',
    description: 'End-to-end delivery management platform with full UML documentation, UI mockups, and Java pattern implementations.',
    longDescription: 'Hermes Express: an academic system design project covering use cases, component/class diagrams, UI/UX, and Java implementations of core patterns (Singleton, Strategy, Observer, etc.).',
    tech: ['Java', 'UML', 'Design Patterns', 'Figma', 'Jira'],
    highlights: [
      'Comprehensive architecture (use case → component → class)',
      'Pattern implementations (Singleton, Strategy, Observer...)',
      'Desktop and mobile UI mockups in Figma',
      'Deployment and documentation reports'
    ],
    media: {
      type: 'video',
      src: '/media/delivery-system.mp4',
      poster: '/media/delivery-system.jpg',
      alt: 'Delivery coordination system overview'
    },
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/Mahmoud-Barbary/delivery-coordination-system',
        kind: 'github'
      }
    ],
    status: 'completed'
  },
  {
    id: 6,
    title: 'Foo-D-Mah',
    description: 'A mobile application that provides personalized dining recommendations based on dietary needs, restrictions, and real-time data.',
    longDescription: 'A mobile application that provides personalized dining recommendations based on dietary needs, restrictions, and real-time data.',
    tech: ['Figma', 'Miro', 'UI/UX'],
    highlights: [
      'Personalized recommendations based on diet & allergies',
      'User reviews and social integration',
      'Swipe-based restaurant discovery',
      'Dynamic and intuitive user interface'
    ],
    media: {
      type: 'video',
      src: '/media/foodmah.mp4',
      poster: '/media/foodmah.jpg',
      alt: 'Foo-D-Mah demo reel'
    },
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/Mahmoud-Barbary/Foo-D-Mah-Food-Recommendation-App',
        kind: 'github'
      },
      {
        label: 'Figma Prototype',
        href: 'https://www.figma.com/proto/vQjtalb6AOn9q6bJFsGARj/Milestone-2?node-id=17-697&p=f&t=jAfTs9GUlXioLEQR-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=17%3A697',
        kind: 'github'
      }
    ],
    status: 'completed'
  },
  {
    id: 7,
    title: 'Steam Game Tag Classifier',
    description: 'Machine learning project comparing GMM and Neural Network models for multi-label classification of Steam video game tags using text embeddings.',
    longDescription: 'An exploratory project that predicts Steam game tags (e.g., "Action," "RPG," "Indie") based on game titles and descriptions. Implemented two distinct ML architectures: Gaussian Mixture Model (GMM) and multi-layer Neural Network, achieving 48.23% top-1 accuracy with the NN model on a dataset of 73,394 games.',
    tech: ['Python', 'Machine Learning', 'Neural Networks', 'GMM'],
    highlights: [
      'Multi-label classification on 73,394 Steam games',
      'Text embeddings using sentence transformers',
      'Neural Network achieved 48.23% top-1 accuracy',
      'Comprehensive model comparison and analysis'
    ],
    media: {
      type: 'image',
      src: '/media/steam-classifier.jpg',
      alt: 'Steam Game Tag Classifier project overview'
    },
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/Mahmoud-Barbary/Steam-Game-Tag-Classifier',
        kind: 'github'
      }
    ],
    status: 'completed'
  }
];

// Main Software component function
function Software() {
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
