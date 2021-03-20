import React, { useState } from 'react';
import './LandingSection.css';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function LandingSection() {

    const[index, setIndex] = useState(0);

    const container = document.querySelector(".picture-container");


    const slideImages = ["/HomePics/bcg-0.jpg","/HomePics/bcg-1.jpg"
    ];

    const back = {
        backgroundImage :  ` url(/HomePics/bcg-${index}.jpg)`,
        backgroundSize: "cover",
        width: "100%",
        height: "100vh",
        minWidth:"900px",
        objectFit:"cover",
        transition: "all 1.4s fade", 
    }

  
function prevSlide() {
 
 const nextIndex = index - 1;
 if(nextIndex < 0){
     setIndex(slideImages.length -1);
 }else{
     setIndex(nextIndex)
 }
  
}

function nextSlide() {
  setIndex((index + 1) % slideImages.length);
}


console.log("index is ", index)


    return (
    

        <div className="Landing-Section">
            <div className= "picture-container fade" style={back} >

                    <div className="banner" >
                        <div className="title-a">
                            Compassion lives here..
                            </div>

                            <div className="title-b">
                           Care that lasts a lifetime
                           </div> 

                        <button className="btn-home">Learn More</button>
                    </div>

                     {/* <div className="banner-b" >
                        <div className="title-a">
                            Compassion lives here..
                            </div>

                            <div className="title-b">
                           Care that lasts a lifetime
                           </div> 
                    </div>

                     <div className="banner-c" >
                        <div className="title-a">
                            Compassion lives here..
                            </div>

                            <div className="title-b">
                           Care that lasts a lifetime
                           </div> 
                    </div> */}
                  {/* <img src={slideImages[index]} alt=""/>  */}
                   <article className= "left" >
                    
                        <ArrowBackIosIcon onClick={()=> prevSlide()}/>
                    </article>
                            
                    <article className= "right"> <ArrowForwardIosIcon onClick={()=> nextSlide()}/>
                </article>   
                        
             </div>

              {/* <div className= "picture-container-b">

                    <div className="banner">
                        <div className="title-a">
                            Compassion lives here..
                            </div>

                       <div className="title-b">
                           Care that lasts a lifetime
                           </div> 
                    </div>
            
                  
                       
             </div> */}
    </div>
            
    )
}

export default LandingSection;
