// Projects data for the portfolio website
// This file contains all project information that can be used across components

export const projects = {
  software: [
    {
      id: 'portfolio-website',
      title: 'Portfolio Website',
      description: 'Full-stack portfolio built with React, featuring responsive design and modern UI.',
      longDescription: 'A modern, responsive portfolio website showcasing my work and skills. Built with React, Vite, and CSS Grid/Flexbox for optimal performance and user experience.',
      highlights: [
        'React + Vite for fast development',
        'Responsive design with CSS Grid',
        'Dark theme with purple accents',
        'Optimized for accessibility'
      ],
      tech: ['React', 'JavaScript', 'CSS3', 'Vite'],
      media: {
        type: 'image',
        src: 'https://via.placeholder.com/600x400/8b5cf6/ffffff?text=Portfolio+Website',
        alt: 'Portfolio website screenshot'
      },
      links: [
        {
          label: 'GitHub',
          href: 'https://github.com/your-username/portfolio-website',
          kind: 'github'
        },
        {
          label: 'Live Demo',
          href: '#',
          kind: 'demo'
        }
      ],
      status: 'completed'
    }
  ],
  
  video: [
    {
      id: 'intro-video',
      title: 'Introduction Video',
      description: 'Personal introduction showcasing my background and passion for technology.',
      longDescription: 'A brief video introduction that gives visitors a personal glimpse into who I am, my background, and what drives me in technology and creativity.',
      highlights: [
        'Personal storytelling',
        'Professional presentation',
        'Clear communication',
        'Engaging content'
      ],
      tech: ['Video Editing', 'Storytelling', 'Presentation'],
      media: {
        type: 'youtube',
        src: 'https://www.youtube.com/embed/3nKEdhypIQw',
        alt: 'Introduction video thumbnail'
      },
      links: [
        {
          label: 'Watch Video',
          href: 'https://youtu.be/3nKEdhypIQw',
          kind: 'video'
        }
      ],
      status: 'completed'
    }
  ],
  
  games: [
    {
      id: 'platformer-prototype',
      title: 'Platformer Prototype',
      description: '2D platformer game in development using Godot engine.',
      longDescription: 'A 2D platformer game prototype currently in development. Features smooth movement mechanics, level design, and game feel optimization.',
      highlights: [
        '2D platformer mechanics',
        'Godot engine development',
        'Level design principles',
        'Game feel optimization'
      ],
      tech: ['Godot', 'GDScript', 'Game Design', '2D Art'],
      media: {
        type: 'image',
        src: 'https://via.placeholder.com/600x400/8b5cf6/ffffff?text=Game+Prototype',
        alt: 'Platformer game screenshot'
      },
      links: [
        {
          label: 'Devlog',
          href: '#',
          kind: 'doc'
        }
      ],
      status: 'in-progress'
    }
  ]
};

// Helper function to get highlights (top project from each category)
export const getHighlights = () => {
  return {
    software: projects.software[0],
    video: projects.video[0],
    games: projects.games[0]
  };
};

// Helper function to get projects by category
export const getProjectsByCategory = (category) => {
  return projects[category] || [];
};

// Helper function to get a specific project
export const getProject = (category, projectId) => {
  return projects[category]?.find(project => project.id === projectId);
};
