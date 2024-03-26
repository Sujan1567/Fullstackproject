// import React, { useEffect, useState } from 'react'
// import '../CSS/Cartstyle.css'
// import Navbar from '../Navbar/Navbar'
// import bluehoodie from '../../Images/Bluehoodiemen.jpg';
// import { useDispatch, useSelector } from 'react-redux';
// import { addToCart , removeToCart, removeSingleIteams, emptyCartIteam } from '../../../redux/features/Cartslice';
// import toast from 'react-hot-toast';

// const CartDetails = () => {
//   const { carts } = useSelector((state) => state.allcart);
  

//   const [totalprice, setPrice] = useState(0);

 
//   const [totalquantity, setTotalquantity] = useState(0);

  
//   const dispatch = useDispatch();

 
//   const handleIncrement = (e) =>{
//     dispatch(addToCart(e))

//   }

 
//   const handledecrement = (e) =>{
//     dispatch(removeToCart(e));
//     toast.success("Item Remove from cart");

//   }

 
//   const handleSingleDecrement = (e) =>{
//     dispatch(removeSingleIteams(e))

//   }


//   const emptycart = () =>{
//     dispatch(emptyCartIteam());
//     toast.success("Your cart is empty");
//   }


//  const total = () =>{
//   let totalprice = 0;
//   carts.map((ele, ind) =>{
//     totalprice = ele.Price * ele.quantity + totalprice

//   });
//   setPrice(totalprice)

//  }

 
//  const countquantity = () =>{
//   let totalquantity = 0;
//   carts.map((ele, ind) =>{
//     totalquantity = ele.quantity + totalquantity

//   });
//   setTotalquantity(totalquantity)

//  }


//  useEffect(() =>{
//   total()

//  }, [total])


//  useEffect(() =>{
//   countquantity()

//  }, [countquantity])


 
//   return (
//     <>
//       <Navbar />
//       <div className='container'>

//         <div className='row justify-content-center m-0'>
//           <div className='col-md-8 mt-5 mb-5'>
//             <div className="card w-100">
//               <div className="card-header bg-dark p-3">
//                 <div className='d-flex justify-content-between align-items-center'>
//                   <h5 className=' text-white m-0'>Cart calculation{carts.length >0 ? `(${carts.length})`: ""}</h5>

//                   {
//                     carts.length > 0 ? <button className='btn btn-danger mt-0 btn-sm 'onClick={emptycart}><i className="bi bi-trash3" ></i><span>Empty Cart</span></button> : ""
//                   }

//                 </div>
//               </div>
//               <div className="card-body p-0">
//                 {
//                   carts.length === 0 ? <table className="table mb-0">
                 
//                     <tbody>
//                       <tr>
//                         <td colSpan={6} className='text-center'>
//                           <div className='cart-empty'>
//                             <i class="bi bi-cart-fill" id="cartempty"></i>
//                             <p>Your cart is Empty.</p>

//                           </div>

//                         </td>
//                       </tr>

//                     </tbody>
//                   </table> : <table className='table table-responsive-sm mb-0'>
//                     <thead>
//                       <tr>
//                         <th>Action</th>
//                         <th>Product</th>
//                         <th>Name</th>
//                         <th>Price</th>
//                         <th>Quantity</th>
//                         <th className='text-end'><span id="amount" className='amount'>Total Amount</span></th>


//                       </tr>

//                     </thead>
//                     <tbody>
//                       {
//                       carts.map((data, index) => {
//                           return (
//                             <>
//                               <tr>
//                                 <td><button id='deleteactionicon' className='btn btn-danger' onClick={()=> handledecrement(data.id)}><i className="bi bi-trash3"></i></button></td>
//                                 <td><div className='imagerow'><img className='img-fluid rounded' src={data.image} width="40px" /></div></td>
//                                 <td><div><p>{data.name}</p></div></td>
//                                 <td>{data.Price}</td>
//                                 <td>
//                                   <div className='input-group GroupInput'>
//                                     <button type='button' className="btn btn-outline-success" id='Quantitybutton' onClick={data.quantity <=1 ?() => handledecrement(data.id) : () => handleSingleDecrement(data)}>
//                                       <i class="bi bi-dash" id='minus'></i>
//                                     </button>
//                                     <input type='text' className='form-control ControlForm' value={data.quantity} name='' id=''></input>
//                                     <button  type='button' className="btn btn-outline-success" onClick={()=> handleIncrement(data)}>
//                                       <i class="bi bi-plus"></i>

//                                     </button>


//                                   </div>

//                                 </td>
//                                 <td className='text-end'>{data.quantity * data.Price}</td>

//                               </tr>

//                             </>

//                           )

//                         })

//                       }

//                     </tbody>
//                     <tfoot>
//                       <tr>
//                         <th>&nbsp;</th>
//                         <th colSpan={3}>&nbsp;</th>
//                         <th>Items In cart<span className='ml-2 mr-2'> : </span><span className='text-danger'>{totalquantity}</span></th>
//                         <th className='text-end'>Total prices<span className='ml-2 mr-2'> : </span><span className='text-danger'>{totalprice}</span></th>

//                       </tr>

//                     </tfoot>


//                   </table>
//                 }

             
//               </div>
//             </div>



//           </div>

//         </div>

//       </div>


//     </>
//   )
// }

// export default CartDetails
