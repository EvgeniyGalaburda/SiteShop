import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import style from '../styles/Sidebar.module.css'
import { NavLink} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { IoIosCloseCircleOutline } from "react-icons/io";
import { toggleCat } from '../features/caterogies/categorisSlice'


export default function Sidebar() {
  const dispatch = useDispatch();
  const {showForm, list, isLoading} = useSelector(({categories}) => categories);

  const showingForm = (bool) => {
    dispatch(toggleCat(bool));
  }

  return (
    <div className={!showForm?style.sidebar:`${style.sidebar} ${style.active}`}>
      <div className={style.title}><h3>CATEGORIES</h3> <IoIosCloseCircleOutline onClick={() => showingForm(false)} className={style.close}/> </div>

        <ul className={style.menu}>
          {isLoading?<Skeleton className={style.skeleton} count={5} />:
          list.map((cat, id) => (
            <li key={id}>
              <NavLink className={({isActive}) => `${style.cat} ${isActive ? style.active:''}`} to={`/categories/${cat}`}>{cat}</NavLink>
          </li>
          ))}
          
        </ul>


      <div className={style.footer}>
        <NavLink to={'/help'} className={style.link}>Help</NavLink>
        <a href='/terms' className={style.link} style={{textDecoration: 'underline'}}>Terms&Conditions</a>
      </div>
    </div>
  )
}
