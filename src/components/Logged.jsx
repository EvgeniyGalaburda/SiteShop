import React from 'react'

import style from '../styles/User.module.css'

import { FcOk } from "react-icons/fc";
import { IoMdExit } from "react-icons/io";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Button from './Button';
import { useDispatch } from 'react-redux';
import { exitUser } from '../features/user/userSlice';

export default function Logged({formOff}) {
    const dispatch = useDispatch();

    const exit = () => {
        dispatch(exitUser());
    }

  return (
    <div className={style.log}>
        <div className={style.top}>
                <div className={style.close} onClick={formOff} > <IoIosCloseCircleOutline /></div>
                <h1 className={style.title}>Logged</h1>
                <FcOk className={style.ok}/>
        </div>

        <Button onClick={exit} >Exit <IoMdExit className={style.ok} /></Button>

    </div>
  )
}
