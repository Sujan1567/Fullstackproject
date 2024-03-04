import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'

const Welcome = () => {
    const [auth, setAuth] = useState(false);
    const [message, setMessage] = useState('');
    const [name, setName] = useState('');
    

    axios.defaults.withCredentials = true;


    useEffect (() => {
        axios.get('http://localhost:8081')
        .then(res=> {
            if(res.data.Status === "Success"){
                setAuth(true)
                setName(res.data.name)
                
            }else{
                setAuth(false)
               setMessage(res.data.Error)
            }
        })
        .then(err => console.log(err));

    }, [])

    const handledelete = () =>{
        axios.get('http://localhost:8081/logout')
        .then(res => {
             window.location.reload(true);
            // setAuth(false);
            // setName(''); 

        }).catch(err => console.log(err) );


    }

  return (
    <>
        {
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
        }
      
    </>
  )
}

export default Welcome
