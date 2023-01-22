import React from 'react'
import coat from '../public/images/icons/coat.svg'
import dress from '../public/images/icons/dress.svg'
import glass from '../public/images/icons/glasses.svg'
import short from '../public/images/icons/shorts.svg'
import tshirt from '../public/images/icons/tee.svg'
import jacket from '../public/images/icons/jacket.svg'
import watch from '../public/images/icons/watch.svg'
import hat from '../public/images/icons/hat.svg'

const Categories = () => {
  return (
    <div className='mx-10 my-4'>
        <div className='has-scrollbar flex overflow-x-auto gap-6'>
            <div className=' flex gap-2 min-w-[calc(25%_-_20px)] border-1 border-gray-200 rounded-lg items-center p-3'>
                <div className='w-14 h-14 bg-neutral-200 flex items-center justify-center rounded'>
                    <img src={dress.src}  alt="" className='w-8 h-8' />
                </div>
                <div className='flex flex-col grow'>
                    <div className='flex justify-between mb-1 items-center'>
                        <h4 className='text-sm uppercase font-semibold'>Dress & frock</h4>
                        <span className='text-xs'>(53)</span>
                    </div>
                    <span className='capitalize text-pink-300 text-sm mt-1'>Show all</span>
                </div>
            </div>
            <div className=' flex gap-2 min-w-[calc(25%_-_20px)] border-1 border-gray-200 rounded-lg items-center p-3'>
                <div className='w-14 h-14 bg-neutral-200 flex items-center justify-center rounded'>
                    <img src={coat.src}  alt="" className='w-8 h-8' />
                </div>
                <div className='flex flex-col grow'>
                    <div className='flex justify-between mb-1 items-center'>
                        <h4 className='text-sm uppercase font-semibold'>Winter wear</h4>
                        <span className='text-xs'>(53)</span>
                    </div>
                    <span className='capitalize text-pink-300 text-sm mt-1'>Show all</span>
                </div>
            </div>
            <div className=' flex gap-2 min-w-[calc(25%_-_20px)] border-1 border-gray-200 rounded-lg items-center p-3'>
                <div className='w-14 h-14 bg-neutral-200 flex items-center justify-center rounded'>
                    <img src={glass.src}  alt="" className='w-8 h-8' />
                </div>
                <div className='flex flex-col grow'>
                    <div className='flex justify-between mb-1 items-center'>
                        <h4 className='text-sm uppercase font-semibold'>Glasses & Leans</h4>
                        <span className='text-xs'>(53)</span>
                    </div>
                    <span className='capitalize text-pink-300 text-sm mt-1'>Show all</span>
                </div>
            </div>
            <div className=' flex gap-2 min-w-[calc(25%_-_20px)] border-1 border-gray-200 rounded-lg items-center p-3'>
                <div className='w-14 h-14 bg-neutral-200 flex items-center justify-center rounded'>
                    <img src={short.src}  alt="" className='w-8 h-8' />
                </div>
                <div className='flex flex-col grow'>
                    <div className='flex justify-between mb-1 items-center'>
                        <h4 className='text-sm uppercase font-semibold'>Short & Jean</h4>
                        <span className='text-xs'>(53)</span>
                    </div>
                    <span className='capitalize text-pink-300 text-sm mt-1'>Show all</span>
                </div>
            </div>
            <div className=' flex gap-2 min-w-[calc(25%_-_20px)] border-1 border-gray-200 rounded-lg items-center p-3'>
                <div className='w-14 h-14 bg-neutral-200 flex items-center justify-center rounded'>
                    <img src={tshirt.src}  alt="" className='w-8 h-8' />
                </div>
                <div className='flex flex-col grow'>
                    <div className='flex justify-between mb-1 items-center'>
                        <h4 className='text-sm uppercase font-semibold'>T-shirt</h4>
                        <span className='text-xs'>(53)</span>
                    </div>
                    <span className='capitalize text-pink-300 text-sm mt-1'>Show all</span>
                </div>
            </div>
            <div className=' flex gap-2 min-w-[calc(25%_-_20px)] border-1 border-gray-200 rounded-lg items-center p-3'>
                <div className='w-14 h-14 bg-neutral-200 flex items-center justify-center rounded'>
                    <img src={jacket.src}  alt="" className='w-8 h-8' />
                </div>
                <div className='flex flex-col grow'>
                    <div className='flex justify-between mb-1 items-center'>
                        <h4 className='text-sm uppercase font-semibold'>Jacket</h4>
                        <span className='text-xs'>(53)</span>
                    </div>
                    <span className='capitalize text-pink-300 text-sm mt-1'>Show all</span>
                </div>
            </div>
            <div className=' flex gap-2 min-w-[calc(25%_-_20px)] border-1 border-gray-200 rounded-lg items-center p-3'>
                <div className='w-14 h-14 bg-neutral-200 flex items-center justify-center rounded'>
                    <img src={watch.src}  alt="" className='w-8 h-8' />
                </div>
                <div className='flex flex-col grow'>
                    <div className='flex justify-between mb-1 items-center'>
                        <h4 className='text-sm uppercase font-semibold'>Watch</h4>
                        <span className='text-xs'>(53)</span>
                    </div>
                    <span className='capitalize text-pink-300 text-sm mt-1'>Show all</span>
                </div>
            </div>
            <div className=' flex gap-2 min-w-[calc(25%_-_20px)] border-1 border-gray-200 rounded-lg items-center p-3'>
                <div className='w-14 h-14 bg-neutral-200 flex items-center justify-center rounded'>
                    <img src={hat.src}  alt="" className='w-8 h-8' />
                </div>
                <div className='flex flex-col grow'>
                    <div className='flex justify-between mb-1 items-center'>
                        <h4 className='text-sm uppercase font-semibold'>Hats & caps</h4>
                        <span className='text-xs'>(53)</span>
                    </div>
                    <span className='capitalize text-pink-300 text-sm mt-1'>Show all</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Categories