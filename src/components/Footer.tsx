import React from 'react'
import './css/Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {

  return (
    <footer className="footer">
      <div className="footer-bar d-f jc-sb">
        <div>
          <div><img src="/images/footer-logo.svg" alt="Logo" /></div>
          <p className="footer-desc">
            Viverra gravida morbi egestas facilisis tortor netus non duis tempor.
          </p>
          <div className="footer-social d-f">
            <a href="" className="d-b">
              <img src="/images/twitter.png" alt="Twitter" />
            </a>
            <a href="" className="d-b">
              <img src="/images/instagram.png" alt="Instagram" />
            </a>
            <a href="" className="d-b">
              <img src="/images/facebook.png" alt="Facebook" />
            </a>
          </div>
        </div>
        <div>
          <h3 className="footer-bl-title">Page</h3>
          <ul className="footer-bl-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/order-online">Order online</Link></li>
            <li><Link to="/catering">Catering</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="footer-bl-title">Information</h3>
          <ul className="footer-bl-list">
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/testimonial">Testimonial</Link></li>
            <li><Link to="/events">Events</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="footer-bl-title">Get in touch</h3>
          <ul className="footer-bl-list">
            <li className='footer-bl-address'>3247 Johnson Ave, Bronx, NY <br /> 10463, Amerika Serikat</li>
            <li>delizioso@gmail.com</li>
            <li>+123 4567 8901</li>
          </ul>
        </div>
      </div>
      <div className="footer-copyright">Copyright &copy; 2022 Delizioso</div>
    </footer>
  )
}

export default Footer