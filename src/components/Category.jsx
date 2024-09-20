import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useGetCategoryQuery } from '../features/api/apiSlice';

import Products from './Products';

export default function Category() {
    const {id} = useParams();

    const {data, isLoading, isFetching, isSuccess} = useGetCategoryQuery({id});

    useEffect(() =>{
        if(!isFetching && !isLoading && !isSuccess){
            navigate(ROUTES.HOME);
        }
    },[isLoading, isFetching, isSuccess]);


  return (
    <>
    <Products products={data} title={id}/>
    </>
  )
}
