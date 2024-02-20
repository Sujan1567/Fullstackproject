import React from 'react'
import Store1 from '../Images/Store1.jpg';
import nepal from '../Images/nepal.png';
import './CSS/Register.css';
import { Link } from 'react-router-dom';



const Register = () => {
    return (
        <>
            <div className='container-fluid pt-4'>
                <div className='row justify-content-evenly'>
                    <div className='col-md-4 rounded pt-3 mb-4' id='Registerform'>
                        <h1 className='display-6'>Register</h1>
                        <form>
                            <div className="mb-3">
                                <label for="validationCustom01" className="form-label">Full name</label>
                                <div className='input-group'>
                                    <span className="input-group-text">
                                        <i class="bi bi-person"></i>
                                    </span>
                                    <input type="text" className="form-control" id="validationCustom01" placeholder='Enter full name' required />
                                </div>
                                {/* <input type="text" className="form-control" id="validationCustom01" required/> */}
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Email address</label>
                                <div className="input-group">
                                    <span className="input-group-text">
                                        <i className="bi bi-envelope-at"></i>
                                    </span>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                </div>

                                {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                            </div>

                            {/* Making the input text for the Phone number. */}
                            <div className="mb-3">
                                <label className="form-label">Phone number</label>
                                <div className="input-group">
                                    <span className="input-group-text">
                                        <img src={nepal} alt='nepal' className='img-fluid' width="20px" />
                                    </span>
                                    <input type="tel" className="form-control" id="exampleInputphone" aria-describedby="emailHelp" placeholder="Enter phone number" />
                                </div>

                                {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                            </div>

                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Address</label>
                                <div className="input-group">
                                    <span className="input-group-text">
                                        <i class="bi bi-house-fill"></i>
                                    </span>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter address" />
                                </div>

                                {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                            </div>

                            <div className="mb-3 input-group">
                                <label for="exampleInputPassword1" className="form-label"> Create Password</label>
                                <div className='input-group'>
                                    <span className="input-group-text">
                                        <i className="bi bi-eye-fill"></i>
                                    </span>
                                    <input type="password" className="form-control" placeholder='Create password' id="exampleInputPassword1" />

                                </div>

                            </div>

                            <div className="mb-3 input-group">
                                <label for="exampleInputPassword1" className="form-label"> Confirm Password</label>
                                <div className='input-group'>
                                    <span className="input-group-text">
                                        <i className="bi bi-eye-fill"></i>
                                    </span>
                                    <input type="password" className="form-control" placeholder='Confirm password' id="exampleInputPassword1" />

                                </div>

                            </div>

                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" for="exampleCheck1">Remember me</label>
                            </div>


                            <button type="button" className="btn btn-primary">Register</button>
                            <p className="small mt-2 pt-1 mb-3">Don't have an account? <Link to="/Login" className="link-primary">Login</Link></p>

                        </form>
                    </div>
                    <div className='col-md-6 pt-5'>
                        <img src={Store1} alt='' className='img-fluid rounded' width='100%' />

                    </div>


                </div>

            </div>

        </>
    )
}

export default Register
