// import Categories from "./components/Categories";
// import Subcategories from "./components/Subcategories";
// import {  BrowserRouter,Route,Switch,Redirect} from 'react-router-dom';
// import Catproducts from "./components/Catproducts";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Login from "./components/Login";
// import ShoppingCart from "./components/Shoppingcartside";
// import AboutUs from "./pages/AboutUs"
// import ContactUs from "./pages/ContactUs"
// import React, { useState } from "react";
// import FAQs from "./pages/FAQs";
// import PrivacyPolicy from "./pages/PrivacyPolicy";
// import ResetPassword from "./components/ResetPassword";
// import Signup from "./components/Signup"
// import VerificationCode from "./components/VerificationCode"
// import FullShoppingCart from "./components/OpenShoppingcart"
// import AdminLogin from "./admin/Login"
// import AdminForgotPassword from "./admin/ForgotPassword"
// import AdminVC   from "./admin/VerficationCode"
// import AdminRP from "./admin/ResetPassword"
// import Checkout from "./components/Checkout"
// import {Cart} from "./components/Cart"
// import Final  from "./components/FinalCheckout"
// import {UserContext} from './UserContext';
// import  {useMemo} from 'react';
// import {useContext} from 'react';
// function App() {

//   const [categories, setCategories]=useState(
//   [
//     {
//       id:1,
//       name:'Groceries'
//     },
//     {
//       id:2,
//       name:'Crockery'
//     },
//     {
//       id:3,
//       name:'Women\'s Fashion'
//     },
//     {
//       id:4,
//       name:'Makeup'
//     },
//     {
//       id:5,
//       name:'Undergarments'
//     },
//     {
//       id:6,
//       name:'Stationery'
//     },
//   ]);
//   let element = false;
//   const [user, setUser]=useState(-1);
//   const providerValue= useMemo(  () => ({user,setUser}) , [user,setUser]);

//   return (
//     <CartProvider>
    
//     <div>
      
//       <Switch>
//         <Route exact path = '/CheckOut' component ={Checkout}  />
//         <Route exact path = '/Confirmation' component ={Final}  />
//       </Switch>
// <div className="contain">
     
//     <div className="header">
//       <Navbar />
      
//        </div>
//     <div className="nav"> 
//     <Categories categories={categories} />
//    </div>
//     <div className="content"> 
//        <Switch>
//         <Route exact path ='/categories/:subcategory' component={Subcategories}/>
//         <Route exact path ='/categories/:subcategory/:products' component={Catproducts}/>
//         <Route exact path ='/ShoppingCart' component={ShoppingCart}/>
//         <Route exact path = "/AboutUs"  component = {AboutUs}/>
//         <Route exact path = "/ContactUs"  component = {ContactUs}/>
//         <Route exact path = "/Privacypolicy"  component = {PrivacyPolicy}/>
//         <Route exact path = "/FAQs"  component = {FAQs}/>
//         <Route exact path ='/Login'  component={Login}/>
//         <Route exact path = '/ResetPassword' component ={ResetPassword} />
//         <Route exact path = '/Signup' component ={Signup} />
//         <Route exact path = '/VerificationCode' component ={VerificationCode} />
//         <Route exact path = '/FullShoppingCart' component ={FullShoppingCart} />
//         </Switch>
       
//         </div>
//     <div className="footer"> 
//     <Footer />
//     </div> 
//     </div> 
  
   
   
 
//     </div>
//         </CartProvider>

   
//   );
// }

// export default App;

import Categories from "./components/Categories";
import Subcategories from "./components/Subcategories";
import {  BrowserRouter,Route,Switch,Redirect} from 'react-router-dom';
import Catproducts from "./components/Catproducts";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/Login";
import ShoppingCart from "./components/Shoppingcartside";
import AboutUs from "./pages/AboutUs"
import ContactUs from "./pages/ContactUs"
import React, { useState, useEffect } from "react";
import FAQs from "./pages/FAQs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ResetPassword from "./components/ResetPassword";
import Signup from "./components/Signup"
import VerificationCode from "./components/VerificationCode"
import Cart from "./components/OpenShoppingcart"
import AdminLogin from "./admin/Login"
import AdminForgotPassword from "./admin/ForgotPassword"
import AdminVC   from "./admin/VerficationCode"
import AdminRP from "./admin/ResetPassword"
import { CartContextProvider } from "./components/CartContext";
//import Cart1 from "./components/Cart";
import Final  from "./components/FinalCheckout"
import Checkout from "./components/Checkout"
import fire from "./fire";



function App() {


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

  return (
    
    <div>
     <CartContextProvider>
      <Switch>
         <Route exact path = '/CheckOut' component ={Checkout}  />
         <Route exact path = '/Confirmation' component ={Final}  />
     </Switch>
     </CartContextProvider>
    <div className="contain">
  
    <div className="header">
      <Navbar />
       </div>
    <div className="nav"> 
    <Categories categories={arr} />
   </div>
    <div className="content"> 
    <CartContextProvider>
       <Switch>
        <Route exact path ='/categories/:subcategory' component={Subcategories}/>
        <Route exact path ='/categories/:subcategory/:products' component={Catproducts}/>
        <Route exact path ='/ShoppingCart' component={ShoppingCart}/>
        <Route exact path = "/AboutUs"  component = {AboutUs}/>
        <Route exact path = "/ContactUs"  component = {ContactUs}/>
        <Route exact path = "/Privacypolicy"  component = {PrivacyPolicy}/>
        <Route exact path = "/FAQs"  component = {FAQs}/>
        <Route exact path ='/Login'  component={Login}/>
        <Route exact path = '/ResetPassword' component ={ResetPassword} />
        <Route exact path = '/Signup' component ={Signup} />
        {/* <Route exact path = '/VerificationCode' component ={VerificationCode} /> */}

        <Route exact path = '/FullShoppingCart' component ={Cart} />
        </Switch>
        </CartContextProvider>

        </div>

    <div className="footer"> 
    <Footer />
    </div>
    </div>
    </div>
    
  )
}

export default App;
