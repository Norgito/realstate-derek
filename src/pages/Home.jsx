import React from 'react'

//import components
import Banner from "../components/Banner"
import ItemListContainer from '../components/ItemListContainer'

function Home() {
  return (
    <div className='min-h-[1800]'>
        <Banner />
        <div className='flex gap-3 flex-wrap'>
         <ItemListContainer />
        </div>
    </div>
  )
}

export default Home