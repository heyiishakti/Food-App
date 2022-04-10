import React from 'react'
import './styles.css'
import LogoImg from './logo.png'

const Logo = () => {
    return (
        <div className="logo">
            <div>
                <img src={LogoImg} alt="logoImg" />
                <span><b>Taste</b></span>
            </div>
            <p>
                <b>Restaurant & BBQ</b>
            </p>
        </div>
    )
}

export default Logo