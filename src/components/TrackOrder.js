import { makeStyles } from '@material-ui/core/styles';
import Navbar from './Header/Navbar'
import Footer from './Footer'
import SideCat from './HomePage/SideCat';
import fire from '../fire';
import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup'
import './TrackOrder.css'
const useStyles = makeStyles((theme) => ({
    text: {
      marginTop: theme.spacing(5.5),
      paddingLeft : '2rem',
      fontSize: 25,
      
      fontWeight: 'bold',
    },

  }));

export default function TrackOrder () {
    const classes = useStyles();
    const auth = fire.auth();
    const db = fire.firestore();

    let orderid=[]
    let orders = []

    const [allorders, setorders] = useState([{
      BuyerAddress: "",
      BuyerCell: "",
      BuyerEmail: "",
      BuyerName: "ddd",
      BuyerPayment: "",
      BuyerQuantity: "",
      Date: "",
      Item_list:"",
      User: "",
      orderid: "",
      state: ""
     }])
    const [allids, setids] = useState([])

    auth.onAuthStateChanged(async user => {
      if (user) {
          const Orderref = db.collection('custacc').doc(user.uid).collection('Orders');
          const snapshot = await Orderref.get();
          snapshot.forEach(doc => {
              //console.log(doc.data());
              if(orderid.includes(doc.id)){    
              }
              else{
                  orderid.push(doc.id);
                  orders.push(doc.data());

                  
              }
          });
          setorders(orders);
          setids(orderid);
          }
      })

    
    let orders1 =[1,2,4]
    console.log(allorders);
    //firebase sai table
  return (
    <div >
    <div className="contain">
    <SideCat/>
     
      <div className="list-style" style={{height: '550px', overflow: 'scroll' }}>
      <ListGroup  variant="flush">
    <div className ={classes.text}> Order Status </div>
    
    {allorders.map((Catprod,index)=>(
            
          <ListGroup.Item  key={index} action href={"/View Orders/"+ Catprod.orderid} >
          <div className="order-title"  >
            Order # {Catprod.orderid}
           </div> 
           
           <br/>
           <div className="order-status">
             State :  {Catprod.state}
           </div>
           
         </ListGroup.Item>
           ))}
       </ListGroup>
     </div>
    <div className="footer"> 
        <Footer />
      </div>
      </div>
    </div>
  )
}

