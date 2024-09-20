import React from 'react'
import Products from './Products'
import Poster from './Poster';

import { useSelector } from 'react-redux'

export default function AllProducts() {

    const {list} = useSelector(({products}) => products);

  return (
    <>
    <Poster/>
    <Products products={list} title={"All products"}/>
    </>
  )
}
