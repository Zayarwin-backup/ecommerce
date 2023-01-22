import React from 'react'
import Trending from './Trending'
import TopRated from './TopRated'
import NewArrivals from './NewArrivals'
import DealOFTheDay from './DealOFTheDay'
import NewProducts from './NewProducts'
const MainSide = () => {
  return (
    <div className='w-[calc(74%_-_15px)]'>
      <div className='flex w-full gap-5'>
      <div className='max-w-[calc((100%_/_3)_-_15px)]'>
        <h2 className='text-lg border-b-1 border-b-gray-300 pb-3  font-semibold'>New Arrivals</h2>
          <NewArrivals />
      </div>
      <div className='max-w-[calc((100%_/_3)_-_15px)]'>
        <h2 className='text-lg border-b-1 border-b-gray-300 pb-3  font-semibold'>Trending</h2>
          <Trending />
      </div>
      <div className='w-[calc((100%_/3)_-_15px)]'>
        <h2 className='text-lg border-b-1 border-b-gray-300 pb-3  font-semibold'>Top Rated</h2>
        <TopRated />
      </div>

      </div>
      <DealOFTheDay />
      <NewProducts />
    </div>
  )
}

export default MainSide