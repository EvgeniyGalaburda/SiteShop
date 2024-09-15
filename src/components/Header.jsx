import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import { FaRegUserCircle, FaSearch, FaHeart, FaCartPlus, } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";

import styles from '../styles/Header.module.css'
import {ROUTES} from '../utils/routes.js';
import { useDispatch, useSelector } from 'react-redux';
import { toggleForm } from '../features/user/userSlice.js';
import {toggleCat} from '../features/caterogies/categorisSlice.js'

export default function Header() {

    const showingForm = (bool) => {
      dispatch(toggleCat(bool));
    }

    const dispatch = useDispatch();
    const {currentUser, cart} = useSelector(({user}) => user);

    const handleClick = () => {
      
            dispatch(toggleForm(true))

    }

    

  return (
    <header className={styles.header}>
        <IoMdMenu onClick={() => showingForm(true)} className={styles.menu}/>
        <div className={styles.logo}>
            <Link to={ROUTES.HOME}>
                <h1>Shop.</h1>
            </Link>
        </div>

        <div className={styles.info}>
            <div className={styles.user} onClick={handleClick}>
            <FaRegUserCircle className={styles.av} />
            <div className={styles.username}>{currentUser?currentUser.username:"Guest"}</div>
            </div>

            <form className={styles.form}>
            <div className={styles.input}>
                 <FaSearch />
                <input type="search" name='search' placeholder='Search for anything..' autoComplete='off' onChange={() =>{}} value='' />
            </div>

            {false && <div className={styles.box}></div>}
            </form>

            <div className={styles.account}>
                <Link to={ROUTES.HOME} className={styles.favourites}>
                <FaHeart />
                </Link>
                <Link to={ROUTES.CART}  className={styles.cart}>
                <FaCartPlus />
                <div className={styles.count}>{cart.length}</div>
                </Link>
            </div>
        </div>
    </header>
  )
}
