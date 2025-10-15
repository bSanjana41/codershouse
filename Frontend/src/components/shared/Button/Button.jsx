import React from 'react'
import styles from './Button.module.css'
import MyEmoji from '../../../emojis/MyEmoji'
const Button = ({title,onClick}) => {
  return (
    <div>
         <button onClick={onClick} className={styles.button}>
        <span>{title} </span>
        <MyEmoji className={styles.arrow} symbol="➜" label="right arrow" />
        </button>
    </div>
  )
}

export default Button