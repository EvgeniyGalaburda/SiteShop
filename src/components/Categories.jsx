import React from 'react'

import style from '../styles/Categories.module.css'
import { Link } from 'react-router-dom';

import {images} from '../images/categories'

export default function Categories({title, products = [], amount}) {
    const list = Array.from(products).slice(0, amount);


  return (
    <section className={style.section}>
        <h2 className={style.h2}>{title}</h2>
        <div className={style.list}>
            {list.map((item, id) => (
                <Link key={id} to={`/categories/${item}`} className={style.item}>
                    <div className={style.image}><img src={images[id].image} alt={item}  /></div>
                    <h3 className={style.title}>{item}</h3>
                </Link>
            ))}
        </div>
    </section>
  )
}
