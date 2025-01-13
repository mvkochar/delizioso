import React from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import './Sign.css'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1440,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 0,
    display: 'flex',
    gap: '109px'
};

const Sign = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [hasLogin, setHasLogin] = React.useState(true)
    const handleHasLogin = () => {
        setHasLogin((prevState) => {
            return (
                !prevState
            )
        })
    }

    return (
        <div>
            <button className='header-login' onClick={handleOpen}>Log in</button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} >
                    <div>
                        <div style={{marginLeft: "39px", marginTop: "39px"}}><img src="/images/sign-logo.svg" alt="Logo" /></div>
                        <h2 className="sign-title">{hasLogin ? "Login" : "Sign up"}</h2>
                        <div className="d-f" style={{ marginLeft: "111px" }}>
                            <p className="sign-note">Don't have an account?</p>
                            <button className='sign-action' onClick={handleHasLogin}>{hasLogin ? "Sign up" : "Log in"} </button>
                        </div>
                        <form action="" className='sign-fm'>
                            <div className={!hasLogin ? "input-bl" : "d-n"}>
                                <label htmlFor="signName">Full name</label>
                                <input type="text" name='signName' id='signMame' placeholder='Robert Martine' />
                            </div>
                            <div className="input-bl">
                                <label htmlFor="signEmail">Email address</label>
                                <input type="email" name="signEmail" id="signEmail" placeholder='Robertmartine@gmail.com' />
                            </div>
                            <div className='input-bl'>
                                <label htmlFor="signPwd">Password</label>
                                <input type="password" name="signPwd" id="signPwd" placeholder='*************' />
                            </div>
                            <div className="sign-details d-f">
                                <div className="check-bl d-f align-center">
                                    <input type="checkbox" name="signRemember" id="signRemember" />
                                    <label htmlFor="signRemember">Remember me</label>
                                </div>
                                <button className='sign-change-btn'>Forget Password?</button>
                            </div>
                            <button type="button" className='sign-submit'>{hasLogin ? 'Login' : 'Sign up'} </button>
                            <a href="" className="sign-google">{hasLogin ? 'Log in' : 'Sign up'} with google</a>
                        </form>
                        <p className="sign-copyright" style={hasLogin ? {marginTop: "178.55px"}: {marginTop: "78.51px"}}>
                            Copyright &copy; 2022 Delizioso
                        </p>
                    </div>
                    <div style={{height: "1024px"}}><img src="/images/sign.png" alt="Sign" /></div>
                </Box>
            </Modal>
        </div>
    )
}

export default Sign