"use client";
import { useState, useRef, useEffect } from "react";
import styles from './VideoPLayer.module.css';

interface VideoPlayerProps {
  videoSrc: string;      // Path to the video provided via props
  thumbnailSrc: string;  // Path to the thumbnail image provided via props
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoSrc, thumbnailSrc }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Function to handle play button click
  const handlePlay = () => {
    setIsFullScreen(true);
  };
  const handleClose = () => {
    setIsFullScreen(false);
  };
  
   // Add event listener for "Escape" key to close the video player
   useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    if (isFullScreen) {
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isFullScreen]);

  return (
    <div className="relative w-full h-full">
      {/* Thumbnail Image */}
      <div className="relative w-full h-full rounded-lg flex items-center justify-center">
        {/* Show the thumbnail image */}
        <img
          src={thumbnailSrc}
          alt="Video Thumbnail"
          className="absolute inset-0 w-full h-full object-cover rounded-lg"
        />

        {/* Play Button */}
        <button
          className="absolute p-3"
          onClick={handlePlay}
        >
          <svg width="41" height="48" viewBox="0 0 41 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M39 20.5359C41.6667 22.0755 41.6667 25.9245 39 27.4641L6 46.5167C3.33333 48.0563 0 46.1318 0 43.0526V4.94744C0 1.86824 3.33333 -0.0562615 6 1.48334L39 20.5359Z" fill="#202020"/>
          </svg>
        </button>
      </div>

      {/* Full-Screen Mode */}
      {isFullScreen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
          {/* Close Button */}
          <button
            className={`absolute top-5 right-5 text-white text-4xl ${styles.zIndex}`}
            onClick={handleClose}
          >
            &times;
          </button>

          {/* Video Element */}
          <video
            ref={videoRef}
            className="w-full h-full max-h-screen max-w-screen object-contain z-1"
            autoPlay
            playsInline
            controlsList="nodownload"
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
