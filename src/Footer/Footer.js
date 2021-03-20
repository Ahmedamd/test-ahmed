import React from 'react';
import './Footer.css'
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import { Link } from 'react-router-dom';


function Footer() {
    return (
        <div className ="Footer">
            
            <div className="top">

                <div className="footer-title">
                    Global Home Health Care
                </div>

                <div className="footer-subtitle">
                    Compassion Lives here..
                    Care that lasts a lifetime..
                </div>
            </div>

            <div className="middle">


                <div className="address">
                    
                    <article className="street">
                        <strong className="tele">(613) 890-6850</strong>
                        <div className="name">
                        1201 Queens Street, Ottawa, ON
                        </div>
                           
                    </article>
                            
               
                </div>

                 <hr className="lines"/>

                <div className="menu">
                    <div className="menuBoc" >
                        <Link  className="txt"  to ='/mainpage'>
                         <article className="item" >Home</article>
                         {/* <hr className ="small-line"/> */}
                        
                        </Link>
                        
                    </div>

                      <div className="menuBoc">
                          <Link className="txt"  to ="/about">

                         <article className="item">About Us</article>
                          </Link>
                      
                    </div>


                      <div className="menuBoc">
                        <Link  className="txt" to ='/services'>
                        
                        <article className="item">Our Services</article>
                        </Link>

                         
                     </div>


                      <div className="menuBoc">
                           
                           <Link  className="txt" to ='/contact' >
                             <article className="item">Schedule Free Assessment</article>
                           </Link>
                       
                         {/* <hr className ="small-line"/> */}
                      </div>


                      <div className="menuBoc">
                         <Link className="txt"  to ="/process"></Link>
                          
                         
                         <article className="item">Our Process</article>
                         {/* <hr className ="small-line"/> */}
                    </div>        
                   
                </div>
                {/* end of Block */}


            </div>
            {/* end of Menu Block */}

            <div className="bottom">

                <div className="social-icons">
                    <article className="icon">
                        <FacebookIcon/>
                    </article>
                     <article className="icon">
                        <TwitterIcon/>
                    </article>
                    <article className="icon">
                        <InstagramIcon/>
                    </article>
                      <article className="icon">
                        <YouTubeIcon/>
                    </article>

                    <article className="icon">
                        <LinkedInIcon/>
                    </article>
                </div>


            </div>
        </div>
    )
}

export default Footer
