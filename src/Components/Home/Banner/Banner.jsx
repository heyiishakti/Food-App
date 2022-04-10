import React from 'react'
import './styles.css'
import Logo from '../../Common/Logo/Logo'
import banngerImg from './banner.png'

const Banner = (handleScrollMenu) => {
    return (
        <header>
            <div className="header-content">
                <Logo />
                <div className="content-main">
                    <h1>Delicious food for your cravings</h1>
                    <p> We made fresh and healthy meals with different recipes</p>
                    <button onClick={handleScrollMenu}>
                        View More <i className="fas fa-long-arrow-alt-right"></i></button>
                </div>
            </div>
            <img className='header-img' alt='header-img' src={banngerImg} />
        </header>
    )
}

export default Banner