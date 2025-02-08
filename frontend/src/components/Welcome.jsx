import React from 'react'

const Welcome = () => {
  return (
    <>
    
    <div className=' container-fluid  tw-px-16 tw-font-serif tw-justify-around tw-p-3 tw-flex  custom-flex tw-bg-red-500' >

   <h3 className='tw-text-white welcome-offer' > <span>Free Shipping on the Order Obove $20</span></h3>


<div>

   <a href="#"><i className="fa-brands fa-instagram tw-px-4" style={{color:"#ededed"}}></i></a>
   <a href="#"><i className="fa-brands fa-x-twitter tw-px-4" style={{color:"#ededed"}}></i></a>
   <a href="#"><i className="fa-brands fa-facebook tw-px-4" style={{color:"#ededed"}}></i></a>
   <a href="#"><i className="fa-brands fa-reddit tw-px-4" style={{color:"#ededed"}}></i></a>
   
   </div>


    </div>
    
    
    </>
  )
}

export default Welcome