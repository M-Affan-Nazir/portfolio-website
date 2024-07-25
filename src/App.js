import logo from './logo.svg';
import './App.css';
import images from "./asset/images.jpeg"
import tf from "./asset/tf.png"
import python from "./asset/python.png"
import pytorch from "./asset/pytorch.png"
import js from "./asset/js.png"
import ts from "./asset/ts.png"
import cpp from "./asset/c++.png"
import cs from "./asset/cs.png"
import java from "./asset/java.png"
import node from "./asset/node.png"
import r from "./asset/r.png"
import react from "./asset/react.png"
import skl  from "./asset/scikit.png"

import Typewriter from 'react-typewriter-effect';

import { useState } from 'react';


import git  from "./asset/git.png"
import  mongo from "./asset/mongo.png"
import redux from "./asset/redux.png"
import  sql from "./asset/sql.png"
import  vps from "./asset/vps.png"
import  firebase from "./asset/firebase.png"

import { useEffect, useRef } from 'react';


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
          <div style={{display:"flex", flexDirection:"row"}} >
              <div style={{height:"16vh", width:"16vh", backgroundColor:"lightgrey", borderRadius:"70%", display:"flex", justifyContent:"center", alignItems:"center", boxShadow: "-3px 5px 8px rgba(0, 0, 0, 0.5)"}} >
                <img src={images} style={{height:"15vh", width:"15vh", borderRadius:"70%"}} />
              </div>
              <div style={{flexDirection:"column", display:"flex", alignItems:"flex-start"}} >
                <span style={{position:"relative", marginLeft:"3vw", marginTop:"0.75vh", fontSize:75, color:"white" }}>Hi, I am Affan!</span>
                <div style={{position:"relative", marginLeft:"3vw", marginTop:"0.5vh", fontSize:35, color:"lightgrey" }}>
                    <Typewriter
                        multiText={[
                          'Machine Learning.',
                          'Data Science & Quantitative Analytics.',
                          'Mobile App Development.',
                          "Deep Learning & Generative Models."
                        ]}
                        multiTextDelay={1000}
                        typeSpeed={50}
                        deleteSpeed={50}
                        delaySpeed={1500}
                      />
                  </div>
                </div>
            </div>
          <div style={{border: "1px solid grey", marginLeft:"22vh", marginTop:"3vh", paddingTop:"15px", paddingBottom:"15px", borderRadius:"11px"}}>
            <div style={{display:"flex", marginTop:"2vh",marginLeft:"55px"}}>
                <span style={{fontSize:25,  textDecoration: 'underline', color:"lightgrey"}} >Languages & FrameWorks:</span>
            </div>
            <div style={{display:"flex", flexDirection:"row", marginTop:"10px"}}>
              <img src={js} style={{height:"7vh", width:"7vw"}} />
              <img src={ts} style={{height:"4vh", width:"4vw", marginTop:"17px", marginLeft:"-50px"}} />
              <img src={python} style={{height:"4vh", width:"4vw", marginTop:"17px", marginLeft:"-30px"}} />
              <img src={cpp} style={{height:"4vh", width:"2.7vw", marginTop:"17px", marginLeft:"-10px"}} />
              <img src={java} style={{height:"7vh", width:"7vw", marginTop:"1px", marginLeft:"-40px"}} />
              <img src={cs} style={{height:"4vh", width:"3vw", marginTop:"17px", marginLeft:"-50px"}} />
              <img src={r} style={{height:"4vh", width:"3vw", marginTop:"17px", marginLeft:"15px"}} />
              <img src={tf} style={{height:"4vh", width:"3vw", marginTop:"15px", marginLeft:"10px"}} />
              <img src={pytorch} style={{height:"4vh", width:"7vw", marginTop:"19px", marginLeft:"10px"}} />
              <img src={node} style={{height:"5vh", width:"4vw", marginTop:"11px", marginLeft:"10px"}} />
              <img src={react} style={{height:"4vh", width:"3vw", marginTop:"17px", marginLeft:"10px"}} />
              <img src={skl} style={{height:"5vh", width:"5vw", marginTop:"17px", marginLeft:"-10px"}} />
            </div>
          </div>
          <div style={{border: "1px solid grey", marginLeft:"22vh", marginTop:"3vh", paddingTop:"15px", paddingBottom:"15px", paddingRight:"75px", borderRadius:"11px"}}>
            <div style={{display:"flex", marginTop:"2vh",marginLeft:"55px"}}>
                <span style={{fontSize:25, textDecoration: 'underline', color:"lightgrey"}}>Developer Tools & Databases</span>
            </div>
            <div style={{display:"flex", flexDirection:"row", marginTop:"10px", marginLeft:"2vw"}}>
              <img src={git} style={{height:"4vh", width:"2.5vw", marginTop:"15px", marginLeft:"5px"}} />
              <img src={mongo} style={{height:"5vh", width:"7vw", marginTop:"13px", marginLeft:"15px"}} />
              <img src={redux} style={{height:"5vh", width:"5vw", marginTop:"13px", marginLeft:"-21px"}} />
              <img src={sql} style={{height:"5vh", width:"6vw", marginTop:"13px", marginLeft:"-15px"}} />
              <img src={vps} style={{height:"6vh", width:"3vw", marginTop:"7px", marginLeft:"5px"}} />
              <img src={firebase} style={{height:"4vh", width:"7vw", marginTop:"17px", marginLeft:"17px"}} />
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
