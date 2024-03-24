import React, { useEffect, useState } from 'react'
import '../CSS/Panel.css'
import { NavLink, Outlet } from 'react-router-dom';

const Panel = () => {
    const [activeMenuItem, setActiveMenuItem] = useState('');

    const handleMenuItemClick = (menuItem) => {
        if (activeMenuItem === menuItem) {
            // If the clicked item is already active, no need to do anything
            return;
        }
        setActiveMenuItem(menuItem);
    };

   
   
    return (
        <>
            


            <div className="d-flex" style={{ minHeight: '100vh' }}>
                <div className="d-flex flex-column flex-shrink-0 p-3" style={{ width: '230px' }} id='BAR'>
                    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                        <svg className="bi me-2" width="40" height="32"></svg>
                        <span className="fs-4 text-white">Sidebar</span>
                    </a>
                    <hr />
                    <ul className="nav nav-pills flex-column mb-auto">
                        <li className="nav-item mb-2">
                            <a href="#"className={`nav-link ${activeMenuItem === 'Home' ? 'active' : ''} text-white`} onClick={() => handleMenuItemClick('Home')} style={{ display: "flex", alignItems: "center" }}>
                                <span className='material-icons-sharp spread' style={{ marginRight: "9px" }}>grid_view</span>
                                Home
                            </a>
                        </li>
                        <li className='mb-2'>
                            <a href="#" className={`nav-link ${activeMenuItem === 'Analytics' ? 'active' : ''} text-white`} onClick={() => handleMenuItemClick('Analytics')} style={{ display: "flex", alignItems: "center" }}>
                                <span className='material-icons-sharp spread' style={{ marginRight: "9px" }}>insights</span>
                                Analytics
                            </a>
                        </li>
                        <li className='mb-2'>
                            <a href="#" className={`nav-link ${activeMenuItem === 'Orders' ? 'active' : ''} text-white`} onClick={() => handleMenuItemClick('Orders')} style={{ display: "flex", alignItems: "center" }}>
                                <span className='material-icons-sharp spread' style={{ marginRight: "9px" }}>receipt_long</span>
                                Orders
                            </a>
                        </li>
                        <li className='mb-2'>
                            <NavLink to="/dashboard/Products"className={`nav-link ${activeMenuItem === 'Products' ? 'active' : ''} text-white`} onClick={() => handleMenuItemClick('Products')} style={{ display: "flex", alignItems: "center" }}>
                                <span className='material-icons-sharp spread' style={{ marginRight: "9px" }}>inventory</span>
                                Products
                            </NavLink>
                        </li>
                        <li className='mb-2'>
                            <a href="#"className={`nav-link ${activeMenuItem === 'Customers' ? 'active' : ''} text-white`} onClick={() => handleMenuItemClick('Customers')} style={{ display: "flex", alignItems: "center" }}>
                                <span className='material-icons-sharp spread' style={{ marginRight: "9px" }}>person_outline</span>
                                Customers
                            </a>
                        </li>
                        <li className='mb-2'>
                            <a href="#" className={`nav-link ${activeMenuItem === 'Message' ? 'active' : ''} text-white`} onClick={() => handleMenuItemClick('Message')} style={{ display: "flex", alignItems: "center" }}>
                                <span className='material-icons-sharp spread' style={{ marginRight: "9px" }}>mail_outline</span>
                                Message
                            </a>
                        </li>
                        <li className='mb-2'>
                            <a href="#" className={`nav-link ${activeMenuItem === 'Reports' ? 'active' : ''} text-white`} onClick={() => handleMenuItemClick('Reports')} style={{ display: "flex", alignItems: "center" }}>
                                <span className='material-icons-sharp spread' style={{ marginRight: "9px" }}>report_gmailerrorred</span>
                                Reports
                            </a>
                        </li>
                        <li className='mb-2'>
                            <a href="#" className={`nav-link ${activeMenuItem === 'Settings' ? 'active' : ''} text-white`} onClick={() => handleMenuItemClick('Settings')} style={{ display: "flex", alignItems: "center" }}>
                                <span className='material-icons-sharp spread' style={{ marginRight: "9px" }}>settings</span>
                                Settings
                            </a>
                        </li>
                        <li className='mb-2'>
                            <a href="#" className={`nav-link ${activeMenuItem === 'Logout' ? 'active' : ''} text-white`} onClick={() => handleMenuItemClick('Logout')} style={{ display: "flex", alignItems: "center" }}>
                                <span className='material-icons-sharp spread' style={{ marginRight: "9px" }}>logout</span>
                                Logout
                            </a>
                        </li>
                    </ul>
                    <hr />
                    <div className="dropdown">
                        <a href="#" className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
                            <strong>mdo</strong>
                        </a>
                        <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
                            <li><a className="dropdown-item" href="#">New project...</a></li>
                            <li><a className="dropdown-item" href="#">Settings</a></li>
                            <li><a className="dropdown-item" href="#">Profile</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item" href="#">Sign out</a></li>
                        </ul>
                    </div>
                </div>


                {/* Navbar Content. */}
                <div className="flex-grow-1 d-flex flex-column">
                    <nav className="navbar navbar-expand-lg" id='NAV'>
                        <div className="container-fluid">
                            <a className="navbar-brand text-white" href="#">Navbar</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-white" href="#">Link</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Dropdown
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><hr className="dropdown-divider" /></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link disabled text-white" aria-disabled="true">Disabled</a>
                                    </li>
                                </ul>
                                <form className="d-flex" role="search">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button className="btn btn-outline-success" type="submit">Search</button>
                                </form>
                            </div>
                        </div>
                    </nav>
                    <div className='Content flex-grow-1 overflow-auto'>
                        <Outlet />

                    </div>


                </div>
            </div>


        </>
    )
}

export default Panel;
