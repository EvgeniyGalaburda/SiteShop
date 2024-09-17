import React, { useState} from 'react'
import {Link} from 'react-router-dom'
import { FaRegUserCircle, FaSearch, FaHeart, FaCartPlus, } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";

import styles from '../styles/Header.module.css'
import {ROUTES} from '../utils/routes.js';
import { useDispatch, useSelector } from 'react-redux';
import { toggleForm } from '../features/user/userSlice.js';
import {toggleCat} from '../features/caterogies/categorisSlice.js'
import {searchProduct} from '../features/products/productSlice.js';

export default function Header() {
    const {search} = useSelector(({products}) => products);
    const [focus, setFocus] = useState(false)
    const [searchValue, setSearchValue] = useState('');
    const dispatch = useDispatch();
    const {currentUser, cart} = useSelector(({user}) => user);
    
    const showingForm = (bool) => {
      dispatch(toggleCat(bool));
    }


    const handleClick = () => {
      
            dispatch(toggleForm(true))

    }

    const handleSearch = ({target: {value}}) =>{
      setSearchValue(value);
      dispatch(searchProduct(value));
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

            <form onFocus={() => {setFocus(true)}} onBlur={() => {setFocus(false)}} className={styles.form}>
            <div className={styles.input}>
                 <FaSearch />
                <input   type="search" name='search' placeholder='Search for anything..' autoComplete='off' onChange={handleSearch} value={searchValue} />
            </div>

           {search.length> 0 & focus ? <div className={styles.box}>
              {search.map((item) => (
                <Link to={`/products/${item.id}`} className={styles.sInput} key={item.id}>{item.title}</Link>
              ))}
              </div>:''}
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
