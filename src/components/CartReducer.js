
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

export const CartReducer = (state, action) => {

    const { shoppingCart, totalPrice, totalQty } = state;

    let product;
    let index;
    let updatedPrice;
    let updatedQty;

    switch (action.type) {

        case 'ADD_TO_CART':

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
                window.alert("Item added in cart");
                product = action.product;
                product['qty'] = 1;
                product['TotalProductPrice'] = product.ProductPrice * product.qty;
                updatedQty = totalQty + 1;
                updatedPrice = totalPrice + product.ProductPrice;
                return {
                    shoppingCart: [product, ...shoppingCart], totalPrice: updatedPrice, totalQty: updatedQty
                }
            
            break;



        case 'INC':
           
            product = action.cart;
            product.qty = ++product.qty;
            product.TotalProductPrice = product.qty * product.ProductPrice;
            updatedQty = totalQty + 1;
            updatedPrice = totalPrice + product.ProductPrice;
            index = shoppingCart.findIndex(cart => cart.name === action.name);
            shoppingCart[index] = product;
            return {
                shoppingCart: [...shoppingCart], totalPrice: updatedPrice, totalQty: updatedQty
            }
            break;

        case 'DEC':
            product = action.cart;
            if (product.qty > 1) {
                product.qty = product.qty - 1;
                product.TotalProductPrice = product.qty * product.ProductPrice;
                updatedPrice = totalPrice - product.ProductPrice;
                updatedQty = totalQty - 1;
                index = shoppingCart.findIndex(cart => cart.name === action.name);
                shoppingCart[index] = product;
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
            console.log(filtered);
            product = action.cart;
            updatedQty = totalQty - product.qty;
            updatedPrice = totalPrice - product.qty * product.ProductPrice;
            return {
                shoppingCart: [...filtered], totalPrice: updatedPrice, totalQty: updatedQty
            }
            break;

        

        default:
            return state;

    }

}
