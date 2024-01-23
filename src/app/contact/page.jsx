import Contact from '../../components/Contact/Contact.jsx'
import Navbar from '../../components/Navbar/Navbar.jsx'
import React from 'react'
import Footer from '../../components/Footer/Footer.jsx'

const Contact_page = () => {
  return (
    <>
    <Navbar/>
    <div className='contact_page_container'>
      <Contact/>
      <Footer/>
    </div>
    </>
  )
}

export default Contact_page;
