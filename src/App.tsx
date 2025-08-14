// @ts-ignore
import Navbar from './components/Navbar';
// @ts-ignore
import Hero from './components/Hero';
// @ts-ignore
import Highlights from './components/Highlights';
// @ts-ignore
import Model from './components/Model';
import { useEffect, useRef } from 'react';
  
const App = () => {
 

  const videoRef = useRef(null);
  const videoRef2 = useRef(null);

  useEffect(() => {
    const checkScroll = () => {
      const rect = videoRef.current.getBoundingClientRect();
      const rect2 = videoRef2.current.getBoundingClientRect();
      if(rect.top && rect2.top < window.innerHeight && rect.bottom && rect2.bottom  > 0) {
        videoRef.current.play();
        videoRef2.current.play();
      } else {
        videoRef.current.play();
        videoRef2.current.play();
      }
    };

    window.addEventListener('scroll', checkScroll);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);

 
 
  return (
    
    <main className="bg-black">
              <video  ref={videoRef}
        id="videotela"
        playsInline= {true} 
        loop= {true} 
        autoPlay = {true}
        muted = { true }
        width="1178"
        height="2556"
        src='../assets/videos/azreel.mp4'
        style={{ display: 'none' }}
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
        style={{ display: 'none' }}
        controls= {true}
        >
        </video>
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
    </main>
    
  )
}

export default App
