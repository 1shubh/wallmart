import React from 'react'
import {Route,Routes} from "react-router-dom"
import RequiredAuth from '../hoc/RequiredAuth'
import { Cart } from '../Pages/Cart'
import { Checkout } from '../Pages/Checkout'
import { Home } from '../Pages/Home'
import { Login } from '../Pages/Login'
import { Products } from '../Pages/Products'


export const AllRoutes = () => {
  return (
    <div>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='product' element={<Products/>}/>
          <Route path='cart' element={
            <RequiredAuth>
              <Cart/>
            </RequiredAuth>
          } />
          <Route path='cart/checkout' element={<Checkout/>}/>
          <Route path="login" element={<Login/>} />
          <Route path="cart/login" element={<Login/>} />
      </Routes>
    </div>
  )
}
