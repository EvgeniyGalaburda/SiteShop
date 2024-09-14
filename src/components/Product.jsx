import React from 'react'
import { Link } from 'react-router-dom'
import { IoArrowBackSharp } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';

import style from '../styles/Product.module.css'
import Button from './Button'
import { ROUTES } from '../utils/routes'
import StarRating from './StarRating'
import { addItemToCart, addItemToFavourite } from '../features/user/userSlice';

const Product = (item) => {
  const dispatch = useDispatch();
  const {currentUser} = useSelector(({user}) => user);

    const {title, price, image, description, rating} = item;
    if(!rating) return null;
    const {rate, count} = rating;

    const addToCart = () => {
      if(currentUser)
      dispatch(addItemToCart(item));
    }

    const addToFavourite = () => {
      dispatch(addItemToFavourite(item));
    }
     
  return (
    <section className={style.product}>
        <div className={style.image} style={{backgroundImage: `url(${image})`}}/>
        <div className={style.info}>
            <div className={style.top}>
            <h1 className={style.title}>{title}</h1>
            <div className={style.price}>{price}$</div>
            <p className={style.desc}>{description}</p>

            <div className={style.actions}>
                <Button onClick={addToCart}>Add to cart</Button>
                <Button onClick={addToFavourite} color={'gray'}>Add to favourites</Button>
            </div>

            <div className={style.rating}>
               <StarRating rate={rate}/>
               <div className={style.count}>Amount: {count}</div>
            </div>
            </div>

            <Link className={style.home} to={ROUTES.HOME}>
            <IoArrowBackSharp />
            Return to store
            </Link>
        </div>
    </section>
  )
}

export default Product