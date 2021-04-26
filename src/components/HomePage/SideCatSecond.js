import React, { useState, useEffect } from "react";
import Categories from "../Categories";
import fire from '/Users/sadia/Desktop/decent/src/fire.js'
import Navbar from "../Header/Navbar"
import Ticker from './Ticker'
import BreadCrumbs from './Breadcrumbs'
export default function SideCat(){

    const [arr, setArr]=useState([]);
    var array= new Array()
		
		const searchCat = async () => {
    var db=fire.firestore();
		const citiesRef = db.collection('category');
		const snapshot = await citiesRef.get();
		if (snapshot.empty) {
  		console.log('No matching documents.');
  		return;
		}  
		snapshot.forEach(doc => {
  		array.push(doc.id)
  		console.log(doc.id)		});
      setArr(array);



		}
    useEffect(() => {
   
      
      searchCat();
      
      
    },[]);

  return(
    
    <>
  
   
    <div className="header">
    <Ticker />
      <Navbar />
       </div>

    <div className="nav1"> 
   
    <Categories categories={arr} />
   </div>
   
   </>
  
  )
}