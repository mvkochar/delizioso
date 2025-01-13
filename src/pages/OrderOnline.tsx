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
                </div>
            </div>
        </>
    )
}

export default OrderOnline