import tf from "../asset/tf.png"
import python from "../asset/python.png"
import pytorch from "../asset/pytorch.png"
import js from "../asset/js.png"
import ts from "../asset/ts.png"
import cpp from "../asset/c++.png"
import cs from "../asset/cs.png"
import java from "../asset/java.png"
import node from "../asset/node.png"
import r from "../asset/r.png"
import react from "../asset/react.png"
import skl  from "../asset/scikit.png"



export default function Languages(){
    return(
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
    )
}