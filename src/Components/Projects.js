import React, {Component} from "react";
import {Grid , Cell , Tab , Tabs , Button} from "react-mdl"
import proimg from "../Images/Pro Image.png";
import proimg2 from "../Images/Desktop Application.png";
import "./Styling/Style.css"


class Project extends Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 0 };

    }

    toggleCategories()
    {
        if(this.state.activeTab == 0)
        {   
            return(
                <div  >
 
 <Grid  style = {{textAlign:"center" }} > 
    <Cell col = {12}> 
               <img src = {proimg} className = "img"/>
               <br/> <br/>
               <p style = {{fontSize: "18px" , color:"grey" , fontWeight:"bold" }}>Sport Bikes Showroom Wesite</p>
               <p style = {{margin:"auto"}}>
               This is CMAD (Certified Mobile Application Development) course's final project which is a<br/>React based Sport Bikes Showroom Website.
               </p>
               <br/>
              
               <a href = "https://shelbymotorspk.herokuapp.com/" target = "_blank"> <Button className = "btn" raised colored>See Project</Button> </a>
              <a href = "https://github.com/AQib246/CMAD-Final-Project" target = "_blank"> <Button className = "btn" raised raised accent>GitHub</Button></a>
              
       
               </Cell> 
</Grid> 
                </div>
    
            )
        }
        if(this.state.activeTab == 1)
        {
            return(

                     <div>
 <Grid  style = {{textAlign:"center" }} > 
    <Cell col = {12}> 
               <img src = {proimg2} className = "img"/>
               <br/> <br/>
               <p style = {{fontSize: "18px" , color:"grey" , fontWeight:"bold" }}>Blood Bank Management System</p>
               <p style = {{margin:"auto"}}>
               This is DataBase (5th Semester) course's final project which is a C Sharp Windows Form <br/> Application  with MS SQL DataBase.
               </p>
               <br/>
              <a href = "https://github.com/AQib246/CMAD-Final-Project" target = "_blank"> <Button className = "btn" raised raised accent>GitHub</Button></a>

       
               </Cell> 
</Grid> 
 

                     </div>
            )
        }
    }
    

    render() {
        return (
            <div className="demo-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>Desktop Application</Tab>
                    
                    
                </Tabs>
                <section>
                    <Grid className = "Project_grid">
                        <Cell col = {12}>
                            <div className = "Contect"> {this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
                    
                </section>
            </div> 
               
        );
    }
}
export default Project