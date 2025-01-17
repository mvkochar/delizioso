import React from 'react'
import './css/Checkout.css'
import { Link } from 'react-router-dom'

const Checkout = () => {
    return (
        <>
            <div className="checkout-caption d-f align-center">
                <Link to='/order-online'><img src="/images/back.png" alt="back" /></Link>
                <h1 className="checkout-title">Checkout</h1>
            </div>
            <div className="checkout-content d-f">
                <div>
                    <h2 className="checkout-bl-title">Shipping address</h2>
                    <form action="" className="checkout-address">
                        <input type="text" name='shippingAddress' placeholder='1131 Ogden Ave, Bronx, NY 10452, Amerika Serikat' />
                        <button type="button">Change</button>
                    </form>
                </div>
                <div>
                    <h2 className="checkout-bl-title">Order data</h2>
                    <form action="" className="checkout-data">
                        <div className="input-bl d-f">
                            <input type="text" name='orderFName' placeholder='First name' />
                            <input type="text" name='orderLName' placeholder='Last name' />
                        </div>
                        <div className="input-bl d-f">
                            <div className="phone-wr d-f">
                                <div className="country-wr d-f align-center">
                                    <div><img src="/images/flag.png" alt="flag" /></div>
                                    <button className='btn-clear d-b'>
                                        <svg width="23" height="14" viewBox="0 0 23 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M22.2121 1.39518L11.6055 12.0018L0.998867 1.39518" stroke="#311F09" stroke-width="1.5" stroke-linecap="round" />
                                        </svg>
                                    </button>
                                </div>
                                <input type="tel" name="orderPhone" placeholder='Phone number' />
                            </div>
                            <input type="email" name='orderEmail' placeholder='Email address' />
                        </div>
                        <textarea name="orderNote" placeholder='Note'></textarea>
                    </form>
                </div>
                <div>
                    <h2 className="checkout-bl-title">Order time</h2>
                    <form action="" className="checkout-time d-f">
                        <div className="radio-bl d-f">
                            <input type="radio" name="orderTime" id="orderNow" />
                            <label htmlFor="orderNow">Order now</label>
                        </div>
                        <div className="radio-bl d-f">
                            <input type="radio" name="orderTime" id="orderLater" />
                            <label htmlFor="orderLater">Order later</label>
                        </div>
                    </form>
                </div>
                <div>
                    <h2 className="checkout-bl-title">Order method</h2>
                    <form action="" className="checkout-method d-f">
                        <div className="radio-bl d-f">
                            <input type="radio" name="orderMethod" id="orderDelivery" />
                            <label htmlFor="orderDelivery">Delivery</label>
                        </div>
                        <div className="radio-bl d-f">
                            <input type="radio" name="orderMethod" id="orderAway" />
                            <label htmlFor="orderAway">Take away</label>
                        </div>
                    </form>
                </div>
                <div>
                    <h2 className="checkout-bl-title">Payment method</h2>
                    <form action="" className="checkout-payment d-f">
                        <div className="radio-bl d-f">
                            <input type="radio" name="orderPayment" id="cash" />
                            <label htmlFor="cash">Cash On Delivery</label>
                        </div>
                        <div className="radio-bl d-f">
                            <input type="radio" name="orderPayment" id="virtual" />
                            <label htmlFor="virtual">BCA Virtual Accounty</label>
                        </div>
                        <div className="radio-bl d-f">
                            <input type="radio" name="orderPayment" id="card" />
                            <label htmlFor="card">Credit Card</label>
                        </div>
                        <div className="radio-bl d-f">
                            <input type="radio" name="orderPayment" id="transfer" />
                            <label htmlFor="transfer">Transfer Bank</label>
                        </div>
                    </form>
                </div>
                <form action="" className="checkout-choose d-f">
                    <input type="checkbox" name="checkoutChoose" id="checkoutChoose" />
                    <label htmlFor="checkoutChoose">
                        Choose to indicate that you have read and agree to our Terms of use <br /> & Privacy Policy.
                    </label>
                </form>
                <Link to="/order-online" className="checkout-order-link">Order now</Link>
            </div>
        </>
    )
}

export default Checkout