import { useState } from 'react'

import './App.css'
import Navbar from './Navbar'
import Welcome from './components/Welcome';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { Outlet } from 'react-router-dom';
import { ProductContextProvider } from './components/contextStore/ProductContext';
import { CartContextProvider } from './components/contextStore/CartContext';


function App() {
  // const [count, setCount] = useState(0)

  return (
    <ProductContextProvider>
      <CartContextProvider>
        <Welcome />
        <ScrollToTop />
        <Navbar />
        <Outlet />
        <Footer />

      </CartContextProvider>
    </ProductContextProvider>
  )
}

export default App
