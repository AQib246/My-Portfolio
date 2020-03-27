import React, { Component } from "react";
import {Layout , Header , Navigation , Drawer , Content } from 'react-mdl';
import {Link} from "react-router-dom";
import Main from "./Routes";
import "./Styling/Style.css";



const Navbar = () => {
    return(
        <div >
        <div className="demo-big-content">
           <Layout >
               <Header className = "header_color"  title = {<Link style ={{textDecoration:"none" , color:"white"}} to = "/"><span className = "Link">MY PORTFOLIO</span></Link>}  scroll>
                   <Navigation  >
                   <Link to="/resume"> <span className = "Link">RESUME</span></Link>
                       
                       <Link  to="/contact"> <span className = "Link">CONTACT</span></Link>
                       <Link to="/projects"> <span className = "Link">PROJECT</span></Link>
                   </Navigation>
               </Header>
               <Drawer  title = {<Link style ={{textDecoration:"none" , color:"black"}} to = "/">MY PORTFOLIO</Link>}>
                   <Navigation>
                   <Link to="/resume">Resume</Link>
                       
                       <Link to="/contact">Contact</Link>
                       <Link to="/projects">Projects</Link>
                   </Navigation>
               </Drawer>
               <Content>
                   <div className="page-content"/>
                   <Main />
                  
                   
               </Content>
           </Layout>
       </div>
    
  </div>
  

  
    )
}
export default Navbar;