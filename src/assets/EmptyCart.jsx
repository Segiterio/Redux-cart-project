import React from 'react'
import { Link } from 'react-router-dom'

export const EmptyCart = () => {
  return (
    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center font-bold'>
        <p className='mb-4'>Your Cart is Empty</p>
        <Link to='/' className='bg-green-500 px-3 py-1 rounded text-white hover:bg-green-600 duration-200'>Shop Now</Link>
    </div>
  )
}
