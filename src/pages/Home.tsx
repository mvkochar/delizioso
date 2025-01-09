import React from 'react'
import './css/Home.css'
import { ProductsItem, ProductsList } from '../components'

const Home = () => {
    return (
        <>
            <main className='home-main d-f'>
                <div>
                    <h4 className="home-main-above">Restauran</h4>
                    <h1 className="home-main-title">Italian Cuisine</h1>
                    <p className="home-main-desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales senectus
                        dictum arcu sit tristique donec eget.
                    </p>
                    <div className="home-main-actions d-f">
                        <a href="" className="home-main-link">Order now</a>
                        <a href="" className="home-main-link">Reservation</a>
                    </div>
                </div>
                <div><img src="/images/home-main.png" alt="home-main" /></div>
            </main>
            <section className='home-welcome d-f align-center'>
                <div><img src="/images/home-welcome.png" alt="home-welcome" /></div>
                <div>
                    <h2 className="home-welcome-title">Welcome to <span>delizioso</span></h2>
                    <p className="home-welcome-desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Facilisis ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec quam
                    </p>
                    <a href="" className="home-welcome-link">See our menu</a>
                </div>
            </section>
            <section className="home-popular">
                <h2 className="home-popular-title">Our popular menu</h2>
                <div className="home-popular-categories d-f">
                    <button className="popular-categories-btn categories-btn__active">All categories</button>
                    <button className="popular-categories-btn">Dinner</button>
                    <button className="popular-categories-btn">Lunch</button>
                    <button className="popular-categories-btn">Dessert</button>
                    <button className="popular-categories-btn">Drink</button>
                </div>
                <div className="home-popular-box d-f">
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
                <div className="home-popular-pagination d-f">
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
            </section>
            <section className="home-reserve d-f align-center">
                <div><img src="/images/home-reserve.png" alt="home-reserve" /></div>
                <div>
                    <h2 className="home-reserve-title">Let's reserve <span>a table</span></h2>
                    <p className="home-reserve-desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies
                        at eleifend proin. Congue nibh nulla malesuada ultricies nec quam
                    </p>
                    <a href="" className="home-reserve-link">Reservation</a>
                </div>
            </section>
            <section className="home-team">
                <h2 className="home-team-title">Our greatest chef</h2>
                <div className="home-team-box d-f">
                    <div className="home-team-item">
                        <div><img src="/images/team1.png" alt="team1" /></div>
                        <h3 className="team-item-name">Betran Komar</h3>
                        <p className="team-item-pos">Head chef</p>
                    </div>
                    <div className="home-team-item">
                        <div><img src="/images/team2.png" alt="team2" /></div>
                        <h3 className="team-item-name">Ferry Sauwi</h3>
                        <p className="team-item-pos">Chef</p>
                    </div>
                    <div className="home-team-item">
                        <div><img src="/images/team3.png" alt="team3" /></div>
                        <h3 className="team-item-name">Iswan Dracho</h3>
                        <p className="team-item-pos">Chef</p>
                    </div>
                </div>
                <a href="" className="home-team-link">View all</a>
            </section>
            <section className="home-testimonial">
                <h2 className="home-testimonial-title">Our customers say</h2>
                <div className="home-testimonial-review">
                    <div><img src="/images/user-photo.png" alt="user-photo" /></div>
                    <div className="user-name">Starla Virgoun</div>
                    <div className="user-pos">Financial advisor</div>
                    <p className="review-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies 
                        at eleifend proin. Congue nibh nulla malesuada ultricies nec quam
                    </p>
                </div>
                <div className="user-more"><img src="/images/users.png" alt="users" /></div>
            </section>
        </>
    )
}

export default Home