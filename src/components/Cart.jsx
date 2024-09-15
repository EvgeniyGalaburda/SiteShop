import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

import style from '../styles/Cart.module.css'
import Button from './Button'
import {changeQuantity} from '../features/user/userSlice'


export default function Cart() {
    const {cart} = useSelector(({user}) => user);
    const dispatch = useDispatch();
    let price = 0;

    const change = (id, op) =>{
        dispatch(changeQuantity({id, op}))
    }

  return (
    <div className={style.cart}>
    <div className={style.carttitle}>Cart</div>
    <div className={style.list}>
        {cart.map((item, i) => {
            price += item.price * item.quantity;
            return(
            <li className={style.item} key={i}>
                <div className={style.count}>
                    <span onClick={() => change(item.id, -1)}>-</span>
                    <span>{item.quantity}</span>
                    <span onClick={() => change(item.id, 1)}>+</span>
                </div>
                <Link to={`/products/${item.id}`} className={style.image} style={{backgroundImage: `url(${item.image})`}}/>
                <h3 className={style.title} onClick={() => change(item.id)}>{item.title}</h3>
            </li>)
})}
    </div>
    <div className={style.bottom}>
    <a href="https://ih1.redbubble.net/image.4532039623.0625/st,small,507x507-pad,600x600,f8f8f8.u2.jpg" target='_blank'>
        <Button>Buy</Button>
    </a>
    <h3>{price.toFixed(2)}$</h3>
    </div>
    </div>
  )
}
