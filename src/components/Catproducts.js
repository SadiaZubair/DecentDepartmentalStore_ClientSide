import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {NavLink,useParams} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { CardDeck } from "react-bootstrap";
import CardGroup from 'react-bootstrap/CardGroup';
import coffee from "./final.png";
import "./Catproducts.css";
import fire from "../fire";
import Footer from './Footer'
import SideCat from './HomePage/SideCat';
import { CartContext } from './CartContext'

const Catproducts = ({match}) => {

   const [menu, setMenu]=useState([{
       name:'',
       img:'',
       price:'',
     } , ]);

     let list_prod=[]
   let subcategory=match.params.subcategory;
   let product=match.params.products;
 const searchcatProduct = async (cat) => {
     
   var db=fire.firestore();
   const citiesRef = db.collection('Products')
   const snapshot = await citiesRef.where('category','==', subcategory).where('subcategory','==', product).get()
   if (snapshot.empty) {
     console.log('No matching documents.');
     console.log(subcategory, product)
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
   setMenu(list_prod);


   }
   useEffect(() => {

     searchcatProduct();
   },[]);
   

  const {dispatch} = useContext(CartContext);

   
  const [Catprod, setCatprod]=useState([
      {
          id:1,
          name:"Tapal",
          price:50,
          img: coffee,
      },
      {
       id:2,
       name:"Lipton",
       price:50,
       img: coffee,
       },
       {
           id:3,
           name:"Nescafe",
           price:50,
           img: coffee,
       },
       {
           id:4,
           name:"Tarang",
           price:50,
           img: coffee,
       },
       {
           id:5,
           name:"Nescafe Gold",
           price:50,
           img: coffee,
       },
       {
           id:6,
           name:"Folgers",
           price:50,
           img: coffee,
       }

  ])
  console.log(menu)

   return(
      <div>
       <div className="contain">
        <SideCat/>
      <div >
     <h2 className = "hide">h</h2>
     <div className='grid2'>
         
          {menu.map((Catprod)=>(
           
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
               <Button variant="primary" size="sm" style={{width:'80%',height:'fit-content', margin:'auto', marginBottom:'10px', backgroundColor:'#0277BD'}} onClick={()=>{ dispatch({type: 'ADD_TO_CART', id: Catprod.id, stock:Catprod.stockvalue,  product: Catprod})}}> Add to Cart </Button> 
              
           </div>
           ))}
       
           </div>
        </div>
           <div className="footer"> 
        <Footer />
      </div>
      </div>
      </div>
   )
  
}

export default Catproducts;