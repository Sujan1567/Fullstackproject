import React from 'react'
import Navbar from './Navbar/Navbar'
import './CSS/Home.css'

const NotFound = () => {
    
  return (
    <>
    <Navbar/>

    <div className='not-found'>
        <h2 style={{fontSize:'55px'}}>404</h2>
        <p className='display-6' style={{fontSize:'20px'}} >Page not found</p>
      
    </div>

    </>
  )
}

export default NotFound
