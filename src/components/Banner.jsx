import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

import style from '../styles/Home.module.css'
import Button from './Button'
import SALE from '../images/newyear_sale.jpg'

export default function Banner() {



  return (
    <section className={style.banner}>
        <div className={style.left}>
            <p className={style.content}>
                NEW YEAR 
                <span>SALE</span>
            </p>
            <NavLink to={'/products'}>
                <Button color={'rgb(230, 87, 140)'}>See more</Button>
            </NavLink>
        </div>
        <div className={style.right} style={{backgroundImage:`url(${SALE})`}}>
            <p className={style.discount}>
                Save up to <span>50%</span> off
            </p>
        </div>
    </section>
  )
}
