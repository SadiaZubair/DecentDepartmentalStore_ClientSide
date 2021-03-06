import React, { useState } from 'react';
import { Icon } from 'react-icons-kit'
import { ic_add } from 'react-icons-kit/md/ic_add'
import { ic_remove } from 'react-icons-kit/md/ic_remove'
import { iosTrashOutline } from 'react-icons-kit/ionicons/iosTrashOutline'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import "./Shoppingcartside.css";
import ClearIcon from '@material-ui/icons/Clear';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
// import final from "./final.png"
import "./OpenShoppingcart.css"
import { Route, useHistory } from "react-router-dom";
import abc from "../Catproducts"
// import history from "./history"
import {useContext} from 'react';
import { CartContext } from '../CartContext'
import { useEffect } from 'react'
import { queryAllByTitle } from '@testing-library/dom';
import { CheckOutlined } from '@material-ui/icons';
import fire from '../../fire'
import Footer from '../Footer'
import SideCat from '../HomePage/SideCat';
const useStyles = makeStyles((theme) => ({
  root: {
    // width: ,
    // maxWidth: '50ch',
    // width : '50ch',
    backgroundColor: theme.palette.background.paper,
    paddingLeft : '0.5rem',
    paddingTop : '3rem',
    alignItems: 'center',
    paddingRight : '15cm',
    //display: 'inline',
  },
  middle: {
    display: 'middle',
  },

  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    paddingRight: '1.5rem',
    paddingBottom : '2rem',
    // display:  'span',
    align: 'left',
  },
  box: {
    // height: 100,
    // display: "flex",
    // border: "1px solid black",
    paddingRight: 0.5,
    height: 30,
    width: 30,
    paddingTop: 0.1,
    
  },
  adjust:{
    color: '#ffffff',

 },
 alignment :{
  paddingLeft:'2rem',
  paddingRight:'2rem',

},
alignmentText :{
  paddingLeft:'7.5rem',
  paddingRight:'12.5rem',
  paddingBottom: 0.1,
  

},
alignmentButton :{
  paddingLeft:'2rem',
  paddingRight:'2rem',
  
  

},
 top:{
   paddingTop: "1.0rem",
   paddingLeft : '0.5rem',
 },

  crossalign:{
    backgroundColor: '#0277BD',
    color: '#fff',
    width : '8cm',
    paddingLeft : '1.5rem',
   

 },

 adjustSubmit:{
   color: '#0277BD',
   backgroundColor: '#fff',
   width : '8cm',
   paddingRight : '1.5rem',
},
  paper: {
    // width : '50vh',
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(3, 0, 1),
  },

  alignit: {
      align: "left"
  },


}));


let total1 = 0


export default function OpenCart() {
  const classes = useStyles();
  const history = useHistory();
  const auth = fire.auth();
  const db = fire.firestore();
  const routeChange = (path) =>{ 
    // let path = `newPath`; 
    history.push(path);
  }
  const [total,setTotal] =  useState(0)
  
  
 function increment(value,task,cartid,cart){
   console.log(`value ${value}`)
   total1 = total1 + value
  
   dispatch({ type: 'INC', id: cartid, stock: cart.stock, cart })
    

 }

 function decrement(value,task,cartid,cart){
  console.log(`value ${value}`)
  total1 = total1 - value
 
  dispatch({ type: 'DEC', id: cartid, cart })
   

}
function Delete(value,task,cartid,cart){
  console.log(`value ${value}`)
  total1 = total1 - value
  if (total1<0)
  {
    total1 =0
  }
  dispatch({ type: 'DELETE', id: cartid, cart })
   

}

const { shoppingCart, dispatch, totalPrice, totalQty } = useContext(CartContext);
// console.log("in checkout" , shoppingCart);
// console.log("totalprice ", totalPrice)
// console.log("quant ", totalQty)

const empty = () =>{
  if(shoppingCart.length==0)
{
  dispatch({ type: 'Storage'})
}
}

useEffect(()=> {
  empty();
}, []);

const CheckOut = () =>{
  //routeChange("/CheckOut")
  history.push({
    pathname: '/CheckOut',
    //search: '?query=abc',
    state: shoppingCart,
    quantity: totalQty,
    price: totalPrice
});
}
  
let sCart = shoppingCart && shoppingCart.map(cart => (
    <div>
        <List className={classes.root}>
      <ListItem alignItems="flex-start">
      <div>
     
     


<ListItemText
            
secondary={
<React.Fragment>
<div className="grid-container">
<img src={cart.img} className={classes.large}  height = "40" width ="40"  align = "left" />
</div>
{`Rs . ${cart.qty} x ${cart.discountedprice} = ${cart.qty*cart.discountedprice}`}
</React.Fragment>
}
/> 
        
        </div>
           <div className={classes.alignmentText} >{cart.name}</div>
           
            
           <div className={classes.alignment} onClick={() => decrement((cart.price),"DEC",cart.id,cart)}>
            <Icon icon={ic_remove} size={20} />
        </div>                                             
           
        <div>{cart.qty}</div>
        <div className={classes.alignment} onClick={() => increment((cart.price),"INC",cart.id,cart)} >
            <Icon   icon={ic_add} size={20} />
            
        </div>

       
        
        <Button className={classes.alignmentButton}  onClick={() => Delete((cart.qty*cart.price),"DELETE",cart.id,cart)}>
            <Icon icon={iosTrashOutline} size={24} />
        </Button>
    </ListItem>
    </List> 
    </div>
))
  return (
    <>
    <div className="contain">
  
    <SideCat/>
    <div style={{height: '550px', overflow: 'scroll' }} >
    <Typography component="h1" variant="h6" align="left"  className = "MuiTypography-h1">
          Shopping Cart
        </Typography>  
        {
        shoppingCart.length != 0 ? 
        ( <div >
          { sCart}
        <Typography component="h1" variant="h6" align="left"  className = "MuiTypography-h1">
          {`Total Price : Rs ${totalPrice}`}
        </Typography>   
               <div className ={classes.top} >
                <Button
                  type="submit"
                  fullWidth
                  color="#0277BD"
                  className='pad'
                  
                  onClick = {()=>{routeChange("/")}}
                 // className={classes.adjustSubmit}
                >
                  Continue Shopping
                </Button>
                
                <Button
                  type="cancel"
                 
                  className={classes.crossalign}
                  // onClick = {()=>(console.log(shoppingCart))}
                  onClick = {()=>{CheckOut()}}
                >
                  Proceed to Checkout
                </Button>
                </div> 
                </div> 
        ):(
         <>
          <div className="alignment">Cart is Empty </div>
          <div className ={classes.top} >
           <Button
             type="submit"
             fullWidth
             color="#0277BD"
             className='pad2'
            
             onClick = {()=>{routeChange("/")}}
            // className={classes.adjustSubmit}
           >
             Start Shopping
           </Button>
        </div>
        
        </>
        )
        }
    </div>
    </div>
    <div className="footer"> 
        <Footer />
      </div>
    </>
    
     
   
    
  );
}
