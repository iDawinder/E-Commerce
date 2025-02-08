import React, { useContext,useState,useEffect } from 'react';
import { ProductContext } from './contextStore/ProductContext';
import Oneproduct from './Nested/oneproduct';
import { Outlet, Link } from 'react-router-dom';

const Products = () => {
  let data = useContext(ProductContext);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(""); // Track selected category

  useEffect(() => {
    if (data && data.length > 0) {
      setFilteredData(data); // Show all products initially
    }
  }, [data]);

  const filterCategory = (category) => {
    if (category === "all") {
      setFilteredData(data);
      setSelectedCategory(""); // Reset category when showing all products
    } else {
      setFilteredData(data.filter((item) => item.category.toLowerCase() === category.toLowerCase()));
      setSelectedCategory(category); // Set category when filtering
    }
  };

  return (
    <>
      <div className="container">
        <h2 className="tw-text-red-500 tw-text-5xl tw-font-bold tw-p-6">Products</h2>
        <hr />
      </div>

      <div className="tw-flex tw-justify-center tw-items-center tw-space-x-6 tw-my-6">
        <span className="tw-text-lg tw-font-semibold tw-text-gray-700">Filter by:</span>

        {selectedCategory && ( // Show "ALL PRODUCTS" only when a category is selected
          <button
            className="tw-border tw-border-red-500 tw-text-red-500 tw-font-semibold tw-py-2 tw-px-6 tw-rounded-lg tw-transition-all tw-duration-300 hover:tw-bg-red-500 hover:tw-text-white hover:tw-shadow-md"
            onClick={() => filterCategory("all")}
          >
            ALL PRODUCTS
          </button>
        )}

        <button
          className="tw-border tw-border-red-500 tw-text-red-500 tw-font-semibold tw-py-2 tw-px-6 tw-rounded-lg tw-transition-all tw-duration-300 hover:tw-bg-red-500 hover:tw-text-white hover:tw-shadow-md"
          onClick={() => filterCategory("men")}
        >
          MEN
        </button>
        <button
          className="tw-border tw-border-red-500 tw-text-red-500 tw-font-semibold tw-py-2 tw-px-6 tw-rounded-lg tw-transition-all tw-duration-300 hover:tw-bg-red-500 hover:tw-text-white hover:tw-shadow-md"
          onClick={() => filterCategory("women")}
        >
          WOMEN
        </button>
      </div>




      <div className="tw-flex tw-flex-wrap container tw-mx-auto tw-py-10">
        {filteredData.map((item) => (
          <Oneproduct data={item} key={item.id} />
        ))}
      </div>

      <Outlet />
    </>
  );
};

export default Products;
