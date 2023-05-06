import React, { useState} from 'react'
import { FiAlignJustify } from "react-icons/fi";
import { AiOutlineSearch, AiFillTag } from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai"; 
import { TbTruckDelivery } from "react-icons/tb"; 
import { MdFavorite,MdHelp } from "react-icons/md"; 
import { FaWallet } from "react-icons/fa"; 
import { FaUserFriends } from "react-icons/fa"; 

function Navbar() {
    const [nav, setNav] = useState(false);
  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4 ">
        <div className='flex items-center'>
            <div onClick={() => setNav(!nav)} className='cursor-pointer'>
                 <FiAlignJustify size={30}/>
            </div>
            <h1 className="text-2xl  text-amber-950 sm:text-3xl lg:text-4xl px-2">Best <span className='font-bold text-amber-950'>Eats</span></h1>
            <div className='hidden lg:flex items-center bg-yellow-400 rounded-full p-1 text-[14px]'>
                <p className='bg-yellow-600 text-white font-medium rounded-full p-2'>Delivery</p>
                <p className='p-2 text-white font-medium'>Pick Up</p>
            </div>
        </div>

        <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
            <AiOutlineSearch size={25}/>
            <input type="text" placeholder="Search tools" className='bg-transparent p-2 focus:outline-none' />
        </div>

        <button className='bg-yellow-400 text-white hidden  border-white md:flex items-center py-2'>
            <BsFillCartFill size={20} className='mr-2'/> <p className='font-medium'>Cart</p>
        </button>

    {/* Overlay */}
    {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 left-0'></div> : ''}


            {/* SIde drawer menu */}
            <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
                <AiOutlineClose onClick={() => setNav(!nav)} size={30} className='absolute right-4 top-4 cursor-pointer' />
                <h2 className='text-2xl p-4'>Best <span className='font-bold'>Eats</span></h2>
                <nav>
                    <ul className='flex flex-col p-4 text-gray-800'>
                        <li><TbTruckDelivery size={25} className='mr-4 ml-4 inline-block items-block'/>Orders</li>
                        <li><MdFavorite size={25} className='mr-4 ml-4 inline-block items-block'/>Favorites</li>
                        <li><FaWallet size={20} className='mr-4 ml-4 inline-block items-block'/>Wallet</li>
                        <li><MdHelp size={25} className='mr-4 ml-4 inline-block items-block'/>Help</li>
                        <li><AiFillTag size={25} className='mr-4 ml-4 inline-block items-block'/>Promotions</li>
                        <li><BsFillSaveFill size={20} className='mr-4 ml-4 inline-block items-block'/>Best ones</li>
                        <li><FaUserFriends size={25} className='mr-4 ml-4 inline-block items-block'/>Invite Friends</li>
                    </ul>
                </nav>
            </div>
        
    </div>
  )
}

export default Navbar