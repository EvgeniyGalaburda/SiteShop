import React from 'react'

import style from '../styles/Button.module.css'

export default function Button({children, color, onClick, type}) {
  return (
    <button type={type} onClick={onClick} style={{background: color}} className={style.button}>{children}</button>
  )
}
