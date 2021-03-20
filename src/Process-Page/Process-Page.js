import { Step } from '@material-ui/core';
import React from 'react';


import '../ST.css';
import './Process.css';
import  Care from '../Steps/Care';
import Navbar from '../NavBar/Navbar'
import Footer from '../Footer/Footer';



function Process() {
    return (
        <div className ="Process">

            
        {/* <Navbar/>    */}
       <div className="length">
                    <div className="main basic">
                <div className="pt ">
                    Our Process
                </div>

                <div className="p-c">
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ad odit sequi ea molestiae, consequuntur autem amet. Molestias, necessitatibus fugiat.
                </div>
                </div>
       </div>
          
        <Care/>
        <Footer/>
        </div>
    )
}

export default Process
