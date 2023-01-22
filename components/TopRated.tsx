import React from 'react'
import Clothe1 from '../public/images/products/clothes-1.jpg'
import Cloth2 from '../public/images/products/clothes-2.jpg'
import Cloth3 from '../public/images/products/clothes-3.jpg'
import Shirt1 from '../public/images/products/shirt-1.jpg'
import Jacket5 from '../public/images/products/jacket-5.jpg'

const TopRated = () => {
  return (
    <div className='flex overflow-auto scroll  px-1  mt-5 gap-2 has-scrollbar'>
    <div className='min-w-full snap-start flex flex-col'>
      <div className='p-4 rounded-lg mb-3 border-1 w-full border-gray-300 items-center gap-4 flex overflow-hidden'>
        <div>
        <img src={Clothe1.src} alt="" className='w-full h-full object-cover' />
        </div>
          <div className='min-w-[calc(100%_-_85px)]'>
            <h2 className='whitespace-nowrap overflow-hidden text-ellipsis font-bold capitalize'>Relaxed Short full Sleeve T-Shirt</h2>
            <span className='mt-0 text-md inline-block text-gray-700 font-medium'>Clothes</span>
            <div className='mt-0 flex gap-3 items-center'>
              <span className='text-md font-bold text-pink-300'>$45.00</span>
              <span className='text-sm font-md text-gray-500 line-through'>$12.00</span>
            </div>
          </div>
      </div>
      <div className='p-4 rounded-lg mb-3 border-1 w-full border-gray-300 items-center gap-4 flex overflow-hidden'>
        <div>
        <img src={Cloth2.src} alt="" className='w-full h-full object-cover' />
        </div>
          <div className='min-w-[calc(100%_-_85px)]'>
            <h2 className='whitespace-nowrap overflow-hidden text-ellipsis font-bold capitalize'>Girls pnk Embro design Top</h2>
            <span className='mt-0 text-md inline-block text-gray-700 font-medium'>Clothes</span>
            <div className='mt-0 flex gap-3 items-center'>
              <span className='text-md font-bold text-pink-300'>$61.00</span>
              <span className='text-sm font-md text-gray-500 line-through'>$9.00</span>
            </div>
          </div>
      </div>
      <div className='p-4 rounded-lg mb-3 border-1 w-full border-gray-300 items-center gap-4 flex overflow-hidden'>
        <div>
        <img src={Cloth3.src} alt="" className='w-full h-full object-cover' />
        </div>
          <div className='min-w-[calc(100%_-_85px)]'>
            <h2 className='whitespace-nowrap overflow-hidden text-ellipsis font-bold capitalize'>Black Floral Wrap Midi Skirt</h2>
            <span className='mt-0 text-md inline-block text-gray-700 font-medium'>Clothes</span>
            <div className='mt-0 flex gap-3 items-center'>
              <span className='text-md font-bold text-pink-300'>$76.00</span>
              <span className='text-sm font-md text-gray-500 line-through'>$25.00</span>
            </div>
          </div>
      </div>
      <div className='p-4 rounded-lg border-1 w-full border-gray-300 items-center gap-4 flex overflow-hidden'>
        <div>
        <img src={Shirt1.src} alt="" className='w-full h-full object-cover' />
        </div>
          <div className='min-w-[calc(100%_-_85px)]'>
            <h2 className='whitespace-nowrap overflow-hidden text-ellipsis font-bold capitalize'>Pure Garment Dyed Cotton Shirt</h2>
            <span className='mt-0 text-md inline-block text-gray-700 font-medium'>Mens Fashion</span>
            <div className='mt-0 flex gap-3 items-center'>
              <span className='text-md font-bold text-pink-300'>$68.00</span>
              <span className='text-sm font-md text-gray-500 line-through'>$31.00</span>
            </div>
          </div>
      </div>
    </div>
    <div className='min-w-full snap-start flex flex-col'>
    <div className='p-4 rounded-lg mb-3 border-1 w-full border-gray-300 items-center gap-4 flex overflow-hidden'>
        <div>
        <img src={Jacket5.src} alt="" className='w-full h-full object-cover' />
        </div>
          <div className='min-w-[calc(100%_-_85px)]'>
            <h2 className='whitespace-nowrap overflow-hidden text-ellipsis font-bold capitalize'>MEN Yarn Fleece Full-Zip Jacket</h2>
            <span className='mt-0 text-md inline-block text-gray-700 font-medium'>Mens Fashion</span>
            <div className='mt-0 flex gap-3 items-center'>
              <span className='text-md font-bold text-pink-300'>$68.00</span>
              <span className='text-sm font-md text-gray-500 line-through'>$31.00</span>
            </div>
          </div>
      </div>
      <div className='p-4 rounded-lg mb-3 border-1 w-full border-gray-300 items-center gap-4 flex overflow-hidden'>
        <div>
        <img src={Shirt1.src} alt="" className='w-full h-full object-cover' />
        </div>
          <div className='min-w-[calc(100%_-_85px)]'>
            <h2 className='whitespace-nowrap overflow-hidden text-ellipsis font-bold capitalize'>Mens Winter Leathers Jackets</h2>
            <span className='mt-0 text-md inline-block text-gray-700 font-medium'>Mens Fashion</span>
            <div className='mt-0 flex gap-3 items-center'>
              <span className='text-md font-bold text-pink-300'>$68.00</span>
              <span className='text-sm font-md text-gray-500 line-through'>$31.00</span>
            </div>
          </div>
      </div>
      <div className='p-4 rounded-lg mb-3 border-1 w-full border-gray-300 items-center gap-4 flex overflow-hidden'>
        <div>
        <img src={Shirt1.src} alt="" className='w-full h-full object-cover' />
        </div>
          <div className='min-w-[calc(100%_-_85px)]'>
            <h2 className='whitespace-nowrap overflow-hidden text-ellipsis font-bold capitalize'>Mens Winter Leathers Jackets</h2>
            <span className='mt-0 text-md inline-block text-gray-700 font-medium'>Mens Fashion</span>
            <div className='mt-0 flex gap-3 items-center'>
              <span className='text-md font-bold text-pink-300'>$68.00</span>
              <span className='text-sm font-md text-gray-500 line-through'>$31.00</span>
            </div>
          </div>
      </div>
      <div className='p-4 rounded-lg border-1 w-full border-gray-300 items-center gap-4 flex overflow-hidden'>
        <div>
        <img src={Shirt1.src} alt="" className='w-full h-full object-cover' />
        </div>
          <div className='min-w-[calc(100%_-_85px)]'>
            <h2 className='whitespace-nowrap overflow-hidden text-ellipsis font-bold capitalize'>Better Basics French Terry Sweatshorts</h2>
            <span className='mt-0 text-md inline-block text-gray-700 font-medium'>Mens Fashion</span>
            <div className='mt-0 flex gap-3 items-center'>
              <span className='text-md font-bold text-pink-300'>$68.00</span>
              <span className='text-sm font-md text-gray-500 line-through'>$31.00</span>
            </div>
          </div>
      </div>
    </div>
  </div>
  )
}

export default TopRated