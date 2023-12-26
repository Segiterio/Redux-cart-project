import React, { useState } from 'react'
import { MdDelete } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { removeItem } from '../Redux/Slices/CartSlice'
import { ToastContainer, toast } from 'react-toastify'

function Image({ item }) {
  return (<div className='w-2/3'>
    <img className='object-contain w-[150px]' src={item.image} alt={item.title} />
  </div>);
}
function Details({ item, dispatch }) {
  const [h, setH] = useState(true);
  return (<div className='flex flex-col gap-3'>
    <h2 className='font-bold'>{item.title}</h2>

    {h ? (<p>{item.description.split(" ", 14).join(" ") + " ..."}<span onClick={() =>
     setH(!h)} className='text-green-500 cursor-pointer'>Read More</span></p>) : (<p>{item.description}<span onClick={() =>
      setH(!h)} className='text-green-500 cursor-pointer'> Show Less</span></p>)}


    <div className='flex justify-between'>
      <p className='text-green-600 font-bold before:content-["$"]'>{item.price}</p>
      <button title='Delete item' onClick={() => {
        console.log(item.id);
        dispatch(removeItem(item.id));
        toast.error("Item Removed", {
          position: "top-center",
          autoClose: 2000,
        });
      }} className='text-red-500 border p-2 rounded-full bg-red-200 hover:bg-red-300'><MdDelete className="text-xl" /></button>
    </div>
  </div>)
}

export const CartProducts = ({ item }) => {
  console.log(item);
  const dispatch = useDispatch();
  return (
    <div className="w-full flex items-center p-4 gap-4 max-w-2xl border-b-4 " >
      <div></div>
      <Image item={item} />
      <Details item={item} dispatch={dispatch} />
      <ToastContainer />
    </div>
  )
}
