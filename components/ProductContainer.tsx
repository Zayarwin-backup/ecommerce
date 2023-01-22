import React from 'react'
import LeftSide from './LeftSide'
import MainSide from './MainSide'

const ProductContainer = () => {
  return (
    <div className='my-4 mx-10'>
      <div className='flex mb-10 relative gap-10 items-start'>
        <LeftSide />
        <MainSide />
      </div>
    </div>
  )
}

export default ProductContainer;