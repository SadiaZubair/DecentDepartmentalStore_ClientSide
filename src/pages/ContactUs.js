import React from 'react'
import './AboutUs.css'
import SideCat from '../components/HomePage/SideCat.js';
import Footer from '../components/Footer.js'
const ConactUs = () => {
    return (
        <div>
                
    <div>
      <div className="contain">
       <SideCat/>
           <p className = "indent"> 
               Contact Us
               <p className = "indentpara">
           Phone: (042) 35301886 
           </p>   
           <p className = "indentpara">
           Email :decentstorejt@gmail.com
            </p>    
            
           </p>
          
        </div>
        <div className="footer"> 
        <Footer />
        </div>
        </div>
        </div>
        
    )
}

export default ConactUs
