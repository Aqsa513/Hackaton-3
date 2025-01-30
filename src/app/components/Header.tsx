import React from 'react'
import Link from 'next/link'
import Image from '../../public/Favicon.png';
import Logo from '../../public/logo.png';
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { BsBag } from "react-icons/bs";


const Header = () => {
  return (

    <div>
         <div className="flex justify-between items-center px-10 bg-light-gray">
        {/* Top Logo */}
          <img src="/Favicon.png"alt="Top Logo" />

        {/* Top Navigation */}
        <ul className="flex space-x-6 py-3">
          <li className="flex items-center border-r border-black pr-6">
            <Link href="./ProductList" className="leading-[14px]">
              Find a Store
            </Link>
          </li>
          <li className="flex items-center border-r border-black pr-6">
            <Link href="./Contactus" className="leading-[14px]">
              Help
            </Link>
          </li>
          <li className="flex items-center border-r border-black pr-6">
            <Link href="./Joinus" className="leading-[14px]">
              Join Us
            </Link>
          </li>
          <li className="flex items-center pr-6">
            <Link href="./Login" className="leading-[14px]">
              Sign In
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex px-10 justify-between items-center py-4">
        <Link href="/">
          <img src= "/logo.png" alt="Logo"/>
        </Link>
        <ul className="flex space-x-6">
            <li>
                <Link href="#">New & Featured</Link>
            </li>
            <li>
                <Link href="#">Men</Link>
            </li>
            <li>
                <Link href="#">Women</Link>
            </li>
            <li>
                <Link href="#">Kids</Link>
            </li>
            <li>
                <Link href="#">Sale</Link>
            </li>
            <li>
                <Link href="#">SNKRS</Link>
            </li>
        </ul>
        <div className="flex space-x-6">
            <div className="flex px-4 py-3 rounded-full w-[64%] bg-light-gray gap-3">
            <IoSearch />
                 <input className="pl-4 focus-visible:outline-none w-[64%] bg-light-gray" type="text" placeholder="Search" name="" id="" />
                 <FaRegHeart />
                 <BsBag />
            </div>
         </div>
      </div>
   
    </div>
  )
}

export default Header
