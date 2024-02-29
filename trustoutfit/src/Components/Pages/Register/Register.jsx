import React, { useState } from 'react'
import Store1 from '../../Images/Store1.jpg';
import nepal from '../../Images/nepal.png';
import '../CSS/Register.css';
import { Link, useNavigate } from 'react-router-dom';
import validation from './Registervalidation';
import axios from 'axios';


const Register = () => {
    // Using the Usestate hook for setting the values of the email address and password.
    const [values, setvalues] = useState({
        name: '',
        email: '',
        phonenumber: '',
        address: '',
        password: ''
        // confirmpassword: ''
    })

    const navigate = useNavigate();

    //Using the useState hooks for the setting the errors.
    const [errors, setErrors] = useState({})


    //The function for the updating the values of the email address and password.
    // const handleInput = (event) => {
    //     setvalues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))

    // }

    //The function for event generation while the form is submitted.
    const handleRegister =  (event) => {
        event.preventDefault();
        axios.post('http://localhost:8081/Register', values)
        .then(res => {
            if(res.data.Status === "Success"){
                navigate('/Login')
            }else{
                alert("Error");
            }
        })
        .then(err => console.log(err));

        // setErrors(validation(values));
        // if(errors.name === "" && errors.email === "" && errors.phonenumber=== "" && errors.address=== "" && errors.createpassword === "" && errors.confirmpassword=== ""){
        // try {
        //     const response = await axios.post('http://localhost:8081/Register', values)
        //     const responseStatus = response.status
        //     if (responseStatus === 200) {
        //         console.log("Account created successfully");
        //           navigate('/Login');
        //     }
        //     else {
        //         alert("Error");
        //         console.log("Server error");
        //     }
            //   const data = await response.json();
            //   if(data.error){
            //     console.log("Server error");
            //   }
            //   else{
            //     console.log("Account created successfully");
            //     //   navigate('/home');
            //   }

        // } catch (error) {
        //     console.log(error);
        // }
        // }

    }
    return (
        <>
            <div className='container-fluid pt-4'>
                <div className='row justify-content-evenly'>
                    <div className='col-md-4 rounded pt-3 mb-4' id='Registerform'>
                        <h1 className='display-6'>Register</h1>
                        <form onSubmit={handleRegister}>
                            <div className="mb-3">
                                <label htmlFor="validationCustom01" className="form-label">Full name</label>
                                <div className='input-group'>
                                    <span className="input-group-text">
                                        <i className="bi bi-person"></i>
                                    </span>
                                    <input type="text" name='name' onChange={e=> setvalues({...values, name: e.target.value})} className="form-control" id="validationCustom01" placeholder='Enter full name' required />
                                    {/* Printing the error for the incorrect name entered by the user. */}
                                    {/* {errors.name && <span className='text-danger'>{errors.name}</span>}  */}
                                </div>
                                {/* <input type="text" className="form-control" id="validationCustom01" required/> */}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <div className="input-group">
                                    <span className="input-group-text">
                                        <i className="bi bi-envelope-at"></i>
                                    </span>
                                    <input type="email" name='email' onChange={e=> setvalues({...values, email: e.target.value})} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                    {/* Printing the error message for the email address entered by the users. */}
                                    {errors.email && <span className='text-danger'>{errors.email}</span>} 
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
                                    <input type="tel" name='phonenumber' onChange={e=> setvalues({...values, phonenumber: e.target.value})} className="form-control" id="exampleInputphone" aria-describedby="emailHelp" placeholder="Enter phone number" />
                                    {/* Printing the error message for the phone number. */}
                                    {errors.phonenumber && <span className='text-danger'>{errors.phonenumber}</span>} 
                                </div>

                                {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Address</label>
                                <div className="input-group">
                                    <span className="input-group-text">
                                        <i className="bi bi-house-fill"></i>
                                    </span>
                                    <input type="text" name='address' onChange={e=> setvalues({...values, address: e.target.value})}className="form-control" id="exampleInputEmail1_address" aria-describedby="emailHelp" placeholder="Enter address" />
                                    {/* Printing the error message for the address. */}
                                    {/* {errors.address && <span className='text-danger'>{errors.address}</span>}  */}
                                </div>

                                {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                            </div>

                            <div className="mb-3 input-group">
                                <label htmlFor="exampleInputPassword1" className="form-label"> Create Password</label>
                                <div className='input-group'>
                                    <span className="input-group-text">
                                        <i className="bi bi-eye-fill"></i>
                                    </span>
                                    <input type="password" name='password' onChange={e=> setvalues({...values, password: e.target.value})}className="form-control" placeholder='Create password' id="exampleInputPassword1_create" />
                                    {/* Printing the error message for the creating the password by the users. */}
                                    {/* {errors.createpassword && <span className='text-danger'>{errors.createpassword}</span>}  */}

                                </div>

                            </div>

                            <div className="mb-3 input-group">
                                <label htmlFor="exampleInputPassword1" className="form-label"> Confirm Password</label>
                                <div className='input-group'>
                                    <span className="input-group-text">
                                        <i className="bi bi-eye-fill"></i>
                                    </span>
                                    <input type="password" name='confirmpassword'onChange={e=> setvalues({...values, password: e.target.value})} className="form-control" placeholder='Confirm password' id="exampleInputPassword1_confirm" />
                                    {/* Printing the error message for the confirmation of the password entered by the user. */}
                                    {/* {errors.confirmpassword && <span className='text-danger'>{errors.confirmpassword}</span>}  */}

                                </div>

                            </div>

                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                            </div>


                            <button type="submit" className="btn btn-primary col-lg-12 center-text">Register</button>
                            <p className="small mt-2 pt-1 mb-3">Already have an account? <Link to="/Login" className="link-primary">Login</Link></p>

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

export default Register;
