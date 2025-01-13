import React from 'react'
import './css/Header.css'
import { Link } from 'react-router-dom'
import Sign from './Sign/Sign'

const Header = () => {
    return (
        <header className='header d-f jc-sb align-center'>
            <div><img src="/images/logo.svg" alt="Logo" /></div>
            <nav>
                <ul className="header-nav d-f">
                    <li className="header-nav-item"><Link to="/">Home</Link></li>
                    <li className="header-nav-item"><Link to="/menu">Menu</Link></li>
                    <li className="header-nav-item"><Link to="/about">About us</Link></li>
                    <li className="header-nav-item"><Link to="/order-online">Order online</Link></li>
                    <li className="header-nav-item"><Link to="/reservation">Reservation</Link></li>
                    <li className="header-nav-item"><Link to="/contact">Contact us</Link></li>
                </ul>
            </nav>
            <div className="header-actions d-f align-center">
                <div className="header-cart">
                    <div className='header-cart-img'><img src="/images/cart.png" alt="cart" /></div>
                    <div className="header-cart-count">3</div>
                </div>
               <Sign/>
            </div>
        </header>
    )
}

export default Header