import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { CiTrash } from "react-icons/ci";

import style from '../styles/Cart.module.css'
import Button from './Button'
import {changeQuantity, deleteItemFromCart} from '../features/user/userSlice'


export default function Cart() {
    const {cart} = useSelector(({user}) => user);
    const dispatch = useDispatch();
    let price = 0;

    const change = (id, op) =>{
        dispatch(changeQuantity({id, op}))
    }

    const deleteItem = (id) => {
        dispatch(deleteItemFromCart(id));
    }

  return (
    <div className={style.cart}>
    <div className={style.carttitle}>Cart</div>
    <div className={style.list}>
        {cart.map((item, i) => {
            price += item.price * item.quantity;
            return(
            <li className={style.item} key={i}>
                <div className={style.top}>
                    <div className={style.count}>
                        <span onClick={() => change(item.id, -1)}>-</span>
                        <span>{item.quantity}</span>
                        <span onClick={() => change(item.id, 1)}>+</span>
                    </div>
                    <CiTrash onClick={() => deleteItem(item.id)} className={style.trash}/>
                </div>
                <Link to={`/products/${item.id}`} className={style.image} draggable style={{backgroundImage: `url(${item.image})`}}/>
                <h3 className={style.title}>{item.title}</h3>
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
