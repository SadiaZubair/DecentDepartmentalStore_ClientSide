
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// toast.configure();

// export const CartReducer = (state, action) => {

//     const { shoppingCart, totalPrice, totalQty } = state;

//     let product;
//     let index;
//     let updatedPrice;
//     let updatedQty;

//     switch (action.type) {

//         case 'ADD_TO_CART':
//             //console.log(shoppingCart)

//             let check = false
//             for(var i =0 ; i <shoppingCart.length; i++)
//             {
//                 if(shoppingCart[i].name == action.product.name)
//                 {
//                     //check=1;
//                     window.alert("Item already in cart");
//                     return state;
//                 }
//             }
//                 window.alert("Item added in cart");
//                 product = action.product;
//                 product['qty'] = 1;
//                 product.discountedprice = product.discountedprice.toFixed()
//                 product['TotalProductPrice'] = ((product.discountedprice) * product.qty);
//                 updatedQty = totalQty + 1;
//                 updatedPrice = totalPrice + (product.discountedprice);
//                 console.log(updatedPrice)
//                 return {
//                     shoppingCart: [product, ...shoppingCart], totalPrice: updatedPrice, totalQty: updatedQty
//                 }
            
//             break;



//         case 'INC':
           
//             product = action.cart;
//             product.qty = ++product.qty;
//             product.discountedprice = product.discountedprice.toFixed()
//             product.TotalProductPrice = product.qty * product.discountedprice;
//             updatedQty = totalQty + 1;
//             updatedPrice = totalPrice + product.discountedprice;
//             console.log(updatedPrice)
//             index = shoppingCart.findIndex(cart => cart.name === action.name);
//             shoppingCart[index] = product;
//             return {
//                 shoppingCart: [...shoppingCart], totalPrice: updatedPrice, totalQty: updatedQty
//             }
//             break;

//         case 'DEC':
//             product = action.cart;
//             if (product.qty > 1) {
//                 product.qty = product.qty - 1;
//                 product.discountedprice = product.discountedprice.toFixed()
//                 product.TotalProductPrice = product.qty * product.discountedprice;
//                 updatedPrice = totalPrice - product.discountedprice;
//                 updatedQty = totalQty - 1;
//                 index = shoppingCart.findIndex(cart => cart.name === action.name);
//                 shoppingCart[index] = product;
//                 return {
//                     shoppingCart: [...shoppingCart], totalPrice: updatedPrice, totalQty: updatedQty
//                 }
//             }
//             else {
//                 return state;
//             }
//             break;

//         case 'DELETE':
//             window.alert("Product(s) removed from the Cart !!")
//             console.log("helloo")
//             //const filtered = shoppingCart.filter(product => product.name !== action.name);
//             let filtered = []
//             for(var i =0 ; i <shoppingCart.length; i++)
//             {
//                 if(shoppingCart[i].name != action.cart.name)
//                 {
//                     filtered.push(shoppingCart[i])
//                 }
//             }
//             console.log(filtered);
//             product = action.cart;
//             updatedQty = totalQty - product.qty;
//             updatedPrice = totalPrice - product.qty * product.discountedprice;
//             return {
//                 shoppingCart: [...filtered], totalPrice: updatedPrice, totalQty: updatedQty
//             }

        

//         default:
//             return state;

//     }

// }



import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from 'react';


toast.configure();

export const CartReducer = (state, action) => {


    let { shoppingCart, totalPrice, totalQty } = state;


    let product;
    let index;
    let updatedPrice;
    let updatedQty;
    let stock;

    switch (action.type) {

        case 'ADD_TO_CART':
            //console.log(shoppingCart)

            let check = false
            for(var i =0 ; i <shoppingCart.length; i++)
            {
                if(shoppingCart[i].name == action.product.name)
                {
                    //check=1;
                    window.alert("Item already in cart");
                    return state;
                }
            }
            if(shoppingCart.length==0)
            {
                totalQty=0
                totalPrice=0
            }
            
                product = action.product;
                stock = action.stock
                console.log(stock)
                if(stock <= 0)
                {
                    window.alert("Not enough items available.")
                    return state
                }
                window.alert("Item added in cart");

                //console.log("stock", action.product.stockvalue)

                product['qty'] = 1;
                product['TotalProductPrice'] = product.discountedprice * product.qty;
                updatedQty = totalQty + 1;
                updatedPrice = totalPrice + product.discountedprice
                console.log(updatedPrice)
                //let sc = [product, ...shoppingCart]
                localStorage.setItem("cart", JSON.stringify([product, ...shoppingCart]));
                localStorage.setItem("price", updatedPrice);
                localStorage.setItem("quantity", updatedQty);
                //console.log("storage", localStorage)
                return {
                    shoppingCart: [product, ...shoppingCart], totalPrice: updatedPrice, totalQty: updatedQty
                }
            
            break;



        case 'INC':

            //console.log("values", totalPrice, totalQty)
           
            product = action.cart;
            //let s = action.stock
            //console.log(s)
            if(product.qty<product.stockvalue)
            {
            product.qty = ++product.qty;
            
            console.log(product.qty)
            product.TotalProductPrice = product.qty * product.discountedprice;
            updatedQty = totalQty + 1;
            updatedPrice = totalPrice + product.discountedprice;
            //console.log(updatedPrice)
            console.log(product.stockvalue)
            index = shoppingCart.findIndex(cart => cart.name === action.name);
            shoppingCart[index] = product;
            //let sc1 = [...shoppingCart]
            localStorage.setItem("cart", JSON.stringify([...shoppingCart]));
            //localStorage.setItem("cart", JSON.stringify([...shoppingCart]));
            localStorage.setItem("price", (updatedPrice));
            localStorage.setItem("quantity", updatedQty);
            return {
                shoppingCart: [...shoppingCart], totalPrice: updatedPrice, totalQty: updatedQty
            }
        }
        else
        {
            window.alert("Not enough items available.")
            return state;
        }
            break;

        case 'DEC':
            product = action.cart;
            if (product.qty > 1) {
                product.qty = product.qty - 1;
                product.TotalProductPrice = product.qty * product.discountedprice;
                updatedPrice = totalPrice - product.discountedprice;
                updatedQty = totalQty - 1;
                index = shoppingCart.findIndex(cart => cart.name === action.name);
                shoppingCart[index] = product;
                //let sc2 = [...shoppingCart]
                localStorage.setItem("cart", JSON.stringify([...shoppingCart]));
                //localStorage.setItem("cart", JSON.stringify([...shoppingCart]));
                localStorage.setItem("price", JSON.stringify(updatedPrice));
                localStorage.setItem("quantity", updatedQty);
                return {
                    shoppingCart: [...shoppingCart], totalPrice: updatedPrice, totalQty: updatedQty
                }
            }
            else {
                return state;
            }
            break;

        case 'DELETE':
            window.alert("Product(s) removed from the Cart !!")
            console.log("helloo")
            //const filtered = shoppingCart.filter(product => product.name !== action.name);
            let filtered = []
            for(var i =0 ; i <shoppingCart.length; i++)
            {
                if(shoppingCart[i].name != action.cart.name)
                {
                    filtered.push(shoppingCart[i])
                }
            }
            //console.log(filtered);
            product = action.cart;
            updatedQty = totalQty - product.qty;
            updatedPrice = totalPrice - product.qty * product.discountedprice;
            //let sc3 = [...filtered]
            localStorage.setItem("cart", JSON.stringify([...filtered]));
            //localStorage.setItem("cart", JSON.stringify([...filtered]));
            localStorage.setItem("price", (updatedPrice));
            localStorage.setItem("quantity", updatedQty);
            return {
                shoppingCart: [...filtered], totalPrice: updatedPrice, totalQty: updatedQty
            }

            case 'Storage':
                
                return {
                    shoppingCart: JSON.parse(localStorage.getItem("cart")), totalPrice: parseFloat(localStorage.getItem("price")), totalQty: parseFloat(localStorage.getItem("quantity"))
                }
        

        default:
            localStorage.setItem("cart", JSON.stringify(shoppingCart));
            localStorage.setItem("price", (totalPrice));
            localStorage.setItem("quantity", totalQty);
            // return {
            //     shoppingCart: JSON.parse(localStorage.getItem("cart")), totalPrice: parseInt(localStorage.getItem("price")), totalQty: parseInt(localStorage.getItem("quantity"))
            //     }
            return state

    }

}
