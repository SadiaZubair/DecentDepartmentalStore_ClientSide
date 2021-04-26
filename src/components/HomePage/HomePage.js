import SideCat from './SideCat'
import Footer from '../Footer'
import Slide from './Slide'
import Jeans from  './images/Jeans.png'
import Nutella from  './images/Nutella.png'
import Phone from './images/headphone.jpg'
import xbox  from './images/xbox.jpg'
import remote from './images/remote.jpg'
import  ps5case from './images/ps5case.jpg'
import './Slide.css'
import Button from 'react-bootstrap/Button';
import React, { useContext, useState, useEffect } from 'react'
import { CartContext } from '/Users/sadia/Desktop/decent/src/components/CartContext.js'
export default function HomePage(){
    
  const [catprod, setcatprod]=useState([
     {
         id:1,
         name:"Jeans",
         price:1000,
         img: Jeans,
         discountedprice:1000,
     },
     {
      id:2,
      name:"Nutella",
      price:50,
      discountedprice:50,
      img: Nutella,
      },
      {
          id:3,
          name:"PS V Case",
          price:5000,
          discountedprice:5000,
          img: ps5case,
      },
      {
          id:4,
          name:"GTA V",
          price:150,
          discountedprice:150,
          img: xbox,
      },
     
      {
          id:5,
          name:"Remote",
          price:500,
          discountedprice:500,
          img: remote ,
      }

 ])
 const {dispatch} = useContext(CartContext);

    return (
        <div>
         <div className="contain">
        <SideCat/> 
        <div>
         <Slide className="d-block"/>
         <div>
         <div className='align'> Featured Products </div>
         <div  className='grid1'>
         {catprod.map((Catprod)=>(
           
           <div className="box2" >
            <div className="holder">
                   <img className="b" src={Catprod.img}  />
                </div>
               <div className="title">
                    {Catprod.name}</div>
               <div className="price">
                    <div>Rs. {Catprod.price}</div>
                  
               </div>
               <Button variant="primary" size="sm" style={{width:'80%',height:'fit-content', margin:'auto', marginBottom:'10px', backgroundColor:'#0277BD'}} onClick={()=>{ dispatch({type: 'ADD_TO_CART', id: Catprod.id, stock:100,  product: Catprod})}} > Add to Cart </Button> 
           </div>
           ))}
           </div>
         </div>
         </div>
         
        <div className="footer"> 
        <Footer />
        </div>
        </div>
        </div>




    )


}
