import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Home.css'; // Custom CSS
import HomeCards from './HomeCards';
import { NavLink } from 'react-router-dom'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const settings = {
  autoplay: true,
  autoplaySpeed: 2000,
  dots: true,
  infinite: true,
  arrows: true, // Optional
};

//  product list for dummy cards

const products = [
  {
    id: 1,
    image: "https://via.placeholder.com/300x200",
    title: "Title goes here",
    price: "25.75",
    description: "Lorem ipsum dolor sit amet, adipisicing elite.dfaafasfasfasfasfasdf",
    reviews: 24,
  },
  {
    id: 2,
    image: "https://via.placeholder.com/300x200",
    title: "Title goes here",
    price: "30.25",
    description: "Lorem ipsum dolor sit amet, adipisicing elite.fasfdfafsafasfasfasfasfasf",
    reviews: 21,
  },
  {
    id: 3,
    image: "https://via.placeholder.com/300x200",
    title: "Title goes here",
    price: "20.45",
    description: "Sixteen Clothing is free CSS template  provided by TemplateMo.",
    reviews: 36,
  },
];

const Home = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // animation duration
      once: false,     // whether animation should happen only once
    });
  }, []);
  return (
    <>
      {/* // slider content started */}

      <div className="slider-container" >
        <Slider {...settings}>
          <div className="slider-item tw-relative">
            <img src="src/assets/slide_01.jpg" alt="Slide 1" />
            <div className="tw-absolute tw-inset-0 tw-flex tw-items-center tw-justify-center tw-text-white" >

              <h2 className="tw-text-2xl lg:tw-text-4xl tw-font-serif text-center">
                <span className="tw-text-red-500 lg:tw-text-4xl tw-font-serif block lg:tw-mb-4" >
                  BEST OFFER
                </span>
                <span className="tw-block lg:tw-text-5xl tw-mt-5">
                  NEW ARRIVALS ON SALE
                </span>
              </h2>
            </div>
          </div>
          <div className="slider-item tw-relative">
            <img src="src/assets/slide_02.jpg" alt="Slide 2" />
            <div className="tw-absolute tw-inset-0 tw-flex tw-items-center tw-justify-center tw-text-white">

              <h2 className="tw-text-2xl lg:tw-text-4xl tw-font-serif text-center">
                <span className="tw-text-red-500 lg:tw-text-4xl tw-font-serif block lg:tw-mb-4">
                  FLASH DEALS
                </span>
                <span className="tw-block  lg:tw-text-5xl tw-mt-5">
                  GET YOUR BEST PRODUCTS
                </span>
              </h2>
            </div>
          </div>
          <div className="slider-item tw-relative">
            <img src="src/assets/slide_03.jpg" alt="Slide 3" />
            <div className="tw-absolute tw-inset-0 tw-flex tw-items-center tw-justify-center tw-text-white">

              <h2 className="tw-text-2xl lg:tw-text-4xl tw-font-serif text-center">
                <span className="tw-text-red-500 lg:tw-text-4xl tw-font-serif block lg:tw-mb-4">
                  LAST MINUTE
                </span>
                <span className="tw-block lg:tw-text-5xl tw-mt-5">
                  GRAB LAST MINUTE DEALS
                </span>
              </h2>
            </div>
          </div>
        </Slider>
      </div>

      {/* // slider content ended  */}



      {/* // dummy cards content started */}

      <div className="container tw-mx-auto tw-px-4 tw-py-8 " data-aos='fade-up'>
        <h2 className=" tw-font-bold tw-text-red-500 tw-mb-6 tw-flex  tw-justify-between tw-items-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
          <p className="tw-inline lg:tw-text-4xl md:tw-text-3xl tw-text-[25px]" >Latest Products</p>
          <p className='lg:tw-text-2xl md:tw-text-1xl '><NavLink to="products" className="tw-text-red-500 tw-cursor-pointer" >View Latest Products <i className="fa-solid fa-greater-than tw-text-sm"></i></NavLink></p>
        </h2>

        <hr className='tw-m-8'></hr>


        <div className="container tw-flex  tw-flex-wrap" >
    <div className="tw-bg-white tw-rounded-lg tw-shadow-md tw-overflow-hidden tw-text-center tw-p-4 tw-w-[400px] tw-mt-5 tw-mx-auto  hover:tw-border-red-500 hover:tw-border-[1px]" data-aos='fade-up'>
      <img src="apiPictures/id12.webp" alt="Product"  className=" tw-h-80 tw-mx-auto tw-rounded-xl tw-transition-transform tw-duration-300 hover:tw-scale-105 hover:tw-z-10" />
      <h2 className="tw-text-lg tw-font-bold tw-text-gray-700 tw-mt-3">PLAID DRESS</h2>
      <p className="tw-text-xl tw-font-semibold tw-text-gray-900 tw-mb-2">$75</p>
      <p className="tw-text-xl tw-font-semibold tw-text-gray-900">women</p>
      <p className=" tw-text-sm tw-text-gray-600">A fashionable plaid dress, perfect for casual or semi-formal occasions.</p>
      <button className="tw-border tw-border-red-500 tw-text-red-500 tw-font-semibold tw-py-2 tw-px-4 tw-rounded hover:tw-bg-red-500 hover:tw-text-white hover:tw-font-bold tw-mt-3"> <NavLink to="products">Go To Products</NavLink></button>
    </div>



    <div className="tw-bg-white tw-rounded-lg tw-shadow-md tw-overflow-hidden tw-text-center tw-p-4 tw-w-[400px] tw-mt-5 tw-mx-auto  hover:tw-border-red-500 hover:tw-border-[1px]" data-aos='fade-up'>
      <img src="apiPictures/id19.webp" alt="Product"  className=" tw-h-80 tw-mx-auto tw-rounded-xl tw-transition-transform tw-duration-300 hover:tw-scale-105 hover:tw-z-10"/>
      <h2 className="tw-text-lg tw-font-bold tw-text-gray-700 tw-mt-3">SNEAKERS</h2>
      <p className="tw-text-xl tw-font-semibold tw-text-gray-900 tw-mb-2">$110</p>
      <p className="tw-text-xl tw-font-semibold tw-text-gray-900">men</p>
      <p className=" tw-text-sm tw-text-gray-600">Versatile sneakers, providing comfort and style for everyday activities.</p>
      <button className="tw-border tw-border-red-500 tw-text-red-500 tw-font-semibold tw-py-2 tw-px-4 tw-rounded hover:tw-bg-red-500 hover:tw-text-white hover:tw-font-bold tw-mt-3"> <NavLink to="products">Go To Products</NavLink></button>
    </div>


    <div className="tw-bg-white tw-rounded-lg tw-shadow-md tw-overflow-hidden tw-text-center tw-p-4 tw-w-[400px] tw-mt-5 tw-mx-auto  hover:tw-border-red-500 hover:tw-border-[1px]" data-aos='fade-up'>
      <img src="apiPictures/id39.webp" alt="Product"  className=" tw-h-80 tw-mx-auto tw-rounded-xl tw-transition-transform tw-duration-300 hover:tw-scale-105 hover:tw-z-10" />
      <h2 className="tw-text-lg tw-font-bold tw-text-gray-700 tw-mt-3">RED JACKET</h2>
      <p className="tw-text-xl tw-font-semibold tw-text-gray-900 tw-mb-2">$95</p>
      <p className="tw-text-xl tw-font-semibold tw-text-gray-900">men</p>
      <p className=" tw-text-sm tw-text-gray-600">A bold red jacket, perfect for making a statement while staying warm.</p>
      <button className="tw-border tw-border-red-500 tw-text-red-500 tw-font-semibold tw-py-2 tw-px-4 tw-rounded hover:tw-bg-red-500 hover:tw-text-white hover:tw-font-bold tw-mt-3"> <NavLink to="products">Go To Products</NavLink></button>
    </div>


    <div className="tw-bg-white tw-rounded-lg tw-shadow-md tw-overflow-hidden tw-text-center tw-p-4 tw-w-[400px] tw-mt-5 tw-mx-auto  hover:tw-border-red-500 hover:tw-border-[1px]" data-aos='fade-up'>
      <img src="apiPictures/id20.webp" alt="Product"  className=" tw-h-80 tw-mx-auto tw-rounded-xl tw-transition-transform tw-duration-300 hover:tw-scale-105 hover:tw-z-10" />
      <h2 className="tw-text-lg tw-font-bold tw-text-gray-700 tw-mt-3">GREEN SHIRT</h2>
      <p className="tw-text-xl tw-font-semibold tw-text-gray-900 tw-mb-2">$82</p>
      <p className="tw-text-xl tw-font-semibold tw-text-gray-900">men</p>
      <p className=" tw-text-sm tw-text-gray-600">A fresh green shirt, perfect for a casual or semi-formal look.</p>
      <button className="tw-border tw-border-red-500 tw-text-red-500 tw-font-semibold tw-py-2 tw-px-4 tw-rounded hover:tw-bg-red-500 hover:tw-text-white hover:tw-font-bold tw-mt-3"> <NavLink to="products">Go To Products</NavLink></button>
    </div>


    <div className="tw-bg-white tw-rounded-lg tw-shadow-md tw-overflow-hidden tw-text-center tw-p-4 tw-w-[400px] tw-mt-5 tw-mx-auto  hover:tw-border-red-500 hover:tw-border-[1px]" data-aos='fade-up'>
      <img src="apiPictures/id23.avif" alt="Product"  className=" tw-h-80 tw-mx-auto tw-rounded-xl tw-transition-transform tw-duration-300 hover:tw-scale-105 hover:tw-z-10" />
      <h2 className="tw-text-lg tw-font-bold tw-text-gray-700 tw-mt-3">ICE SKATERS SHOES</h2>
      <p className="tw-text-xl tw-font-semibold tw-text-gray-900 tw-mb-2">$85</p>
      <p className="tw-text-xl tw-font-semibold tw-text-gray-900">men</p>
      <p className=" tw-text-sm tw-text-gray-600">Specialized ice skaters shoes offering performance and style on the rink.</p>
      <button className="tw-border tw-border-red-500 tw-text-red-500 tw-font-semibold tw-py-2 tw-px-4 tw-rounded hover:tw-bg-red-500 hover:tw-text-white hover:tw-font-bold tw-mt-3"> <NavLink to="products">Go To Products</NavLink></button>
    </div>


    <div className="tw-bg-white tw-rounded-lg tw-shadow-md tw-overflow-hidden tw-text-center tw-p-4 tw-w-[400px] tw-mt-5 tw-mx-auto  hover:tw-border-red-500 hover:tw-border-[1px]" data-aos='fade-up'>
      <img src="apiPictures/id38.avif" alt="Product"  className=" tw-h-80 tw-mx-auto tw-rounded-xl tw-transition-transform tw-duration-300 hover:tw-scale-105 hover:tw-z-10" />
      <h2 className="tw-text-lg tw-font-bold tw-text-gray-700 tw-mt-3">WINTER JACKET</h2>
      <p className="tw-text-xl tw-font-semibold tw-text-gray-900 tw-mb-2">$135</p>
      <p className="tw-text-xl tw-font-semibold tw-text-gray-900">women</p>
      <p className=" tw-text-sm tw-text-gray-600">A warm winter jacket designed to keep you cozy during cold weather.</p>
      <button className="tw-border tw-border-red-500 tw-text-red-500 tw-font-semibold tw-py-2 tw-px-4 tw-rounded hover:tw-bg-red-500 hover:tw-text-white hover:tw-font-bold tw-mt-3"><NavLink to="products">Go To Products</NavLink> </button>
    </div>


    </div>








        {/* <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-8">
          {products.map((card, index) => (
            <HomeCards
              key={index}
              image={card.image}
              title={card.title}
              price={card.price}
              description={card.description}
              reviews={card.reviews}
            />
          ))}
        </div>
        

        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-8">
          {products.map((card, index) => (
            <HomeCards
              key={index}
              image={card.image}
              title={card.title}
              price={card.price}
              description={card.description}
              reviews={card.reviews}
            />
          ))}
        </div> */}
      </div>
      {/* // dummy cards content ended  */}



      {/*  image section started*/}


      <div className='tw-px-4' data-aos='fade-up'>

        <img src="/src/assets/blur5.png" alt="img" className='tw-rounded-xl'></img>
      </div>

      {/* image section finished */}





      {/* retailers section started retailers ended */}


      <div className="tw-py-16">
        {/* B2B Marketplace Section */}
        <div className="container tw-mx-auto tw-text-center ">
          <h2 className="lg:tw-text-5xl md:tw-text-3xl sm:tw-text-3xl  tw-text-3xl  tw-font-semibold tw-text-gray-800">B2B <span className='tw-text-red-500'>Marketplace</span></h2>




          <div className="container  d-flex tw-gap-2 tw-flex-wrap" data-aos='fade-up'>
            <div className="tw-bg-white tw-rounded-lg tw-shadow-md tw-overflow-hidden tw-text-center tw-p-4 tw-max-w-[315px] tw-mt-5 tw-mx-auto  hover:tw-border-red-500 hover:tw-border-[1px] ">
              <img src="src/assets/quickDelivery.jpg" alt="Product" className="tw-mb-4 tw-rounded-md" />
              <hr></hr>
              <p style={{ fontFamily: 'Poppins, sans-serif' }}>
                <span className='tw-mx-auto tw-text-red-500 tw-font-bold tw-text-2xl'>Quick delivery </span><br></br> Ensures customers receive their orders promptly,
                enhancing satisfaction and trust in the brand. Efficient logistics
                and fast shipping methods are key to meeting expectations.
              </p>

            </div>

            <div className="tw-bg-white tw-rounded-lg tw-shadow-md tw-overflow-hidden tw-text-center tw-p-4 tw-max-w-[335px] tw-mt-5 tw-mx-auto  hover:tw-border-red-500 hover:tw-border-[1px]">
              <img src="src/assets/reliable2.jpg" alt="Product" className="tw-mb-4 tw-rounded-md tw-w-[283px] tw-h-[191px] tw-object-cover" />
              <hr></hr>
              <p style={{ fontFamily: 'Poppins, sans-serif' }}>
                <span className='tw-mx-auto tw-text-red-500 tw-font-bold tw-text-2xl'>Realiable </span><br></br>  Our e-commerce platforms ensure smooth transactions,
                secure payments, and timely deliveries, building customer
                trust and enhancing overall shopping experiences.
              </p>

            </div>

            <div className="tw-bg-white tw-rounded-lg tw-shadow-md tw-overflow-hidden tw-text-center tw-p-4 tw-max-w-[335px] tw-mt-5 tw-mx-auto  hover:tw-border-red-500 hover:tw-border-[1px]">
              <img src="src/assets/returns.png" alt="Product" className="tw-mb-4 tw-rounded-md tw-w-[283px] tw-h-[191px] tw-object-cover" />
              <hr></hr>
              <p style={{ fontFamily: 'Poppins, sans-serif' }}>
                <span className='tw-mx-auto tw-text-red-500 tw-font-bold tw-text-2xl'>Easy returns </span><br></br> Return policies enhance customer satisfaction by offering
                hassle-free exchanges or refunds, ensuring trust and encouraging
                repeat purchases from shoppers
              </p>

            </div>

          </div>




        </div>

        {/* 100+ Brands and Suppliers Section */}
        <div className="container  tw-text-center tw-mt-16 ">
          <h2 className="lg:tw-text-5xl md:tw-text-3xl sm:tw-text-3xl  tw-text-2xl tw-font-semibold tw-text-gray-800">100+ <span className='tw-text-red-500'>Brands and Suppliers</span></h2>

          <div className="tw-mt-8 tw-flex tw-flex-wrap tw-justify-center tw-gap-6" data-aos='fade-up'>

            <img
              src="src/assets/uniqlo-logo.svg"
              alt="Brand 1"
              className="tw-h-36 tw-w-36 tw-object-contain "
            />
            <img
              src="src/assets/adidas-logo.svg"
              alt="Brand 2"
              className="tw-h-36 tw-w-36 tw-object-contain "
            />
            <img
              src="src/assets/gucci-logo.svg"
              alt="Brand 3"
              className="tw-h-36 tw-w-36 tw-object-contain"
            />
            <img
              src="src/assets/h-m-logo.svg"
              alt="Brand 4"
              className="tw-h-36 tw-w-36 tw-object-contain"
            />
            <img
              src="src/assets/nike-logo.svg"
              alt="Brand 4"
              className="tw-h-36 tw-w-36 tw-object-contain"
            />
            <img
              src="src/assets/Levis-logo.svg"
              alt="Brand 4"
              className="tw-h-36 tw-w-36 tw-object-contain"
            />
            <img
              src="src/assets/hermes-logo.svg"
              alt="Brand 4"
              className="tw-h-36 tw-w-36 tw-object-contain"
            />


            {/* Add more brand images as needed */}
          </div>
        </div>
      </div>

      {/* retailers section started retailers started*/}



    </>
  );
};

export default Home;

