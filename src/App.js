import logo from './logo.svg';
import Navbar from './NavBar/Navbar'
import './App.css';
import MainPage from './MainPage/MainPage'
import ContactPage from './Contact-Page/ContactPage'
import AboutPage from './About-Page/AboutPage'
import ServicePage from './Services-Page/ServicePage'

import ProcessPage from './Process-Page/Process-Page'
import {BrowserRouter as Router, Switch, Route} 
from'react-router-dom';



function App() {
  return (
    <div className="App">
         
        <Router>
           <Navbar className="navBar"/>  

          <Route path = "/mainpage" component ={MainPage}></Route>
          {/* <MainPage/> */}
          <Route path = "/contact" component ={ContactPage}></Route>-
          {/* <ContactPage/> */}
          <Route path = "/about" component ={AboutPage}></Route>
          {/* <AboutPage/> */}

          <Route path ="/services" component = {ServicePage}></Route>
          {/* <ServicePage/> */}

           <Route path ="/process" component = {ProcessPage}></Route>
          {/* <ServicePage/> */}
      </Router>
     
      {/* <div className="contact-page">
            
            <br/>
            <br/>
            <br/>
        
      </div>
     */}
  
   

    </div>
  );
}

export default App;
