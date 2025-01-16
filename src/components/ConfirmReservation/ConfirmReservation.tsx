import React from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import './ConfirmReservation.css'
import Sign from '../Sign/Sign';

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
                                    <button type="button" className='order-fm-confirm'>Confirm reservation</button>
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
                </Box>
            </Modal>
        </div>
    )
}

export default ConfirmReservation