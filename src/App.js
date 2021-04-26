import Categories from "./components/Categories";
import Subcategories from "./components/Subcategories";
import {  BrowserRouter,Route,Switch,Redirect} from 'react-router-dom';
import Catproducts from "./components/Catproducts";
import Navbar from "./components/Header/Navbar";
import Footer from "./components/Footer";
import Login from "./components/Credentials/Login";
import ShoppingCart from "./components/Cart/Shoppingcartside";
import AboutUs from "./pages/AboutUs"
import ContactUs from "./pages/ContactUs"
import React, { useState, useEffect } from "react";
import FAQs from "./pages/FAQs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ResetPassword from "./components/Credentials/ResetPassword";
import Signup from "./components/SignUp/Signup"
import VerificationCode from "./components/Credentials/VerificationCode"
import Cart from "./components/Cart/OpenShoppingcart"
import { CartContextProvider } from "./components/CartContext";
import Final  from "./components/CheckOut/FinalCheckout"
import Checkout from "./components/CheckOut/Checkout"
import fire from "./fire";
import TrackOrder from "./components/TrackOrder"
import Home from './components/HomePage/HomePage'
import SuccessfulSignup from "./components/Credentials/SuccessfulSignup";
import { CircularProgress } from "@material-ui/core";
// import firebase_integration from "./fire";
import Viewdetails from './components/Viewdetails'
function App() {

  

  return (
    
    <>
    <CartContextProvider>
   <Route exact path ='/' component={Home}/>
    
       <Switch>
       <Route exact path ='/categories' component={Subcategories}/>
        <Route exact path ='/categories/:subcategory' component={Subcategories}/>
        <Route exact path ='/categories/:subcategory/:products' component={Catproducts}/>
        <Route exact path ='/Track Order' component={TrackOrder}/>   
        <Route exact path ='/ShoppingCart' component={ShoppingCart}/>
        <Route exact path ='/SuccessfulSignUp' component={SuccessfulSignup}/>
        <Route exact path = "/About Us"  component = {AboutUs}/>
        <Route exact path = "/Contact Us"  component = {ContactUs}/>
        <Route exact path = "/Privacy Policy"  component = {PrivacyPolicy}/>
        <Route exact path = "/FAQs"  component = {FAQs}/>
        <Route exact path ='/Login'  component={Login}/>
        <Route exact path = '/ResetPassword' component ={ResetPassword} />
        <Route exact path = '/Signup' component ={Signup} />
        <Route exact path ='/Home' component={Home}/>
        <Route exact path = '/Confirmation' component ={Final}  />
        <Route exact path = '/CheckOut' component ={Checkout}  />
        <Route exact path = '/Full Shopping Cart' component ={Cart} />
        <Route exact path = '/View Orders/:id' component ={Viewdetails} />
        </Switch>
        </CartContextProvider>
    </>
   
    
  )
}

export default App;
