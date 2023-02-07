import {ADD_TO_CART,DELETE_ITEM} from "../cart/cartActionType"


const initialState = {
    cart : JSON.parse(localStorage.getItem("cart")) || []
}

export const cartReducer = (state=initialState,{type,payload}) => {
   switch (type) {
    case ADD_TO_CART : {
        return {
            cart : [...payload]
        }
    }
    case DELETE_ITEM : {
        return {
            cart : [...payload]
        }
    }
    default : {
        return state
    }
   }
}