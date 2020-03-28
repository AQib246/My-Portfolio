import React from 'react';
import {Grid , Cell} from "react-mdl";
import pic from "../Images/myPic.png";
import "./Styling/Style.css";

const Home = () => {
    return(

        <div >
              <Grid className="demo-grid-2"  >


        <Cell col={12}  className = "main"  >
            <img src = {pic} className = "myPic1"  />
            <div style = {{marginBottom:"0px"}}>
            <div className = "Title" >
                <h1 >Front End Developer </h1>
                <hr/>
                <br/>
                
                <p>
                    HTML | CSS | Bootstrap | Reactstrap | JavaScript | React | React Native | Firebase DataBase | Desktop Application | MS SQL
                </p>
                <div className = "Social_links">
                    <a href = "https://github.com/AQib246" target = "_blank">
                        <i className = "fa fa-github-square github"  aria-hidden = "true" />
                    </a>
                    <a href = "https://www.linkedin.com/in/muhammad-aqib-3b0a601a5/" target = "_blank">
                        <i className = "fa fa-linkedin-square  linkedin" aria-hidden = "true" />
                    </a>
                    <a href = "https://www.facebook.com/muhammad.aqib.585559" target = "_blank">
                        <i className = "fa fa-facebook-square facebook" aria-hidden = "true" />
                    </a>
                    <a href = "mailto:maqibsohail246@gmail.com" target = "_blank">
                        <i className = "fa fa-envelope gmail"  aria-hidden = "true" />
                    </a>
                  
                </div>
            </div>
            </div>
        </Cell>
    </Grid>

   

   

    


    
    
    
    
    


  
                </div>

        
    )
}
export default Home;