import React, { useRef, useEffect } from 'react';
import './Video.css';

const withBase = (path) => `${import.meta.env.BASE_URL}${path}`.replace(/\/+/, '/');

const videoProjects = [
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
      src: withBase('media/real-estate-campaign.mp4'),
      alt: 'Real Estate Marketing Campaign video'
    },
    links: [],
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
      src: withBase('media/medical-testimonials.mp4'),
      alt: 'Medical Clinic Patient Testimonials video'
    },
    links: [],
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
      src: withBase('media/ieee-promotion.mp4'),
      alt: 'IEEE Event Promotion video'
    },
    links: [],
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
      src: withBase('media/video-essays.mp4'),
      alt: 'Video Essays & Creative Content compilation'
    },
    links: [],
    status: 'completed'
  }
];

function Video() {
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
                         preload="metadata"
                         loading="lazy"
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
