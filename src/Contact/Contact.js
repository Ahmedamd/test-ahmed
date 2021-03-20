import React, { useState } from 'react';
import './Contact.css';


function Contact() {


    const [Toggle, setToggle] = useState(false);
    const height ={
    height:  "200px",
    transition: "all 1s ease"

    };

    const noheight ={
    height:  "0px",
    width: "0px",
    transition: "all 1s ease",
    visibilty: "hidden",
    opacity:0,
  
   
    };
  
    return (
        <div className ="Contact">
            
            <div className="
            title-container ">
                <div className="contact-title  ">

                Contact Global Home Health Care
                </div>

                    <div className="line-contact">
                        <hr className="lna"/>
                        <div className="dot-contact">♦</div>
                        <hr className="lna"/>
                    </div>

            </div>

            <div className="form-container">

                <form className="form" action="submit">
                    <input className="input " type="text" name="name" id="" placeholder=" Name*" required
                    />  
                          

                    <input className="input " type="text" name="" id=""placeholder="Phone Number*" required />
                           
                           

                    <input className="input " type="email" name="" id="" placeholder="Email*" required/>

                    <div class="position">
                        <div className="text">Would you like to leave a message?</div>
                               <div className="options">
                            <input type="radio" id="yes" name="option"  value="Yes"  onClick={()=>
                        setToggle(!Toggle) }/>
                            <label for="male">Yes</label>
                            <input type="radio" id="no" name="option" value="No" onClick={()=>
                        setToggle(false)}/>
                            <label for="female">No</label>
                               </div>
                            
                    </div>

                   {Toggle?
                    <textarea name="message" className="text-area" 

                    placeholder="Message" 
                     style={height}
                    ></textarea>
                   :
                   
                   <textarea name="message" className="text-area"

                    placeholder="Message" 
                     style={noheight}
                    ></textarea>
                   
                   }
                    

                   

                    
                           

                    <button className="btn-contact caps ls " type="submit">
                        Submit
                    </button>
                </form>
                <br/>
                <br/>
                <br/>
                <br/>

               
            </div>

           
                    


        </div>
    )
}

export default Contact
