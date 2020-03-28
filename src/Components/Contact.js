import React from 'react';
import {Grid , Cell , List , ListItemlist , ListItemContent , ListItem} from "react-mdl";
import pic from "../Images/myPic.png";
import "./Styling/Style.css";

const Contact = () => {
    return(
        
            <div className = "contact_body">
                <Grid className = "contact_grid">
                    <Cell col = {6}>
                        <h2>MuhamMad AQib</h2>
                        <img src = {pic} className = "myPic" height = "250px"/>
                        <p>Hi I am Muhammad AQib.
                            Now I m a Student of Computer Sciece (3rd Year).
                            I m also a Intermediate Front End Developer.
                            I always very mush willing to work as a team membe in miscellineous projects.
                            
                            I am looking farward in future to polish my skills in this area and to be a
                             part of this leading and latest technology.</p>

                    </Cell>
                    <Cell col = {6}>
                        <h2>Contact Me</h2>
                        <hr/>
                        <div className = "Contact_list">
                        <List>
                   <ListItem>
                      <ListItemContent style = {{fontSize:"25px" , fontFamily: 'Anton'}}>
                      <i className = "fa fa-phone-square phone"  aria-hidden = "true"/> 
                      <span className = "contact_number">+92-315-2391324</span>
                      </ListItemContent>
                   </ListItem>

                   <ListItem>
                      <ListItemContent style = {{fontSize:"25px" , fontFamily: 'Anton'}}>
                      <i className = "fa fa-envelope-square envelope"  aria-hidden = "true"/> 
                      <span className = "contact_number">maqibsohail246@gmail.com</span>
                      </ListItemContent>
                   </ListItem>
                        </List>
                        </div>
                    </Cell>
                </Grid>

            </div>

           )
}
export default Contact;
                      
                 
        
        