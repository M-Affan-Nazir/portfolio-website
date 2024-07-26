import MainProfile from './components/MainProfile';
import Languages from './components/Languages';
import DevTools from './components/DevTools';
import Space from "./asset/background2.png"
import { useState, useRef } from 'react';


function App() {
  
  const [angle, setAngle] = useState(0)
  const containerRef = useRef(null)

  setTimeout(()=>{
    const updateGradient = () => {
      if (containerRef.current) {
        containerRef.current.style.background = `linear-gradient(${angle}deg, rgba(20, 0, 0, 0.55), rgba(0, 0, 0, 0.01)), url(${Space})`;
        setAngle((prevDegree) => (prevDegree + 1) % 360);
      }
    };
    requestAnimationFrame(updateGradient);
  },30)

  return (
    <div ref={containerRef} style={{display:"flex", flexDirection:"column", backgroundImage: `linear-gradient(${angle}deg, rgba(20, 0, 0, 0.9), rgba(0, 0, 0, 0.01)), url(${Space})`, backgroundAttachment: "fixed", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover"}} >
      <div className="App" style={{height:"100vh", marginTop:"11vh", marginLeft:"5vw", display:"flex", flexDirection:"column", alignItems:"flex-start"}}>
              <MainProfile />
              <Languages />
              <DevTools />
      </div>
    </div>
  );
}

export default App;
