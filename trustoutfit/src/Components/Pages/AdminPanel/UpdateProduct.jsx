// UpdateProduct.jsx

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

const UpdateProduct = () => {
    const { ProductID } = useParams();
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [file, setFile] = useState(null);

    useEffect(() => {
        // Fetch the product details when the component mounts
        const getProductDetails = async () => {
            try {
                const res = await axios.get(`/getProduct/${ProductID}`);
                const { ProductName, ProductDescription, ProductPrice } = res.data.product;
                setName(ProductName);
                setDescription(ProductDescription);
                setPrice(ProductPrice);
            } catch (error) {
                console.error('Error fetching product details:', error);
            }
        };

        getProductDetails();
    }, [ProductID]);

    const handleUpdate = async (e) => {
        e.preventDefault();

        // Create FormData object to send file and other data
        const formData = new FormData();
        formData.append('photo', file);
        formData.append('name', name);
        formData.append('description', description);
        formData.append('price', price);

        try {
            const res = await axios.put(`/update/${ProductID}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            if (res.data.status === 200) {
                toast.success('Product updated successfully');
                navigate('/dashboard/products');
            } else {
                toast.error('Failed to update product');
            }
        } catch (error) {
            toast.error('Failed to update product');
            console.error('Error:', error);
        }
    };

    return (
        <div className="container mt-3">
          <div className='row'>
            <div className='col-md-8'>
            <h1 className="display-6">Update Product</h1>
            <form onSubmit={handleUpdate} className='row g-3'>
                <div className=" col-md-6 mb-3">
                    <label htmlFor="productName" className="form-label">
                        Product Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="productName"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className=" col-md-6 mb-3">
                    <label htmlFor="productDescription" className="form-label">
                        Product Description
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="productDescription"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <div className="col-md-6 mb-3">
                <label for="validationCustomUsername" class="form-label">Price</label>
                <div class="input-group has-validation">
                  <span class="input-group-text" id="inputGroupPrepend">NPR(रु)</span>
                  <input type="number" class="form-control" aria-describedby="inputGroupPrepend"  id="productPrice" value={price} onChange={(e) => setPrice(e.target.value)}  />
                  <div class="invalid-feedback">
                    Please choose a username.
                  </div>
                </div>
                </div>
                <div className="col-md-6 mb-3">
                    <label htmlFor="productImage" className="form-label">
                        Product Image
                    </label>
                    <input
                        type="file"
                        className="form-control"
                        id="productImage"
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                </div>
                <div className='col-6'>
                <button type="submit" className="btn btn-primary">
                    Update
                </button>

                </div>
            </form>
            </div>
            </div>
        </div>
    );
};

export default UpdateProduct;
