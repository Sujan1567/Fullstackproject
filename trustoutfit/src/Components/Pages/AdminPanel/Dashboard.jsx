import React, { useEffect } from 'react'
import Logo from '../../Images/Logo2.png';
import { NavLink } from 'react-router-dom';
import bicycle from '../../Images/boycycle.jpg';
import '../CSS/Dashboard.css';
import Orders from './order';


const Dashboard = () => {
  //Fill the order in the table.
  // Orders.forEach(order =>{
  //   const tr =document.createElement('tr');
  //   const trContent = `
  //   <td>${order. productName}</td>
  //   <td>${order. Number}<</td>
  //   <td>${order.paymentstatus}<</td>
  //   <td className="${order.shipping === 'Declined' ? 'danger' : order.shipping ==='pending' ?  'warning' : 'primary'}">${order.shipping}</td>
  //   <td classname="text-primary">Details</td>
  //   `;
  //   tr.innerHTML = trContent;
  //   document.querySelector('table tbody').appendChild(tr);

  // })
  useEffect(() => {
    const sideMenu = document.querySelector("aside");
    const menuBtn = document.querySelector("#menu-btn");
    const closeBtn = document.querySelector("#close-btn");
    const themeToggler = document.querySelector(".theme-toggler");

    const handleMenuButtonClick = () => {
      sideMenu.style.display = 'block';
    };

    const handleCloseButtonClick = () => {
      sideMenu.style.display = 'none';
    };

    const handleThemeToggleClick = () => {
      document.body.classList.toggle('dark-theme-variables');
      themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
      themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
    };

    // Add event listeners
    menuBtn.addEventListener('click', handleMenuButtonClick);
    closeBtn.addEventListener('click', handleCloseButtonClick);
    themeToggler.addEventListener('click', handleThemeToggleClick);

    // Remove event listeners on cleanup
    return () => {
      menuBtn.removeEventListener('click', handleMenuButtonClick);
      closeBtn.removeEventListener('click', handleCloseButtonClick);
      themeToggler.removeEventListener('click', handleThemeToggleClick);
    };
  }, []); // Empty dependency array ensures this effect runs only once after initial render

 
  return (
    <>
      <div className='container'>
        <aside>
          <div className='top'>
            <div className='logo'>
              <img src={Logo} className='img-fluid' />
              <h2>SUJ<span className='danger'>An</span></h2>

            </div>
            <div className='close' id='close-btn'>
              <span className='material-icons-sharp'>
                close
              </span>

            </div>

          </div>

          <div className='sidebar'>
            <a href="#" className='active' id='decor'>
              <span className='material-icons-sharp'>grid_view</span>
              <h3 id='pophead'>Dashboard</h3>
            </a>

            <a href="#" id='decor'>
              <span className='material-icons-sharp'>person_outline</span>
              <h3>Customers</h3>
            </a>

            <a href="#" id='decor'>
              <span className='material-icons-sharp'>receipt_long</span>
              <h3>Orders</h3>
            </a>

            <a href="#" id='decor'>
              <span className='material-icons-sharp'>insights</span>
              <h3>Analytics</h3>
            </a>

            <a href="#" id='decor'>
              <span className='material-icons-sharp'>mail_outline</span>
              <h3>Message</h3>
              <span className='message-count'>21</span>
            </a>

            <NavLink to="/dashboard/products" id='decor'>
              <span className='material-icons-sharp'>inventory</span>
              <h3>Products</h3>
            </NavLink>

            <a href="#" id='decor'>
              <span className='material-icons-sharp'>report_gmailerrorred</span>
              <h3>Reports</h3>
            </a>

            <a href="#" id='decor'>
              <span className='material-icons-sharp'>settings</span>
              <h3>Settings</h3>
            </a>

            <a href="#" id='decor'>
              <span className='material-icons-sharp'>add</span>
              <h3>Add products</h3>
            </a>

            <a href="#" id='decor'>
              <span className='material-icons-sharp'>logout</span>
              <h3>Logout</h3>
            </a>

          </div>
        </aside>


        <main>
          <h1>Dashboard</h1>

          <div className='date'>
            <input type="date" />

          </div>

          <div className='insights'>
            <div className='sales'>
              <span className='material-icons-sharp'>analytics</span>
              <div className='middle'>
                <div className='left'>
                  <h3>Total sales</h3>
                  <h1>$25,000</h1>
                </div>

                <div className='Circular'>
                  <svg>
                    <circle cx='38' cy='38' r='36'></circle>
                  </svg>
                  <div className='number'>
                    <p>81%</p>

                  </div>

                </div>


              </div>
              <small className='text-muted'>last 24 hours</small>

            </div>
            {/* There is end of the sales. */}

            <div className='expenses'>
              <span className='material-icons-sharp'>bar_chart</span>
              <div className='middle'>
                <div className='left'>
                  <h3>Total Expenses</h3>
                  <h1>$25,000</h1>
                </div>

                <div className='Circular'>
                  <svg>
                    <circle cx='38' cy='38' r='36'></circle>
                  </svg>
                  <div className='number'>
                    <p>62%</p>

                  </div>

                </div>


              </div>
              <small className='text-muted'>last 24 hours</small>

            </div>
            {/* There is end of the income */}

            <div className='income'>
              <span className='material-icons-sharp'>stacked_line_chart</span>
              <div className='middle'>
                <div className='left'>
                  <h3>Total Income</h3>
                  <h1>$25,000</h1>
                </div>

                <div className='Circular'>
                  <svg>
                    <circle cx='38' cy='38' r='36'></circle>
                  </svg>
                  <div className='number'>
                    <p>44%</p>

                  </div>

                </div>


              </div>
              <small className='text-muted'>last 24 hours</small>

            </div>
            {/* There is end of the expenses. */}


          </div>

          {/* Table of the recents orders. */}
          <div className='recent-orders'>
            <h2>Recent Orders</h2>
            <table>
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th> Product Number</th>
                  <th> Payment</th>
                  <th>Status</th>
                  <th></th>

                </tr>

              </thead>

              <tbody>
                <tr>
                  <td>Blue hoodie</td>
                  <td>45673</td>
                  <td>Due</td>
                  <td className='text-warning'>Pending</td>
                  <td className='text-primary'>Details</td>
                </tr>

                <tr>
                  <td>Gray halfshirt</td>
                  <td>42156</td>
                  <td>Due</td>
                  <td className='text-warning'>Pending</td>
                  <td className='text-primary'>Details</td>
                </tr>

                <tr>
                  <td>Leather jacket</td>
                  <td>67532</td>
                  <td>Due</td>
                  <td className='text-warning'>Pending</td>
                  <td className='text-primary'>Details</td>
                </tr>

                <tr>
                  <td>Sneaker</td>
                  <td>56756</td>
                  <td>Due</td>
                  <td className='text-warning'>Pending</td>
                  <td className='text-primary'>Details</td>
                </tr>
              </tbody>
            </table>
            <a href='#'>Show All</a>

          </div>


        </main>

        {/* Designing the right section of the admin dashboard. */}
        <div className='right'>
          <div className='top'>
            <button id='menu-btn'>
              <span className='material-icons-sharp'>menu</span>

            </button>
            <div className='theme-toggler'>
              <span className="material-icons-sharp active">light_mode</span>
              <span className="material-icons-sharp">dark_mode</span>

            </div>
            <div className='profile'>
              <div className='info'>
                <p>Hey, <b>Hari</b></p>
                <small className='text-muted'>Admin</small>
              </div>
              <div className='profile-photo'>
                <img src={bicycle} />

              </div>


            </div>

          </div>

          {/* End of the top. */}
          <div className='recent-updates'>
            <h2>Recent Updates</h2>
            <div className='updates'>
              <div className='update'>
                <div className='profile-photo'>
                  <img src={bicycle} />

                </div>

                <div className='message'>
                  <p><b>Sujan chapagain</b>received his order of the Blue hoodie</p>
                  <small className='text-muted'> 2 Minutes ago</small>

                </div>

              </div>

              <div className='update'>
                <div className='profile-photo'>
                  <img src={bicycle} />

                </div>

                <div className='message'>
                  <p><b>Hari Gurung</b>received his order of the Leather jacket.</p>
                  <small className='text-muted'> 1 Minutes ago</small>

                </div>

              </div>

              <div className='update'>
                <div className='profile-photo'>
                  <img src={bicycle} />

                </div>

                <div className='message'>
                  <p><b>Krishna Neupane</b>received his order of the gray halfshirt</p>
                  <small className='text-muted'> 2 Minutes ago</small>

                </div>

              </div>

            </div>


          </div>

          {/* For the sales Analytics. */}
          <div className='sales-analytics'>
            <h2>Sales Analytics</h2>
            <div className='item online'>


              <div className='icon'>
                <span className='material-icons-sharp'>shopping_cart</span>

              </div>
              <div className='right'>
                <div className='info'>
                  <h3>ONLINE ORDERS</h3>
                  <small className='text-muted'>last 24 hours</small>

                </div>
                <h5 className='text-success'>+39%</h5>
                <h3>3849</h3>

              </div>
            </div>

            <div className='item offline'>


              <div className='icon'>
                <span className='material-icons-sharp'>local_mall</span>

              </div>
              <div className='right'>
                <div className='info'>
                  <h3>OFFLINE ORDERS</h3>
                  <small className='text-muted'>last 24 hours</small>

                </div>
                <h5 className='text-danger'>-17%</h5>
                <h3>1100</h3>

              </div>
            </div>

            <div className='item customers'>


              <div className='icon'>
                <span className='material-icons-sharp'>person</span>

              </div>
              <div className='right'>
                <div className='info'>
                  <h3>NEW CUSTOMERS</h3>
                  <small className='text-muted'>last 24 hours</small>

                </div>
                <h5 className='text-success'>+25%</h5>
                <h3>200</h3>

              </div>
            </div>
            <div className='item add-product'>
              <div>
              <span className='material-icons-sharp'>add</span>
              <h3>Add products</h3>

              </div>

            </div>

          </div>

        </div>

      </div>

      




    </>
  )
}

export default Dashboard
