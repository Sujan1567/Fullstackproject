import React, { useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import '../CSS/Cartstyle.css';
import { addTocart, clearCart, decreaseCart, getTotals, removeFromCart } from '../../../redux/features/cartslice';



const Cart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch()

  //using the useeffect.
  useEffect (() =>{
    dispatch(getTotals());

  }, [cart, dispatch])


  //removing from the cart.
  const handleRemoveFromCart = (cartItem) =>{
    dispatch(removeFromCart(cartItem));

  };

  //For decraesing from the cart.
  const handleDecraeseCart = (cartItem) =>{
    dispatch(decreaseCart(cartItem));
  }

  //For Increasing the cart.
  const handleIncreaseCart= (cartItem) =>{
    dispatch(addTocart(cartItem));

  }

  //For clearing the cart.
  const handleClearCart= () =>{
    dispatch(clearCart());
    
  }
  return (
    <>
      <Navbar />
      <div className='cart-Contain'>
        <h2 className='text-center display-4 mb-4'> Shopping Cart</h2>
        {cart.cartItems.length === 0 ? (
          <div className='cart-empty'>
            <p className='display-6' style={{fontSize:"25px"}}>Your cart is currently empty</p>
            <div className='start-shopping'>
              <Link to="/Arrival" style={{color: "gray", textDecoration: "none", display: "flex", alignItems: "center"}}>
                <i className="bi bi-arrow-left"></i>
                <span style={{marginLeft:"0.5rem"}}>Start Shopping</span>
              </Link>


            </div>

          </div>

        ) : (
          <div>
            <div className="Titles">
              <h3 className="product-title display-6">Product</h3>
              <h3 className="price display-6">Price</h3>
              <h3 className="Quantity display-6">Quantity</h3>
              <h3 className="Total display-6">Total</h3>
            </div>
            <div className="cart-items">
              {cart.cartItems?.map(cartItem => (
                <div className="cart-item" key={cartItem.id}>
                  <div className="cart-product">
                    <img style={{width:"100px", maxWidth: "100%", marginRight:"1rem"}} src={cartItem.image} alt={cartItem.name} />
                    <div>
                      <h3 className='display-6' style={{fontSize:"20px"}}>{cartItem.name}</h3>
                      <p>{cartItem.description}</p>
                      <button onClick={() => handleRemoveFromCart(cartItem)}  id="removebutton">Remove</button>

                    </div>
                  </div>
                  <div className="cart-product-price">
                    Rs.{cartItem.Price}
                  </div>
                  <div className="cart-product-quantity">
                    <button id='minusbutton' onClick={()=> handleDecraeseCart(cartItem)}>-</button>
                    <div className="COUNTER">{cartItem.cartQuantity}</div>
                    <button id='addbutton' onClick={() => handleIncreaseCart(cartItem)}>+</button>
                  </div>
                  <div className="cart-product-total-price">
                    Rs.{cartItem.Price * cartItem.cartQuantity}
                  </div>
                </div>
              ))}
            </div>
            <div className='cart-summary'>
              <button className='clear-cart' onClick={() => handleClearCart()}>Clear Cart</button>
              <div className="cart-checkout">
                <div className="subtotal">
                  <span>Subtotal</span>
                  <span className="Amount">Rs.{cart.cartTotalAmount}</span>
                </div>
                <p style={{fontSize: "14px", fontWeight: "200", margin: "0.5rem 0"}}>Taxes and Shipping calculated at checkout</p>
                <button className='btn btn-primary col-lg-12'>Check out</button>
                <div className='continue-shopping'>
                  <Link to="/Arrival" style={{color: "gray", textDecoration: "none", display: "flex", alignItems: "center"}}>
                    <i className="bi bi-arrow-left"></i>
                    <span style={{marginLeft:"0.5rem"}}>Continue Shopping</span>
                  </Link>


                </div>
              </div>
            </div>



          </div>)}


      </div>
    </>
  )
}

export default Cart
