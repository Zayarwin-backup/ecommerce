import React from 'react'
import Quote from '../public/images/icons/quotes.svg';
import Profile from '../public/images/testimonial-1.jpg';
import Banner from '../public/images/cta-banner.jpg'
import {RiShipLine} from "react-icons/ri"
import {IoArrowUndoOutline,IoTicketOutline,IoRocketOutline} from 'react-icons/io5'
import {BsTelephone} from 'react-icons/bs'

const About = () => {
  return (
    <div className='py-4 px-10'>
        <div className='flex gap-8'>
            <div className='w-[calc(25%_-_20px)]'>
                <h2 className='font-bold text-lg tracking-wide border-b-1 border-b-gray-200 pb-3 text-gray-600'>Testimonial</h2>
                <div className="mt-7 border-1 border-gary-200 rounded-lg py-6 px-8 text-center">
                    <img src={Profile.src} alt="" className='w-20 h-20 rounded-full object-cover mx-auto block' />
                    <h1 className='mt-5 font-bold text-gray-500 uppercase'>ALAN doe</h1>
                    <p className='text-gray-500'>CEO & Founder Invision</p>
                    <img src={Quote.src} alt="" className='w-7 h-7 my-4 block mx-auto' />
                    <p className='text-md font-semibold text-gray-500 mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore voluptate </p>
                </div>
            </div>
            <div className='relative w-[calc(50%_-_20px)] flex items-center justify-center'>
                <img src={Banner.src} alt="" className='w-full h-full object-cover -z-10 overflow-hidden rounded-lg' />
                <div className="absolute p-8 bg-neutral-50 z-10  rounded-lg text-center">
                    <span className="px-3 text-md py-1 bg-black text-white rounded uppercase font-semibold">25% discount</span>
                    <h1 className="mt-3 text-2xl font-bold text-gray-800">Summer Collection</h1>
                    <span className='block text-gray-500 text-lg mt-2'>Starting @ $10</span>
                    <span className='block font-extrabold uppercase mt-2 text-gray-500'>Shop Now</span>
                </div>
            </div>
            <div className='w-[calc(25%_-_20px)]'>
                <h2 className="font-bold text-lg tracking-wide border-b-1 border-b-gray-200 pb-3 text-gray-600">Our Services</h2>
                <div className="mt-7 border-1 border-gary-200 rounded-lg py-6 px-8 text-center">
                    <div className='flex items-center gap-3 mb-4'>
                        <RiShipLine className='text-3xl text-pink-300'  />
                        <div className='flex flex-col items-start'>
                            <h4 className='font-bold text-gray-500'>Worldwide Delivery</h4>
                            <p className='text-sm text-gray-500'>For Order over $100</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3 mb-4'>
                        <IoRocketOutline  className='text-3xl text-pink-300' />
                        <div className='flex flex-col items-start'>
                            <h4 className='font-bold text-gray-500'>Next Day Delivery</h4>
                            <p className='text-sm text-gray-500'>UK Orders Only</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3 mb-4'>
                        <BsTelephone  className='text-3xl text-pink-300' />
                        <div className='flex flex-col items-start'>
                            <h4 className='font-bold text-gray-500'>Best Online Support</h4>
                            <p className='text-sm text-gray-500'>Hours:8AM - 11PM</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3 mb-4'>
                        <IoArrowUndoOutline  className='text-3xl text-pink-300' />
                        <div className='flex flex-col items-start'>
                            <h4 className='font-bold text-gray-500'>Return Policy</h4>
                            <p className='text-sm text-gray-500'>Easy & Free Return</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3 mb-4'>
                        <IoTicketOutline  className='text-3xl text-pink-300'/>
                        <div className='flex flex-col items-start'>
                            <h4 className='font-bold text-gray-500'>30% Money Back</h4>
                            <p className='text-sm text-gray-500'>For Order Over $100</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About