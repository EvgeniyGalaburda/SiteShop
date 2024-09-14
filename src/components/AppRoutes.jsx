import React from 'react'
import { Routes, Route } from 'react-router-dom'

import {ROUTES} from '../utils/routes.js'

import Home from './Home.jsx'
import SingleProduct from './SingleProduct.jsx'
import Cart from './Cart.jsx'

export default function AppRoutes() {
  return (
    <Routes>
      <Route index element={<Home/>}/>
      <Route path={ROUTES.PRODUCT} element={<SingleProduct/>}/>
      <Route path={ROUTES.CART} element={<Cart/>}/>
    </Routes>
  )
}
