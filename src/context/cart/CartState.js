import { useReducer } from "react";
import CartContext from './CartContext';
import CartReducer from './CartReducer';
import {SHOW_HIDE_CART,ADD_TO_CART,REMOVE_ITEM} from '../Types';

const CartState = ({children}) =>{
    const initialState = {
        showCart: false,
        cartItem: [],
    };
    //state hook
    const [state,dispatch] = useReducer(CartReducer,initialState);

    //add item to cart
    const addToCart = item =>{
        dispatch({type: ADD_TO_CART,payload: item})
    }

    // show hide cart
    const showHideCart = () =>{
        dispatch({type: SHOW_HIDE_CART})
    }

    //remove item from cart
    const removeItem = id =>{
        dispatch({type: REMOVE_ITEM, payload: id})
    }
    return <CartContext.Provider value = {{
        showCart: state.showCart,
        cartItem: state.cartItem,
        addToCart,
        showHideCart,
        removeItem,
    }}>{children}</CartContext.Provider>
        
    
}

export default CartState