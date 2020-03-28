import React from 'react';
import Home from "./Home";
import Resume from "./Resume";
import Contact from "./Contact";
import Project from "./Projects";

import {Route , Switch} from "react-router-dom"


const Mian = () => {
    return(
        <div >
            <Switch>
                 <Route path = "/" exact component = {Home}/> 
                <Route path = "/resume" exact component = {Resume} />
                <Route path = "/contact" exact component = {Contact} />
                <Route path = "/projects" exact component = {Project} />
            </Switch>
            
        </div>
         
    )
}
export default Mian;
            