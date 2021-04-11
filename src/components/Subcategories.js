import React, { useState, useEffect } from "react";
import {NavLink,useParams,useHistory,Redirect} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { CardDeck } from "react-bootstrap";
import CardGroup from 'react-bootstrap/CardGroup'
 import cocomo from "./decentlogo.png";
import styled from 'styled-components';
import "./subcategories.css";
import fire from "../fire";
import category from './Categories'
const Styles = styled.div`
.card-group{
    text-align: center;
}
  
`;

function Subcategories({ match }) {


let subcategory = match.params.subcategory;


    const [menu, setMenu]=useState([{
        name:'',
        img:'',
      } , ]);
    var array= new Array()
          var db=fire.firestore();
          const searchSubcat = async (cat) => {
          const citiesRef = db.collection('category').doc(cat).collection('subcategory');
          const snapshot = await citiesRef.get();
          if (snapshot.empty) {
            console.log('No matching documents.');
            return;
          }  
  
          snapshot.forEach(doc => {
            array.push({
                name:doc.id,
                img:doc.data().imagelink,
              })
            console.log(doc.id)		});
        
        setMenu(array);
  
          }
     
      useEffect(() => {
        searchSubcat(subcategory);
       
      },[]);


    let history= useHistory();
   
    var name;
   
    const [subcat, setSubcat] = useState([
        {
            id: 1,
            name: "Staples",
            img: cocomo
        },
        {
            id: 2,
            name: "Oil & Ghee",
            img: cocomo
        },
        {
            id: 3,
            name: "Tea & Coffee",
            img: cocomo
        },
        {
            id: 4,
            name: "Dry Fruits",
            img: cocomo
        },
        {
            id: 5,
            name: "Dairy and Fresh Bakery",
            img: cocomo
        },
        {
            id: 6,
            name: "Packaged Foods",
            img: cocomo
        },
        {
            id: 3,
            name: "Tea & Coffee",
            img: cocomo
        },
        {
            id: 4,
            name: "Dry Fruits",
            img: cocomo
        },
        {
            id: 5,
            name: "Dairy and Fresh Bakery",
            img: cocomo
        },
        {
            id: 6,
            name: "Packaged Foods",
            img: cocomo
        }
    ]);
    function onClickHandler( subcat,e){
        e.preventDefault()
        const path="/categories/"+subcategory+"/"+subcat.name;
        history.push(path);
    }
     
    //    // with backend connection subcategory prop should be used to fetch actual data from a category.
    return (
        <>
            <div className='grid1'>
           {menu.map((subcat)=>(
            <div className="box1" onClick={(e)=>onClickHandler(subcat,e)}>
               
                    <img className="a" src={subcat.img}  />
            
                <h7 className="title1"> {subcat.name}</h7>
            </div>
            ))}
            </div>
           
           
    

        </>
    );

}

export default Subcategories;