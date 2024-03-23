import axios from 'axios';
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const UpdateProduct = () => {
  const [product, setProduct] = useState({
    ProductName: "",
    ProductDescription: "",
    ProductPrice: "",
    ProductImage: "",

  });
  //Navigating to the Home page.
  const navigate= useNavigate();

  //Using the location hook to know the id of the product.
  const location= useLocation();

  const productid = location.pathname.split("/")[3];

  // console.log(location.pathname.split("/")[3]);
  const handleChange = (e) => {
    setProduct(prev => ({ ...prev, [e.target.name]: e.target.value }))
  };

  // For the Button.
  const handleClick = async e =>{
    e.preventDefault()
    try{
      await axios.put('http://localhost:8081/product/'+ productid,product)
      navigate('/dashboard')

    }catch(err){
      console.log(err);

    }
  }
  console.log(product);
  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-8'>
            <h1 className='display-6'>Update the Product</h1>
            <form class="row g-3 needs-validation" novalidate>
              <div class="col-md-6">
                <label for="validationCustom01" class="form-label">Name</label>
                <input type="text" class="form-control" id="validationCustom01" onChange={handleChange} name='ProductName' required/>
                  <div class="valid-feedback">
                    Looks good!
                  </div>
              </div>
              <div class="col-md-6">
                <label for="validationCustom02" class="form-label">Description</label>
                <input type="text" class="form-control" id="validationCustom02"  onChange={handleChange} name='ProductDescription' />
                  <div class="valid-feedback">
                    Looks good!
                  </div>
              </div>
              <div class="col-md-6">
                <label for="validationCustomUsername" class="form-label">Price</label>
                <div class="input-group has-validation">
                  <span class="input-group-text" id="inputGroupPrepend">NPR(रु)</span>
                  <input type="number" class="form-control"  aria-describedby="inputGroupPrepend" onChange={handleChange}  name='ProductPrice' required/>
                    <div class="invalid-feedback">
                      Please choose a username.
                    </div>
                </div>
              </div>
              <div class="col-md-6">
                <label for="validationCustom03" class="form-label">ImageCover</label>
                <input type="text" class="form-control" onChange={handleChange}  name='ProductImage' required/>
                  <div class="invalid-feedback">
                    Please provide a valid city.
                  </div>
              </div>
              
              <div class="col-12">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
                    <label class="form-check-label" for="invalidCheck">
                      Agree to terms and conditions
                    </label>
                    <div class="invalid-feedback">
                      You must agree before submitting.
                    </div>
                </div>
              </div>
              <div class="col-6">
                <button class="btn btn-primary"  onClick={handleClick}>Update</button>
              </div>
            </form>


          </div>

        </div>

      </div>




    </>

  )
}

export default UpdateProduct
