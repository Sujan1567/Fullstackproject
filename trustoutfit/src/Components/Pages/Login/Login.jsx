import React, { useState } from 'react'
import Room from '../../Images/Room.jpg';
import '../CSS/Login.css';
import { Await, Link, useNavigate } from 'react-router-dom';
import validation from './Loginvalidation';
import axios from 'axios';



const Login = () => {
    // const [email, setemail] = useState('');
    // const [password, setpassword] = useState('');
    const[Values, setValues] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate();
    axios.defaults.withCredentials= true;
    const handleLogin= (e) =>{
        e.preventDefault();
        //calling the API to get the data.
        axios.post('http://localhost:8081/login', Values)
        .then(res=> {
            if(res.data.Status === "Success"){

                navigate('/')

            }else{
                alert("Invalid data");
                console.log(Values);

            }

        })
        .catch(err=> console.log(err));


    }
    
    //Creating the function for the login into system.
    // const handleLogin=(event)=>{
    //     event.preventDefault();
    //     axios.post('https://localhost:8081/OutfitStack', {email,password})

    // }
    

    // Using the Usestate hook for setting the values of the email address and password.
    // const [values, setvalues] = useState({
    //     email: '',
    //     password: ''
    // })

    // const navigate = useNavigate();

    //Using the useState hooks for the setting the errors.
    // const [errors, setErrors] = useState({})


    //The function for the updating the values of the email address and password.
    // const handleInput = (event) => {
    //     setvalues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))

    // }

    //The function for event generation while the form is submitted.
    /*const handleLogin = (event) => {
        event.preventDefault();
        setErrors(validation(values));

        try {
            const request = await axios.get('http://localhost:8081/OutfitStack', values)
            const requestStatus = request.status
            if (requestStatus === 200) {
                console.log("You have successfully login to system");
                  navigate('/');
            }
            else {
                console.log("Server error");
            }

        } catch (error) {
            console.log(error);
        }
    }*/

    // const handleLogin = async (event) => {
    //     event.preventDefault();
    //     console.log("Try to login into system");
    
    //     try {
    //         const response = await axios.post('/login', {email,password});
    //         const responseStatus = response.status;
    //         // console.log("Trying to login into system");
    
    //         if (responseStatus === 200) {
    //             console.log("Login successful");
    //             // Assuming you want to navigate to a home page after successful login
    //             // Replace '/home' with the appropriate route
    //             navigate('/');
    //         } else {
    //             console.log("Invalid credentials");
    //             // You might want to display an error message to the user
    //         }
    //     } catch (error) {
    //         console.log("Server error:", error);
    //         // Handle other potential errors, such as network issues
    //     }
    // }
    
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
                                    <input type="email" name='email' onChange={e=> setValues({...Values, email: e.target.value})} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
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
                                    <input type="password" name='password' onChange={e=> setValues({...Values, password: e.target.value})} className="form-control" placeholder='Enter password' id="exampleInputPassword1" />
                                    {/* Writing the error message for the password written by the user. */}
                                    {/* {errors.password && <span className='text-danger'>{errors.password}</span>} */}

                                </div>

                            </div>

                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" for="exampleCheck1">Remember me</label>
                            </div>


                            <button type="submit"  className="btn btn-success btn-block col-lg-12 center-text">Login</button>
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
