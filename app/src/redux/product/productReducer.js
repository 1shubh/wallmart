import { GET_PRODUCTS_ERROR, GET_PRODUCTS_LOADING, GET_PRODUCTS_SUCCESS } from "./productActionType"



let initalState = {
    loading: false,
    error: false,
    data: [],
}

export const productsReducer = (state=initalState,{type,payload}) => {
       switch(type) {
        case GET_PRODUCTS_LOADING : {
            return {
              ...state,
              loading : true,
              error : false
            }
        }
          case GET_PRODUCTS_SUCCESS : {
            return {
                ...state,
                loading : false,
                data : payload,
                error : false
            }
          }
          case GET_PRODUCTS_ERROR : {
            return {
                ...state,
                loading : false,
                error : true
            }
          }
          default : {
            return state;
          }
    }
       
} 