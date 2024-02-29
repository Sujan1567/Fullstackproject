import React, { useState } from 'react'
import Room from '../../Images/Room.jpg';
import '../CSS/Login.css';
import { Await, Link, useNavigate } from 'react-router-dom';
import validation from './Loginvalidation';
import axios from 'axios';



const Login = () => {
    // const [email, setemail] = useState('');
    // const [password, setpassword] = useState('');
    const [Values, setValues] = useState({
        email: '',
        password: ''
    })

    

    const navigate = useNavigate();
    //For generating the token.
     axios.defaults.withCredentials = true;
    const handleLogin =  (event) => {
        event.preventDefault();
        //calling the API to get the data.
        axios.post('http://localhost:8081/Login', Values)
        .then(res=> {
            if(res.data.Status === "Success"){
                navigate("/")
            }else{
                alert(res.data.Error);
            }
        })
        .then(err => console.log(err));
        

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
                                    <input type="email" name='email' onChange={e => setValues({ ...Values, email: e.target.value })} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
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
                                    <input type="password" name='password' onChange={e => setValues({ ...Values, password: e.target.value })} className="form-control" placeholder='Enter password' id="exampleInputPassword1" />
                                    {/* Writing the error message for the password written by the user. */}
                                    {/* {errors.password && <span className='text-danger'>{errors.password}</span>} */}

                                </div>

                            </div>

                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" for="exampleCheck1">Remember me</label>
                            </div>


                            <button type="submit" className="btn btn-success btn-block col-lg-12 center-text">Login</button>
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
