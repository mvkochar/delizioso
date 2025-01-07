import React from 'react'
import './css/Home.css'

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
        </>
    )
}

export default Home