import React from 'react'
import './css/Reservation.css'

const Reservation = () => {
  return (
    <div className="reservation-content d-f align-center">
        <div><img src="/images/reservation.png" alt="reservation" /></div>
        <div>
            <h1 className="reservation-title">Book a table</h1>
            <form action="" className='reservation-fm d-f'>
                <div className="select-bl">
                    <select name="reservationDate">
                        <option value="0">Date</option>
                    </select>
                </div>
                <div className="select-bl">
                    <select name="reservationTime">
                        <option value="0">Time</option>
                    </select>
                </div>
                <div className="select-bl">
                    <select name="reservationSize">
                        <option value="0">Party size</option>
                    </select>
                </div>
                <button type="button">Book now</button>
            </form>
        </div>
    </div>
  )
}

export default Reservation