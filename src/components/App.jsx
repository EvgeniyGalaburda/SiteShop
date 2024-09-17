import React, { useEffect } from 'react'
import {SkeletonTheme} from 'react-loading-skeleton'

import AppRoutes from './AppRoutes'
import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar'
import UserForm from './UserForm'

import { useDispatch } from 'react-redux'
import { getCategories } from '../features/caterogies/categorisSlice'
import { getProducts } from '../features/products/productSlice'

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProducts());
 
  }, [dispatch])

  return (
    <SkeletonTheme baseColor='#313131' highlightColor='#525252'>
             <UserForm/>
      <div className="app">
       <Header/>
       <div className="container">
        <Sidebar/>
        <AppRoutes/>
       </div>
       <Footer/>
    </div>
    </SkeletonTheme>
    
  )
}

export default App