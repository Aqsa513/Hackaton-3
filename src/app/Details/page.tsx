import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CiShoppingCart } from "react-icons/ci";

function page() {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between border p-4 rounded-lg bg-white shadow-md w-[90%] mx-auto mt-4 py-6">
    <div className="relative flex items-center justify-center w-full lg:w-1/3">
      <Image
        src="/shoe.png" 
        alt="Nike Air Force 1"
        className="w-full h-auto object-cover"
        width={800}
        height={700}
      />
      </div>
      {/* Right Section */}
      <div className="lg:w-2/3 mt-4 lg:mt-0 lg:pl-6 text-center lg:text-left">
      <h1 className="text-xl font-semibold mb-2">
        Nike Air Force 1
        </h1>
      <h2 className="text-xl font-semibold">PLT.AF.ORM</h2>
      <p className="text-sm  text-gray-600 mt-2">
        Turn style on its head with this crafted take on the Air Jordan 1
        Mid. Its "inside-out" inspired construction, including unique
        layering and exposed foam accents, ups the ante on this timeless
        Jordan Brand silhouette. Details like the deco stitching on the
        Swoosh add coveted appeal, while the unexpected shading, rich
        mixture of materials, and aged midsole aesthetic give this release
        an artisan finish.
      </p>
      
        <p className="text-lg font- semibold text-gray-900 mb-4">₹8,695.00</p>


        <Link href="./product-cart">
 
        <button className="flex items-center justify-center bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition duration-300">
        <CiShoppingCart className="w-6 h-6 mr-2" />
          Add to Cart
        </button>
        </Link>
      </div>
    </div>

  )
}

export default page

