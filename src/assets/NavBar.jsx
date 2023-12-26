import { NavLink } from "react-router-dom";
import { BsCartFill } from 'react-icons/bs';
import { useSelector } from "react-redux";
function NavBar() {
    const { cart } = useSelector((state) => state);
    return (
        <div className="bg-slate-900 fixed w-full top-0 z-10" >
            <div className="container mx-auto px-5">
                <ul className="flex justify-between py-2">
                    <li><NavLink to='/'><img src="public\logo.jpg" className="rounded-sm h-8" alt="amazonIcon" /></NavLink></li>
                    <div className="flex items-center gap-3 text-white">
                        <li className=" active:text-green-600"><NavLink to='/'>Home</NavLink>
                        </li>
                        <li className="  relative"><NavLink to='/cart' ><BsCartFill />
                            {cart.length > 0 && <div className="absolute -top-1 -right-1 
                       rounded-full w-3 bg-green-500 text-[10px] text-center animate-bounce">{cart.length}</div>}</NavLink></li>
                    </div>
                </ul>
            </div>
        </div>
    )
}
export default NavBar;