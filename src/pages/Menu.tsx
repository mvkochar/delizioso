import React from 'react'
import './css/Menu.css'
import { ProductsItem, ProductsList } from '../components'

const Menu = () => {
    return (
        <>
            <h1 className="menu-title">Menu</h1>
            <div className="menu-categories d-f">
                <button className="categories-btn categories-btn__active">All categories</button>
                <button className="categories-btn">Dinner</button>
                <button className="categories-btn">Lunch</button>
                <button className="categories-btn">Dessert</button>
                <button className="categories-btn">Drink</button>
            </div>
            <div className="menu-box d-f">
                {
                    ProductsList.map((product) => {
                        return (
                            <ProductsItem
                                key={product.id}
                                {...product}
                            />
                        )
                    })
                }
            </div>
            <div className="menu-pagination d-f">
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
        </>
    )
}

export default Menu