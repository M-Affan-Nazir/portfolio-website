import Typewriter from 'react-typewriter-effect'
import images from "../asset/images.jpeg"

export default function MainProfile(){

    return(
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
    )

}