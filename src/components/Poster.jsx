import React from 'react'

import style from '../styles/Home.module.css'
import BG from '../images/monitor.png'
import Button from './Button'
import { Link } from 'react-router-dom'

export default function Poster() {
  return (
    <section className={style.home}>
        <div className={style.title}>BIG SALE 30%</div>
        <div className={style.product}>
            <div className={style.text}>
              <div className={style.subtitle}>The bestseller of 2024</div>
              <h1 className={style.head}>Acer SB220Q bi 21.5 inches Full HD</h1>
              <Link  to={`/products/13`}><Button>Shop now</Button></Link>
            </div>
        <div className={style.image}>
            <img src={BG} alt="" />
        </div>
        </div>
    </section>
  )
}
