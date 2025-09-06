// Projects data for the portfolio website
// This file contains all project information that can be used across components

export const projects = {
  software: [
    {
      id: 'medhat-medical-chatbot',
      title: 'Medhat - Medical Chatbot App',
      description: 'AI-powered medical chatbot application designed to provide diagnosis and symptom checking based on rule-based Natural Language Processing.',
      longDescription: 'A comprehensive medical chatbot built with Python, Flask, and PostgreSQL, featuring rule-based natural language processing and medical knowledge integration for diagnosis and symptom checking.',
      highlights: [
        'AI-powered responses',
        'Medical knowledge base',
        'User-friendly interface',
        'Real-time chat functionality'
      ],
      tech: ['Python', 'Flask', 'PostgreSQL', 'Natural Language Processing'],
      media: {
        type: 'video',
        src: `${import.meta.env.BASE_URL}media/medhat.mp4`,
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
      id: 'chess-game',
      title: 'Chess Game',
      description: 'Complete chess game implementation with PvP and adjustable-difficulty PvE (AI).',
      longDescription: 'A fully functional chess game featuring all standard chess rules, move validation, check/checkmate detection, and an intuitive user interface. Supports local PvP and an AI opponent with selectable difficulty levels.',
      highlights: [
        'Complete chess rules implementation',
        'Move validation and game state tracking',
        'Check and checkmate detection',
        'Responsive user interface'
      ],
      tech: ['C++', 'SFML', 'Git'],
      media: {
        type: 'video',
        src: `${import.meta.env.BASE_URL}media/chess.mp4`,
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
      id: 'solitaire-game',
      title: 'Solitaire Game',
      description: 'Classic solitaire card game implementation with smooth animations and intuitive controls.',
      longDescription: 'A polished solitaire game featuring the classic Klondike variant with smooth card animations, drag-and-drop functionality, and scoring system.',
      highlights: [
        'Smooth card animations',
        'Drag and drop functionality',
        'Auto-complete detection',
        'Score tracking system'
      ],
      tech: ['C++', 'SFML', 'Git'],
      media: {
        type: 'video',
        src: `${import.meta.env.BASE_URL}media/solitaire.mp4`,
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
      id: 'robot-arm',
      title: 'Human Pose Controlled Robot Arm',
      description: 'Real-time control of a Kinova Gen3 robotic arm using human pose estimation from a webcam via MediaPipe and ROS MoveIt.',
      longDescription: 'This project demonstrates advanced robotics control by using computer vision to track human movements and translate them into robotic arm commands. Built with Python, ROS, and MediaPipe for real-time pose detection.',
      highlights: [
        'Real-time human pose detection',
        'ROS MoveIt integration',
        'Kinova Gen3 arm control',
        'Computer vision pipeline'
      ],
      tech: ['Python', 'ROS', 'MediaPipe', 'MoveIt', 'Computer Vision'],
      media: {
        type: 'video',
        src: `${import.meta.env.BASE_URL}media/robot-arm.mp4`,
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
      id: 'delivery-system',
      title: 'Delivery Coordination System',
      description: 'End-to-end delivery management platform with full UML documentation, UI mockups, and Java pattern implementations.',
      longDescription: 'Hermes Express: an academic system design project covering use cases, component/class diagrams, UI/UX, and Java implementations of core patterns (Singleton, Strategy, Observer, etc.).',
      highlights: [
        'Comprehensive architecture (use case → component → class)',
        'Pattern implementations (Singleton, Strategy, Observer...)',
        'Desktop and mobile UI mockups in Figma',
        'Deployment and documentation reports'
      ],
      tech: ['Java', 'UML', 'Design Patterns', 'Figma', 'Jira'],
      media: {
        type: 'video',
        src: `${import.meta.env.BASE_URL}media/delivery-system.mp4`,
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
      id: 'foodmah',
      title: 'Foo-D-Mah',
      description: 'A mobile application that provides personalized dining recommendations based on dietary needs, restrictions, and real-time data.',
      longDescription: 'A mobile application that provides personalized dining recommendations based on dietary needs, restrictions, and real-time data.',
      highlights: [
        'Personalized recommendations based on diet & allergies',
        'User reviews and social integration',
        'Swipe-based restaurant discovery',
        'Dynamic and intuitive user interface'
      ],
      tech: ['Figma', 'Miro', 'UI/UX'],
      media: {
        type: 'video',
        src: `${import.meta.env.BASE_URL}media/foodmah.mp4`,
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
      id: 'steam-classifier',
      title: 'Steam Game Tag Classifier',
      description: 'Machine learning project comparing GMM and Neural Network models for multi-label classification of Steam video game tags using text embeddings.',
      longDescription: 'An exploratory project that predicts Steam game tags (e.g., "Action," "RPG," "Indie") based on game titles and descriptions. Implemented two distinct ML architectures: Gaussian Mixture Model (GMM) and multi-layer Neural Network, achieving 48.23% top-1 accuracy with the NN model on a dataset of 73,394 games.',
      highlights: [
        'Multi-label classification on 73,394 Steam games',
        'Text embeddings using sentence transformers',
        'Neural Network achieved 48.23% top-1 accuracy',
        'Comprehensive model comparison and analysis'
      ],
      tech: ['Python', 'Machine Learning', 'Neural Networks', 'GMM'],
      media: {
        type: 'image',
        src: `${import.meta.env.BASE_URL}media/steam-classifier.jpg`,
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
  ],
  
  video: [
    {
      id: 'real-estate-campaign',
      title: 'Real Estate Marketing Campaign',
      description: 'Professional promotional videos showcasing a real estate agent\'s expertise through client consultations, property showcases, and dynamic visual storytelling.',
      longDescription: 'A comprehensive video marketing campaign for a real estate agent, featuring two 5-minute professional videos. Transformed raw client consultation footage into engaging promotional content through extensive editing, creative cuts, custom B-roll integration, dynamic text animations, and professional color grading. The project required multiple days of intensive editing to create compelling narratives that effectively communicate the agent\'s expertise and services.',
      highlights: [
        'Multi-day intensive editing process',
        'Creative narrative structuring',
        'Custom B-roll integration',
        'Professional color grading and text animations'
      ],
      media: {
        type: 'video',
        src: `${import.meta.env.BASE_URL}media/real-estate-campaign.mp4`,
        alt: 'Real Estate Marketing Campaign video'
      },
      links: [
        {
          label: 'Watch Full Video',
          href: '#', // Replace with your Google Drive or YouTube link
          kind: 'video'
        }
      ],
      status: 'completed'
    },
    {
      id: 'medical-testimonials',
      title: 'Medical Clinic Advertisements',
      description: 'This was a large-scale project centered on creating a testimonial campaign for a medical clinic introducing new treatment options. I was responsible for editing over 25 patient interviews. My process involved developing a custom branding text design and applying consistent color grading and audio enhancement to produce a series of high-quality, authentic videos, including compilations formatted for social media.',
      longDescription: 'Produced a large-scale testimonial campaign for a medical clinic introducing new treatment options. Edited over 25 patient interviews into compelling promotional content, including individual testimonials and compilation videos for vertical social media formats. Developed custom branding elements, text designs, and maintained patient confidentiality while creating engaging narratives. Applied professional color grading and audio enhancement to ensure consistent, high-quality output across all deliverables.',
      highlights: [
        'Edited over 25 patient interviews',
        'Custom branding and text design',
        'Social media format optimization',
        'Professional color grading and audio enhancement'
      ],
      media: {
        type: 'video',
        src: `${import.meta.env.BASE_URL}media/medical-testimonials.mp4`,
        alt: 'Medical Clinic Patient Testimonials video'
      },
      links: [
        {
          label: 'Watch Full Video',
          href: '#', // Replace with your Google Drive or YouTube link
          kind: 'video'
        }
      ],
      status: 'completed'
    },
    {
      id: 'ieee-promotion',
      title: 'IEEE Event Promotion',
      description: 'For a major international event like the IEEE Congress, the goal was to create a short, energetic promo that could grab attention instantly on social media. I edited this video to maximize impact, using fast-paced cuts and engaging effects to convey the scale and excitement of the event.',
      longDescription: 'Created promotional content for the IEEE North Africa Student and Young Professional Congress, a major international event. Delivered a concise 47-second promotional video for university social media channels, leveraging advanced editing techniques to create maximum impact within a short format.',
      highlights: [
        'Short-form content optimization',
        'Fast-paced editing techniques',
        'Social media engagement focus',
        'International event promotion'
      ],
      media: {
        type: 'video',
        src: `${import.meta.env.BASE_URL}media/ieee-promotion.mp4`,
        alt: 'IEEE Event Promotion video'
      },
      links: [
        {
          label: 'Watch Full Video',
          href: '#', // Replace with your Google Drive or YouTube link
          kind: 'video'
        }
      ],
      status: 'completed'
    },
    {
      id: 'video-essays',
      title: 'YouTube Channel & Creative Content',
      description: 'My personal YouTube channel is where I experiment with different formats and push my creative video skills. Across almost 50 videos, I\'ve made everything from energetic gaming content to in-depth video essays, highlighted by a 33-minute highly-produced critique and several other videos that have earned over 2,000 views.',
      longDescription: 'Developed a personal creative channel producing over 45 videos, including fast-paced gaming content, scripted critiques, and in-depth video essays. Notable achievements include three videos exceeding 1,000 views and a comprehensive 33-minute critique that demonstrates advanced storytelling and editing skills. This ongoing project showcases iterative improvement in video production, narrative structure, and audience engagement.',
      highlights: [
        'Over 45 videos produced',
        'Multiple formats and styles',
        '33-minute comprehensive critique',
        'Videos exceeding 2,000 views'
      ],
      media: {
        type: 'video',
        src: `${import.meta.env.BASE_URL}media/video-essays.mp4`,
        alt: 'Video Essays & Creative Content compilation'
      },
      links: [
        {
          label: 'Watch Full Video',
          href: '#', // Replace with your Google Drive or YouTube link
          kind: 'video'
        }
      ],
      status: 'completed'
    }
  ],
  
  games: [
    {
      id: 'project-clash',
      title: 'Project Clash',
      description: 'A strategic 2D sword-fighting game combining turn-based elements with real-time mechanics. A continuous learning project with potential for publication.',
      longDescription: 'Project Clash is an ambitious 2D fighting game that blends strategic turn-based decision-making with real-time combat mechanics. Built from scratch using industry-standard design patterns, this project serves as both a learning platform and a potential commercial product. The game emphasizes clean, modular code architecture and comprehensive documentation.',
      highlights: [
        'Building logic and finite state machines from scratch',
        'Emphasizing clean, modular and well-documented code',
        'Learning art, animation and game engine workflows',
        'Utilizing multiple industry-standard design patterns'
      ],
      tech: ['Godot', 'GDScript', 'Game Design', 'Pixel Art', 'Git'],
      media: {
        type: 'video',
        src: `${import.meta.env.BASE_URL}media/project-clash.mp4`,
        alt: 'Project Clash 2D fighting game development'
      },
      links: [],
      status: 'in-progress'
    }
  ]
};

// Helper function to get highlights (top project from each category)
export const getHighlights = () => {
  return {
    software: projects.software[0],
    video: projects.video[0], // Real Estate Marketing Campaign
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
