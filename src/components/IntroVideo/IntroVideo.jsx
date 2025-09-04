// IntroVideo component for the portfolio website
// Displays a short intro heading/subtext with an embedded responsive video player

import React from 'react';
import './IntroVideo.css';

function IntroVideo({
  title = "A quick introduction",
  subtitle = "Who I am, what I love building, and how I approach problems.",
  videoUrl = 'https://www.youtube.com/embed/ysz5S6PUM-U', // Sample public video id
  aspectRatio = '16 / 9',
}) {
  return (
    <section className="intro-video" aria-labelledby="intro-video-title">
      <div className="intro-video-content">
        <h2 id="intro-video-title" className="intro-video-title">{title}</h2>
        <p className="intro-video-subtitle">{subtitle}</p>

        <div className="video-wrapper" style={{ ['--aspect-ratio']: aspectRatio }}>
          <iframe
            className="video-iframe"
            src={videoUrl}
            title="Introduction video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}

export default IntroVideo;
