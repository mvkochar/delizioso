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
            <li><a href="">Home</a></li>
            <li><a href="">Menu</a></li>
            <li><a href="">Order online</a></li>
            <li><a href="">Catering</a></li>
            <li><a href="">Reservation</a></li>
          </ul>
        </div>
        <div>
          <h3 className="footer-bl-title">Information</h3>
          <ul className="footer-bl-list">
            <li><a href="">About us</a></li>
            <li><a href="">Testimonial</a></li>
            <li><a href="">Events</a></li>
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