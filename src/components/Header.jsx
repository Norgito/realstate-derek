import React from 'react'
//import icons
import { BsInstagram} from 'react-icons/bs'
import { ImFacebook2 } from 'react-icons/im'
//import link
import {Link} from 'react-router-dom'
//import logo
import Logo from '../assets/img/logo.png'

function Header() {
  return (
    <header className='py-2 mb-12 border-b'>
      <div className="container mx-auto flex justify-between items-center px-4">
        { /* logo */}
        <Link to='/'>
            <img src={Logo} alt=''  />
        </Link>

        { /* navbar links */}
        <div className='flex items-center gap-10'>
        <Link to="/pages/forsale">
          <a href="*"> FOR SALE </a>
        </Link>
        <Link to="/pages/forrent">
          <a href="*"> FOR RENT </a>
        </Link>
        <Link to="/pages/residences">
          <a href="*"> RESIDENCES </a>
        </Link>
        <Link to="/pages/property-management">
          <a href="*"> PROPERTY MANAGEMENT </a>
        </Link>
        <Link to="/pages/about-us">
          <a href="*"> ABOUT US </a>
        </Link>
        </div>

        { /* Social Media */}
        <div className='flex items-center gap-6'>
            <Link className='' to=''> <BsInstagram /> </Link>
            <Link to=''><ImFacebook2 /></Link>
        </div>
      </div>
    </header>
  )
}

export default Header;