import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";

import { useNavigate, useParams } from 'react-router-dom'
import { useGetProductQuery } from '../features/api/apiSlice.js';
import { ROUTES } from '../utils/routes.js';
import Product from './Product.jsx';
import Products from './Products.jsx';
import {getRelatedProducts} from '../features/products/productSlice.js';

export default function SingleProduct() {
  const dispatch = useDispatch();
const {id} = useParams();
const navigate = useNavigate();
const {data, isLoading, isFetching, isSuccess} = useGetProductQuery({id});
const {related} = useSelector(({products}) => products)



useEffect(() =>{
    if(!isFetching && !isLoading && !isSuccess){
        navigate(ROUTES.HOME);
    }
},[isLoading, isFetching, isSuccess]);


useEffect(() =>{
  if(isSuccess) dispatch(getRelatedProducts(data));
},[data, dispatch, isSuccess])

  return (<>
  <Product {...data}/>
  <Products products={related} amount={5} title='Related'/>
  </>
  )
}
