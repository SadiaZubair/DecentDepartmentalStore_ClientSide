
import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import {Link,useParams,useHistory,Redirect,Route} from 'react-router-dom';
import styled from 'styled-components';
import final from './final.png'
import SearchIcon from '@material-ui/icons/Search';
import FacebookIcon from '@material-ui/icons/Facebook';
import './Navbar.css'
import Login from '../Credentials/Login'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Button from '@material-ui/core/Button';
import fire from "../../fire";
import {useState, useEffect} from 'react';
import { CartContext } from '../CartContext'
import {useContext} from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import ShoppingCart from '../Cart/Shoppingcartside.js'
import PersonIcon from '@material-ui/icons/PersonRounded';

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
  const history = useHistory();
  const {dispatch} = useContext(CartContext);

  const routeChange = (path) =>{ 
    // let path = `newPath`; 
    history.push(path);
  }
  
  const [userc,setUserc]=useState(false)
  const [list_prod,setlist_prod] =useState([])
  const authListener = () => {
    fire.auth().onAuthStateChanged(function(user) {
      if (user) {
        if(user.emailVerified)
        {
        setUserc(true)
        console.log("TRUEEE")
      }
       else {
        setUserc(false)
        console.log("FALSE")
        // No user is signed in.
      }
    }
    else
    {
      setUserc(false)
    }
    });
  }
  useEffect(()=> {
    authListener();
  }, []);
  const searchcatProduct = async () => {
     
    var db=fire.firestore();
    const citiesRef = db.collection('Products')
    const snapshot = await citiesRef.get()
    if (snapshot.empty) {
      console.log('No matching documents.');
    
      return;
    }  
 
    snapshot.forEach(doc => {
      list_prod.push(
          {
              
              name:doc.data().title,
              img: doc.data().prodimg,
              price: parseInt(doc.data().price),
              discount : parseInt(doc.data().discount),
              discountedprice: parseInt(parseInt(doc.data().price) * (1- parseInt(doc.data().discount)/100)),
              stockvalue: parseInt(doc.data().stock)
          }
      )
      
    });
    console.log(list_prod)
    //setMenu(list_prod);
 
 
    }
    useEffect(() => {
 
      searchcatProduct();
    },[]);
  
   const handleLogout= (event) =>{
      fire.auth().signOut().then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
  
  
    };
console.log(userc)
    const [search,setSearch]= useState("")
    return(
   <>
  <Styles>
    <Navbar expand="lg">
      <img src={final} alt="" height = "43" width ="65"/>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Form className="form-center">
        <FormControl type="text" placeholder="Search" className="" onChange={event =>{setSearch(event.target.value)}} />

      </Form>
       


      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto" >
        <Nav.Item><Link  to={"/ShoppingCart"}><ShoppingCartIcon /></Link></Nav.Item>
        <h7 className ="spaces">..</h7>
          {/* <Nav.Item ><Link  to={"/Login"}>Login </Link></Nav.Item>  */}
          {!userc? (<Nav.Item ><Link className = "spaces" to={"/Login"}>Login </Link></Nav.Item>):
          
          (
          <DropdownButton
            menuAlign="right"
            title={<PersonIcon/>}
            id="dropdown-menu-align-right"
          >
            <Dropdown.Item className="text" onClick ={()=>{routeChange('/Track Order')}}>Track Order</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item  className="text" onClick ={handleLogout}>Log Out</Dropdown.Item>
          </DropdownButton>
          
          )

          }
        </Nav>
      </Navbar.Collapse>
  
    </Navbar>
      
  </Styles>

  <div className='grid2'>
  
  {list_prod.filter((val)=>{
          if(val ==""){
            return ""
          }else if (val.name !=undefined){
            if (val.name.toLowerCase().includes(search.toLowerCase()))
             { <div>  
                <h1> Search Results</h1>
                </div>
                return search
             }else{

             }
          }
      }).map((Catprod,val)=>{
       
          return (

           
            <div className="box2" >
            <div className="holder">
                   <img className="b" src={Catprod.img}  />
                </div>
               <div className="title">
                    {Catprod.name}</div>
               <div className="price">
                  {Catprod.discount == 0 ? (
                    <div>Rs. {Catprod.price}</div>
                  ) : (
                    <div>Rs. <span style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid'}}>{Catprod.price}</span>{"   "+ Catprod.discountedprice}</div>
                  )}
               </div>
               <Button variant="primary" size="sm" style={{width:'80%',height:'fit-content', margin:'auto', marginBottom:'10px', backgroundColor:'#0277BD', color:'#ffffff'}} onClick={()=>{ dispatch({type: 'ADD_TO_CART', id: Catprod.id, stock:Catprod.stockvalue,  product: Catprod})}}> Add to Cart </Button> 
              
           </div>

          )


      })


      }
      </div>
    
      </>
   
)
        }
export default NavBar