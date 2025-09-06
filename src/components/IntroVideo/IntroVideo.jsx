// IntroVideo component for the portfolio website
// Displays a short intro heading/subtext with an embedded responsive video player

import React, { useRef, useEffect } from 'react';
import './IntroVideo.css';

function IntroVideo({
  title = "A quick introduction",
  subtitle = "Who I am, what I love building, and how I approach problems.",
  videoUrl = 'https://www.youtube.com/embed/ysz5S6PUM-U', // Sample public video id
  aspectRatio = '16 / 9',
}) {
  const withBase = (path) => `${import.meta.env.BASE_URL}${path}`;
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Load saved position from localStorage
    const savedTime = localStorage.getItem('introVideoTime');
    if (savedTime) {
      video.currentTime = parseFloat(savedTime);
    }

    // Save position when video time changes
    const handleTimeUpdate = () => {
      localStorage.setItem('introVideoTime', video.currentTime.toString());
    };

    // Clear saved position on hard refresh (page reload)
    const handleBeforeUnload = () => {
      // Only clear on actual page reload, not navigation
      if (performance.navigation.type === 1) { // TYPE_RELOAD
        localStorage.removeItem('introVideoTime');
      }
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return (
    <section className="intro-video" aria-labelledby="intro-video-title">
      <div className="intro-video-content">
        <h2 id="intro-video-title" className="intro-video-title">{title}</h2>
        <p className="intro-video-subtitle">{subtitle}</p>

        <div className="video-wrapper" style={{ ['--aspect-ratio']: aspectRatio }}>
          <video
            ref={videoRef}
            className="video-player"
            controls
            preload="metadata"
          >
            <source src={withBase('media/intro-video.mp4')} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}

export default IntroVideo;
