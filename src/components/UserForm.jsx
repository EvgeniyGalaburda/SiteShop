import React from 'react'
import { useDispatch, useSelector } from 'react-redux'


import UserSignUp from './UserSignUp';
import style from '../styles/User.module.css'
import { toggleForm } from '../features/user/userSlice';
import Logged from './Logged';

export default function UserForm() {
    const dispatch = useDispatch();
    const {showForm, formType} = useSelector(({user}) => user);

    const formOff = () => {
      dispatch(toggleForm(false));
    }
    
  return (
    showForm ? (
        <div className={style.signup}>
            <div className={style.overlay} onClick={() => formOff()}/>
              {
            {
              'signup': <UserSignUp formOff={formOff}/>,
              'logged': <Logged formOff={formOff}/>
            }[formType]
          }
        </div>
    ):<></>
  )
}
