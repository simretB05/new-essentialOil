import React from 'react'
import Footer from '../components/footer/footer';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/navbar';
const SharedLayout = () => (
  <>
    <Navbar />
        <Outlet/>
    <Footer/>
    
  </>

);
export default  SharedLayout; 