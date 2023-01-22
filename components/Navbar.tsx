import React from 'react'
import {BsFacebook, BsHandbag, BsHeart} from "react-icons/bs"
import {AiOutlineInstagram,AiOutlineTwitter,AiFillLinkedin, AiOutlineSearch} from "react-icons/ai"
import { BsPerson } from 'react-icons/bs';
import HeadPhone from "../public/images/electronics-banner-1.jpg"
import Men from '../public/images/mens-banner.jpg'
import Women from '../public/images/womens-banner.jpg'
import Mouse from '../public/images/electronics-banner-2.jpg'

const Navbar = () => {
  return (
    <header>
        <div className='flex justify-between items-center py-4 px-10 border-b-gray-200 border-b-1'>
            <div className='flex items-center gap-1'>
                <div className='flex w-7 h-7 bg-gray-200 rounded items-center justify-center'>
                    <BsFacebook className='text-gray-600 text-lg' />
                </div>
                <div className='flex w-7 h-7 bg-gray-200 rounded items-center justify-center'>
                    <AiOutlineTwitter className='text-gray-600 text-lg' />
                </div>
                <div className='flex w-7 h-7 bg-gray-200 rounded items-center justify-center'>
                    <AiOutlineInstagram className='text-gray-600 text-lg' />
                </div>
                <div className='flex w-7 h-7 bg-gray-200 rounded items-center justify-center'>
                    <AiFillLinkedin className='text-gray-600 text-lg' />
                </div>
            </div>
            <div>
                <p className='text-sm font-medium text-gray-700'>FREE SHIPPING THIS WEEK ORDER OVER - $55</p>
            </div>
            <div className='flex items-center gap-2'>
                <select className='p-1 text-sm text-gray-700 w-20'>
                    <option value="">USD $</option>
                    <option value="">EUR €</option>
                </select>
                <select className='w-20 p-1 text-sm text-gray-700'>
                    <option value="">English</option>
                    <option value="">Thai</option>
                </select>
            </div>
        </div>
        <div className='py-5 px-10 flex items-center gap-x-20  justify-between border-b-gray-200 border-b-1'>
            <span className='text-3xl font-bold pl-3 tracking-tight'>Let's Shop</span>
            <div className='flex items-center py-2 px-4 border-1 grow rounded'>
                <input type="text" placeholder='Enter your product name...' className='w-full focus:outline-none' />
                <AiOutlineSearch className='text-2xl text-gray-500' />
            </div>
            <div className='flex items-center gap-6'>
                <div className='flex'>
                    <BsPerson className='text-3xl' />
                </div>
                <div className='flex relative'>
                    <BsHeart className='text-3xl' />
                    <span className='absolute w-4 h-4 rounded-full bg-red-500 text-white flex items-center text-xs justify-center top-[-10px] right-[-3px]'>0</span>
                </div>
                <div className='flex relative'>
                    <BsHandbag className='text-3xl' />
                    <span className='absolute w-4 h-4 rounded-full bg-red-500 text-white flex items-center justify-center text-xs top-[-10px] right-[-3px]'>0</span>
                </div>
            </div>
        </div>
        <nav>
            <div className='px-10'>
                <ul className='flex relative items-center justify-center gap-12'>
                    <li className='relative'>
                        <a href=""  className='hoverEffect block'>Home</a>
                    </li>
                    <li className='group'>
                        <a href="" className='hoverEffect block'>categories</a>
                        <div className='absolute z-30 top-full w-full left-0 grid grid-cols-4 gap-10 bg-white rounded-lg shadow-lg p-7 border-1 border-slate-200 transition translate-y-20 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 invisible group-hover:visible'>
                            <ul>
                                <li className='border-b-1 block border-b-gray-300 font-bold opacity-70 pb-2'>Electronic</li>
                                <li className='block pt-2 opacity-70'>Desktop</li>
                                <li className='block pt-2 opacity-70'>Laptop</li>
                                <li className='block pt-2 opacity-70'>Camera</li>
                                <li className='block pt-2 opacity-70'>Tablet</li>
                                <li className='block pt-2 opacity-70'>HeadPhone</li>
                                <li>
                                    <img className='w-full rounded-lg mt-6' src={HeadPhone.src} alt="" />
                                </li>
                            </ul>
                            <ul>
                                <li className='border-b-1 block border-b-gray-300 font-bold opacity-70 pb-2'>Men's</li>
                                <li className='block pt-2 opacity-70'>Formal</li>
                                <li className='block pt-2 opacity-70'>Casual</li>
                                <li className='block pt-2 opacity-70'>Sport</li>
                                <li className='block pt-2 opacity-70'>Jacket</li>
                                <li className='block pt-2 opacity-70'>Sunglasses</li>
                                <li>
                                    <img className='w-full rounded-lg mt-6' src={Men.src} alt="" />
                                </li>
                            </ul>
                            <ul>
                                <li className='border-b-1 block border-b-gray-300 font-bold opacity-70 pb-2'>Women's</li>
                                <li className='block pt-2 opacity-70'>Formal</li>
                                <li className='block pt-2 opacity-70'>Casual</li>
                                <li className='block pt-2 opacity-70'>Perfume</li>
                                <li className='block pt-2 opacity-70'>Cosmetics</li>
                                <li className='block pt-2 opacity-70'>Bags</li>
                                <li>
                                    <img className='w-full rounded-lg mt-6' src={Women.src} alt="" />
                                </li>
                            </ul>
                            <ul>
                                <li className='border-b-1 block border-b-gray-300 font-bold opacity-70 pb-2'>Electronic</li>
                                <li className='block pt-2 opacity-70'>Smart Watch</li>
                                <li className='block pt-2 opacity-70'>Smart TV</li>
                                <li className='block pt-2 opacity-70'>Keyboard</li>
                                <li className='block pt-2 opacity-70'>Mouse</li>
                                <li className='block pt-2 opacity-70'>Microphone</li>
                                <li>
                                    <img className='w-full rounded-lg mt-6' src={Mouse.src} alt="" />
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className='relative group'>
                        <a href="" className='hoverEffect block'>men's</a>
                        <div className='absolute z-30 top-full w-52 bg-white rounded-lg shadow-lg border-slate-200 p-6 translate-y-20 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible invisible transition'>
                            <ul>
                                <li className='font-semibold opacity-70'>Shorts & Jeans</li>
                                <li className='pt-3 font-semibold opacity-70'>Shirts</li>
                                <li className='pt-3 font-semibold opacity-70'>Safely Shoes</li>
                                <li className='pt-3 font-semibold opacity-70'>Wallet</li>
                            </ul>
                        </div>
                    </li>
                    <li className='relative group'>
                        <a href="" className='hoverEffect block'>womens's</a>
                        <div className='absolute z-30 top-full w-52 bg-white rounded-lg shadow-lg border-slate-200 p-6 translate-y-20 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible invisible transition'>
                            <ul>
                                <li className='font-semibold opacity-70'>Dress & Frock</li>
                                <li className='pt-3 font-semibold opacity-70'>Earrings</li>
                                <li className='pt-3 font-semibold opacity-70'>Necklace</li>
                                <li className='pt-3 font-semibold opacity-70'>Makeup kit</li>
                            </ul>
                        </div>
                    </li>
                    <li className='relative group'>
                        <a href="" className='hoverEffect block'>Jewelry</a>
                        <div className='absolute z-30 top-full w-52 bg-white rounded-lg shadow-lg border-slate-200 p-6 translate-y-20 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible invisible transition'>
                            <ul>
                                <li className='font-semibold opacity-70'>Earrings</li>
                                <li className='pt-3 font-semibold opacity-70'>Couple Rings</li>
                                <li className='pt-3 font-semibold opacity-70'>Necklace</li>
                                <li className='pt-3 font-semibold opacity-70'>Bracelets</li>
                            </ul>
                        </div>
                    </li>
                    <li className='relative group'>
                        <a href="" className='hoverEffect block'>PERFUME</a>
                        <div className='absolute z-30 top-full w-52 bg-white rounded-lg shadow-lg border-slate-200 p-6 translate-y-20 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible invisible transition'>
                            <ul>
                                <li className='font-semibold opacity-70'>Clothes Perfume</li>
                                <li className='pt-3 font-semibold opacity-70'>Deodorant</li>
                                <li className='pt-3 font-semibold opacity-70'>Flower Fragrance</li>
                                <li className='pt-3 font-semibold opacity-70'>Air Fresher</li>
                            </ul>
                        </div>
                    </li>
                    <li className='relative group'>
                        <a href=""  className='hoverEffect block'>BLOG</a>
                        
                    </li>
                    <li className='relative group'>
                        <a href=""  className='hoverEffect block'>Hot offers</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default Navbar