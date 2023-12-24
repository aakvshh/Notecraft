import React from 'react'
import Image from 'next/image';
import Navbar from '../../components/Navbar/Navbar.jsx'
import './page.css'
const page = () => {
  return (
    <>
    <Navbar/>
    <div className='test'>
      <Image src="/images/trial.png" alt="NoteCraft Logo" width={500} height={500} />
    </div>
    </>
  )
}

export default page
