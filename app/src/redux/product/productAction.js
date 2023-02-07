
import { GET_PRODUCTS_SUCCESS,GET_PRODUCTS_ERROR, GET_PRODUCTS_LOADING} from "./productActionType";
// import { getProductDataAPI } from "./productApi";

import axios from "axios";
import { type } from "@testing-library/user-event/dist/type";

export const getProduct = () => (dispatch) => {
  dispatch({type:GET_PRODUCTS_LOADING});
    axios.get("https://server-rp99.onrender.com/wallmart?_page=1&_limit=10")
    .then((res) => {
      return dispatch({ 
        type: GET_PRODUCTS_SUCCESS, 
        payload: res.data 
      });
    })
    .catch(() => dispatch({ type: GET_PRODUCTS_ERROR }));
}
export const getAllProduct = () => (dispatch) => {
  dispatch({type:GET_PRODUCTS_LOADING});
    axios.get("https://server-rp99.onrender.com/wallmart")
    .then((res) => {
      return dispatch({ 
        type: GET_PRODUCTS_SUCCESS, 
        payload: res.data 
      });
    })
    .catch(() => dispatch({ type: GET_PRODUCTS_ERROR }));
}