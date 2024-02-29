import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import '../CSS/Malebrand.css'
import bluehoodie from '../../Images/Bluehoodiemen.jpg';
import blackjeans from '../../Images/Blackjeansjacketmen.jpg';
import Grayhalfshirt from '../../Images/Grayhalfshirtmen.jpg';
import products from '../../Assests/Products';

const Malebrand = () => {
    const[cartData, setCartData]= useState(products);

    return (
        <>
            <Navbar />
                <h2 className='text-center display-6 mt-4'>Best Fashion for the Boys</h2>
            <div className='container-fluid mt-4'>
                <div className='row justify-content-evenly'>
                    <div className='col-md-3'>
                        <div class="card"  style={{width: "25rem"}} id="card-box" >
                            <img src={bluehoodie} class="card-img-top" alt="..." height="360px"/>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                        </div>

                    </div>
                    <div className='col-md-3'>
                        <div class="card" style={{width: "25rem"}}>
                            <img src={blackjeans} class="card-img-top" alt="..." height="360px"/>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                        </div>

                    </div>
                    <div className='col-md-3'>
                        <div class="card" style={{width: "25rem"}}>
                            <img src={Grayhalfshirt} class="card-img-top" alt="..." height="360px"/>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                        </div>

                    </div>


                </div>

            </div>

        </>
    )
}

export default Malebrand
