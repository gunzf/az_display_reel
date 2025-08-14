import React, { useRef, useEffect } from 'react';

const VideoRefs = () => {
  const videoRef = useRef(null);
  const videoRef2 = useRef(null);

  useEffect(() => {
    const checkScroll = () => {
      if (videoRef.current && videoRef2.current) {
        const rect1 = videoRef.current.getBoundingClientRect();
        const rect2 = videoRef2.current.getBoundingClientRect();

        // Check if both videos are in the viewport
        const isVisible1 = rect1.top < window.innerHeight && rect1.bottom > 0;
        const isVisible2 = rect2.top < window.innerHeight && rect2.bottom > 0;

        if (isVisible1) {
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }

        if (isVisible2) {
          videoRef2.current.play();
        } else {
          videoRef2.current.pause();
        }
      }
    };

    // Add event listener to listen for scroll events
    window.addEventListener('scroll', checkScroll);

    // Initial check when component mounts
    checkScroll();

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []); // Empty dependency array means this effect runs only once, like componentDidMount

  return (
    <div>
        <video  ref={videoRef}
        id="videotela"
        playsInline= {true} 
        loop= {true} 
        autoPlay = {true}
        muted = { true }
        width="1178"
        height="2556"
        src='../assets/videos/azreel.mp4'
        style={{ display: 'initial' }}
        controls= {true}
        >
        </video>
        <video  ref={videoRef2}
        id="videotela2"
        playsInline= {true} 
        loop= {true} 
        autoPlay = {true}
        muted = { true }
        width="1920"
        height="1080"
        src='../assets/videos/azreel2.mp4'
        style={{ display: 'initial' }}
        controls= {true}
        >
        </video>
      {/* You can add other JSX elements */}
    </div>
  );
};

export default VideoRefs;
