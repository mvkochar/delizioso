import React from 'react'
import './css/Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className='header d-f jc-sb align-center'>
            <div><img src="/images/logo.svg" alt="Logo" /></div>
            <nav>
                <ul className="header-nav d-f">
                    <li className="header-nav-item"><Link to="/">Home</Link></li>
                    <li className="header-nav-item"><a href="">Menu</a></li>
                    <li className="header-nav-item"><a href="">About us</a></li>
                    <li className="header-nav-item"><a href="">Order online</a></li>
                    <li className="header-nav-item"><a href="">Reservation</a></li>
                    <li className="header-nav-item"><a href="">Contact us</a></li>
                </ul>
            </nav>
            <div className="header-actions d-f align-center">
                <div className="header-cart">
                    <div className='header-cart-img'><img src="/images/cart.png" alt="cart" /></div>
                    <div className="header-cart-count">3</div>
                </div>
                <button className='header-login'>Log in</button>
            </div>
        </header>
    )
}

export default Header