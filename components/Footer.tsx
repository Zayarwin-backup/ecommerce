import React from 'react'
import { BsGeoAlt, BsPhone } from 'react-icons/bs'
import {MdOutlineEmail} from 'react-icons/md'
import Payment from "../public/images/payment.png"

const Footer = () => {
  return (
    <div className=" bg-neutral-900">
        <div className='py-8 border-b-1 px-10 border-b-gray-600'>
            <h2 className='pt-3 text-pink-300 font-bold uppercase text-md'>Brand Directory</h2>
            <div className='mt-3 flex items-center gap-x-5 gap-y-1 text-sm text-gray-400'>
                <h3 className='font-bold uppercase text-sm tracking-wide'>Fashion:</h3>
                <a href="" className='relative after:absolute after:w-[1px] after:h-4 after:-right-[10px] after:top-[3px] after:bg-gray-200'>T-shirt</a>
                <a href="" className='relative after:absolute after:w-[1px] after:h-4 after:-right-[10px] after:top-[3px] after:bg-gray-200'>Shirt</a>
                <a href="" className='relative after:absolute after:w-[1px] after:h-4 after:-right-[10px] after:top-[3px] after:bg-gray-200'>Short & Jeans</a>
                <a href="" className='relative after:absolute after:w-[1px] after:h-4 after:-right-[10px] after:top-[3px] after:bg-gray-200'>Jacket</a>
                <a href="" className='relative after:absolute after:w-[1px] after:h-4 after:-right-[10px] after:top-[3px] after:bg-gray-200'>Dress & Frock</a>
                <a href="" className='relative after:absolute after:w-[1px] after:h-4 after:-right-[10px] after:top-[3px] after:bg-gray-200'>Innerwear</a>
                <a href="" className='relative after:absolute after:w-[1px] after:h-4 after:-right-[10px] after:top-[3px] after:bg-gray-200'>Hosiery</a>
            </div>
            <div className='mt-3 flex items-center gap-x-5 gap-y-1 text-sm text-gray-400'>
                <h3 className='font-bold uppercase text-sm tracking-wide'>Footwear:</h3>
                <a href="" className='relative after:absolute after:w-[1px] after:h-4 after:-right-[10px] after:top-[3px] after:bg-gray-200'>Sport  </a>
                <a href="" className='relative after:absolute after:w-[1px] after:h-4 after:-right-[10px] after:top-[3px] after:bg-gray-200'>Formal  </a>
                <a href="" className='relative after:absolute after:w-[1px] after:h-4 after:-right-[10px] after:top-[3px] after:bg-gray-200'>Boots  </a>
                <a href="" className='relative after:absolute after:w-[1px] after:h-4 after:-right-[10px] after:top-[3px] after:bg-gray-200'>Casual  </a>
                <a href="" className='relative after:absolute after:w-[1px] after:h-4 after:-right-[10px] after:top-[3px] after:bg-gray-200'>Cowboy Shoes  </a>
                <a href="" className='relative after:absolute after:w-[1px] after:h-4 after:-right-[10px] after:top-[3px] after:bg-gray-200'>Safety Shoes  </a>
                <a href="" className='relative after:absolute after:w-[1px] after:h-4 after:-right-[10px] after:top-[3px] after:bg-gray-200'>Party wear Shoes  </a>
                <a href="" className='relative after:absolute after:w-[1px] after:h-4 after:-right-[10px] after:top-[3px] after:bg-gray-200'>Branded  </a>
                <a href="" className='relative after:absolute after:w-[1px] after:h-4 after:-right-[10px] after:top-[3px] after:bg-gray-200'>FirstCopy  </a>
                <a href="" className='relative after:absolute after:w-[1px] after:h-4 after:-right-[10px] after:top-[3px] after:bg-gray-200'>LongShoes</a>
            </div>
            <div className='mt-3 flex items-center gap-x-5 gap-y-1 text-sm text-gray-400'>
                <h3 className='font-bold uppercase text-sm tracking-wide'>Jewellery</h3>
                <a href="" className='relative after:absolute after:w-[1px] after:h-4 after:-right-[10px] after:top-[3px] after:bg-gray-200' >Necklace  </a>
                <a href="" className='relative after:absolute after:w-[1px] after:h-4 after:-right-[10px] after:top-[3px] after:bg-gray-200'>Earrings  </a>
                <a href="" className='relative after:absolute after:w-[1px] after:h-4 after:-right-[10px] after:top-[3px] after:bg-gray-200'>Couple Rings  </a>
                <a href="" className='relative after:absolute after:w-[1px] after:h-4 after:-right-[10px] after:top-[3px] after:bg-gray-200'>Pendants  </a>
                <a href="" className='relative after:absolute after:w-[1px] after:h-4 after:-right-[10px] after:top-[3px] after:bg-gray-200'>Crystals  </a>
                <a href="" className='relative after:absolute after:w-[1px] after:h-4 after:-right-[10px] after:top-[3px] after:bg-gray-200'>Bangles  </a>
                <a href="" className='relative after:absolute after:w-[1px] after:h-4 after:-right-[10px] after:top-[3px] after:bg-gray-200'>Bracelets  </a>
                <a href="" className='relative after:absolute after:w-[1px] after:h-4 after:-right-[10px] after:top-[3px] after:bg-gray-200'>Noesepin  </a>
                <a href="" className='relative after:absolute after:w-[1px] after:h-4 after:-right-[10px] after:top-[3px] after:bg-gray-200'>Chain  </a>
                <a href="" className='relative after:absolute after:w-[1px] after:h-4 after:-right-[10px] after:top-[3px] after:bg-gray-200'>Earrings  </a>
                <a href="" className='relative after:absolute after:w-[1px] after:h-4 after:-right-[10px] after:top-[3px] after:bg-gray-200'>Couple Rings  </a>
            </div>
            <div className='mt-3 flex items-center gap-x-5 gap-y-1 text-sm text-gray-400 mb-4'>
                <h3 className='font-bold uppercase text-sm tracking-wide'>Cosmetics</h3>
                <a href="" className='relative after:absolute after:w-[1px] after:h-4 after:-right-[10px] after:top-[3px] after:bg-gray-200'>Shampoo  </a>
                <a href="" className='relative after:absolute after:w-[1px] after:h-4 after:-right-[10px] after:top-[3px] after:bg-gray-200'>Body Wash  </a>
                <a href="" className='relative after:absolute after:w-[1px] after:h-4 after:-right-[10px] after:top-[3px] after:bg-gray-200'>Facewash  </a>
                <a href="" className='relative after:absolute after:w-[1px] after:h-4 after:-right-[10px] after:top-[3px] after:bg-gray-200'>Makeup kit  </a>
                <a href="" className='relative after:absolute after:w-[1px] after:h-4 after:-right-[10px] after:top-[3px] after:bg-gray-200'>Liner  </a>
                <a href="" className='relative after:absolute after:w-[1px] after:h-4 after:-right-[10px] after:top-[3px] after:bg-gray-200'>Lipstick  </a>
                <a href="" className='relative after:absolute after:w-[1px] after:h-4 after:-right-[10px] after:top-[3px] after:bg-gray-200'>Perfume  </a>
                <a href="" className='relative after:absolute after:w-[1px] after:h-4 after:-right-[10px] after:top-[3px] after:bg-gray-200'>Body soap  </a>
                <a href="" className='relative after:absolute after:w-[1px] after:h-4 after:-right-[10px] after:top-[3px] after:bg-gray-200'>Scrub  </a>
                <a href="" className='relative after:absolute after:w-[1px] after:h-4 after:-right-[10px] after:top-[3px] after:bg-gray-200'>Hair Gel  </a>
                <a href="" className='relative after:absolute after:w-[1px] after:h-4 after:-right-[10px] after:top-[3px] after:bg-gray-200'>Hair Colors  </a>
                <a href="" className='relative after:absolute after:w-[1px] after:h-4 after:-right-[10px] after:top-[3px] after:bg-gray-200'>Hair Dye  </a>
                <a href="" className='relative after:absolute after:w-[1px] after:h-4 after:-right-[10px] after:top-[3px] after:bg-gray-200'>Sunscreen  </a>
                <a href="" className='relative after:absolute after:w-[1px] after:h-4 after:-right-[10px] after:top-[3px] after:bg-gray-200'>Skin Loson  </a>
            </div>
        </div>
        <div className='grid grid-cols-5 gap-6 border-b-1 border-b-gray-600 px-10 py-8'>
                <ul className='w-full'>
                    <li className='relative text-sm pb-1 mb-3 uppercase text-white font-bold before:absolute before:w-16 before:h-[2px] before:bg-pink-300 before:bottom-0 before:left-0'>Popular Category</li>
                    <li className='text-gray-400 py-[2px]'>Fashion</li>
                    <li className='text-gray-400 py-[2px]'>Electronic</li>
                    <li className='text-gray-400 py-[2px]'>Cosmetic</li>
                    <li className='text-gray-400 py-[2px]'>Health</li>
                    <li className='text-gray-400 py-[2px]'>Watches</li>
                </ul>
                <ul className='w-full'>
                    <li className='relative text-sm pb-1 mb-3 uppercase text-white font-bold before:absolute before:w-16 before:h-[2px] before:bg-pink-300 before:bottom-0 before:left-0'>Products</li>
                    <li  className='text-gray-400 py-[2px]'>Prices Drop</li>
                    <li  className='text-gray-400 py-[2px]'>Best Sales</li>
                    <li  className='text-gray-400 py-[2px]'>Contact us</li>
                    <li  className='text-gray-400 py-[2px]'>Sitemap</li>
                    <li  className='text-gray-400 py-[2px]'>New Products</li>
                </ul>
                <ul className='w-full'>
                    <li className='relative text-sm pb-1 mb-3 uppercase text-white font-bold before:absolute before:w-16 before:h-[2px] before:bg-pink-300 before:bottom-0 before:left-0'>Our company</li>
                    <li className='text-gray-400 py-[2px]'>Delivary</li>
                    <li className='text-gray-400 py-[2px]'>Legal Notice</li>
                    <li className='text-gray-400 py-[2px]'>Term & Conditions</li>
                    <li className='text-gray-400 py-[2px]'>About us</li>
                    <li className='text-gray-400 py-[2px]'>Secure Payment</li>
                </ul>
                <ul className='w-full'>
                    <li className='relative text-sm pb-1 mb-3 uppercase text-white font-bold before:absolute before:w-16 before:h-[2px] before:bg-pink-300 before:bottom-0 before:left-0'>Servies</li>
                    <li className='text-gray-400 py-[2px]'>Price Drops</li>
                    <li className='text-gray-400 py-[2px]'>New Products</li>
                    <li className='text-gray-400 py-[2px]'>Best Sales</li>
                    <li className='text-gray-400 py-[2px]'>Contact us</li>
                    <li className='text-gray-400 py-[2px]'>Sitemap</li>
                </ul>
                <ul>
                    <li className='relative text-sm pb-1 mb-3 uppercase text-white font-bold before:absolute before:w-16 before:h-[2px] before:bg-pink-300 before:bottom-0 before:left-0'>Contact</li>
                    <li className='flex items-start  gap-4 mb-2'>
                        <div className='text-xl text-gray-400 pt-1'><BsGeoAlt /></div>
                        <p className='text-md pt-0 text-gray-400 w-max'>419 State 414 Rte Beaver Dams, New York(NY), 14812, USA</p>
                    </li>
                    <li className='flex gap-4 items-center mb-2 '>
                        <div className='text-xl text-gray-400'><BsPhone  /></div>
                        <p className='text-md text-gray-400 w-max'>09-775-149-336</p>
                    </li>
                    <li className='flex items-center gap-4 mb-2'>
                        <div className='text-xl text-gray-400'><MdOutlineEmail  /></div>
                        <p className='text-md text-gray-400 w-max'>zayarwin7751@gmail.com</p>
                    </li>
                </ul>
        </div>
        <div className='py-8 text-center'>
            <img src={Payment.src} alt="" className='block mx-auto mb-2' />
            <p className='text-gray-400 font-medium text-md'>Copyright © Ecommerce All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer