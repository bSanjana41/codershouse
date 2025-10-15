import React from 'react'
import styles from './Textinput.module.css'

const Textinput = ({ type = 'text', ...rest }) => {
    return (
        <div>
            <input className={styles.input} type="text" {...rest} />
        </div>
    )
}

export default Textinput