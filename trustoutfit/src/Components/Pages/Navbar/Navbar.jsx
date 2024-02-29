import { Link } from 'react-router-dom';
import '../CSS/Home.css';
import Logo from '../../Images/Logo2.png';

import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg  navbar-dark homebar">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img src={Logo} className='img-fluid rounded' width="160px" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Shop</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">New Arrivals</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Category
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Men</a></li>
                                    <li><a className="dropdown-item" href="#">Women</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Kid</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Sales</a>
                            </li>


                        </ul>
                        <form className="d-flex" role="search" id="searchform">
                            <input className="form-control me-2" id='searchbar' type="search" placeholder="Search products" aria-label="Search" />
                            <button className="btn btn-outline-success" id='searchbtn' type="submit"><i className="bi bi-search"></i></button>
                        </form>
                        {/* <Link to="./Login"  className="text-decoration-none text-reset"><button type="button" className="btn btn-outline-success me-4"><i className="bi bi-person-circle" id='usericon'></i> Login</button> </Link> */}
                        <Link to="/Login" className="btn btn-outline-success me-4">
                            <i className="bi bi-person-circle" id='usericon'></i> Login
                        </Link>
                        {/* <button type="button" className="btn btn-outline-success me-4"> <Link to="/Login" className="text-decoration-none text-reset"><i className="bi bi-person-circle" id='usericon'></i> Login</Link></button> */}
                        <Link to="/Register" className="btn btn-outline-primary me-4">Sign Up </Link>
                        {/* <button type="button" className="btn btn-outline-primary me-4">Sign up</button> */}
                        <i className="bi bi-bell-fill" id='notification'></i>
                        {/* <i className="bi bi-cart" id='cart'></i> */}
                        <div id='ex4'>
                            <span className='p1 fa-stack fa-2x has-badge' id="number" data-count={1}>
                                <i className="bi bi-cart" id='cart'></i>
                            </span>
                        </div>
                        {/* <button className='btn btn-outline-warning'> Logout</button> */}
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar
