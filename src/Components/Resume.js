import React from 'react';
import {Grid , Cell} from "react-mdl";
import pic from "../Images/myPic.png";
import Education from "./Education";
import "./Styling/Style.css";
import file from "../Images/MUHAMMAD AQIB.pdf";

const Resume = () => {
    return(
        <div >
            <Grid style = {{paddingTop:"20px"}}>
                <Cell col = {4}>
                    <div style = {{textAlign:"center"}}>
                        <img src = {pic} className = "myPic" />

                        <h3 className = "Myname">MUHAMMAD AQIB</h3>
                <hr style = {{width : "90%" , margin:"auto" , borderTop:"3px solid black" , marginTop:"-10px"}}/>
                <br/>
                <br/>
                        <p  className="abc">Front End Developer</p>
                        
                        <p >Hi I am Muhammad AQib.
                            Now I m a Student of Computer Sciece (3rd Year).
                            I m also a Intermediate Front End Developer.
                            I always very mush willing to work as a team membe in miscellineous projects.
                            
                            I am looking farward in future to polish my skills in this area and to be a
                             part of this leading and latest technology. 
                            </p>
                        
                        <p className = "Details">Address</p>
                

                        <p>House no 917 Orangi Town , Karachi</p>
                        <p className = "Details">Phone</p>
               

                        <p>+92-315-2391324</p>
                        <p className = "Details">Email</p>
                

                        <p>maqibsohail246@gmail.com</p>

                        <button> 
                           
                            <a href= {file} download="" className = "btn" >Download CV</a>
                             </button>

                    </div>
                </Cell>
                <Cell className = "resume_right-col" col = {8}>
                    
                    <Education />
                    
                </Cell>
            </Grid>
           
        </div>
        
    )
}
export default Resume;
                            
                                   
                
                
                        
 
