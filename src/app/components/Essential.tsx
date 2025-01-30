import React from 'react'
import Image from 'next/image'

const Essential = () => {
  return (
    <section className='m-4'>
      <div>
         <h2 className="font-semibold text-xl py-5"> The Essentials</h2>
     </div>
     <div className='my-10 flex justify-center gap-2'>
     <Image width={500} height={300} alt="" src={"/E1.png"} />
        <Image width={500} height={300} alt="" src={"/E2.png"} />
        <Image width={500} height={300} alt="" src={"/E3.png"} />
     </div>
    </section>
  )
}

export default Essential