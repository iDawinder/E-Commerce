import React, { useContext } from 'react';
import OneProduct from "./Nested/oneproduct";
import { CartContext } from './contextStore/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faTrash } from '@fortawesome/free-solid-svg-icons';

const Cart = () => {
  const { cart, updateQuantity, removeFromCart } = useContext(CartContext);

  return (
    <div className="tw-flex tw-flex-wrap container tw-mx-auto" >
      {cart.map((item) => (
        <div key={item.id} className="tw-bg-white tw-rounded-lg tw-shadow-md tw-overflow-hidden tw-text-center tw-p-4 tw-w-[400px] tw-mt-5 tw-mx-auto hover:tw-border-red-500 hover:tw-border-[1px]">
          <img src={item.img} alt="Product"  className=" tw-h-80 tw-mx-auto tw-rounded-xl tw-transition-transform tw-duration-300 hover:tw-scale-105 hover:tw-z-10" />
          <h2 className="tw-text-lg tw-font-bold tw-text-gray-700 tw-mt-3">{item.title}</h2>
          <p className="tw-text-xl tw-font-semibold tw-text-gray-900">${item.price}</p>
          <p className="tw-text-xl tw-font-semibold tw-text-gray-900">${item.category}</p>


          <div className="tw-relative tw-max-h-16 tw-overflow-hidden hover:tw-max-h-48 hover:tw-overflow-y-auto tw-scrollbar">
            <p className="tw-text-sm tw-text-gray-600">{item.description}</p>
          </div>

          {/* Quantity and Remove Button */}
          <div className="tw-mt-4 tw-flex tw-items-center tw-justify-center">
            <button
              className="tw-px-2 tw-py-1 tw-border tw-border-gray-500 tw-rounded-full"
              onClick={() => updateQuantity(item.id, 'decrease')}
            >
              <FontAwesomeIcon icon={faMinus} />
            </button>

            <span className="tw-px-4">{item.quantity}</span>

            <button
              className="tw-px-2 tw-py-1 tw-border tw-border-gray-500 tw-rounded-full"
              onClick={() => updateQuantity(item.id, 'increase')}
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>

            <button
              className="tw-ml-4 tw-text-red-500"
              onClick={() => removeFromCart(item.id)}
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        </div>
      ))}

      {/* Grand Total */}
      
      <div className="tw-w-full tw-flex tw-justify-between  tw-bg-gray-800  tw-my-8 tw-py-8  tw-items-center  grandtotal tw-rounded-xl " >
       
        <div className="tw-text-xl ">
          <span className="tw-font-bold tw-pl-7 tw-text-white">Grand Total: </span>
          <span className="tw-text-lg tw-text-white">
            ${cart.reduce((total, item) => total + (item.price * item.quantity), 0)}
          </span>
        </div>

        <div className='tw-pr-12 '>
        <button className='tw-text-white tw-pr-7 tw-bg-red-500 tw-px-10 tw-py-3 tw-rounded-lg confirm' >Confirm</button>
      </div>

      </div>
    


      </div>
    
  );
};

export default Cart;

