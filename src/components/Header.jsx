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
      <div className="container mx-auto flex justify-between items-center">
        { /* logo */}
        <Link to='/'>
            <img src={Logo} alt=''  />
        </Link>
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