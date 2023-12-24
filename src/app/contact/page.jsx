import Contact from '../../components/Contact/Contact.jsx'
import Navbar from '../../components/Navbar/Navbar.jsx'
import React from 'react'

const Contact_page = () => {
  return (
    <>
    <Navbar/>
    <div className='contact_page_container'>
      <Contact/>
    </div>
    </>
  )
}

export default Contact_page;
