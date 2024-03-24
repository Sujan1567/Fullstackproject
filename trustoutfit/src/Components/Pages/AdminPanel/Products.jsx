import React, { useEffect, useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import jeans from '../../Images/Blackjeansjacketmen.jpg';
import axios from 'axios';
import moment from 'moment';
import toast from 'react-hot-toast';

const Products = () => {
  // making the usestate.
  const [data, setData] = useState([]);
  // const [showToast, setShowToast] = useState(false);

  //Making the function for the home page when the product is added successfully.
  const getProductData = async () => {
    const res = await axios.get("/getdata", {
      headers: {
        "Content-Type": "application/json"
      }
    });
    if (res.data.status === 201) {
      console.log("data get");
      setData(res.data.data)

      // navigate('/dashboard/products')
    } else {
      console.log("error")
    }
  }

  //Making the function for deleting the product.
  const dltProduct = async (ProductID) => {
    console.log(ProductID);
    const res = await axios.delete(`/${ProductID}`, {
      headers: {
        "Content-Type": "application/json"
      }
    });
    if (res.data.status === 201) {
      getProductData()
      toast.success("The product is deleted.")
      // setShowToast(true);

      // navigate('/dashboard/products')
    } else {
      console.log("error")
    }

  }

  //Calling the product data when the dashboard is refreshed.
  useEffect(() => {
    getProductData()

  }, [])

  const navigate = useNavigate()



  return (
    <>
      <div className='container mt-3'>

        {/* Adjusted styling here */}
        <div className='flex-wrap justify-content-between align-items-center'>
          <h2 className='display-6 text-center'>Clothing Products</h2>
          {/* <button className='btn btn-success mt-3' onClick={() => navigate('/dashboard/addproduct')}>Add</button> */}
        </div>

        <div className='row justify-content-evenly mt-4'>
          {
            data.length > 0 ? data.map((el, i) => {
              return (
                <>

                  <div className="card mb-3" style={{ width: '22rem', height: '30rem' }}>
                    <img className="card-img-top mt-2" src={`/uploads/${el.ProductImage}`} alt="Card image cap" style={{ width: '135px', textAlign: 'center', margin: 'auto' }} />
                    <div className="card-body text-center">
                      <h6 className="card-title">ProductName:{el.ProductName}</h6>
                      <h6 className="card-title">Description: {el.ProductDescription}</h6>
                      <h6 className='card-title'>Price:Rs.{el.ProductPrice}</h6>
                      <p className="card-text">Date added: {moment(el.date).format("DD-MM-YYYY")}</p>
                      <div className="d-flex flex-column align-items-center">
                        <button onClick={() => dltProduct(el.ProductID)} className="btn btn-danger col-lg-6 text-center mb-2">Delete</button>
                        <button className="btn btn-warning col-lg-6 text-center text-white" onClick={() => navigate(`/dashboard/Updateproduct/${el.ProductID}`)}>Update</button>
                      </div>
                    </div>
                  </div>
                
                </>
              )
            }) : ""
          }



        </div>
        <div className='d-flex justify-content-center mb-3'>

          <button className='btn btn-success col-lg-1 mt-3' onClick={() => navigate('/dashboard/addproduct')}>Add</button>
        </div>

      </div>








    </>


  )
}

export default Products
