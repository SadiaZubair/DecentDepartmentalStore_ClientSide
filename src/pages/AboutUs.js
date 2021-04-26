import React from 'react'
import './AboutUs.css'
import SideCat from '../components/HomePage/SideCat.js';
import Footer from '../components/Footer.js'

const AboutUs = () => {
    return (  
    <div>
      <div className="contain">
       <SideCat/>
           <p className = "indent"> 
               About Us
               <p className = "indentpara">
               This page gives information about About US.
           </p>    
        </p>
          
            
        
        <div className="footer"> 
        <Footer />
        </div>
        </div>
        </div>
        
        
    )
}

export default AboutUs
