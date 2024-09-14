import React, {useState} from 'react'
import { IoIosCloseCircleOutline } from "react-icons/io";

import style from '../styles/User.module.css'
import Button from './Button';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../features/user/userSlice';

export default function UserSignUp({formOff}) {
    const dispatch = useDispatch();
    const [values, setValues] = useState({
        username: '',
        email:'',
        password:'',
    });

    const handleChange = ({target:{value, name}}) => {
        setValues({...values, [name]: value });
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        const isEmpty = Object.values(values).some(val => !val);
        
        if(isEmpty) return;

        dispatch(addUser(values));
        formOff();
    }

  return (
    <div className={style.wrapper}>
        <div className={style.close} onClick={formOff} > <IoIosCloseCircleOutline /></div>

        <div className={style.title}> Sign Up</div>
        <form className={style.form} onSubmit={handleSubmit}>
            <div className={style.group}>
                <input 
                type="email"
                name="email"
                placeholder='Your email'
                value={values.email}
                autoComplete='off'
                onChange={handleChange}
                required/>

                <input 
                type="text"
                name="username"
                placeholder='Your name'
                value={values.username}
                autoComplete='off'
                onChange={handleChange}
                required/>


            
                <input 
                type='password'
                name="password"
                placeholder='Your password'
                value={values.password}
                autoComplete='off'
                onChange={handleChange}
                required/>
            </div>


            <Button type='submit'>
                Create an account
            </Button>
        </form>
    </div>

    
  )
}
