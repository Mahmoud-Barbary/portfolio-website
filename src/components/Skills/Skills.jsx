import React, { useState } from 'react';
import './Skills.css';

const skillCategories = [
  {
    id: 'all',
    label: 'All Skills'
  },
  {
    id: 'software',
    label: 'Software & Systems'
  },
  {
    id: 'ai-robotics',
    label: 'AI & Robotics'
  },
  {
    id: 'game-dev',
    label: 'Game Development'
  },
  {
    id: 'media',
    label: 'Media & Production'
  }
];

const skillsData = [
  {
    id: 'software',
    category: 'Software & Systems Engineering',
    categoryShort: 'Software & Systems',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    description: 'Developing maintainable software architecture, OOP design patterns, and robust backend services.',
    highlight: 'Clean architecture, end-to-end system design & pattern implementations',
    skills: [
      'C++',
      'Python',
      'Java',
      'PostgreSQL',
      'Git & GitHub',
      'Linux / Bash',
      'Design Patterns',
      'REST APIs',
      'Flask',
      'SFML'
    ]
  },
  {
    id: 'ai-robotics',
    category: 'AI, Machine Learning & Robotics',
    categoryShort: 'AI & Robotics',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="10" rx="2" />
        <circle cx="12" cy="5" r="2" />
        <path d="M12 7v4" />
        <line x1="8" y1="16" x2="8" y2="16.01" />
        <line x1="16" y1="16" x2="16.01" y2="16" />
      </svg>
    ),
    description: 'Integrating computer vision with real-time robotic kinematics and large-scale NLP dataset curation.',
    highlight: 'Published 900M-row dataset on Hugging Face & real-time Kinova Gen3 arm teleoperation',
    skills: [
      'ROS (Robot Operating System)',
      'MoveIt Motion Planning',
      'MediaPipe Pose Detection',
      'Computer Vision',
      'Hugging Face',
      'NLP & LLM Pipelines',
      'PyTorch / ML Models',
      'Sentence Transformers'
    ]
  },
  {
    id: 'game-dev',
    category: 'Game Design & Development',
    categoryShort: 'Game Development',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="6" width="20" height="12" rx="3" />
        <path d="M6 12h4m-2-2v4" />
        <circle cx="15" cy="11" r="1" fill="currentColor" />
        <circle cx="17" cy="13" r="1" fill="currentColor" />
      </svg>
    ),
    description: 'Architecting player state machines, fluid responsive combat mechanics, and custom game logic.',
    highlight: 'Building Project Clash — 2D real-time & turn-based sword combat system from scratch',
    skills: [
      'Godot Engine',
      'GDScript',
      'Finite State Machines (FSM)',
      'Combat Mechanics',
      '2D Game Physics',
      'Pixel Art & Sprites',
      'Game Loop Design',
      'C++ SFML Engine'
    ]
  },
  {
    id: 'media',
    category: 'Creative Production & Video Editing',
    categoryShort: 'Media & Production',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
      </svg>
    ),
    description: 'Producing high-impact promotional campaigns, commercial advertisements, and narrative video essays.',
    highlight: 'Edited 25+ medical commercials, real estate campaigns, and 45+ creative video essays',
    skills: [
      'Adobe Premiere Pro',
      'Adobe After Effects',
      'Color Grading',
      'Audio Enhancement',
      'Visual Storytelling',
      'Social Video Optimization',
      'Motion Graphics',
      'Long-form Narrative Design'
    ]
  }
];

function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredSkills = activeTab === 'all'
    ? skillsData
    : skillsData.filter((item) => item.id === activeTab);

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        {/* Section Header */}
        <div className="skills-header">
          <h2 className="skills-title">Skills & Proficiencies</h2>
          <p className="skills-subtitle">
            A cross-disciplinary toolkit bridging software engineering, robotics, creative media, and game design
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="skills-tabs" role="tablist">
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={activeTab === cat.id}
              className={`skills-tab ${activeTab === cat.id ? 'active' : ''}`}
              onClick={() => setActiveTab(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="skills-grid">
          {filteredSkills.map((domain) => (
            <div key={domain.id} className="skill-card">
              <div className="skill-card-header">
                <div className="skill-icon-wrap">{domain.icon}</div>
                <div>
                  <h3 className="skill-card-title">{domain.category}</h3>
                  <p className="skill-card-desc">{domain.description}</p>
                </div>
              </div>

              {/* Applied Highlight Callout */}
              <div className="skill-highlight-badge">
                <span className="highlight-dot"></span>
                <span>{domain.highlight}</span>
              </div>

              {/* Skills Tag Pills */}
              <div className="skill-tags">
                {domain.skills.map((skill, idx) => (
                  <span key={idx} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
