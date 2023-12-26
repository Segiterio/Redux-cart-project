import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { additem,removeItem } from '../Redux/Slices/CartSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function BtnAdd({item,dispatch,children}) 
{
    return ( <button className="bg-green-500 rounded-lg px-3 text-white"  onClick={() => {
        dispatch(additem(item));
        toast.success(`Added ${item.category}`,{
            position:"top-center",
            autoClose:2000,
            
        });
    }}>{children}</button>)
}

function BtnRemove({item,dispatch,children}) 
{
    return ( <button className='bg-red-500 rounded-lg px-3  text-white' onClick={() => {
        dispatch(removeItem(item.id));
        toast.error(`Remove ${item.category}`,{
            position:"top-center",
            autoClose:2000,
        });
    }}>{children}</button>)
}
export const Products = (props) => {
    const data = props.Data;
    const {cart} = useSelector((state) => state);
    const dispatch = useDispatch();
    console.log("cart");
    console.log(cart)
    return (
        <div className='flex flex-wrap gap-5 container justify-center items-center  mx-auto relative top-10 py-5'>
            {
                data.map((item) => {
                   const title = item.title.split(" ",4);
                   const des = item.description.split(" ",7);
                    return (<div key={item.id} className='flex flex-col items-center border p-4 justify-between shadow-lg duration-200 min-h-[450px] w-72 hover:scale-105' >
                        <h2 className=' font-bold text-center mb-4'>{title.join(" ")+" ..."}</h2>
                        <p>{des.join(" ")+ " ..."}</p>
                        <div className='w-full '>
                            <img src={item.image} alt={item.title} className='w-full object-contain h-52' />
                        </div>
                        <div className='flex w-full justify-between items-center '>
                            <p className='text-green-600 font-bold before:content-["$"]'>{item.price}</p>
                          {cart.find((val) => val.id === item.id) ?<BtnRemove item={item} dispatch={dispatch} >Remove item</BtnRemove> :<BtnAdd item={item} dispatch={dispatch} >Add to Cart</BtnAdd>
                           }
                        </div>
                    </div>)
                })
            }
            <ToastContainer/>
        </div>
    )
}
