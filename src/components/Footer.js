import React from "react";
import "./Footer.css";
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import {Link,useParams,useHistory,Redirect,Route} from 'react-router-dom';
import styled from 'styled-components';
import AboutUs from '../pages/AboutUs';

const Styles = styled.div`
  .navbar { background-color: #004C8C; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #ffffff;
    &:hover { color: white; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
  
`;
function Footer() {
  return (
   
    <div className="main-footer">
       
      <div className="container">
     
        <div className="row">
          {/* Column1 */}
          
          {/* Column2 */}
          <div className="col" >
          
          <p >Address: Main Blvd, Block G4 Block G 4 Phase 2 Johar Town, Lahore, Punjab
          Phone: (042) 35301886
         Email:decentstorejt@gmail.com</p>
          </div>
          <div className="col">

         <Nav.Item><Link to="/About Us" exact activeClassName ="active"  ><h6 className="col">About Us</h6></Link></Nav.Item>
         
         
          <Nav.Item class="login"><Link to="/FAQs"><h6 className="col"> FAQs</h6></Link></Nav.Item> 

          </div>

          
          <div className="col">
         
          <Nav.Item><Link to="/Privacy Policy"><h6 className="col">Privacy Policy</h6></Link></Nav.Item>
          <Nav.Item ><Link to="/Contact Us"><h6 className="col">Contact Us</h6></Link></Nav.Item> 
          </div>
        </div>
        <hr />
      </div>
      
    </div>
  );
}

export default Footer;