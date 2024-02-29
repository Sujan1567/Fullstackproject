import React, { useEffect, useState } from 'react'
//import '../CSS/Home.css';
import Logo from '../../Images/Logo2.png';
import logo1 from '../../Images/Logo.jpg';
import backimage from '../../Images/Store.jpg';
import menbrand from '../../Images/Menbrand.jpg';
import womenbrand from '../../Images/femalebrand.jpg';
import kidbrand from '../../Images/kidbrand1.jpg';
import mensit from '../../Images/Mensit.jpg';
import menjeans from '../../Images/Menjeans.jpg'
import Womenjeans from '../../Images/Womenjeans.jpg';
import Redwomen from '../../Images/Redwomen.jpg';
import Kidblue from '../../Images/kidblueshirt.jpg';
import kidcap from '../../Images/Kidcap.jpg';
import pinkjacket from '../../Images/eunwoo.jpg';
import brownjacket from '../../Images/brownjacket.jpg';
import bicycleboy from '../../Images/boycycle.jpg';
import blacksweetshirt from '../../Images/blacksweetshirt.jpg';
import mensjeansjacket from '../../Images/mensjeansjacket.jpg';
import browncoat from '../../Images/browncoat.jpg';
import longcoat from '../../Images/girllongcoat.jpg';
import girlwhitecoat from '../../Images/girlwhitecoat.jpg';
import girlwhiteshirt from '../../Images/girlwhiteshirt.jpg';
import girlwhitepant from '../../Images/girlwhitepant.jpg';
import girlcap from '../../Images/Womencap.jpg';
import girljeansjacket from '../../Images/girljeansjacket.jpg';
import girlshirt from '../../Images/girlshirt.jpg';
import pakistanigirl from '../../Images/pakistanilehga.jpg';
import navycoat from '../../Images/navyLongcoatmen.jpg';
import poloshirt from '../../Images/menpolotshirt.jpg';
import cargopant from '../../Images/cargodarkgreen.jpg';
import tracksuits from '../../Images/Trcaksuits.jpg';
import navyblack from '../../Images/poloshirtnavyblack.jpg';
import longshirtwomen from '../../Images/fulltshirtwomen.jpg';
import blackonepiece from '../../Images/blackonepiecewomen.jpg';
import brideoutfit from '../../Images/bridelehanga.jpg';
import Formalpantswomen from '../../Images/Formalpantswomen.jpg';
// import menblack from '../Images/Menblack.jpg';
import Login from '../Login/Login';
import { Link, NavLink, Navigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';




const Home = () => {

    return (
        <>

            <Navbar />


            {/* Making the carosel for showing the photo. */}
            <div id="carouselExampleCaptions" className="carousel slide carousel-fade m-5">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
                </div>
                <div className="carousel-inner rounded">
                    <div className="carousel-item active">
                        <img src={mensit} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={menjeans} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={Womenjeans} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={Redwomen} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={Kidblue} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={kidcap} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            {/* Desining the background image for landing page. */}
            <div className='container-fluid  pt-5 pb-5'>
                <div className='row justify-content-evenly'>
                    <div className='col-md-4'>
                        <h3 className='display-4'>Explore the clothing Style.</h3>
                        <p id='text'>The store contain the different clothing products for the Men, women and Kids. Individuals can explore the different products as per their need. Order the best quality product from the store.</p>
                        <button type="button" className="btn" id='explorebtn'>Explore Now</button>
                    </div>
                    <div className='col-md-7'>
                        <img src={backimage} className='img-fluid rounded' alt='' />
                    </div>
                </div>

            </div>

            {/* Designing the choosing the brands for the different gender. */}
            <div className='conatiner-fluid'>
                <div className='row justify-conetnt-center mb-4'>
                    <div className='col-md-12 mt-4'>
                        <h1 className='display-6 text-center'>Explore the best clothing brands for different gender.</h1>
                    </div>

                </div>
                <div className='row  justify-content-center'>
                    <div className='col-md-3'>
                        <div className="card">
                            <img src={menbrand} className="card-img-top" height='350px' alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Men Fashion</h5>
                                <p className="card-text">View the different men's clothing products available in our store.</p>
                                <a href="#" className="btn" id='explorebtn'>Visit men fashion</a>
                            </div>
                        </div>

                    </div>
                    <div className='col-md-3'>
                        <div className="card">
                            <img src={womenbrand} className="card-img-top" height='350px' alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Women Fashion</h5>
                                <p className="card-text">View the different women's clothing products available in our store.</p>
                                <a href="#" className="btn" id='explorebtn'>Visit Women fashion</a>
                            </div>
                        </div>


                    </div>
                    <div className='col-md-3'>
                        <div className="card">
                            <img src={kidbrand} className="card-img-top" height='350px' alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Kid Fashion</h5>
                                <p className="card-text">View the different Kid's clothing products available in our store.</p>
                                <a href="#" className="btn" id='explorebtn'>Visit kid fashion</a>
                            </div>
                        </div>
                    </div>

                </div>


            </div>


            {/* Making the photo for frame for different fashion accessiors. */}
            <div className='container-fluid mt-5 mb-4'>
                <h1 className='display-5 text-center mb-4'>Trendy Fashion for Men</h1>
                {/* <!-- Gallery --> */}
                <div className="row">
                    <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                        <img
                            src={pinkjacket}
                            className="w-100 shadow-1-strong rounded mb-4"
                            alt="Boat on Calm Water"
                        />

                        <img
                            src={mensjeansjacket}
                            className="w-100 shadow-1-strong rounded mt-4 mb-4"
                            alt="Wintry Mountain Landscape"
                        />
                    </div>

                    <div className="col-lg-4 mb-4 mb-lg-0">
                        <img
                            src={brownjacket}
                            className="w-100 shadow-1-strong rounded mb-4"
                            alt="Mountains in the Clouds" height='850px'
                        />

                        <img
                            src={blacksweetshirt}
                            className="w-100 shadow-1-strong rounded mb-4"
                            alt="Boat on Calm Water"
                        />
                    </div>

                    <div className="col-lg-4 mb-4 mb-lg-0">
                        <img
                            src={bicycleboy}
                            className="w-100 shadow-1-strong rounded mb-4"
                            alt="Waves at Sea" height='750px'
                        />

                        <img
                            src={browncoat}
                            className="w-100 shadow-1-strong rounded mb-4"
                            alt="Yosemite National Park"
                        />
                    </div>
                </div>
                {/* <!-- Gallery --> */}
            </div>

            {/* Making the photo for frame for different fashion accessiors. */}
            <div className='container-fluid mt-5 mb-5'>
                <h1 className='display-5 text-center mb-4'>Trendy Fashion for Women</h1>
                {/* <!-- Gallery --> */}
                <div className="row">
                    <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                        <img
                            src={longcoat}
                            className="w-100 shadow-1-strong rounded mb-4"
                            alt="Boat on Calm Water"
                        />

                        <img
                            src={girlwhitecoat}
                            className="w-100 shadow-1-strong rounded mt-4 mb-4"
                            alt="Wintry Mountain Landscape"
                        />
                    </div>

                    <div className="col-lg-4 mb-4 mb-lg-0">
                        <img
                            src={girlshirt}
                            className="w-100 shadow-1-strong rounded mb-4"
                            alt="Mountains in the Clouds" height='650px'
                        />

                        <img
                            src={pakistanigirl}
                            className="w-100 shadow-1-strong rounded mb-4"
                            alt="Boat on Calm Water" height='700px'
                        />
                    </div>

                    <div className="col-lg-4 mb-4 mb-lg-0">
                        <img
                            src={girlcap}
                            className="w-100 shadow-1-strong rounded mb-4"
                            alt="Waves at Sea" height='750px'
                        />

                        <img
                            src={girljeansjacket}
                            className="w-100 shadow-1-strong rounded mb-4"
                            alt="Yosemite National Park" height='600px'
                        />
                    </div>
                </div>
                {/* <!-- Gallery --> */}
            </div>



            <div className='container-fluid'>
                <h1 className='display-6 text-center mb-4'>Latest Products for sale</h1>
                {/* Making the sales for the men. */}
                <div className='row'>
                    <div className='col-md-3'>
                        <div className="card" style={{ width: "18rem" }}>
                            <img src={navycoat} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">NavyLong coat</p>
                                <p>Rs.2000</p>
                                <button type='button' className='btn btn-warning rounded text-white'>Add to cart</button>
                            </div>
                        </div>

                    </div>

                    <div className='col-md-3'>
                        <div className="card" style={{ width: "18rem" }}>
                            <img src={navyblack} className="card-img-top" height="427px" alt="..." />
                            <div className="card-body">
                                <p className="card-text">Polo T-shirt</p>
                                <p>Rs.2000</p>
                                <button type='button' className='btn btn-warning rounded text-white'>Add to cart</button>
                            </div>
                        </div>

                    </div>

                    <div className='col-md-3'>
                        <div className="card" style={{ width: "18rem" }}>
                            <img src={cargopant} className="card-img-top" height="427px" alt="..." />
                            <div className="card-body">
                                <p className="card-text">Cargo pants</p>
                                <p>Rs.2000</p>
                                <button type='button' className='btn btn-warning rounded text-white'>Add to cart</button>
                            </div>
                        </div>

                    </div>

                    <div className='col-md-3'>
                        <div className="card" style={{ width: "18rem" }}>
                            <img src={tracksuits} className="card-img-top" height="427px" alt="..." />
                            <div className="card-body">
                                <p className="card-text">Track suits</p>
                                <p>Rs.2000</p>
                                <button type='button' className='btn btn-warning rounded text-white'>Add to cart</button>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Making the sales for the women. */}
                <div className='row mt-5'>
                    <div className='col-md-3'>
                        <div className="card" style={{ width: "18rem" }}>
                            <img src={longshirtwomen} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">Full-sleeve Polo T-shirt</p>
                                <p>Rs.1500</p>
                                <button type='button' className='btn btn-warning rounded text-white'>Add to cart</button>
                            </div>
                        </div>

                    </div>

                    <div className='col-md-3'>
                        <div className="card" style={{ width: "18rem" }}>
                            <img src={blackonepiece} className="card-img-top" height="427px" alt="..." />
                            <div className="card-body">
                                <p className="card-text">black one-pieces</p>
                                <p>Rs.5000</p>
                                <button type='button' className='btn btn-warning rounded text-white'>Add to cart</button>
                            </div>
                        </div>

                    </div>

                    <div className='col-md-3'>
                        <div className="card" style={{ width: "18rem" }}>
                            <img src={brideoutfit} className="card-img-top" height="427px" alt="..." />
                            <div className="card-body">
                                <p className="card-text">bridal Lehanga</p>
                                <p>Rs.10000</p>
                                <button type='button' className='btn btn-warning rounded text-white'>Add to cart</button>
                            </div>
                        </div>

                    </div>

                    <div className='col-md-3'>
                        <div className="card" style={{ width: "18rem" }}>
                            <img src={Formalpantswomen} className="card-img-top" height="427px" alt="..." />
                            <div className="card-body">
                                <p className="card-text">Formal white pants</p>
                                <p>Rs.2000</p>
                                <button type='button' className='btn btn-warning rounded text-white'>Add to cart</button>
                            </div>
                        </div>

                    </div>
                </div>



            </div>

            {/* Calling the Footer components. */}
            <Footer/>

           
        </>
    )
}

export default Home;
