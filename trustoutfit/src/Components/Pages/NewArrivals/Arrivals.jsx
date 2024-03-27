import React from 'react'
import '../CSS/Arrival.css'
import { useNavigate } from 'react-router-dom';
// import { UseSelector, useSelector } from 'react-redux';
import Navbar from '../Navbar/Navbar'
import {  useGetAllProductsQuery } from '../../../redux/features/productsAPI'
import { useDispatch } from 'react-redux'
import { addTocart } from '../../../redux/features/cartslice'

const Arrivals = () => {
    // const {items, status} = useSelector(state => state.CartProducts)
    const { data, error, isLoading } = useGetAllProductsQuery();
    const dispatch= useDispatch();

    const navigate= useNavigate();

    const handleAddToCart = (product) =>{
        dispatch(addTocart(product));
        navigate("/Cart");

    }
    return (
        <>
            <Navbar />
            <div className='ArrivalContain'>
                {isLoading ?( <p>Loading...</p>) : error ?
                    (<p>An error Occurred..</p>) : (<>
                    <h1 className='display-3 text-center' > New Arrivals</h1>
                    <div className='CartProducts mb-6'>
                        {data?.map( product =><div key={product.id} className='product' >
                            <h3 className='display-6'>{product.name}</h3>
                            <img className='Productimag' src={product.image} alt={product.name}/>
                            <div className='details'>
                                <span>{product.description}</span>
                                <span className='price'>Rs.{product.Price}</span>

                            </div>
                            <button className='btn btn-primary' onClick={() => handleAddToCart(product)}>Add To Cart</button>

                        </div>)}

                    </div>


                    </>)}

            </div>

        </>
    )
}

export default Arrivals
