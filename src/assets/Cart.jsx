import React from 'react'
import { useSelector } from 'react-redux';
import { CartProducts } from './CartProducts';
import { EmptyCart } from './EmptyCart';
function Total({ cart }) {
  let sum = 0;
  cart.forEach((val) => sum += val.price);
  return (
   <div className="self-center flex flex-col gap-5">
    <p className='text-4xl font-bold'>Your Cart</p>
    <h2 className='font-semibold text-green-500 text-5xl'>SUMMARY</h2>
    <p className='text-3xl'>Total Items : {cart.length}</p>
    <p className='text-xl'>Total Amount : <span className='font-semibold text-green-500'>${sum.toPrecision(5)}</span> </p>
    <button className='bg-green-500 rounded-lg p-3 text-white  font-bold hover:bg-green-600 w-fit'>Checkout Now</button>
  </div>)
}

const Cart = () => {
  const { cart } = useSelector((state) => state);
  console.log(cart);
  return (<div>
    {
      cart.length > 0 ? <div className='container mx-auto relative top-12 flex gap-5 justify-between' >
        <div className='w-1/2'> {cart.map((singleitem) => <CartProducts key={singleitem.id} item={singleitem} />)}</div><Total cart={cart}/></div>:
        <div><EmptyCart /></div>
     }
  </div>
  );
}
export default Cart;
