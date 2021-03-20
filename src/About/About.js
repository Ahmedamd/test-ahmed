import React from 'react';
import './About.css';
import {Link} from 'react-router-dom';

function About() {

    
    return (
        
        <div className="About">

           

           


          <div className ="box">

           
               <div className="about-img">
                  <img  className="image "src="/IL/il-b.jpg" alt="" />
              </div>

             <div className="content">

                 <div className="first">
                            <div className="ab">
                            Premimium Home Care Services in Ottawa, ON
                            </div>
                

                            <div className="line-about">
                                
                            <div className="dot-about">♦</div>
                            <div className="hr-about" >
                                <hr className ="ahmed"/>
                            </div>

                            </div>
                 </div>

                    <div className="para-a">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, nam laborum odio aperiam inventore atque quae, aliquid, excepturi delectus voluptates architecto. Necessitatibus perferendis nemo nam sunt illo nisi voluptate vero! Lorem ipsum dolor sit amet consectetur adipisicing elit. !</p>
                    </div>

                    <div className="middle-statement">
                        <span>  <hr className="vr"/>
                        
                        <p2 className="vr-b">Over 20 years of experience</p2>
                        
                         </span>
                      
                        
                    </div>

                    <div className="para-a">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, nam laborum odio aperiam inventore atque quae, aliquid, excepturi delectus voluptates architecto. Necessitatibus perferendis nemo nam sunt illo nisi voluptate vero! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo 
                        </p>
                    </div>


                    <Link to ="/about">
                     <button className="btn-a caps ls " type="submit">
                        About us
                    </button>
                    </Link>
             
            </div>


            {/* end of content */}
           
          </div>
          {/* end of container */}
          

            <br/>
            <br/>
        
        </div>
        
    )
}

export default About
