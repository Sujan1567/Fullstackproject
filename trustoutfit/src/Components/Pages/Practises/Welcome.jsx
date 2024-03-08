import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import Admin from './Admin';
import Visitor from './Visitor';

const Welcome = () => {
    const [auth, setAuth] = useState(false);
    const [message, setMessage] = useState('');
    // const [name, setName] = useState('');
    const [role, setRole] = useState('');

    axios.defaults.withCredentials = true;


    useEffect(() => {
        axios.get('http://localhost:8081')
            .then(res => {
                if (res.data.Status === "Success") {
                    setAuth(true)
                    setRole(res.data.role)

                } else {
                    setAuth(false)
                    setMessage(res.data.Error)
                    Navigate("/Login");
                }
            })
            .then(err => console.log(err));

    }, [])

    const handledelete = () => {
        axios.get('http://localhost:8081/logout')
            .then(res => {
                window.location.reload(true);
                // setAuth(false);
                // setName(''); 

            }).catch(err => console.log(err));


    }

    return (
        <>

            <h2> Role base authorization.</h2>
            {role === "Admin" && <Admin />}
            {role === "User" && <Visitor />}

            {/* This is for the name function. */}
            {/* {
            auth ?
            <div>
                <h3>You are authorized----{name}</h3>
                <button type='button' className='btn btn-danger' onClick={handledelete}>Logout</button>

            </div>
            :
            <div>
                <h3>{message}</h3>
                <h3>Login Now</h3>
                <Link to="/Login" className='btn btn-primary'>Login</Link>
            </div>
        } */}

        </>
    )
}

export default Welcome
