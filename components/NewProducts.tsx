import React, { useState } from 'react'
import { BsEye, BsFillCartPlusFill, BsHeart, BsStarFill, BsStarHalf } from 'react-icons/bs'
import Jacket3 from '../public/images/products/jacket-3.jpg'
import Jacket4 from '../public/images/products/jacket-4.jpg'

const NewProducts = () => {
    const [products,setProducts] = useState([...Array(12)]);
  return (
      <div className='w-full mt-6'>
          <h2 className='font-bold text-lg text-gray-600 pb-3 border-b-1 border-b-gray-200'>New Products</h2>
          <div className='grid grid-cols-4 gap-8 mt-4'>
              {
                  products.map((product,index) => {
                      if(index % 2 === 0){
                          return (
                            <div className='border border-gray-200 rounded-lg hover:shadow-md overflow-hidden'>
                                <div className='relative group overflow-hidden'>
                                <img src={Jacket3.src} alt="" className='block w-full h-full object-cover relative' />
                                <img src={Jacket4.src} alt="" className='block w-full h-full object-cover absolute top-0 left-0 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-transform' />
                                <p className='absolute top-4 left-4 py-[2px] px-2 bg-green-400 text-sm rounded text-white font-semibold'>15%</p>
                                <div className='absolute transition-all top-3 -right-full flex flex-col gap-2 group-hover:right-3'>
                                    <div className='p-2 border bg-white border-gray-200 rounded hover:bg-black hover:text-white'>
                                        <BsHeart />
                                    </div>
                                    <div className='p-2 border bg-white border-gray-200 rounded hover:bg-black hover:text-white'>
                                        <BsEye />
                                    </div>
                                    <div className="p-2 border bg-white border-gray-200 rounded hover:bg-black hover:text-white">
                                        <BsFillCartPlusFill />
                                    </div>
                                </div>
                            </div>
                            <div className="pt-4 px-6">
                                <h5 className='text-pink-300 uppercase mb-2 text-sm'>Jacket</h5>
                                <p className='text-gray-500 font-normal leading-5 capitalize tracking-wide'>Mens winter Leathers Jackets</p>
                                <div className='flex mt-2 text-yellow-400'>
                                    <BsStarFill />
                                    <BsStarFill />
                                    <BsStarFill />
                                    <BsStarFill />
                                    <BsStarHalf />
                                </div>
                                <div className='mt-2 flex gap-2 items-center mb-3'>
                                    <span className='font-bold text-lg'>$48.00</span>
                                    <span className='font-normal line-through  text-gray-500'>$75.00</span>
                                </div>
                                </div>
                            </div>
                          )
                      }else{
                          return (
                            <div className='border border-gray-200 rounded-lg hover:shadow-md overflow-hidden'>
                  <div className='relative group overflow-hidden'>
                      <img src={Jacket3.src} alt="" className='block w-full h-full object-cover relative' />
                      <img src={Jacket4.src} alt="" className='block w-full h-full object-cover absolute top-0 left-0 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-transform' />
                      <p className='absolute px-10 py-[3px] -rotate-45  bg-black top-2 -left-8 text-white font-normal text-sm'>SALE</p>
                      <div className='absolute transition-all top-3 -right-full flex flex-col gap-2 group-hover:right-3'>
                          <div className='p-2 border bg-white border-gray-200 rounded hover:bg-black hover:text-white'>
                            <BsHeart />
                          </div>
                          <div className='p-2 border bg-white border-gray-200 rounded hover:bg-black hover:text-white'>
                            <BsEye />
                          </div>
                          <div className="p-2 border bg-white border-gray-200 rounded hover:bg-black hover:text-white">
                            <BsFillCartPlusFill />
                          </div>
                      </div>
                  </div>
                  <div className="pt-4 px-6">
                      <h5 className='text-pink-300 uppercase mb-2 text-sm'>Jacket</h5>
                      <p className='text-gray-500 font-normal leading-5 capitalize tracking-wide'>Mens winter Leathers Jackets</p>
                      <div className='flex mt-2 text-yellow-400'>
                          <BsStarFill />
                          <BsStarFill />
                          <BsStarFill />
                          <BsStarFill />
                          <BsStarHalf />
                      </div>
                      <div className='mt-2 flex gap-2 items-center mb-3'>
                          <span className='font-bold text-lg'>$48.00</span>
                          <span className='font-normal line-through  text-gray-500'>$75.00</span>
                      </div>
                  </div>
              </div>
                          )
                      }
                  })
              }
              
              
              <div></div>
              <div></div>
          </div>
      </div>
  )
}

export default NewProducts