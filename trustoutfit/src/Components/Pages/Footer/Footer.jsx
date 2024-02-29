import React from 'react'
import logo1 from '../../Images/Logo.jpg';
import '../CSS/Home.css';

const Footer = () => {
    return (
        <>
            <div className='row justify-content-center text-white mt-5' id='footer'>
                <div className='col-md-3'>
                    <img src={logo1} alt='logo' width='150px' className='img-fluid rounded' />
                    <p>The online clothing store for mens, womens and kids. please free to contact us.</p>
                    <h3>Contact Us</h3>
                    <p><i className="bi bi-telephone-fill"></i> Phone no: 9741860177</p>
                    <p><i className="bi bi-geo-alt-fill"></i> Address: Kalanki, Kathmandu</p>


                </div>
                <div className='col-md-2'>
                    <h3>About</h3>
                    <p>History</p>
                    <p>Our team</p>
                    <p>Brand guidelines</p>
                    <p>Terms &Condition</p>
                    <p>Privacy Policy</p>
                </div>
                <div className='col-md-2'>
                    <h3>Services</h3>
                    <p>How to order</p>
                    <p>Our Product</p>
                    <p>Order status</p>
                    <p>Promo</p>
                    <p>Payment method</p>
                </div>
                <div className='col-md-3 text-end'>
                    <h3>Title Here</h3>
                    <p>Please enter the valid details.</p>
                    <form id='footer-form'>
                        <input type='text' id='footer-search' />
                        <button type='submit' id='footer-box'><i className="bi bi-cursor-fill"></i></button>
                    </form>
                    <h4 className='me-3'>Find us on media</h4>
                    <i className="bi bi-facebook m-3" id='facebook'></i>
                    <i className="bi bi-whatsapp m-3" id='whatsapp'></i>
                    <i className="bi bi-instagram m-3" id='instagram'></i>
                    <i className="bi bi-twitter m-3" id='twitter'></i>
                </div>
                <p className=' text-center mt-5'>Copyright @ 2024 -All Right Reserved.</p>

            </div>

        </>
    )
}

export default Footer
