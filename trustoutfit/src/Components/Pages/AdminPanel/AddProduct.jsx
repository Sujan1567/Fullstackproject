import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const AddProduct = () => {

  const [name, setName]= useState("");
  const [description, setDescription]= useState("");
  const [price, setPrice]= useState("");
 

  // const [product, setProduct] = useState({
  //   ProductName: "",
  //   ProductDescription: "",
  //   ProductPrice: "",
    

  // });
  
  //For having the state for the images.
  const [file, setFile]= useState("");

  
  //Navigating to the Home page.
  const navigate = useNavigate();

  // const handleChange = (e) => {
  //   setProduct(prev => ({ ...prev, [e.target.name]: e.target.value }))
  // };

  //event for the name.
  const setdataname= (e) =>{
    setName(e.target.value)
  }

  //event for the description.
  const setdatadescription= (e) =>{
    setDescription(e.target.value)
  }

  //event for the price.
  const setdataprice= (e) =>{
    setPrice(e.target.value)
  }

  //For the images.
  const setimgfile = (e) =>{
    setFile(e.target.files[0])

  }

  // For the Button.
  const handleClick = async e => {
    e.preventDefault()

    var formdata= new FormData();
    formdata.append("photo", file)
    formdata.append("name", name);
    formdata.append("description",description );
    formdata.append("price",price);

    const config ={
      headers:{
        "Content-Type": "multipart/form-data"
      }
    }

    const res= await axios.post("/add", formdata, config);
    
    //Adding the condition.
    if(res.data.status=== 201){
      toast.success("You have successfully added new products");
      navigate('/dashboard/products')
    }else{
      console.log("error")
    }




    // try {
     

    //   await axios.post('http://localhost:8081/product', product);
    //   navigate('/dashboard');

    // } catch (err) {
    //   console.log(err);

    // }
  }

  //Making the two variables for the file.
  // const [file, setFile] = useState({ ProductImage: "" });
  // const [data, setData] = useState([]);

  // For uploading the file.
  // const handlefile = (e) => {
  //   setFile(e.target.files[0])

  // }

  //Uploading the image.
  // const handleUpload = () => {
  //   const formdata = new FormData();
  //   formdata.append('ProductImage', file);
  //   axios.post('http://localhost:8081/upload', formdata)
  //     .then(res => {
  //       if (res.data.Status === "Success") {
  //         console.log("Succeed")
  //       } else {
  //         console.log("Failed")
  //       }
  //     })
  //     .catch(err => console.log(err));
  // }

  //Creating the file function.
  // useEffect(() => {
  //   axios.get('http://localhost:8081/cloth')
  //     .then(res => {
  //       setData(res.data[0])
  //     })
  //     .catch(err => console.log(err));

  // }, [])
  // console.log(product);
  return (
    <>
      <div className='container-fluid mt-3'>
        <div className='row'>
          <div className='col-md-8'>
            <h1 className='display-6'>Add New Products</h1>
            <form class="row g-3">
              <div class="col-md-6">
                <label for="validationCustom01" class="form-label">Name</label>
                <input type="text" class="form-control" id="validationCustom01" onChange={setdataname} name='name' required />
                <div class="valid-feedback">
                  Looks good!
                </div>
              </div>
              <div class="col-md-6">
                <label for="validationCustom02" class="form-label">Description</label>
                <input type="text" class="form-control" id="validationCustom02" onChange={setdatadescription} name='description' />
                <div class="valid-feedback">
                  Looks good!
                </div>
              </div>
              <div class="col-md-6">
                <label for="validationCustomUsername" class="form-label">Price</label>
                <div class="input-group has-validation">
                  <span class="input-group-text" id="inputGroupPrepend">NPR(रु)</span>
                  <input type="number" class="form-control" aria-describedby="inputGroupPrepend" onChange={setdataprice} name='price'  />
                  <div class="invalid-feedback">
                    Please choose a username.
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <label for="validationCustom03" class="form-label">ImageCover</label>
                <input type="file" class="form-control" id="formFile" onChange={setimgfile} name='photo' />
                {/* <button className='btn btn-info' onClick={handleUpload}>upload</button> */}
                <div class="invalid-feedback">
                  Please provide a valid city.
                </div>
              </div>
              {/* <br />
              <img src={`http://localhost:8081/Image/` + data.ProductImage} alt='' /> */}

              
              <div class="col-6">
                <button class="btn btn-primary" onClick={handleClick}>Add</button>
              </div>
            </form>


          </div>

        </div>

      </div>




    </>
    // <div className='form'>
    //     <h1>Add New Product</h1>
    //     <input type='text' placeholder='Name' onChange={handleChange} name='Name'/>
    //     <input type='text' placeholder='description' onChange={handleChange} name='Description'/>
    //     <input type='number' placeholder='price' onChange={handleChange}  name='Price'/>
    //     <input type='text' placeholder='ImageCover' onChange={handleChange}  name='ImageCover'/>

    //      {/* Creating the button to send the data in the backend source. */}
    //      <button>Add</button>





    // </div>
  )
}

export default AddProduct
