import React from 'react'
import './Spinner.css'
export const Spinner = () => {
  return (
    <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
    <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
    <p className='font-bold text-green-500 text-center'>Loading...</p></div>
  )
}
