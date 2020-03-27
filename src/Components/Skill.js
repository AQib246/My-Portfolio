import React from "react";
import {Grid , Cell, ProgressBar } from "react-mdl";


class Skills extends React.Component
{
    render()
    {
        return(
            <div>
                 <Grid>
                     <Cell col ={12} >
                         <div style = {{display:"flex" }}>
                             <p className = "Skill_Name">HTML5</p>
                         <ProgressBar progress={80} style ={{margin:"auto" , width : '75%'}}/>
                         </div>
                     </Cell>
                 </Grid>

                 <Grid>
                     <Cell col ={12} >
                         <div style = {{display:"flex" }}>
                             <p className = "Skill_Name">CSS3</p>
                         <ProgressBar progress={70} style ={{margin:"auto" , width : '75%'}}/>
                         </div>
                     </Cell>
                 </Grid>

                 <Grid>
                     <Cell col ={12} >
                         <div style = {{display:"flex" }}>
                             <p className = "Skill_Name">Javascript</p>
                         <ProgressBar progress={70} style ={{margin:"auto" , width : '75%'}}/>
                         </div>
                     </Cell>
                 </Grid>

                 <Grid>
                     <Cell col ={12} >
                         <div style = {{display:"flex" }}>
                             <p className = "Skill_Name">Bootstrap , Reactstrap</p>
                         <ProgressBar progress={80} style ={{margin:"auto" , width : '75%'}}/>
                         </div>
                     </Cell>
                 </Grid>

                 <Grid>
                     <Cell col ={12} >
                         <div style = {{display:"flex" }}>
                             <p className = "Skill_Name">JQuery</p>
                         <ProgressBar progress={50} style ={{margin:"auto" , width : '75%'}}/>
                         </div>
                     </Cell>
                 </Grid>

                 <Grid>
                     <Cell col ={12} >
                         <div style = {{display:"flex" }}>
                             <p className = "Skill_Name">React Js</p>
                         <ProgressBar progress={60} style ={{margin:"auto" , width : '75%'}}/>
                         </div>
                     </Cell>
                 </Grid>

                 <Grid>
                     <Cell col ={12} >
                         <div style = {{display:"flex" }}>
                             <p className = "Skill_Name">React Navtive</p>
                         <ProgressBar progress={40} style ={{margin:"auto" , width : '75%'}}/>
                         </div>
                     </Cell>
                 </Grid>

                 <Grid>
                     <Cell col ={12} >
                         <div style = {{display:"flex" }}>
                             <p className = "Skill_Name">Fibebase Database</p>
                         <ProgressBar progress={80} style ={{margin:"auto" , width : '75%'}}/>
                         </div>
                     </Cell>
                 </Grid>

                 <Grid>
                     <Cell col ={12} >
                         <div style = {{display:"flex" }}>
                             <p className = "Skill_Name">Desktop Application</p>
                         <ProgressBar progress={25} style ={{margin:"auto" , width : '75%'}}/>
                         </div>
                     </Cell>
                 </Grid>

            </div>
        )
    }
}

export default Skills