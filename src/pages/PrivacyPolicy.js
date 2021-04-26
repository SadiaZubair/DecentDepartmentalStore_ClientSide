import React from 'react'
import './AboutUs.css'
import SideCat from '../components/HomePage/SideCat.js';
import Footer from '../components/Footer.js'
const PrivacyPolicy = () => {
    return (
        <div>
  
      <div className="contain">
       <SideCat/>
      
           <p className = "indent"> 
           Privacy Policy
          
           <p className = "indentpara">
            <li>
           We will always use your personal information in a way that is fair and worthy of that trust.
           </li>
           <li> We will take all reasonable steps to protect your information from misuse and keep it secure and protected by providing you clear information about how we use your personal information.
            </li> 
            <li>The primary reason for collection of any kind of information is to support our business. We always ensure to limit the information we collect to the information needed to support our purpose.</li>
            </p> 
            </p>   
            
        </div>
       
        <div className="footer"> 
        <Footer />
        </div>
        </div>
    )
}

export default PrivacyPolicy
