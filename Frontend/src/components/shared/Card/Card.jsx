import React from 'react'
import MyEmoji from '../../../emojis/MyEmoji'
import styles from './Card.module.css'
const Card = ({title,icon,label,children}) => {
    return (
        <div className={styles.card}>
            <div className={styles.headingWrappr}>
                <MyEmoji symbol={icon} label={label} />
                <h1 className={styles.heading}>{title}  </h1>

            </div>
            {children}

        </div >
        )
}

export default Card