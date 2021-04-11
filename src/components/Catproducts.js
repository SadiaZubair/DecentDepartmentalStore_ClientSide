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


import { CartContext } from './CartContext'

// let shopping_cart = [];


// export const abc = (product) =>
//     {
//         let check = false;
//         for(var i=0; i<shopping_cart.length; i++){
//             if(shopping_cart[i].name == product.name)
//             {
//                 shopping_cart[i].quantity+=1;
//                 check = true;
//                 return;
//             }
//         }
//         if(check==true){
//         console.log(shopping_cart)
//         }
//         else
//         {
//             shopping_cart.push({"name": product.name, "price": product.price, "quantity":1})
//             console.log(shopping_cart)

//         }

//         // <Cart cart = {shopping_cart} />

//         return (
//             <div>
//             <Cart1 cart = {shopping_cart} />
//             </div>
//         //<Cart cart = {shopping_cart} />
//         //<Link to={{ pathname: `/FullShoppingCart`, data: shopping_cart }}></Link>
//         )
       
       
//     }



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
             price: doc.data().price,
         }
     )
     console.log(list_prod)
     
   });
   setMenu(list_prod);


   }
   useEffect(() => {

     searchcatProduct();
   },[]);
   
  console.log("helo")
  //const data = useContext(CartContext);
  //console.log(data)
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

//    {Catproducts.map((Catproducts)=>(
//     <h4 key={Catproducts.id}> {Catproducts.name} </h4>
//     ))}
//    // with backend connection Catproductsegory prop should be used to fetch actual data from a category.
   return(
      <>
     <div className='grid2'>
   
          {menu.map((Catprod)=>(
           
           <div className="box2" >
            <div className="holder">
                   <img className="b" src={Catprod.img}  />
                </div>
               <div className="title">
                    {Catprod.name}</div>
               <div className="price">
                  Rs. {Catprod.price}
               </div>
               <Button variant="primary" size="sm" style={{width:'80%',height:'fit-content', margin:'auto', marginBottom:'10px', backgroundColor:'#0277BD'}} onClick={()=>{ dispatch({type: 'ADD_TO_CART', id: Catprod.id,  product: Catprod})}}> Add to Cart </Button> 
              
           </div>
           ))}
       
           </div>
      
      </>
   )
  
}

export default Catproducts;