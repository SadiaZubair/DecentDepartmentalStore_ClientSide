
import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import {Link,useParams,useHistory,Redirect,Route} from 'react-router-dom';
import styled from 'styled-components';
import final from './final.png'
import SearchIcon from '@material-ui/icons/Search';
import FacebookIcon from '@material-ui/icons/Facebook';
import './Navbar.css'
import Login from './Login'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Button from '@material-ui/core/Button';
import fire from "../fire";
import {useState, useEffect} from 'react';


import ShoppingCart from './Shoppingcartside.js'
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

 function NavBar() {

  const [userc,setUserc]=useState(false)
  
const authListener = () => {


  fire.auth().onAuthStateChanged(function(user) {
    if (user) {
      setUserc(true)
      console.log("TRUEEE")
    } else {
      setUserc(false)
      console.log("FALSE")
      // No user is signed in.
    }
  });
}
  useEffect(()=> {
    authListener();
  }, []);
  
  
   const handleLogout= (event) =>{
      fire.auth().signOut().then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
  
  
    };
console.log(userc)
    return(
   
  <Styles>
    <Navbar expand="lg">
      <img src={final} alt="" height = "43" width ="65"/>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      {/* <Form className="form-center">
        <FormControl type="text" placeholder="Search" className="" />
      </Form> */}
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto" >
        <Nav.Item><Link  to={"/ShoppingCart"}><ShoppingCartIcon /></Link></Nav.Item>
        <h7 className ="spaces">..</h7>
          {/* <Nav.Item ><Link  to={"/Login"}>Login </Link></Nav.Item>  */}
          {!userc? (<Nav.Item ><Link className = "spaces" to={"/Login"}>Login </Link></Nav.Item>):
          ( <div className ="btn"  onClick={handleLogout} >
          
              Log Out
           
            </div>)

          }
          <h7 className ="spaces">..</h7>
          <Nav.Item><Link   to={"/facebook"}><FacebookIcon className ="fb"/></Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
  
    </Navbar>
    
  </Styles>

   
)
        }
export default NavBar