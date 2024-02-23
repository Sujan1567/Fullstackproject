import React, { useState } from 'react'
import Room from '../../Images/Room.jpg';
import '../CSS/Login.css';
import { Link } from 'react-router-dom';
import validation from './Loginvalidation';



const Login = () => {

    // Using the Usestate hook for setting the values of the email address and password.
    const [values, setvalues] = useState({
        email: '',
        password: ''
    })

    //Using the useState hooks for the setting the errors.
    const [errors, setErrors] = useState({})


    //The function for the updating the values of the email address and password.
    const handleInput = (event) => {
        setvalues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))

    }

    //The function for event generation while the form is submitted.
    const handleLogin = (event) => {
        event.preventDefault();
        setErrors(validation(values));
    }
    return (
        <>
            <div className='container-fluid pt-4 pb-4'>
                <div className='row justify-content-evenly'>
                    <div className='col-md-4 mb-3 rounded' id='loginform'>
                        <h1 className='display-4'>Login</h1>
                        <form onSubmit={handleLogin}>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Email address</label>
                                <div className="input-group">
                                    <span className="input-group-text">
                                        <i className="bi bi-envelope-at"></i>
                                    </span>
                                    <input type="email" name='email' onChange={handleInput} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                    {/* Writing the error message for the email address given by the user. */}
                                    
                                    {/* {errors.email && <span className='text-danger'>{errors.email}</span>} */}
                                </div>

                                {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                            </div>
                            <div className="mb-3 input-group">
                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                <div className='input-group'>
                                    <span className="input-group-text">
                                        <i className="bi bi-eye-fill"></i>
                                    </span>
                                    <input type="password" name='password' onChange={handleInput} className="form-control" placeholder='Enter password' id="exampleInputPassword1" />
                                    {/* Writing the error message for the password written by the user. */}
                                    {/* {errors.password && <span className='text-danger'>{errors.password}</span>} */}

                                </div>

                            </div>

                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" for="exampleCheck1">Remember me</label>
                            </div>


                            <button type="submit" className="btn btn-success btn-block">Login</button>
                            <p className="small mt-2 pt-1 mb-0">Don't have an account? <Link to="/Register" className="link-primary">Register</Link></p>

                        </form>
                    </div>
                    <div className='col-md-6' id='loginimage'>
                        <img src={Room} alt='' className='img-fluid rounded' />
                    </div>

                </div>

            </div>



        </>
    )
}

export default Login;
