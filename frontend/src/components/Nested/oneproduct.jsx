import React, { useContext } from 'react';
import { CartContext } from '../contextStore/CartContext';

const OneProduct = ({ data }) => {
  const { cart, setCart } = useContext(CartContext);
  // console.log(data.category)
  // Add item to cart


  const add = (id) => {
    const existingItem = cart.find(item => item.id === id);
    if (existingItem) {
      // If item already in cart, increase quantity
      existingItem.quantity += 1;
      setCart([...cart]);
    } else {
      // Otherwise, add the item to cart with quantity 1
      setCart([...cart, { ...data, quantity: 1 }]);
    }
    localStorage.setItem('Cart', JSON.stringify(cart));
  };

  return (
     
    <div className="tw-bg-white tw-rounded-lg tw-shadow-md tw-overflow-hidden tw-text-center tw-p-4 tw-w-[400px] tw-mt-5 tw-mx-auto hover:tw-border-red-500 hover:tw-border-[1px]  ">
      <img src={data.img} alt="Product" className=" tw-h-80 tw-mx-auto tw-rounded-xl tw-transition-transform tw-duration-300 hover:tw-scale-105 hover:tw-z-10" />
      <h2 className="tw-text-lg tw-font-bold tw-text-gray-700 tw-mt-3">{data.title}</h2>
      <p className="tw-text-xl tw-font-semibold tw-text-gray-900">${data.price}</p>
      <p className="tw-text-xl tw-font-semibold tw-text-gray-900">{data.category}</p>

      <div className="tw-relative tw-max-h-16 tw-overflow-hidden hover:tw-max-h-48 hover:tw-overflow-y-auto tw-scrollbar">
        <p className="tw-text-sm tw-text-gray-600">{data.description}</p>
      </div>

      {/* Only Add to Cart Button */}
      <div className="tw-mt-4">
        <button 
          className="tw-border tw-border-red-500 tw-text-red-500 tw-font-semibold tw-py-2 tw-px-4 tw-rounded hover:tw-bg-red-500 hover:tw-text-white hover:tw-font-bold"
          onClick={() => add(data.id)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default OneProduct;
