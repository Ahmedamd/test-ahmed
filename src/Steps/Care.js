import React from 'react';
import './Care.css';


function Care() {
    return (
        <div className ="Care">
               

                 <div className="step-container">
                            <div className="image">

                                    <img  className="image "src="/IL/il-a.jpg" alt="" />

                            </div>
                     {/* end of image */}
                        <div className="steps">

                        <div className="abc">
                        Steps to Care
                        </div>

                         <div className="line-care">
                        
                            <div className="dot-care">♦</div>
                            <div className="hr-care">
                                <hr className="ahmed"/>
                            </div>
                         
                        </div>

                         <div className="p">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi magnam itaque ex dolorum, totam eum eaque assumenda provident temporibus distinctio veritatis voluptates architecto explicabo repellendus!
                        </div>

                        <div className="one-step">
                            <article className="num">
                                1.
                            </article>

                            <article className ="corr">
                                <p><strong  className ="bold caps">Initial call - </strong>  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab voluptatibus sapiente eveniet assumenda inventore! </p>
                            </article>
                        </div>

                        <div className="one-step">
                            <article className="num">
                                2.
                            </article>

                            <article className ="corr">
                                <p><strong className ="bold caps">In-home care assessment - </strong> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab voluptatibus sapiente eveniet assumenda inventore!</p>
                            </article>
                        </div>

                        <div className="one-step">
                            <article className="num">
                                3.
                            </article>

                            <article className ="corr">
                                <p><strong className ="bold caps">start of care - </strong> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab voluptatibus sapiente eveniet assumenda inventore! </p>
                            </article>
                        </div>

                        <div className="one-step">
                            <article className="num">
                                4.
                            </article>

                            <article className ="corr">
                                <p><strong className ="bold caps">client visits - </strong> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab voluptatibus sapiente eveniet assumenda inventore! </p>
                            </article>
                        </div>
                        <br/>
                        
                        <button className="btn-b caps " type="submit ">
                            Schedule free assessment
                        </button>
                 </div>

                 </div>
                 {/* end of steps container */}

               

                 
          
            {/* steps to care */}
            <br/>
            <br/>
            <br/>
          
        </div>
    )
}

export default Care
