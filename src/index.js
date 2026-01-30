import React from 'react';
import ReactDOM from 'react-dom/client';
import{BrowserRouter,Routes,Route} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HomePage from './landingPage/Home/HomePage'
import Signup from './landingPage/Signup/Signup'
import About from './landingPage/About/AboutPage'
import Products from './landingPage/Products/ProductsPage'
import Pricing from './landingPage/Pricing/PricingPage';
import Support from './landingPage/Support/SupportPage'
import Navbar from './landingPage/Home/Navbar'
import Footer from './landingPage/Footer'
import NotFound from './landingPage/NotFound';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/Signup" element={<Signup/>}></Route>
      <Route path="/About" element={<About/>}></Route>
      <Route path="/Products" element={<Products/>}></Route>
      <Route path="/Pricing" element={<Pricing/>}></Route>
      <Route path="/Support" element={<Support/>}></Route>
      <Route path="*" element={<NotFound/>}></Route>
    </Routes>
    <Footer/>
  </BrowserRouter>
);

reportWebVitals();
