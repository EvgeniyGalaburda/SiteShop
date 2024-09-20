import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

import {ROUTES} from '../utils/routes.js'

import Home from './Home.jsx'
import SingleProduct from './SingleProduct.jsx'
import Cart from './Cart.jsx'
import SingleCategory from './SingleCategory.jsx'
import AllProducts from './AllProducts.jsx'

export default function AppRoutes() {
  const {pathname} = useLocation();

  useEffect(() => {
    window.scrollTo(0,0);
  }, [pathname])

  return (
    <Routes>
      <Route index element={<Home/>}/>
      <Route path={ROUTES.PRODUCT} element={<SingleProduct/>}/>
      <Route path={ROUTES.CART} element={<Cart/>}/>
      <Route path={ROUTES.CATEGORY} element={<SingleCategory/>}/>
      <Route path={ROUTES.PRODUCTS} element={<AllProducts/>}/>
    </Routes>
  )
}
