import React from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import './ConfirmReservation.css'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1172,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    overflowY: "auto",
    height: "100%"
};

const ConfirmReservation = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [hasConfirmed, setHasConfirmed] = React.useState(false)

    return (
        <div>
            <button type="button" onClick={handleOpen}>Book now</button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className="confirm-header d-f jc-sb">
                        <div><img src="/images/logo.svg" alt="Logo" /></div>
                        <div className="confirm-header-actions d-f">
                            <button className='actions-btn action-btn__orange'>Sign in</button>
                            <button className='actions-btn action-btn__green'>Sign up</button>
                        </div>
                    </div>
                    <div className={hasConfirmed ? "d-n" : "confirm-wr"}>
                        <div className="confirm-picture">
                            <img src="/images/confirm-reservation.png" alt="confirm-reservation" />
                        </div>
                        <div className="confirm-details">
                            <h2 className="confirm-details-title">Reservation details</h2>
                            <div className="confirm-details-box d-f">
                                <div className="confirm-details-date">Saturday, 28 february 2022</div>
                                <div className="confirm-details-time">04:30 pm</div>
                                <div className="confirm-details-people">2 people (Standar seating)</div>
                            </div>
                        </div>
                        <div className="confirm-deadline">
                            Due to limited availability, we can hold this table for you for <span>5:00 minutes</span>
                        </div>
                        <div className="confirm-order">
                            <h2 className="confirm-order-title">Data order</h2>
                            <div className="confirm-order-fm">
                                <div className="input-bl d-f">
                                    <input type="text" name='confirmFName' placeholder='First name' />
                                    <input type="text" name='confirmLName' placeholder='Last name' />
                                </div>
                                <div className="input-bl d-f">
                                    <div className="phone-wr d-f">
                                        <div className="country-wr d-f align-center">
                                            <div><img src="/images/flag.png" alt="flag" /></div>
                                            <button className='btn-clear d-b'>
                                                <svg width="23" height="14" viewBox="0 0 23 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M22.2121 1.39518L11.6055 12.0018L0.998867 1.39518" stroke="#311F09" stroke-width="1.5" stroke-linecap="round" />
                                                </svg>
                                            </button>
                                        </div>
                                        <input type="tel" name="confirmPhone" placeholder='Phone number' />
                                    </div>
                                    <input type="email" name="orderEmail" placeholder='Email address' />
                                </div>
                                <div className="input-bl d-f input-bl-last">
                                    <div className="select-bl">
                                        <select name="orderAccession">
                                            <option value="0">Select an accession (optional)</option>
                                        </select>
                                    </div>
                                    <input type="text" name='orderRequest' placeholder='Add a special request' />
                                </div>
                                <div className="order-fm-bottom d-f align-center">
                                    <div>
                                        <div className="check-bl d-f align-center">
                                            <input type="checkbox" name="confirmAgree" id="confirmAgree" />
                                            <label htmlFor="confirmAgree">I agree with what is stated above</label>
                                        </div>
                                        <div className="check-bl d-f align-center">
                                            <input type="checkbox" name="confirmSign" id="confirmSign" />
                                            <label htmlFor="confirmSign">
                                                Sign me up to receive dining offers and news from this restaurant by email.
                                            </label>
                                        </div>
                                        <button
                                            type="button"
                                            className='order-fm-confirm'
                                            onClick={() => setHasConfirmed(true)}
                                        >
                                            Confirm reservation
                                        </button>
                                    </div>
                                    <div>
                                        <h3 className="order-info-title">Restaurant <br /> informations</h3>
                                        <p className="order-info-text">
                                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                                            veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                        </p>
                                        <p className="order-info-text">
                                            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                                            adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
                                            dolore magnam aliquam.
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={hasConfirmed ? "confirmed-wr" : "d-n"}>
                        <div className="confirmed-info">
                            <h2 className="confirmed-info-title">Reservation has been confirmed</h2>
                            <div className="confirmed-info-box d-f">
                                <div className="confirmed-info-item d-f align-center">
                                    <div>
                                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect opacity="0.2" width="30" height="30" rx="6.81818" fill="white" />
                                            <path d="M18.3556 13.2413L14.2412 17.3557L11.9999 15.1144" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                                            <path d="M7.75 10.1822C7.75 8.83893 8.83893 7.75 10.1822 7.75H19.8178C21.1611 7.75 22.25 8.83893 22.25 10.1822V19.8178C22.25 21.1611 21.1611 22.25 19.8178 22.25H10.1822C8.83893 22.25 7.75 21.1611 7.75 19.8178V10.1822Z" stroke="white" stroke-width="1.5" />
                                        </svg>
                                    </div>
                                    <div>The confirmation result has been sent to your email</div>
                                </div>
                                <div className="confirmed-info-item d-f align-center">
                                    <div>
                                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect opacity="0.2" width="30" height="30" rx="6.81818" fill="white" />
                                            <path d="M8.24805 12.1815C8.24805 10.8382 9.33698 9.74927 10.6802 9.74927H19.3177C20.6609 9.74927 21.7499 10.8382 21.7499 12.1815V19.3187C21.7499 20.662 20.6609 21.7509 19.3177 21.7509H10.6803C9.33698 21.7509 8.24805 20.662 8.24805 19.3187V12.1815Z" stroke="white" stroke-width="1.5" />
                                            <path d="M8.24805 13.4998H21.7497" stroke="white" stroke-width="1.5" />
                                            <path d="M11.249 8.24919L11.249 10.4992" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                                            <path d="M19.5 8.2492L19.5 10.4992" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                                        </svg>
                                    </div>
                                    <div>Booking ID : #123456</div>
                                </div>
                            </div>
                        </div>
                        <div className="confirmed-details d-f jc-sb align-center">
                            <div><img src="/images/confirmed-details.png" alt="confirmed-details" /></div>
                            <div>
                                <h2 className="confirmed-details-title">Reservation detail</h2>
                                <div className="confirmed-details-box d-f">
                                    <div className="confirmed-details-date">Saturday, 28 february 2022</div>
                                    <div className="confirmed-details-time">04:30 pm</div>
                                    <div className="confirmed-details-people">2 people (Standar seating)</div>
                                </div>
                            </div>
                            <div>
                                <button className="confirmed-details-modify">Modify</button>
                                <button className="confirmed-details-cancel">Cancel</button>
                            </div>
                        </div>
                        <form action="" className='confirmed-fm d-f'>
                            <div>
                                <div className="select-bl">
                                    <select name="confirmedAccasion">
                                        <option value="0">Select an accasion (optional)</option>
                                    </select>
                                </div>
                                <textarea name="confirmedRequest" placeholder='Add a special request'></textarea>
                            </div>
                            <div>
                                <h2 className="confirmed-information-title">Restaurant <br /> informations</h2>
                                <p className="confirmed-information-text">
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                                    veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                </p>
                                <p className="confirmed-information-text">
                                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, 
                                    adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et 
                                    dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam.
                                </p>
                            </div>
                        </form>
                    </div>
                </Box>
            </Modal>
        </div>
    )
}

export default ConfirmReservation