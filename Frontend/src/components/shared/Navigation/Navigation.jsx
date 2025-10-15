import React from 'react'
import MyEmoji from '../../../emojis/MyEmoji'
import { Link } from 'react-router-dom'
import styles from './Navigation.module.css'

const Navigation = () => {
    const brandStyle = {
        color: "#fff",
        fontWeight: 'bold',
        textDecoration: 'none',
        fontSize: '24px',
        display: 'flex',
        alignItems: 'center',
    }
    const logoText = {
        marginLeft: '8px',
    }
    return (
        <nav className={`${styles.navbar}container`}>
            <Link style={brandStyle} to="/">

                <MyEmoji symbol="🏠" label="home" />
                <span style={logoText}>Codershouse</span>
            </Link>
            <div>Navigation Page</div>
        </nav>
    )
}

export default Navigation