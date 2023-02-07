import {ADD_TO_CART, DELETE_ITEM} from "../cart/cartActionType"

export const AddToCart = (product) =>(dispatch) => {
    //if cart already exist in loacl storage, use it, else set it to empty array
    const cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];

    //check if duplicates
    const duplicates = cart.filter((ele) => ele.id === product.id)
    //if no duplicates
    if(duplicates.length === 0) {
        //prep product data
        const productToAdd = {
            ...product,
            count : 1
        }
        //add product data to cart
        cart.push(productToAdd)

        //add to local storage

        localStorage.setItem("cart",JSON.stringify(cart))

       //add cart to redux
       dispatch({
         type : ADD_TO_CART,
         payload : cart
       })
    }
}

export const deleteItem = (product) =>(dispatch) => {
    const cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];

    const updateCart = cart.filter((cartItem)=> cartItem.id !== product.id);

    localStorage.setItem("cart",JSON.stringify(updateCart))

    dispatch({
      type : DELETE_ITEM,
      payload : updateCart
    })
}