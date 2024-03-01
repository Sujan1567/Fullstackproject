import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import '../CSS/Malebrand.css'
import bluehoodie from '../../Images/Bluehoodiemen.jpg';
import blackjeans from '../../Images/Blackjeansjacketmen.jpg';
import Grayhalfshirt from '../../Images/Grayhalfshirtmen.jpg';
import products from '../../Assests/Products';

const Malebrand = () => {
    const [cartData, setCartData] = useState(products);


    return (
        <>
            <Navbar />
            <h2 className='text-center display-6 mt-4'>Best Fashion for the Boys</h2>
            <div className='container-fluid mt-4'>
                <div className='row justify-content-evenly'>
                   
                    {
                        products.map((element, index) => {
                            return (
                                <>
                                    <div className='col-md-4 mb-5'>
                                        <div className="card" style={{ width: "25rem" }} id="card-box" >
                                            <img src={element.image} className="card-img-top" alt="..." height="360px" />
                                            <div className="card-body">
                                                <div className='d-flex justify-content-between align-items-center'>
                                                    <h5 className="card-title">{element.name}</h5>
                                                    <span id='Rating' className='text-white'>{element.Rating}&nbsp;★</span>
                                                </div>
                                                <div className='d-flex justify-content-between align-items-start mt-3'>
                                                    <p className="card-text">This is the perfect hoodie for Boys.</p>
                                                    <span>{element.Price}</span>
                                                </div>
                                                <hr />
                                                <a href="#" className="btn btn-info text-white" id='Cartbutton'>Add to cart</a>
                                            </div>
                                        </div>

                                    </div>
                                </>
                            )

                        })

                    }
                    {/* <div className='col-md-3'>
                        <div className="card" style={{ width: "25rem" }}>
                            <img src={blackjeans} className="card-img-top" alt="..." height="360px" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>

                    </div>
                    <div className='col-md-3'>
                        <div className="card" style={{ width: "25rem" }}>
                            <img src={Grayhalfshirt} className="card-img-top" alt="..." height="360px" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>

                    </div> */}


                </div>

            </div>

        </>
    )
}

export default Malebrand
