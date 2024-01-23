import React from 'react'
import Image from 'next/image';
import Navbar from '../../components/Navbar/Navbar.jsx'
import About from '../../components/About/About.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import './page.css'
const page = () => {
  return (
    <>
    <Navbar/>
    <About/>
    <Footer/>
    </>
  )
}

export default page
