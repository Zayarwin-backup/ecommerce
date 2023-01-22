import React from 'react'
import Blog1 from '../public/images/blog-1.jpg'
import Blog2 from '../public/images/blog-2.jpg'
import Blog3 from '../public/images/blog-3.jpg'
import Blog4 from '../public/images/blog-4.jpg'
const Blogs = () => {
  return (
    <div className='my-7 mx-10'>
        <div className='grid grid-cols-4 gap-7'>
            <div className='w-full overflow-hidden'>
                <img src={Blog1.src} className="w-full mb-5 object-cover rounded-lg" alt="" />
                <span className='text-md text-pink-300'>Fashion</span>
                <h3 className='text-lg font-bold leading-6 hover:text-pink-300 cursor-pointer'>Clothes Retail KPIs 2021 Guide for Clothes Executives.</h3>
                <p className='mt-1 text-gray-500'>By Mr Admin / Apr 06,2022</p>
            </div>
            <div className='w-full overflow-hidden'>
                <img src={Blog2.src} className="w-full mb-5 object-cover rounded-lg" alt="" />
                <span className='text-md text-pink-300'>Clothes</span>
                <h3 className='text-lg font-bold leading-6 hover:text-pink-300 cursor-pointer'>Curbside fashion Trends:How to Win the Pickup Battle.</h3>
                <p className='mt-1 text-gray-500'>By Mr Robin / Jan 06,2022</p>
            </div>
            <div className='w-full overflow-hidden'>
                <img src={Blog3.src} className="w-full mb-5 object-cover rounded-lg" alt="" />
                <span className='text-md text-pink-300'>Shoes</span>
                <h3 className='text-lg font-bold leading-6 hover:text-pink-300 cursor-pointer'>EBT vendor: Claim Your Share of SNAP Online Revenue.</h3>
                <p className='mt-1 text-gray-500'>By Mr Selsa / Feb 06,2022</p>
            </div>
            <div className='w-full overflow-hidden'>
                <img src={Blog4.src} className="w-full mb-5 object-cover rounded-lg" alt="" />
                <span className='text-md text-pink-300'>Electronice</span>
                <h3 className='text-lg font-bold leading-6 hover:text-pink-300 cursor-pointer'>Choise Your best Light.</h3>
                <p className='mt-1 text-gray-500'>By Mr Pawar / Mar 06,2022</p>
            </div>
        </div>
    </div>
  )
}

export default Blogs