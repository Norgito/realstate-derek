import React from 'react'

//import image
import Image from '../assets/img/house-banner.png';
import imageMobile from '../assets/img/house-banner-mobile.png'
//import search
import Search from '../components/Search'

const Banner = () => {
    return (
        
        <>
       {/* DESKTOP*/ }
            <section className=' max-h-[840px] px-4'>
            <div className='flex-1 lg:flex md:flex md:items-center md:justify-center lg:justify-end lg:items-end'>
                <img src={imageMobile} alt='' className='rounded-md items-center justify-center lg:hidden  '/>
            </div>
        <div className='flex flex-col lg:flex-row'>
            <div className=' lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-1 lg:px-0'>
                <h1 className=' mt-4 text-4xl lg:text-[58px] font-semibold leading-none mb-6'>
                    <span className='text-violet-700'>BUY</span> or <span className='text-violet-700'>RENT</span> <br /> your dream house <br /> with us...
                </h1>
                <p className='max-w-[480px] mb-8'>
                    HIO tLorem ipsum dolor sit amet consectetur adipisicing elit. Harum corrupti nam adipisci corporis rem debitis illo veritatis, eveniet blanditiis assumenda saepe!
                </p>
            </div>
                { /* image */}
            <div className='hidden flex-1 lg:flex justify-end items-end'>
                <img src={Image} alt='' className=''/>
            </div>
        </div>
        <Search />
            </section>
            
            {/* MOBILE*/}
            
    </>
  )
}

export default Banner;