import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { CartContext } from './components/contextStore/CartContext'


const Navbar = () => {
  let cartitem = 7
  console.log(useContext(CartContext))

  cartitem = useContext(CartContext).cart.reduce((total, item) => {
    return total + item.quantity;
  }, 0)


  return (
    <>
      <nav>
        <div className="logo ">QUICK CART</div>
        {/* Checkbox for toggling menu */}
        <input type="checkbox" id="menu-toggle" />
        <label htmlFor="menu-toggle" className="hamburger">
          <div />
          <div />
          <div />
        </label>
        <ul className="nav-links">
          <li>
            < NavLink to="">Home</NavLink>
          </li>
          <li>
            < NavLink to="products">Products</NavLink>
          
          </li>
        
          <li>
            < NavLink to="contactus">Contact Us</NavLink>
          </li>
          <li>
          <NavLink to="cart" className="cart-icon-container">
  <i className="fa-solid fa-cart-shopping" style={{ color: "#c12110" }}></i>
  {cartitem > 0 && <span className="cart-item-count">{cartitem}</span>}
</NavLink>
          </li>
          <li>
            < NavLink to="#"> <i className="fa-regular fa-user " style={{ color: "#c12110" }}></i><i className="fa-solid fa-caret-down tw-p-1"></i> </NavLink>
            <ul className="dropdown ">
              <li>
                < NavLink to="login">LogIn</NavLink>
              </li>
              <hr></hr>
              <li>
                < NavLink to="signup">SignUp</NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </>

  )
}

export default Navbar


//<NavLink to="about" >About</NavLink>
//<NavLink to="services" >Services</NavLink>
//<NavLink to="contact" >Contact</NavLink>

//<li className="nav-item">
//<NavLink className="nav-link" to="products">
//Products
//</NavLink>
//</li>