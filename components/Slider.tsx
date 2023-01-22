import React from 'react';
import Banner1 from "../public/images/banner-1.jpg"
import Banner2 from "../public/images/banner-2.jpg"
import Banner3 from "../public/images/banner-3.jpg"

const Slider = () => {
  return (
        <div className='px-10 has-scrollbar flex gap-10 scroll overflow-x-auto'>
            <div className='h-96 snap-center min-w-full rounded-lg overflow-hidden relative'>
                <img src={Banner1.src} alt="" className='w-full h-full object-cover ' />
                <div className='absolute top-1/2 z-20 -translate-y-1/2 max-w-md left-20 p-10 leading-4 uppercase'>
                    <h4 className='text-3xl font-semibold text-pink-300 mb-3'>Trending Items</h4>
                    <h1 className='text-5xl font-bold mb-5'>Women's Latest Fashion Sale</h1>
                    <span className='block lowercase text-2xl font-semibold text-gray-400 mb-3'>starting at $ <span className='font-bold text-3xl text-gray-600'>20</span>.00</span>
                    <button className='uppercase px-5 py-3 bg-pink-400 text-white font-medium rounded w-max'>Shop now</button>
                </div>
            </div>
            <div className='h-96 snap-center min-w-full rounded-lg overflow-hidden relative'>
                <img src={Banner2.src} alt="" className='w-full h-full object-cover ' />
                <div className='absolute top-1/2 z-20 -translate-y-1/2 max-w-md left-20 p-10 leading-4 uppercase'>
                    <h4 className='text-3xl font-semibold text-pink-300 mb-3'>Trending Accessories</h4>
                    <h1 className='text-5xl font-bold mb-5'>MODERN SUNGLASSES</h1>
                    <span className='block lowercase text-2xl font-semibold text-gray-400 mb-3'>starting at $ <span className='font-bold text-3xl text-gray-600'>15</span>.00</span>
                    <button className='uppercase px-5 py-3 bg-pink-400 text-white font-medium rounded w-max'>Shop now</button>
                </div>
            </div>
            <div className='h-96 min-w-full snap-center rounded-lg overflow-hidden relative'>
                <img src={Banner3.src} alt="" className='w-full h-full object-cover ' />
                <div className='absolute top-1/2 z-20 -translate-y-1/2 max-w-md left-20 p-10 leading-4 uppercase'>
                    <h4 className='text-3xl font-semibold text-pink-300 mb-3'>Sale offer</h4>
                    <h1 className='text-5xl font-bold mb-5'>NEW FASHION SUMMER SALE</h1>
                    <span className='block lowercase text-2xl font-semibold text-gray-400 mb-3'>starting at $ <span className='font-bold text-3xl text-gray-600'>29</span>.99</span>
                    <button className='uppercase px-5 py-3 bg-pink-400 text-white font-medium rounded w-max'>Shop now</button>
                </div>
            </div>
        </div>
    )
}

export default Slider