import React from 'react'
import './css/OrderOnline.css'
import { PastaList, PizzaList, ProductsItemLittle } from '../components'

const OrderOnline = () => {
    return (
        <>
            <h1 className="order-title">Menu</h1>
            <div className="order-categories d-f">
                <button className="categories-btn">All categories</button>
                <button className="categories-btn categories-btn__active">Dinner</button>
                <button className="categories-btn">Lunch</button>
                <button className="categories-btn">Dessert</button>
                <button className="categories-btn">Drink</button>
            </div>
            <div className="order-wr d-f">
                <div>
                    <div className="order-content d-f">
                        <div>
                            <h2 className="order-bl-title">Pasta</h2>
                            <div className="order-box d-f">
                                {
                                    PastaList.map((pasta) => {
                                        return (
                                            <ProductsItemLittle
                                                key={pasta.id}
                                                {...pasta}
                                            />
                                        )
                                    })
                                }
                            </div>
                            <div className="order-pagination d-f">
                                <button className='pagination-btn pagination-action'>
                                    <svg width="14" height="25" viewBox="0 0 14 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.7932 1.46287L1.80196 12.4541L12.7932 23.4453" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                                    </svg>
                                </button>
                                <button className='pagination-btn'>1</button>
                                <button className='pagination-btn'>2</button>
                                <button className='pagination-btn'>3</button>
                                <button className='pagination-btn pagination-more'>
                                    <svg width="24" height="6" viewBox="0 0 24 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="3.32861" cy="3.4541" r="2.5" fill="#B7A28B" />
                                        <circle cx="12" cy="3.4541" r="2.5" fill="#B7A28B" />
                                        <circle cx="20.6714" cy="3.4541" r="2.5" fill="#B7A28B" />
                                    </svg>
                                </button>
                                <button className='pagination-btn pagination-action'>
                                    <svg width="14" height="25" viewBox="0 0 14 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.20681 1.46287L12.198 12.4541L1.20681 23.4453" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div>
                            <h2 className="order-bl-title">Pizza</h2>
                            <div className="order-box d-f">
                                {
                                    PizzaList.map((pizza) => {
                                        return (
                                            <ProductsItemLittle
                                                key={pizza.id}
                                                {...pizza}
                                            />
                                        )
                                    })
                                }
                            </div>
                            <div className="order-pagination d-f">
                                <button className='pagination-btn pagination-action'>
                                    <svg width="14" height="25" viewBox="0 0 14 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.7932 1.46287L1.80196 12.4541L12.7932 23.4453" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                                    </svg>
                                </button>
                                <button className='pagination-btn'>1</button>
                                <button className='pagination-btn'>2</button>
                                <button className='pagination-btn'>3</button>
                                <button className='pagination-btn pagination-more'>
                                    <svg width="24" height="6" viewBox="0 0 24 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="3.32861" cy="3.4541" r="2.5" fill="#B7A28B" />
                                        <circle cx="12" cy="3.4541" r="2.5" fill="#B7A28B" />
                                        <circle cx="20.6714" cy="3.4541" r="2.5" fill="#B7A28B" />
                                    </svg>
                                </button>
                                <button className='pagination-btn pagination-action'>
                                    <svg width="14" height="25" viewBox="0 0 14 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.20681 1.46287L12.198 12.4541L1.20681 23.4453" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="order-list">
                    <h2 className="order-list-title">Order list</h2>
                    <div className="order-list-products d-f">
                        <div>
                            <div className="d-f jc-sb">
                                <h3 className="product-title">Spaghetti</h3>
                                <button className="btn-clear d-b"><img src="/images/remove.png" alt="remove" /></button>
                            </div>
                            <div className="d-f jc-sb" style={{ marginTop: "30px" }}>
                                <div className="product-count d-f align-center">
                                    <button className='product-count-btn'>
                                        <svg width="13" height="2" viewBox="0 0 13 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.634766 0.61969H11.4376" stroke="#FF3838" stroke-width="1.24648" stroke-linecap="round" />
                                        </svg>
                                    </button>
                                    <div className="product-count-val">2</div>
                                    <button className='product-count-btn'>
                                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.39648 6.61969H12.1993" stroke="#3FC66E" stroke-width="1.24648" stroke-linecap="round" />
                                            <path d="M6.79688 1.21829L6.79687 12.0211" stroke="#3FC66E" stroke-width="1.24648" stroke-linecap="round" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="product-res">&#36;24.1</div>
                            </div>
                        </div>
                        <div>
                            <div className="d-f jc-sb">
                                <h3 className="product-title">Pizza</h3>
                                <button className="btn-clear d-b"><img src="/images/remove.png" alt="remove" /></button>
                            </div>
                            <div className="d-f jc-sb" style={{ marginTop: "30px" }}>
                                <div className="product-count d-f align-center">
                                    <button className='product-count-btn'>
                                        <svg width="13" height="2" viewBox="0 0 13 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.634766 0.61969H11.4376" stroke="#FF3838" stroke-width="1.24648" stroke-linecap="round" />
                                        </svg>
                                    </button>
                                    <div className="product-count-val">2</div>
                                    <button className='product-count-btn'>
                                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.39648 6.61969H12.1993" stroke="#3FC66E" stroke-width="1.24648" stroke-linecap="round" />
                                            <path d="M6.79688 1.21829L6.79687 12.0211" stroke="#3FC66E" stroke-width="1.24648" stroke-linecap="round" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="product-res">&#36;35.7</div>
                            </div>
                        </div>
                        <div>
                            <div className="d-f jc-sb">
                                <h3 className="product-title">Caesar salad</h3>
                                <button className="btn-clear d-b"><img src="/images/remove.png" alt="remove" /></button>
                            </div>
                            <div className="d-f jc-sb" style={{ marginTop: "30px" }}>
                                <div className="product-count d-f align-center">
                                    <button className='product-count-btn'>
                                        <svg width="13" height="2" viewBox="0 0 13 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.634766 0.61969H11.4376" stroke="#FF3838" stroke-width="1.24648" stroke-linecap="round" />
                                        </svg>
                                    </button>
                                    <div className="product-count-val">2</div>
                                    <button className='product-count-btn'>
                                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.39648 6.61969H12.1993" stroke="#3FC66E" stroke-width="1.24648" stroke-linecap="round" />
                                            <path d="M6.79688 1.21829L6.79687 12.0211" stroke="#3FC66E" stroke-width="1.24648" stroke-linecap="round" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="product-res">&#36;18.5</div>
                            </div>
                        </div>
                    </div>
                    <div className="voucher">
                        <h3 className="voucher-title">Voucher Code</h3>
                        <form action="" className='voucher-fm'>
                            <input type="text" name='voucherCode' placeholder='Freetoeat' />
                            <button type="button">
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 11L21 11" stroke="white" stroke-width="2" stroke-linecap="round" />
                                    <path d="M11 1L11 21" stroke="white" stroke-width="2" stroke-linecap="round" />
                                </svg>
                            </button>
                        </form>
                    </div>
                    <div className="product-price-box d-f">
                        <div className="d-f jc-sb">
                            <h3 className="product-price-title">Subtotal</h3>
                            <div className="product-price-val">&#36;78.3</div>
                        </div>
                        <div className="d-f jc-sb">
                            <h3 className="product-price-title">Tax fee</h3>
                            <div className="product-price-val">&#36;3.5</div>
                        </div>
                        <div className="d-f jc-sb">
                            <h3 className="product-price-title">Voucher</h3>
                            <div className="product-price-val">&#36;5.0</div>
                        </div>
                        <div className="d-f jc-sb">
                            <h3 className="product-price-title">Total</h3>
                            <div className="product-price-val">&#36;76.8</div>
                        </div>
                    </div>
                    <button className='order-checkout-btn'>Checkout</button>
                </div>
            </div>
        </>
    )
}

export default OrderOnline