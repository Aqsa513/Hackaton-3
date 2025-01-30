import React from 'react'
import Image from 'next/image'
import running from '../../../public/running.jpg'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

function Feature() {
  return (
    <div>
       {/* New Section  */}
       <div className="relative bg-white py-16 px-4">
        <h1 className='text-black font-bold text-lg my-0'>Featured</h1>
      <div className="max-w-7xl mx-auto text-center">
        <Image
          src="/running.jpg" 
          alt="Running Man"
          width={1200}
          height={600}
          className=" mx-auto"
        />
        <h1 className="mt-8 text-4xl sm:text-5xl lg:text-5xl font-bold text-Black">
          STEP INTO WHAT FEELS GOOD
        </h1>
        <p className="mt-4 text-sm  text-black ">
          Cause everyone should know the feeling of running in that perfect pair!
        </p>
        <button className="mt-6 px-6 py-3 bg-black text-white font-medium rounded-full">
          <Link href="/all-product">Find Your Shoe</Link>
        </button>
      </div>
    </div>

    </div>
  )
}

export default Feature
