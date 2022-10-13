import React from 'react'

//import image
import Image from '../assets/img/house-banner.png';
//import search
import Search from '../components/Search'

const Banner = () => {
  return (
    <section className='h-full max-h-[640px] mb-8 xl:mb-24'>
        <div className='flex flex-col lg:flex-row'>
            <div className='lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
                <h1 className='text-4xl lg:text-[58px]'>
                    <span>RENT OR BUY</span>Your Dream House With Us.
                </h1>
                <p>
                    HI Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum corrupti nam adipisci corporis rem debitis illo veritatis, eveniet blanditiis assumenda saepe! Iste, explicabo excepturi aspernatur dolorum alias pariatur quaerat minus!
                </p>
            </div>
                { /* image */}
            <div>
                <img src={Image} alt='' />
            </div>
        </div>
        <Search />
    </section>
    
  )
}

export default Banner;