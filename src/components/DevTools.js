
import git  from "../asset/git.png"
import  mongo from "../asset/mongo.png"
import redux from "../asset/redux.png"
import  sql from "../asset/sql.png"
import  vps from "../asset/vps.png"
import  firebase from "../asset/firebase.png"
import Space from "../asset/space.jpg"


export default function DevTools(){

    return(
        <div style={{border: "1px solid grey", marginLeft:"22vh", marginTop:"3vh", paddingTop:"15px", paddingBottom:"15px", paddingRight:"75px", borderRadius:"11px", background:`url(${Space})`, filter:"brightness(150%)"}}>
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
    )

}