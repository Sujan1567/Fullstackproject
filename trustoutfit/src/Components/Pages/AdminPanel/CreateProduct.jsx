import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "../CSS/Panel.css"

const CreateProduct = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchAllBooks = async () => {
            try {
                const res = await axios.get('http://localhost:8081/product')
                setProducts(res.data)

            } catch (err) {
                console.log(err)

            }

        }
        fetchAllBooks()

    }, []);

    //Making the delete funstion for the deleting.
    const handleDelete = async (ProductID) => {
        try {
            await axios.delete("http://localhost:8081/product/" + ProductID)
            window.location.reload()

        } catch (err) {
            console.log(err)

        }
    }


    return (
        <div className='container'>
            <h2>Trust and Try Outfit</h2>
            <div className='d-flex' style={{ gap: '20px' }}>
                {products.map((product) => (
                    <div className='product' key={product.ProductID} style={{ margin: '0 10px' }}>
                        {product.ProductImage && <img src={product.ProductImage} alt='' />}
                        <h2>{product.ProductName}</h2>
                        <p>{product.ProductDescription}</p>
                        <span>{product.ProductPrice}</span>

                        <div className="d-flex flex-column">
                            <button className='btn btn-danger mb-2' onClick={() => handleDelete(product.ProductID)}>Delete</button>
                            <button className='btn btn-info'>Update</button>
                        </div>


                    </div>

                ))}

            </div>

            <div className="text-center mt-5"> {/* Center the button */}
                <button className='btn btn-warning'>
                    <Link to='/dashboard/addproduct' className='text-white' style={{ textDecoration: "none" }}>Add new product</Link>
                </button>
            </div>




        </div>
    )
}

export default CreateProduct
