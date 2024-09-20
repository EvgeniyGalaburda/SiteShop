import React, { useEffect } from 'react'

import style from '../styles/Products.module.css'
import { Link } from 'react-router-dom'
import { suffle } from '../utils/common';
import { useDispatch } from 'react-redux';



export default function Products({title, products = [], amount}) {
    const list = [...products].sort((a,b) => b.rating.rate - a.rating.rate).slice(0, amount);


  return (
    <section className={style.products}>
        {title && <h2>{title}</h2>}

        <div className={style.list}>
        {list.map(({id, image, title, category, price}) => (
            <Link to={`/products/${id}`}  key={id} className={style.product} >
                <div className={style.image}><img src={image} alt={title}  /></div>
                <div className={style.wrapper}>
                    <div className={style.top}>
                    <h3 className={style.title} title={title}>{title}</h3>
                    <div className={style.cat}>{category}</div>
                    </div>
                    <div className={style.info}>
                        <div className={style.prices}>
                            <div className={style.price}>{Math.round(price)}$</div>
                            <div className={style.oldPrice}>{Math.floor(price * 1.2)}$</div>
                        </div>
                    <div className={style.purchases}>
                        {Math.floor(Math.random() * 20 + 1)} purchased
                    </div>
                    </div>
                    
                </div>
            </Link>
        ))}
        </div>
    </section>
  )
}
