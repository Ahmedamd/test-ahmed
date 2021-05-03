
import React, { useState } from 'react';
import './navbar.css';
import MenuIcon from '@material-ui/icons/Menu';
import { Button } from '@material-ui/core';
import {Link} from 'react-router-dom';
import { PlayCircleFilledWhite, Visibility } from '@material-ui/icons';

function Navbar() {

 

const [Toggle, setToggle] = useState(false);
   
const navStyle ={
    color:  "#20426c"
};

const Black =
{

  color :"black",


}

const height ={
    height:  "220px",
    // transition: "all 2s ease",
    // overflow:"visible"
    
};


   
    return (

        <div className ="Navbar">
            <div className="Navbar-container">
                    <div className="logo-section caps">
                        <img className = "i" src="./IL/logo-2.jpg" alt=""/>
                        <Link className =" title-link"  style={Black}to ='/mainpage'>
                      <div className="logo-title">
                        Global Home Health
                        </div>
                        </Link>
                      
                    </div>

                    
                     <div className="middle-section-b " >
                            <Link className ="LINK"style={navStyle} to = "/mainpage">
                              <div className = "pages">Home </div>
                            </Link>

                           <Link className ="LINK" style={navStyle} to ='/about'>
                              <div className = "pages">About </div>
                           </Link>

                            <Link className ="LINK" style={navStyle} to ='/services'>
                              <div className = "pages">Services </div>
                            </Link>

                             <Link className ="LINK" style={navStyle} to ='/process'>
                              <div className = "pages">Our Process </div>
                            </Link>

                            <Link className ="LINK"className ="LINK" style={navStyle} to ='/contact'>
                              <div className = "pages">Contact </div>
                            </Link>
                    

                     </div>

             

                    <div className="toggle-section caps">
                        <div className="Menu-Box " onClick={()=>
                        setToggle(!Toggle)
                        }>
                            <span class="menu-text"> Menu</span>
                             <span><MenuIcon/></span> 
                        </div>
                        
                    </div>

                   
            </div>
            {/* end of Navbar container */}
          
            {Toggle?
            <div className="toggle" style={height}>

                            <Link className ="LINK"style={navStyle} to ='/mainpage'>
                              <div className = "pages-a">Home </div>
                            </Link>

                           <Link className ="LINK" style={navStyle} to ='/about'>
                              <div className = "pages-a">About </div>
                           </Link>

                            <Link className ="LINK" style={navStyle} to ='/services'>
                              <div className = "pages-a">Services </div>
                            </Link>

                             <Link className ="LINK" style={navStyle} to ='/process'>
                              <div className = "pages-a">Our Process </div>
                            </Link>

                            <Link className ="LINK"className ="LINK" style={navStyle} to ='/contact'>
                              <div className = "pages-a">Contact </div>
                            </Link>

                        </div>:
                        
                        <div className="toggle " >

                        
                          
                                <Link className ="LINK" style={navStyle} to ='/mainpage'>
                              <div className = "pages-a">Home </div>
                               </Link>
                       
                             

                              <Link className ="LINK" style={navStyle} to ='/about'>
                              <div className = "pages-a">About </div>
                              </Link>

                            <Link className ="LINK" style={navStyle} to ='/services'>
                              <div className = "pages-a">Services </div>
                            </Link>

                             <Link className ="LINK" style={navStyle} to ='/process'>
                              <div className = "pages-a">Our Process </div>
                            </Link>

                            <Link className ="LINK"className ="LINK" style={navStyle} to ='/contact'>
                              <div className = "pages-a">Contact </div>
                            </Link>

                        </div>
            }
           
        </div>  
        
    )
}

export default Navbar
