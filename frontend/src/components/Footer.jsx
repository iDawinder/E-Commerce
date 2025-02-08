import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    < >
    
  <footer className='d-flex tw-gap-8 tw-bg-gray-800 tw-p-12 tw-justify-between   tw-bottom-0 tw-w-full'>
 
 <div className='tw-w-auto tw-text-center'>
  <h2 className='tw-text-red-400 tw-font-bold tw-pb-2 tw-text-2xl'>QUICK CART</h2>
  <p className='tw-text-white'>Quick Cart is your ultimate shopping <br></br> companion, 
    offering seamless browsing, <br></br>fast checkouts, and hassle-free experiences. <br></br> Shop smarter,
     save time, and enjoy effortless<br></br> convenience—all at the speed you deserve😊</p>
 </div>

 <div className='tw-w-auto tw-text-center'>
  <h2 className='tw-text-red-400 tw-font-bold tw-pb-2 tw-text-2xl'>Discover</h2>
      <ul>
        <li className='tw-text-white'><NavLink to="products">Products<i className="fa-solid fa-greater-than tw-px-1 tw-pb-1"  style={{color:"#f0f2f5",fontSize: "10px" }}></i></NavLink></li>
        <li className='tw-text-white'><NavLink to="cart">Cart<i className="fa-solid fa-greater-than tw-px-1 tw-pb-1"  style={{color:"#f0f2f5",fontSize: "10px" }}></i></NavLink></li>
        <li className='tw-text-white'><NavLink to="orderdetails">Order<i className="fa-solid fa-greater-than tw-px-1 tw-pb-1"  style={{color:"#f0f2f5",fontSize: "10px" }}></i></NavLink></li>
        <li className='tw-text-white'><NavLink to="contactus">Contact<i className="fa-solid fa-greater-than tw-px-1 tw-pb-1"  style={{color:"#f0f2f5",fontSize: "10px" }}></i></NavLink></li>
        
      </ul>
 </div>

 <div className='tw-w-auto tw-text-center'>
  <h2 className='tw-text-red-400 tw-font-bold tw-pb-2 tw-text-2xl'>Social Media</h2>
  <p><NavLink to="#"><i className="fa-brands fa-instagram tw-px-4" style={{color:"#ededed"}}></i></NavLink></p>
<p><NavLink to="#"><i className="fa-brands fa-x-twitter tw-px-4" style={{color:"#ededed"}}></i></NavLink></p>
<p><NavLink to="#"><i className="fa-brands fa-facebook tw-px-4" style={{color:"#ededed"}}></i></NavLink></p>
<p><NavLink to="#"><i className="fa-brands fa-reddit tw-px-4" style={{color:"#ededed"}}></i></NavLink></p>
 </div>

 <div className='tw-w-auto tw-text-center'>
  <h2 className='tw-text-red-400 tw-font-bold tw-text-2xl tw-pb-2'>Support</h2>
  <p className='tw-text-white'>@quickcart57gmail.com</p>
 </div>




  </footer>

  <div className="tw-mx-auto">
  <h2 className="tw-bg-gray-800 tw-text-white tw-text-xl  tw-text-center">
    Copyright © 2010-2024 Quick Cart Company All rights reserved.
  </h2>
</div>

    </>
  )
}

export default Footer