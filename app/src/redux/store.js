
import {combineReducers,legacy_createStore,applyMiddleware,compose} from "redux"
import thunk from "redux-thunk"
import { productsReducer } from "./product/productReducer"
import { cartReducer } from "./cart/cartReducer"
import { authReducer } from "./auth/authReducer"

export const store = legacy_createStore(
    combineReducers({
        productManager : productsReducer,
        cartManager : cartReducer,
        auth : authReducer
    }),
    compose(applyMiddleware(thunk))
)


