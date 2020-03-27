import React from "react";
import {Grid , Cell} from "react-mdl";
import Skills from "./Skill";
import "./Styling/Style.css";

class Education extends React.Component
{
    render()
    {
        return(
            <div>
            
                     <h4 className  = "Education">Education</h4>
                  <hr style = {{width : "50%" , margin:"auto" , borderTop:"1px solid black" , marginTop:"-10px"}}/>
                  <br/>

            
                
                <Grid>
                    <Cell col = {4}>
                        <p className = "Year">2018 - in progress</p>
                        </Cell>
                    <Cell col = {8} >
                     <p className = "Institute_name">BSCS</p>
                     <p style ={{marginTop:"-2%" , color:"black"}}>University of Karachi (UBIT)</p>
                    </Cell>
                </Grid>

                <Grid>
                    <Cell col = {4}>
                        <p className = "Year">2017</p>
                        </Cell>
                    <Cell col = {8} >
                     <p className = "Institute_name">Intermediate (Pre-Engineering)</p>
                     <p style ={{marginTop:"-2%" , color:"black"}}>Govt. Dehli College Hussainabad, Karachi</p>
                    </Cell>
                </Grid>

                <Grid>
                    <Cell col = {4}>
                        <p className = "Year">2015</p>
                        </Cell>
                    <Cell col = {8} >
                     <p className = "Institute_name">Matriculation (Science)</p>
                     <p style ={{marginTop:"-2%" , color:"black"}}>Occident Grammar School, Karachi</p>
                    </Cell>
                </Grid>

                <h4 className  = "Education">Certificate</h4>
                <hr style = {{width : "50%" , margin:"auto" , borderTop:"1px solid black" , marginTop:"-10px"}}/>
                <br/>

                <Grid>
                    <Cell col = {4}>
                        <p className = "Year">2019</p>
                        </Cell>
                    <Cell col = {8} >
                     <p className = "Institute_name">CMAD (Certified Mobile Application Development)</p>
                     <p style ={{marginTop:"-2%" , color:"black"}}>All Pakistan Memon Federation, Karachi </p>
                    </Cell>
                </Grid>

                <h4 className  = "Education">Skills</h4>
                <hr style = {{width : "50%" , margin:"auto" , borderTop:"1px solid black" , marginTop:"-10px"}}/>
                <br/>

                <Skills/>

            </div>
        )
    }
}

export default Education