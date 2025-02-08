import React from "react";

const HomeCards = ({ image, title, price, description, reviews }) => {
  return (
    <div className="container " >
    <div className="tw-bg-white tw-rounded-lg tw-shadow-md tw-overflow-hidden tw-text-center tw-p-4 tw-max-w-[335px] tw-mt-5 tw-mx-auto  hover:tw-border-red-500 hover:tw-border-[1px]" data-aos='fade-up'>
      <img src="apiPictures/id12.webp" alt="Product" className="tw-mb-4 tw-rounded-md" />
      <h2 className="tw-text-lg tw-font-bold tw-text-gray-700">{title}</h2>
      <p className="tw-text-xl tw-font-semibold tw-text-gray-900 tw-mb-2">${price}</p>
      <p className="tw-text-sm tw-text-gray-600 tw-mb-4">{description}</p>
      <div className="tw-text-red-500 tw-mb-2">★★★★★</div>
      <p className="tw-text-red-500 tw-font-semibold tw-text-sm">Reviews ({reviews})</p>
      <button className="tw-border tw-border-red-500 tw-text-red-500 tw-font-semibold tw-py-2 tw-px-4 tw-rounded hover:tw-bg-red-500 hover:tw-text-white hover:tw-font-bold"> Go To Products</button>
    </div>
    </div>
  );
};

export default HomeCards;
