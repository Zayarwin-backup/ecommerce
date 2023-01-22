import React from 'react'
import Shampoo from '../public/images/products/shampoo.jpg'
import { BsStarFill, BsStarHalf } from 'react-icons/bs'

const DealOFTheDay = () => {
  return (
    <div className='mt-6 w-full'>
    <h2 className='font-bold text-lg text-gray-600 pb-3 border-b-1 border-b-gray-200'>Deal Of The Day</h2>
    <div className='w-full flex overflow-auto scroll gap-5 has-scrollbar'>
      <div className='min-w-full snap-center flex itmes-center gap-5 border border-gray-200 mt-8 rounded-lg overflow-hidden p-6'>
        <div className='mx-auto w-[calc(100%_-_10px)]'>
          <img src={Shampoo.src} alt="" className='w-full h-full object-cover' />
        </div>
        <div>
          <div className='flex mt-2'>
            <BsStarFill className='text-orange-300' />
            <BsStarFill className='text-orange-300' />
            <BsStarFill className='text-orange-300' />
            <BsStarHalf  className='text-orange-300'/>
            <BsStarHalf className='text-orange-300' />      
          </div>
          <h2 className='mt-3 text-sm font-bold'>SHAMPOO, CONDITIONER & FACEWASH PACKS</h2>
          <p className='mt-1 text-gray-400 text-md'>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor sit amet consectetur Lorem ipsum dolor</p>
          <div className='flex items-center mt-3 gap-2'>
            <span className='text-3xl font-extrabold  text-pink-300'>$150.00</span>
            <span className='text-xl font-semibold line-through text-gray-600'>$200.00</span>
          </div>
          <button className='inline-block mt-4 px-5 py-2 bg-pink-300 uppercase font-bold rounded-lg text-white'>Add to cart</button>
          <div className='w-full mt-4'>
            <div className='flex items-center justify-between'>
              <span className='uppercase text-xs font-medium'>already sold:<span className='font-extrabold pl-1'>20</span></span>
              <span className='uppercase text-xs font-medium'>Available:<span className='font-extrabold pl-1'>40</span></span>
            </div>
            <div className='mt-3 w-full bg-gray-200 h-3 rounded-full p-1'>
              <div className='bg-pink-300 w-1/2 h-full'></div>
            </div>
          </div>
        </div>
      </div>
      <div className='min-w-full snap-center flex itmes-center gap-5 border border-gray-200 mt-8 rounded-lg overflow-hidden p-6'>
        <div className='mx-auto w-[calc(100%_-_10px)]'>
          <img src={Shampoo.src} alt="" className='w-full h-full object-cover' />
        </div>
        <div>
          <div className='flex mt-2'>
            <BsStarFill className='text-orange-300' />
            <BsStarFill className='text-orange-300' />
            <BsStarFill className='text-orange-300' />
            <BsStarHalf  className='text-orange-300'/>
            <BsStarHalf className='text-orange-300' />      
          </div>
          <h2 className='mt-3 text-sm font-bold'>SHAMPOO, CONDITIONER & FACEWASH PACKS</h2>
          <p className='mt-1 text-gray-400 text-md'>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor sit amet consectetur Lorem ipsum dolor</p>
          <div className='flex items-center mt-3 gap-2'>
            <span className='text-3xl font-extrabold  text-pink-300'>$150.00</span>
            <span className='text-xl font-semibold line-through text-gray-600'>$200.00</span>
          </div>
          <button className='inline-block mt-4 px-5 py-2 bg-pink-300 uppercase font-bold rounded-lg text-white'>Add to cart</button>
          <div className='w-full mt-4'>
            <div className='flex items-center justify-between'>
              <span className='uppercase text-xs font-medium'>already sold:<span className='font-extrabold pl-1'>20</span></span>
              <span className='uppercase text-xs font-medium'>Available:<span className='font-extrabold pl-1'>40</span></span>
            </div>
            <div className='mt-3 w-full bg-gray-200 h-3 rounded-full p-1'>
              <div className='bg-pink-300 w-1/2 h-full rounded-full'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default DealOFTheDay