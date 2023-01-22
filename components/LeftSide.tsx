import React, { useState } from 'react'
import dress from '../public/images/icons/dress.svg';
import shoe from '../public/images/icons/shoes.svg'
import jewely from '../public/images/icons/jewelry.svg'
import perfume from '../public/images/icons/perfume.svg'
import comestic from '../public/images/icons/cosmetics.svg'
import glasses from '../public/images/icons/glasses.svg'
import bag from '../public/images/icons/bag.svg'
import { BsStarFill, BsStarHalf } from 'react-icons/bs';
import Product1 from '../public/images/products/1.jpg'
import Product2 from '../public/images/products/2.jpg'
import Product3 from '../public/images/products/3.jpg'
import Product4 from '../public/images/products/4.jpg'


const LeftSide = () => {
    const [active, setActive] = useState("");
    const edit = (category: string) => {
        if (category === active) return setActive("")
        setActive(category)
    }
    return (
        <div className='min-w-[calc(25%_-_15px)] sticky top-8  left-0'>
            <div className='w-full border-1 border-gray-300 rounded-lg p-5 mb-5'>
                <h3 className='text-lg uppercase font-semibold text-gray-500 mb-1'>Category</h3>
                <ul>
                    <li className='py-1 relative transition-all overflow-hidden'>
                        <div className='flex items-center justify-between'>
                            <div className='flex gap-1'>
                                <img src={dress.src} alt="" className='w-6 h-6' />
                                <span className='font-semibold text-gray-500'>Clothes</span>
                            </div>
                            <span className='text-lg font-bold text-gray-500 cursor-pointer' onClick={() => edit('clothes')}>{active === 'clothes' ? "-" : "+"}</span>
                        </div>
                        <ul className={`transition-all ${active === 'clothes' ? 'max-h-60' : 'max-h-0'} pt-1`}>
                            <li className='flex justify-between p-0'>
                                <span className='text-gray-500'>Shirts</span>
                                <span className='text-gray-500'>300</span>
                            </li>
                            <li className='flex justify-between p-0'>
                                <span className='text-gray-500'>Shortd & Jeans</span>
                                <span className='text-gray-500'>60</span>
                            </li>
                            <li className='flex justify-between p-0'>
                                <span className='text-gray-500'>Jacket</span>
                                <span className='text-gray-500'>50</span>
                            </li>
                            <li className='flex justify-between p-0'>
                                <span className='text-gray-500'>Dress & Frock</span>
                                <span className='text-gray-500'>87</span>
                            </li>
                        </ul>
                    </li>
                    <li className='py-1 relative transition-all overflow-hidden'>
                        <div className='flex items-center justify-between'>
                            <div className='flex gap-1'>
                                <img src={shoe.src} alt="" className='w-6 h-6' />
                                <span className='font-semibold text-gray-500'>Footwear</span>
                            </div>
                            <span className='text-lg font-bold text-gray-500 cursor-pointer' onClick={() => edit('footwear')}>{active === 'footwear' ? '-' : "+"}</span>
                        </div>
                        <ul className={`transition-all ${active === 'footwear' ? 'max-h-60' : 'max-h-0'} pt-1 `}>
                            <li className='flex justify-between p-0'>
                                <span className='text-gray-500'>Sports</span>
                                <span className='text-gray-500'>300</span>
                            </li>
                            <li className='flex justify-between p-0'>
                                <span className='text-gray-500'>Formal</span>
                                <span className='text-gray-500'>60</span>
                            </li>
                            <li className='flex justify-between p-0'>
                                <span className='text-gray-500'>Casual</span>
                                <span className='text-gray-500'>50</span>
                            </li>
                            <li className='flex justify-between p-0'>
                                <span className='text-gray-500'>Safely shoes</span>
                                <span className='text-gray-500'>87</span>
                            </li>
                        </ul>
                    </li>
                    <li className='py-1 relative transition-all overflow-hidden'>
                        <div className='flex items-center justify-between'>
                            <div className='flex gap-1'>
                                <img src={jewely.src} alt="" className='w-6 h-6' />
                                <span className='font-semibold text-gray-500'>Jewelary</span>
                            </div>
                            <span className='text-lg font-bold text-gray-500 cursor-pointer' onClick={() => edit('jewelary')}>{active === 'jewelary' ? '-' : "+"}</span>
                        </div>
                        <ul className={`transition-all ${active === 'jewelary' ? 'max-h-60' : 'max-h-0'} pt-1 `}>
                            <li className='flex justify-between p-0'>
                                <span className='text-gray-500'>Earrings</span>
                                <span className='text-gray-500'>300</span>
                            </li>
                            <li className='flex justify-between p-0'>
                                <span className='text-gray-500'>Couple Rings</span>
                                <span className='text-gray-500'>60</span>
                            </li>
                            <li className='flex justify-between p-0'>
                                <span className='text-gray-500'>Necklace</span>
                                <span className='text-gray-500'>50</span>
                            </li>
                        </ul>
                    </li>
                    <li className='py-1 relative transition-all overflow-hidden'>
                        <div className='flex items-center justify-between'>
                            <div className='flex gap-1'>
                                <img src={comestic.src} alt="" className='w-6 h-6' />
                                <span className='font-semibold text-gray-500'>Cosmetice</span>
                            </div>
                            <span className='text-lg font-bold text-gray-500 cursor-pointer' onClick={() => edit('cosmetics')}>{active === 'cosmetics' ? '-' : "+"}</span>
                        </div>
                        <ul className={`transition-all ${active === 'cosmetics' ? 'max-h-60' : 'max-h-0'} pt-1 `}>
                            <li className='flex justify-between p-0'>
                                <span className='text-gray-500'>Shampoo</span>
                                <span className='text-gray-500'>300</span>
                            </li>
                            <li className='flex justify-between p-0'>
                                <span className='text-gray-500'>Sunscreen</span>
                                <span className='text-gray-500'>60</span>
                            </li>
                            <li className='flex justify-between p-0'>
                                <span className='text-gray-500'>Body Wash</span>
                                <span className='text-gray-500'>50</span>
                            </li>
                            <li className='flex justify-between p-0'>
                                <span className='text-gray-500'>Markup kit</span>
                                <span className='text-gray-500'>87</span>
                            </li>
                        </ul>
                    </li>
                    <li className='py-1 relative transition-all overflow-hidden'>
                        <div className='flex items-center justify-between'>
                            <div className='flex gap-1'>
                                <img src={glasses.src} alt="" className='w-6 h-6' />
                                <span className='font-semibold text-gray-500'>Glasses</span>
                            </div>
                            <span className='text-lg font-bold text-gray-500 cursor-pointer' onClick={() => edit('glasses')}>{active === 'glasses' ? '-' : "+"}</span>
                        </div>
                        <ul className={`transition-all ${active === 'glasses' ? 'max-h-60' : 'max-h-0'} pt-1 `}>
                            <li className='flex justify-between p-0'>
                                <span className='text-gray-500'>Sunglasses</span>
                                <span className='text-gray-500'>300</span>
                            </li>
                            <li className='flex justify-between p-0'>
                                <span className='text-gray-500'>Lenses</span>
                                <span className='text-gray-500'>60</span>
                            </li>
                        </ul>
                    </li>
                    <li className='py-1 relative transition-all overflow-hidden'>
                        <div className='flex items-center justify-between'>
                            <div className='flex gap-1'>
                                <img src={bag.src} alt="" className='w-6 h-6' />
                                <span className='font-semibold text-gray-500'>Bags</span>
                            </div>
                            <span className='text-lg font-bold text-gray-500 cursor-pointer' onClick={() => edit('bags')}>{active === 'bags' ? '-' : "+"}</span>
                        </div>
                        <ul className={`transition-all ${active === 'bags' ? 'max-h-60' : 'max-h-0'} pt-1 `}>
                            <li className='flex justify-between p-0'>
                                <span className='text-gray-500'>Shopping bags</span>
                                <span className='text-gray-500'>300</span>
                            </li>
                            <li className='flex justify-between p-0'>
                                <span className='text-gray-500'>Gym Backbags</span>
                                <span className='text-gray-500'>60</span>
                            </li>
                            <li className='flex justify-between p-0'>
                                <span className='text-gray-500'>Purse</span>
                                <span className='text-gray-500'>50</span>
                            </li>
                            <li className='flex justify-between p-0'>
                                <span className='text-gray-500'>Wallet</span>
                                <span className='text-gray-500'>87</span>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div>
                <h3 className='uppercase text-md font-semibold text-gray-500'>Best Sells</h3>
                <div className='flex items-center gap-3 mt-3'>
                    <img className='w-20 h-20 rounded' src={Product1.src} alt="" />
                    <div>
                        <h5 className='text-md mb-1 text-gray-600'>Baby Fabric Shoes</h5>
                        <div className='flex items-center mb-1'>
                            <BsStarFill className='text-orange-300' />
                            <BsStarFill className='text-orange-300' />
                            <BsStarFill className='text-orange-300' />
                            <BsStarFill className='text-orange-300' />
                            <BsStarHalf className='text-orange-300' />
                        </div>
                        <div className='mb-1'>
                            <span className='text-sm line-through text-gray-400 pr-4'>$5.00</span>
                            <span className='text-md font-bold text-gray-500'>$4.00</span>
                        </div>
                    </div>
                </div>
                <div className='flex items-center gap-3 mt-3'>
                    <img className='w-20 h-20 rounded' src={Product2.src} alt="" />
                    <div>
                        <h5 className='text-md mb-1 text-gray-600'>Men's hoddie T-Shirt</h5>
                        <div className='flex items-center mb-1'>
                            <BsStarFill className='text-orange-300' />
                            <BsStarFill className='text-orange-300' />
                            <BsStarFill className='text-orange-300' />
                            <BsStarFill className='text-orange-300' />
                            <BsStarHalf className='text-orange-300' />
                        </div>
                        <div className='mb-1'>
                            <span className='text-sm line-through text-gray-400 pr-4'>$17.00</span>
                            <span className='text-md font-bold text-gray-500'>$7.00</span>
                        </div>
                    </div>
                </div>
                <div className='flex items-center gap-3 mt-3'>
                    <img className='w-20 h-20 rounded' src={Product3.src} alt="" />
                    <div>
                        <h5 className='text-md mb-1 text-gray-600'>Girls T-shirts</h5>
                        <div className='flex items-center mb-1'>
                            <BsStarFill className='text-orange-300' />
                            <BsStarFill className='text-orange-300' />
                            <BsStarFill className='text-orange-300' />
                            <BsStarFill className='text-orange-300' />
                            <BsStarHalf className='text-orange-300' />
                        </div>
                        <div className='mb-1'>
                            <span className='text-sm line-through text-gray-400 pr-4'>$5.00</span>
                            <span className='text-md font-bold text-gray-500'>$3.00</span>
                        </div>
                    </div>
                </div>
                <div className='flex items-center gap-3 mt-3'>
                    <img className='w-20 h-20 rounded' src={Product4.src} alt="" />
                    <div>
                        <h5 className='text-md mb-1 text-gray-600'>Wollen Hat for Men</h5>
                        <div className='flex items-center mb-1'>
                            <BsStarFill className='text-orange-300' />
                            <BsStarFill className='text-orange-300' />
                            <BsStarFill className='text-orange-300' />
                            <BsStarFill className='text-orange-300' />
                            <BsStarHalf className='text-orange-300' />
                        </div>
                        <div className='mb-1'>
                            <span className='text-sm line-through text-gray-400 pr-4'>$15.00</span>
                            <span className='text-md font-bold text-gray-500'>$12.00</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftSide