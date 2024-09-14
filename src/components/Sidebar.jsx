import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import style from '../styles/Sidebar.module.css'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Sidebar() {
  const {list, isLoading} = useSelector(({categories}) => categories);

  return (
    <div className={style.sidebar}>
      <div className={style.title}>CATEGORIES</div>
      <nav>
        <ul className={style.menu}>
          {isLoading?<Skeleton className={style.skeleton} count={5} />:
          list.map((cat, id) => (
            <li key={id}>
              <NavLink className={({isActive}) => `${style.cat} ${isActive ? style.active:''}`} to={`/categories/${id+1}`}>{cat}</NavLink>
          </li>
          ))}
          
        </ul>
      </nav>

      <div className={style.footer}>
        <a href='/help' className={style.link}>Help</a>
        <a href='/terms' className={style.link} style={{textDecoration: 'underline'}}>Terms&Conditions</a>
      </div>
    </div>
  )
}
