import React from 'react'
import { IoIosArrowUp } from "react-icons/io";
import { HiChevronDown } from "react-icons/hi2";
import Image from 'next/image';
const ProductList = () => {

  const categories = [
    "Best Selling Products",
    "Best Shoes",
    "New Basketball Shoes",
    "New Football Shoes",
    "New Men's Shoes",
    "New Running Shoes",
    "Best Men's Shoes",
    "New Jordan Shoes",
    "Best Women's Shoes",
    "Best Training & Gym",
  ];

  return (
    <div className="bg-white min-h-screen ">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">New (500) </h1>
          <div className="flex space-x-4">
            <button className="flex items-center  px-4 py-2 ">
               Hide Filters <img src='frame.png'/>
            </button>
            <button className="flex items-center px-4 py-2">
               sort By  <HiChevronDown className='mr-2' />   
            </button>
          </div>
        </div>
      </header>
      {/* Main Section */}
      
      <div className="flex">
        <div className="w-full md:w-1/4  p-4 rounded-lg shadow-md">
        <ul className="space-y-2">
                <li className="text-gray-700 font-medium">Shoes</li>
                <li className="text-gray-700 font-medium">Sports Bras</li>
                <li className="text-gray-700 font-medium">Tops &amp; T-Shirts</li>
                <li className="text-gray-700 font-medium">Hoodies &amp; Sweatshirts</li>
                <li className="text-gray-700 font-medium">Jackets</li>
                <li className="text-gray-700 font-medium">Trousers &amp; Tights</li>
                <li className="text-gray-700 font-medium">Shorts</li>
                <li className="text-gray-700 font-medium">Tracksuits</li>
                <li className="text-gray-700 font-medium">Jumpsuits &amp; Rompers</li>
                <li className="text-gray-700 font-medium">Socks</li>
            </ul>
            <h1 className="font-semibold flex justify-between items-center text-lg mt-1">Gender
            <span>
              <IoIosArrowUp />
            </span>
            </h1>
            <ul className="space-y-2">
                <li className="text-gray-700">Men</li>
                <li className="text-gray-700">Women</li>
                <li className="text-gray-700">Unisex</li>
            </ul>
            <h3 className="font-semibold flex justify-between items-center text-lg mt-1">Kids
            <span>
              <IoIosArrowUp />
            </span>
            </h3>
            <ul className="space-y-2">
                <li className="text-gray-700">Boys</li>
                <li className="text-gray-700">Girls</li>
            </ul>
            <h3 className="font-semibold flex justify-between items-center text-lg mt-1">Shop by Price
            <span>
              <IoIosArrowUp />
            </span> 
            </h3>
            <ul className="space-y-2">
                <li className="text-gray-700">Under ₹ 2,500.00</li>
                <li className="text-gray-700">₹ 2,501.00 - ₹ 5,000.00</li>
            </ul>
        </div>
  {/* Section */}
        <div className="w-full md:w-3/4 px-5 py-5">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    <div>
        <div className="border rounded-lgw-full h-75 relative mb-4 shadow-md">
          <Image
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={"/N1.png"}
            width={300}
            height={300}
          />
        </div>
        <div className="mt-4">
          <h3 className="text-sm text-red-800 font-semibold mb-1">
            Just In
          </h3>
          <h2 className="font-medium text-gray-800">
          Nike Air Force 1 Mid '07
          </h2>
          <p className='text-sm text-gray-500'>Men's Shoes </p>
          <p className='text-sm text-gray-500'>1 Colour </p>
          <p className="font-semibold text-gray-800 mt-2">MRP : ₹ 10 795.00</p>
    
        </div>
        </div>
        <div>
        <div className="border rounded-lgw-full h-75 relative mb-4 shadow-md">
          <Image
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={"/N2.png"}
            width={300}
            height={300}
          />
        </div>
        <div className="mt-4">
          <h3 className="text-sm text-red-800 font-semibold mb-1">
            Just In
          </h3>
          <h2 className="font-medium text-gray-800">
          Nike Court Vision Low Next Nature
          </h2>
          <p className='text-sm text-gray-500'>Man's Shoes </p>
          <p className='text-sm text-gray-500'>1 Colour </p>
          <p className="font-semibold text-gray-800 mt-2">MRP : ₹ 4 995.00</p>
    
        </div>
        </div><div>
        <div className="border rounded-lgw-full h-75 relative mb-4 shadow-md">
          <Image
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={"/N3.png"}
            width={300}
            height={300}
          />
        </div>
        <div className="mt-4">
          <h3 className="text-sm text-red-800 font-semibold mb-1">
            Just In
          </h3>
          <h2 className="font-medium text-gray-800">
          Nike Air Force 1 PLT.AF.ORM
          </h2>
          <p className='text-sm text-gray-500'>Woman's Shoes </p>
          <p className='text-sm text-gray-500'>1 Colour </p>
          <p className="font-semibold text-gray-800 mt-2">MRP : ₹ 8 695.00</p>
    
        </div>
        </div>
        <div>
        <div className="border rounded-lgw-full h-75 relative mb-4 shadow-md">
          <Image
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={"/N4.png"}
            width={300}
            height={300}
          />
        </div>
        <div className="mt-4">
          <h3 className="text-sm text-red-800 font-semibold mb-1">
            Just In
          </h3>
          <h2 className="font-medium text-gray-800">
          Nike Air Force 1 React
          </h2>
          <p className='text-sm text-gray-500'>Men's Shoes </p>
          <p className='text-sm text-gray-500'>1 Colour </p>
          <p className="font-semibold text-gray-800 mt-2">MRP : ₹ 13 295.00</p>
    
        </div>
        </div>
        <div>
        <div className="border rounded-lgw-full h-75 relative mb-4 shadow-md">
          <Image
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={"/N5.png"}
            width={300}
            height={300}
          />
        </div>
        <div className="mt-4">
          <h3 className="text-sm text-red-800 font-semibold mb-1">
          Promo Exclusion
          </h3>
          <h2 className="font-medium text-gray-800">
          Air Jordan 1 Elevate Low
          </h2>
          <p className='text-sm text-gray-500'>Woman's Shoes </p>
          <p className='text-sm text-gray-500'>1 Colour </p>
          <p className="font-semibold text-gray-800 mt-2">MRP : ₹ 13 895.00</p>
    
        </div>
        </div>
        <div>
        <div className="border rounded-lgw-full h-75 relative mb-4 shadow-md">
          <Image
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={"/N6.png"}
            width={300}
            height={300}
          />
        </div>
        <div className="mt-4">
          <h3 className="text-sm text-red-800 font-semibold mb-1">
            Just In
          </h3>
          <h2 className="font-medium text-gray-800">
          Nike Standard Issue
          </h2>
          <p className='text-sm text-gray-500'>Women's Basketball Jersey </p>
          <p className='text-sm text-gray-500'>1 Colour </p>
          <p className="font-semibold text-gray-800 mt-2">MRP : ₹ 2 895.00</p>
    
        </div>
        </div>
        <div>
        <div className="border rounded-lgw-full h-75 relative mb-4 shadow-md">
          <Image
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={"/N7.png"}
            width={300}
            height={300}
          />
        </div>
        <div className="mt-4">
          <h3 className="text-sm text-red-800 font-semibold mb-1">
          Promo Exclusion
          </h3>
          <h2 className="font-medium text-gray-800">
          Nike Dunk Low Retro SE
          </h2>
          <p className='text-sm text-gray-500'>Men's Shoes </p>
          <p className='text-sm text-gray-500'>1 Colour </p>
          <p className="font-semibold text-gray-800 mt-2">MRP : ₹ 9 695.00</p>
    
        </div>
        </div>
        <div>
        <div className="border rounded-lgw-full h-75 relative mb-4 shadow-md">
          <Image
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={"/N8.png"}
            width={300}
            height={300}
          />
        </div>
        <div className="mt-4">
          <h3 className="text-sm text-red-800 font-semibold mb-1">
          Sustainable Materials
          </h3>
          <h2 className="font-medium text-gray-800">
          Nike Dri-FIT UV Hyverse
          </h2>
          <p className='text-sm text-gray-500'>Men's Short-Sleeve Graphic Fitness Top </p>
          <p className='text-sm text-gray-500'>1 Colour </p>
          <p className="font-semibold text-gray-800 mt-2">MRP : ₹ 2 495.00</p>
    
        </div>
        </div>
        <div>
        <div className="border rounded-lgw-full h-75 relative mb-4 shadow-md">
          <Image
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={"/N9.png"}
            width={300}
            height={300}
          />
        </div>
        <div className="mt-4">
          <h3 className="text-sm text-red-800 font-semibold mb-1">
            Just In
          </h3>
          <h2 className="font-medium text-gray-800">
          Nike Court Vision Low
          </h2>
          <p className='text-sm text-gray-500'>Men's Shoes </p>
          <p className='text-sm text-gray-500'>1 Colour </p>
          <p className="font-semibold text-gray-800 mt-2">MRP : ₹ 5 695.00</p>
    
        </div>
        </div>
        <div>
        <div className="border rounded-lgw-full h-75 relative mb-4 shadow-md">
          <Image
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={"/N10.png"}
            width={300}
            height={300}
          />
        </div>
        <div className="mt-4">
          <h3 className="text-sm text-red-800 font-semibold mb-1">
            Just In
          </h3>
          <h2 className="font-medium text-gray-800">
          Nike Dri-FIT Ready
          </h2>
          <p className='text-sm text-gray-500'>Men's Short-Sleeve Fitness Top </p>
          <p className='text-sm text-gray-500'>3 Colour </p>
          <p className="font-semibold text-gray-800 mt-2">MRP : ₹ 2 495.00</p>
    
        </div>
        </div>
        <div>
        <div className="border rounded-lgw-full h-75 relative mb-4 shadow-md">
          <Image
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={"/N11.png"}
            width={300}
            height={300}
          />
        </div>
        <div className="mt-4">
          <h3 className="text-sm text-red-800 font-semibold mb-1">
            Just In
          </h3>
          <h2 className="font-medium text-gray-800">
          Nike One Leak Protection: Period
          </h2>
          <p className='text-sm text-gray-500'>Women's Mid-Rise 18cm (approx.) Biker Shorts </p>
          <p className='text-sm text-gray-500'>2 Colour </p>
          <p className="font-semibold text-gray-800 mt-2">MRP : ₹ 3 395.00</p>
    
        </div>
        </div>
        <div>
        <div className="border rounded-lgw-full h-75 relative mb-4 shadow-md">
          <Image
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={"/N12.png"}
            width={300}
            height={300}
          />
        </div>
        <div className="mt-4">
          <h3 className="text-sm text-red-800 font-semibold mb-1">
            Just In
          </h3>
          <h2 className="font-medium text-gray-800">
          Nike Air Force 1 LV8 3
          </h2>
          <p className='text-sm text-gray-500'>Older Kids' Shoe </p>
          <p className='text-sm text-gray-500'>1 Colour </p>
          <p className="font-semibold text-gray-800 mt-2">MRP : ₹ 7 495.00</p>
    
        </div>
        </div>
        <div>
        <div className="border rounded-lgw-full h-75 relative mb-4 shadow-md">
          <Image
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={"/N13.png"}
            width={300}
            height={300}
          />
        </div>
        <div className="mt-4">
          <h3 className="text-sm text-red-800 font-semibold mb-1">
            Just In
          </h3>
          <h2 className="font-medium text-gray-800">
          Nike Blazer Low Platform
          </h2>
          <p className='text-sm text-gray-500'>Woman's Shoes </p>
          <p className='text-sm text-gray-500'>1 Colour </p>
          <p className="font-semibold text-gray-800 mt-2">MRP : ₹ 8 195.00</p>
    
        </div>
        </div>
        <div>
        <div className="border rounded-lgw-full h-75 relative mb-4 shadow-md">
          <Image
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={"/N14.png"}
            width={300}
            height={300}
          />
        </div>
        <div className="mt-4">
          <h3 className="text-sm text-red-800 font-semibold mb-1">
            Just In
          </h3>
          <h2 className="font-medium text-gray-800">
          Nike Air Force 1 '07
          </h2>
          <p className='text-sm text-gray-500'> Woman's Shoes </p>
          <p className='text-sm text-gray-500'>1 Colour </p>
          <p className="font-semibold text-gray-800 mt-2">MRP : ₹ 8 195.00</p>
    
        </div>
        </div>
        <div>
        <div className="border rounded-lgw-full h-75 relative mb-4 shadow-md">
          <Image
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={"/N15.png"}
            width={300}
            height={300}
          />
        </div>
        <div className="mt-4">
          <h3 className="text-sm text-red-800 font-semibold mb-1">
            Just In
          </h3>
          <h2 className="font-medium text-gray-800">
          Nike Pro Dri-FIT
          </h2>
          <p className='text-sm text-gray-500'>Men's Tight-Fit Sleeveless Top</p>
          <p className='text-sm text-gray-500'>1 Colour </p>
          <p className="font-semibold text-gray-800 mt-2">MRP : ₹ 1 495.00</p>
    
        </div>
        </div>
        <div>
        <div className="border rounded-lgw-full h-75 relative mb-4 shadow-md">
          <Image
            alt="ecommerce"
            className="object-cover object-center w-full h-75 full block"
            src={"/N16.png"}
            width={300}
            height={300}
          />
        </div>
        <div className="mt-4">
          <h3 className="text-sm text-red-800 font-semibold mb-1">
            Just In
          </h3>
          <h2 className="font-medium text-gray-800">
          Nike Dunk Low Retro
          </h2>
          <p className='text-sm text-gray-500'>Men's Shoes </p>
          <p className='text-sm text-gray-500'>1 Colour </p>
          <p className="font-semibold text-gray-800 mt-2">MRP : ₹ 8 695.00</p>
    
        </div>
        </div>
        <div>
        <div className="border rounded-lgw-full h-75 relative mb-4 shadow-md">
          <Image
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={"/N17.png"}
            width={300}
            height={300}
          />
        </div>
        <div className="mt-4">
          <h3 className="text-sm text-red-800 font-semibold mb-1">
            Just In
          </h3>
          <h2 className="font-medium text-gray-800">
          Nike Air Max SC
          </h2>
          <p className='text-sm text-gray-500'>Woman's Shoes </p>
          <p className='text-sm text-gray-500'>2 Colour </p>
          <p className="font-semibold text-gray-800 mt-2">MRP : ₹ 5 995.00</p>
    
        </div>
        </div>
        <div>
        <div className="border rounded-lgw-full h-75 relative mb-4 shadow-md">
          <Image
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={"/N18.png"}
            width={300}
            height={300}
          />
        </div>
        <div className="mt-4">
          <h3 className="text-sm text-red-800 font-semibold mb-1">
            Just In
          </h3>
          <h2 className="font-medium text-gray-800">
          Nike Dri-FIT UV Miler
          </h2>
          <p className='text-sm text-gray-500'>Men's Short-Sleeve Running Top </p>
          <p className='text-sm text-gray-500'>1 Colour </p>
          <p className="font-semibold text-gray-800 mt-2">MRP : ₹ 1 695.00</p>
    
        </div>
        </div>
        <div>
        <div className="border rounded-lgw-full h-75 relative mb-4 shadow-md">
          <Image
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={"/N19.png"}
            width={300}
            height={300}
          />
        </div>
        <div className="mt-4">
          <h3 className="text-sm text-red-800 font-semibold mb-1">
            Just In
          </h3>
          <h2 className="font-medium text-gray-800">
          Nike Air Max SYSTM
          </h2>
          <p className='text-sm text-gray-500'>Older Kids' Shoes </p>
          <p className='text-sm text-gray-500'>1 Colour </p>
          <p className="font-semibold text-gray-800 mt-2">MRP : ₹ 6 495.00</p>
    
        </div>
        </div>
        <div>
        <div className="border rounded-lgw-full h-75 relative mb-4 shadow-md">
          <Image
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={"/N20.png"}
            width={300}
            height={300}
          />
        </div>
        <div className="mt-4">
          <h3 className="text-sm text-red-800 font-semibold mb-1">
            Just In
          </h3>
          <h2 className="font-medium text-gray-800">
          Nike Alate All U
          </h2>
          <p className='text-sm text-gray-500'>Women's Light-Support Lightly Lined U-Neck Printed Sports Bra </p>
          <p className='text-sm text-gray-500'>1 Colour </p>
          <p className="font-semibold text-gray-800 mt-2">MRP : ₹ 2 195.00</p>
    
        </div>
        </div>
        <div>
        <div className="border rounded-lgw-full h-75 relative mb-4 shadow-md">
          <Image
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={"/N21.png"}
            width={300}
            height={300}
          />
        </div>
        <div className="mt-4">
          <h3 className="text-sm text-red-800 font-semibold mb-1">
            Just In
          </h3>
          <h2 className="font-medium text-gray-800">
          Nike Court Legacy Lift
          </h2>
          <p className='text-sm text-gray-500'>Woman's Shoes </p>
          <p className='text-sm text-gray-500'>1 Colour </p>
          <p className="font-semibold text-gray-800 mt-2">MRP : ₹ 7 495.00</p>
    
        </div>
        </div>
        <div>
        <div className="border rounded-lgw-full h-75 relative mb-4 shadow-md">
          <Image
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={"/N22.png"}
            width={300}
            height={300}
          />
        </div>
        <div className="mt-4">
          <h3 className="text-sm text-red-800 font-semibold mb-1">
            Just In
          </h3>
          <h2 className="font-medium text-gray-800">
          Nike Swoosh
          </h2>
          <p className='text-sm text-gray-500'> Women's Medium-support Padded Sports Bra Tank</p>
          <p className='text-sm text-gray-500'>2 Colour </p>
          <p className="font-semibold text-gray-800 mt-2">MRP : ₹ 3 095.00</p>
    
        </div>
        </div>
        <div>
        <div className="border rounded-lgw-full h-75 relative mb-4 shadow-md">
          <Image
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={"/N23.png"}
            width={300}
            height={300}
          />
        </div>
        <div className="mt-4">
          <h3 className="text-sm text-red-800 font-semibold mb-1">
            Just In
          </h3>
          <h2 className="font-medium text-gray-800">
          Nike SB Zoom Janoski OG+
          </h2>
          <p className='text-sm text-gray-500'> Shoes </p>
          <p className='text-sm text-gray-500'>1 Colour </p>
          <p className="font-semibold text-gray-800 mt-2">MRP : ₹ 8 595.00</p>
    
        </div>
        </div>
        <div>
        <div className="border rounded-lgw-full h-75 relative mb-4 shadow-md">
          <Image
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={"/N24.png"}
            width={300}
            height={300}
          />
        </div>
        <div className="mt-4">
          <h3 className="text-sm text-red-800 font-semibold mb-1">
            Just In
          </h3>
          <h2 className="font-medium text-gray-800">
          Nike Dri-FIT Run Division Rise 365
          </h2>
          <p className='text-sm text-gray-500'>Men's Running Tank </p>
          <p className='text-sm text-gray-500'>1 Colour </p>
          <p className="font-semibold text-gray-800 mt-2">MRP : ₹ 3 495.00</p>
    
        </div>
        </div>
        <div>
        <div className="border rounded-lgw-full h-75 relative mb-4 shadow-md">
          <Image
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={"/N25.png"}
            width={300}
            height={300}
          />
        </div>
        <div className="mt-4">
          <h3 className="text-sm text-red-800 font-semibold mb-1">
            Just In
          </h3>
          <h2 className="font-medium text-gray-800">
          Nike Dri-FIT Challenger
          </h2>
          <p className='text-sm text-gray-500'>Men's 18cm (approx.) 2-in-1 Versatile Shorts </p>
          <p className='text-sm text-gray-500'>1 Colour </p>
          <p className="font-semibold text-gray-800 mt-2">MRP : ₹ 2 495.00</p>
    
        </div>
        </div><div>
        <div className="border rounded-lgw-full h-75 relative mb-4 shadow-md">
          <Image
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={"/N26.png"}
            width={300}
            height={300}
          />
        </div>
        <div className="mt-4">
          <h3 className="text-sm text-red-800 font-semibold mb-1">
            Just In
          </h3>
          <h2 className="font-medium text-gray-800">
          Jordan Series ES
          </h2>
          <p className='text-sm text-gray-500'>Men's Shoes </p>
          <p className='text-sm text-gray-500'> 2 Colour </p>
          <p className="font-semibold text-gray-800 mt-2">MRP : ₹ 7 495.00</p>
    
        </div>
        </div><div>
        <div className="border rounded-lgw-full h-75 relative mb-4 shadow-md">
          <Image
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={"/N27.jpeg"}
            width={300}
            height={300}
          />
        </div>
        <div className="mt-4">
          <h3 className="text-sm text-red-800 font-semibold mb-1">
            Just In
          </h3>
          <h2 className="font-medium text-gray-800">
          Nike Outdoor Play
          </h2>
          <p className='text-sm text-gray-500'>Older Kids' Oversized Woven Jacket </p>
          <p className='text-sm text-gray-500'>1 Colour </p>
          <p className="font-semibold text-gray-800 mt-2">MRP : ₹ 3 895.00</p>
    
        </div>
        </div><div>
        <div className="border rounded-lgw-full h-75 relative mb-4 shadow-md">
          <Image
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={"/N28.png"}
            width={300}
            height={300}
          />
        </div>
        <div className="mt-4">
          <h3 className="text-sm text-red-800 font-semibold mb-1">
            Just In
          </h3>
          <h2 className="font-medium text-gray-800">
          Nike Sportswear Trend
          </h2>
          <p className='text-sm text-gray-500'>Older Kids' (Girls') High-waisted Woven Shorts </p>
          <p className='text-sm text-gray-500'>2 Colour </p>
          <p className="font-semibold text-gray-800 mt-2">MRP : ₹ 2 495.00</p>
    
        </div>
        </div><div>
        <div className="border rounded-lgw-full h-75 relative mb-4 shadow-md">
          <Image
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={"/N29.png"}
            width={300}
            height={300}
          />
        </div>
        <div className="mt-4">
          <h3 className="text-sm text-red-800 font-semibold mb-1">
            Just In
          </h3>
          <h2 className="font-medium text-gray-800">
          Nike Blazer Low '77 Jumbo
          </h2>
          <p className='text-sm text-gray-500'>Woman's Shoes </p>
          <p className='text-sm text-gray-500'>1 Colour </p>
          <p className="font-semibold text-gray-800 mt-2">MRP : ₹ 8 595.00</p>
    
        </div>
        </div><div>
        <div className="border rounded-lgw-full h-75 relative mb-4 shadow-md">
          <Image
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={"/N30.png"}
            width={300}
            height={300}
          />
        </div>
        <div className="mt-4">
          <h3 className="text-sm text-red-800 font-semibold mb-1">
            Just In
          </h3>
          <h2 className="font-medium text-gray-800">
          Nike SB Force 58
          </h2>
          <p className='text-sm text-gray-500'>Skate Shoe </p>
          <p className='text-sm text-gray-500'>1 Colour </p>
          <p className="font-semibold text-gray-800 mt-2">MRP : ₹ 5 995.00</p>
    
        </div>
           </div>
        </div>
        {/* Related categories */}
        <div className='my-10'>
        <h1 className="text-xl font-semibold my-5">Related Categories</h1>
        <div className="flex flex-wrap items-center space-x-2 space-y-2">
      {categories.map((category, index) => (
        <div
          key={index}
          className=" border border-gray-300 rounded-full px-4 py-2 text-sm text-gray-600 hover:bg-gray-200 cursor-pointer"
        >
          {category}
        </div>
      ))}
    </div>

        </div>
       
           </div>
    </div>       
   </div>             

  )
}

export default ProductList