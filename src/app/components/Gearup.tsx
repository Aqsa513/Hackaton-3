import React from 'react'
import Image from 'next/image'
import m1 from '../../../public/m1.png'
import m2 from '../../../public/m2.png'
import w1 from '../../../public/w1.png'
import w2 from '../../../public/w2.png'

const Gearup = () => {
  return (

       <div className="bg-white py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-900 mb-12 text-left">Gear Up</h2>
          
          {/* Shop Men's and Women's with Arrows */}
          <div className="flex justify-between mb-8">
            {/* Shop Men's Section */}
            <div className="flex items-center">
              <h2 className="text-1xl font-bold text-gray-900 ml-96">Shop Men</h2>
              <button className="w-[40px] h-[40px] bg-gray-100 rounded-full flex items-center justify-center ml-2">
                ←
              </button>
              <button className="w-[40px] h-[40px] bg-gray-300 rounded-full flex items-center justify-center ml-2">
                →
              </button>
            </div>
            
            {/* Shop Women's Section */}
            <div className="flex items-center">
              <h2 className="text-1xl font-bold text-gray-900">Shop Women</h2>
              <button className="w-[40px] h-[40px] bg-gray-100 rounded-full flex items-center justify-center ml-2">
                ←
              </button>
              <button className="w-[40px] h-[40px] bg-gray-300 rounded-full flex items-center justify-center ml-2">
                →
              </button>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-12">
            {/* Men's Section */}
            <div className="text-center flex flex-col items-center">
              <Image src= {m1} alt="Men's Top" width={300} height={300} />
              <h2 className="text-black flex font-medium mt-4 gap-2">Nike Dri-FIT ADV TechKnit Ultra 
                <p className=" flex text-black text-sm">₹ 3,895</p>
                </h2>
              <p className='text-gray-500 font-light'>Men's Short-Sleeve Running Top</p>
            </div>
            <div className="text-center flex flex-col items-center">
              <Image src= {m2} alt="Men's Shorts" width={300} height={300} />
              <h2 className="text-black font-medium mt-4 gap-2">Nike Dri-FIT Challenger
              <p className=" flex text-black text-sm">₹ 2,495</p>
              </h2>
            </div>
            <div className="text-center flex flex-col items-center ">
              <Image src= {w1} alt="Women's Top" width={300} height={300} />
              <h2 className="text-black font-medium mt-4 gap-2">Nike Dri-FIT ADV Run Division
              <p className=" flex text-black text-sm">₹ 5,295</p>
              </h2>
            </div>
            <div className="text-center flex flex-col items-center">
              <Image src= {w2} alt="Women's Leggings" width={300} height={300} />
              <h2 className="text-black font-medium mt-4">Nike Fast
              <p className= " flex text-black text-sm">₹ 3,795</p>
              </h2>
            </div>
          </div>
        </div>

    </div>
  )
}

export default Gearup