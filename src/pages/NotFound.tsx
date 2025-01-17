import React from 'react'
import './css/NotFound.css'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <>
            <main className='nf-main'>
                <h1 className="nf-main-title">404</h1>
                <h3 className="nf-main-subtitle">Page not found!</h3>
                <p className="nf-main-desc">
                    This page not found (deleted or never exists). <br />
                    Try a phrase in search box or back to home and start again.
                </p>
                <Link to="/" className="nf-main-link">Homepage</Link>
            </main>
        </>
    )
}

export default NotFound