import React from 'react'
import './css/Contact.css'

const Contact = () => {
    const [direction, setDirection] = React.useState(false)

    return (
        <>
            <main className='contact-main'>
                <h1 className="contact-main-title">Contact us</h1>
                <p className="contact-main-desc">
                    We love hearing from our customers. Feel free to share your
                    experience or ask any questions you may have.
                </p>
                <form action="" className='contact-main-fm'>
                    <div className="input-bl d-f">
                        <input type="text" name='contactFname' placeholder='First name' />
                        <input type="text" name='contactLname' placeholder='Last name' />
                    </div>
                    <div className="input-bl d-f">
                        <input type="email" name="contactEmail" placeholder='Email' />
                        <input type="text" name='conatactSubject' placeholder='Subject' />
                    </div>
                    <textarea name="contactMsg" placeholder='Message'></textarea>
                    <button type="button">Sumbit</button>
                </form>
            </main>
            <div className="contact-map">
                <div><img src="/images/map.png" alt="map" /></div>
                <div className={direction ? "contact-map-direction" : "d-n"}>
                    <button className='direction-close' onClick={()=>setDirection(false)}>
                        <img src="/images/close.png" alt="close" />
                    </button>
                    <div className="direction-content d-f jc-sb align-center">
                        <div><img src="/images/direction.png" alt="direction" /></div>
                        <div>
                            <h3 className="direction-title">Delizioso Restaurant</h3>
                            <p className="direction-desc">
                                Bronx, NY 10463, Amerika Serikat <br />
                                40.885147,-73.9220459
                            </p>
                        </div>
                        <a href="" className="d-b"><img src="/images/telegram.png" alt="telegram" /></a>
                    </div>
                </div>
                <button type="button" className='contact-map-location' onClick={()=>setDirection(true)}>
                    <img src="/images/location.png" alt="location" />
                </button>
            </div>
        </>
    )
}

export default Contact