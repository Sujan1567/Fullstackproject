import React from 'react'
import '../CSS/Cartstyle.css'
import Navbar from '../Navbar/Navbar'
import bluehoodie from '../../Images/Bluehoodiemen.jpg';

const CartDetails = () => {
  //Creating the array.
  const arr = [0, 1]
  return (
    <>
      <Navbar />
      <div className='container'>

        <div className='row justify-content-center m-0'>
          <div className='col-md-8 mt-5 mb-5'>
            <div className="card w-100">
              <div className="card-header bg-dark p-3">
                <div className='d-flex justify-content-between align-items-center'>
                  <h5 className=' text-white m-0'>Cart calculation(1)</h5>

                  {
                    arr.length > 0 ? <button className='btn btn-danger mt-0 btn-sm '><i className="bi bi-trash3"></i><span>Empty Cart</span></button> : ""
                  }

                </div>
              </div>
              <div className="card-body p-0">
                {
                  arr.length === 0 ? <table className="table mb-0">
                    {/* <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">First</th>
                      <th scope="col">Last</th>
                      <th scope="col">Handle</th>
                    </tr>
                  </thead> */}
                    <tbody>
                      <tr>
                        <td colSpan={6} className='text-center'>
                          <div className='cart-empty'>
                            <i class="bi bi-cart-fill" id="cartempty"></i>
                            <p>Your cart is Empty.</p>

                          </div>

                        </td>
                      </tr>

                    </tbody>
                  </table> : <table className='table table-responsive-sm mb-0'>
                    <thead>
                      <tr>
                        <th>Action</th>
                        <th>Product</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th className='text-end'><span id="amount" className='amount'>Total Amount</span></th>


                      </tr>

                    </thead>
                    <tbody>
                      {
                        arr.map((data, index) => {
                          return (
                            <>
                              <tr>
                                <td><button id='deleteactionicon' className='btn btn-danger'><i className="bi bi-trash3"></i></button></td>
                                <td><div className='imagerow'><img className='img-fluid rounded' src={bluehoodie} width="40px" /></div></td>
                                <td><div><p>Blue hoodie</p></div></td>
                                <td>3000</td>
                                <td>
                                  <div className='input-group'>
                                    <button type='button' className="btn btn-outline-success" id='Quantitybutton'>
                                      <i class="bi bi-dash" id='minus'></i>
                                    </button>
                                    <input type='text' className='form-control' name='' id=''></input>
                                    <button  type='button' className="btn btn-outline-success">
                                      <i class="bi bi-plus"></i>

                                    </button>


                                  </div>

                                </td>
                                <td className='text-end'>400</td>

                              </tr>

                            </>

                          )

                        })

                      }

                    </tbody>
                    <tfoot>
                      <tr>
                        <th>&nbsp;</th>
                        <th colSpan={3}>&nbsp;</th>
                        <th>Items In cart<span className='ml-2 mr-2'> : </span><span className='text-danger'>4</span></th>
                        <th className='text-end'>Total prices<span className='ml-2 mr-2'> : </span><span className='text-danger'>400</span></th>

                      </tr>

                    </tfoot>


                  </table>
                }

                {/* <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a> */}
              </div>
            </div>



          </div>

        </div>

      </div>


    </>
  )
}

export default CartDetails
