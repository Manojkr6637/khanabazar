import React from "react";
import { useState, useContext } from "react";
import { Link } from "react-router-dom"; 
import useOnlineStatus from "./../utils/useOnlineStatus";
import UserContext from "./../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
  const [btnName, setBtnName] = useState("Login")
  const status = useOnlineStatus();
  const {loginUser } = useContext(UserContext);
  // console.log("dddd", loginUser)
   // Subscribing to the store using a Selector
  const cartItems = useSelector((store) => store.cart.items);
  ///console.log("cartItems",cartItems);
  return (
    <div className='flex justify-between bg-pink-100 shadow-lg m-3 mb-2 px-2'>
      <div className="logo-part">
        <p><i className="fa-solid fa-mobile-retro"></i> &nbsp;
          Get the App</p>
         </div>
          <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online status:{ status?'online':'offline'}</li>
                    <li><Link to="/about">Investor Relations</Link></li>     
          <li className="px-4"><Link to="/contact">Add resturant </Link></li>
          <li className="px-4"><Link to="/restmenu/123">Resturant Menu </Link></li>
           <li className="px-4"><Link to="/grocery">Grocery </Link></li>
          <li  className="px-4"><button
            onClick={() => { 
              btnName == 'Login' ? setBtnName('Logout') :setBtnName('Login')               
            }}
          >{ btnName} </button></li> 
          <li><a href='#'>Sign up </a></li> 
          <li className="px-4"><Link to="/grocery">Grocery </Link></li>
          <li><a href='#' className="font-bold text-xl">Cart- ({ cartItems.length} items) </a></li> 
          <li className="px-4">{ loginUser } </li>
               </ul>
          </div>
      </div>)
}

export default Header;