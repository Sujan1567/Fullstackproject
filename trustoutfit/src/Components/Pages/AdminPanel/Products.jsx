import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const Products = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className='container'>
        <div className='row'>
          {/* Adjusted styling here */}
          <div className='d-flex align-items-start mt-3'>
            <h2 style={{ marginRight: '1000px' }} className='display-6'>Products</h2>
            <button className='btn btn-success mt-3' onClick={() => navigate("/dashboard/products/create-product")}>Create</button>
          </div>
        </div>
      </div>
      <Outlet />
    

    </>


  )
}

export default Products
