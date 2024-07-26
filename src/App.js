import MainProfile from './components/MainProfile';
import Languages from './components/Languages';
import DevTools from './components/DevTools';
import { useState, useRef } from 'react';


function App() {
  
  const [angle, setAngle] = useState(0)
  const containerRef = useRef(null)

  setTimeout(()=>{
    const updateGradient = () => {
      if (containerRef.current) {
        containerRef.current.style.background = `linear-gradient(${angle}deg, white, black)`;
        setAngle((prevDegree) => (prevDegree + 1) % 360);
      }
    };
    requestAnimationFrame(updateGradient);
  },30)

  return (
    <div ref={containerRef} style={{ background: `linear-gradient(${String(angle)}, lightgrey, black)`, display:"flex", flexDirection:"column"}} >
      <div className="App" style={{height:"100vh", marginTop:"11vh", marginLeft:"5vw", display:"flex", flexDirection:"column", alignItems:"flex-start"}}>
              <MainProfile />
              <Languages />
              <DevTools />
      </div>
    </div>
  );
}

export default App;
