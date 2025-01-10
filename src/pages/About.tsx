import React from 'react'
import './css/About.css'

const About = () => {
    return (
        <>
            <div className="about-bl-first d-f align-center">
                <div><img src="/images/about1.png" alt="about1" /></div>
                <div>
                    <h1 className="about-title"><span>Our</span><br />restaurant</h1>
                    <p className="about-bl-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse.
                    </p>
                </div>
            </div>
            <div className="about-bl-second d-f align-center">
                <p className="about-bl-text">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                    laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                    architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                    sit aspernatur aut odit aut fugit.
                </p>
                <div><img src="/images/about2.png" alt="about2" /></div>
            </div>
            <div className="about-owner d-f">
                <div><img src="/images/owner.png" alt="owner" /></div>
                <div>
                    <h2 className="about-owner-pos"><span>Owner</span> &<br />Executive Chef</h2>
                    <h4 className="about-owner-name">Ismail Marzuki</h4>
                    <p className="about-owner-quote">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                        tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
            </div>
        </>
    )
}

export default About