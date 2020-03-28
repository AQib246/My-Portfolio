import React, { Component } from "react";
import {Layout , Header , Navigation , Drawer , Content } from 'react-mdl';
import {Link} from "react-router-dom";
import Main from "./Routes";
import "./Styling/Style.css";



const Navbar = () => {
    return(
        <div >
        <div className="demo-big-content">
           <Layout>
               <Header className = "header_color"  title = "MY PORTFOLIO">
                   <Navigation   >
                   <Link  to="/"> <span className = "Link">HOME</span></Link>
                   <Link to="/resume"> <span className = "Link">RESUME</span></Link>
                       
                       <Link  to="/contact"> <span className = "Link">CONTACT</span></Link>
                       <Link to="/projects"> <span className = "Link">PROJECTS</span></Link>
                   </Navigation>
               </Header>
               <Drawer title="MY PORTFOLIO">
                   <Navigation>
                   <Link  to="/"> <span className = "Link">HOME</span></Link>

                   <Link to="/resume">Resume</Link>
                       
                       <Link to="/contact">Contact</Link>
                       <Link to="/projects">Projects</Link>
                   </Navigation>
               </Drawer>
               <Content >
                   <div className="page-content" />
                   
                   <Main  />
                   
                   
               </Content>
           </Layout>
       </div>
    
  </div>
  

  
    )
}
export default Navbar;