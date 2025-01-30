import React from 'react'
import Link from 'next/link'
import { FaTwitter } from "react-icons/fa"
import { FaFacebookF } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { ImInstagram } from "react-icons/im";
import { FaLocationDot } from "react-icons/fa6";
 
const Footer = () => {
  return (
    <footer className='flex bg-black text-white py-8 ' > 
        <div className='w-10/12 mx-auto'>
          <div  className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">

          {/* Column 1 */}
          <div>
            <h3 className="text-sm font-semibold mb-4">FIND A STORE</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:underline">BECOME A MEMBER</Link></li>
              <li><Link href="#" className="hover:underline">SIGN UP FOR EMAIL</Link></li>
              <li><Link href="#" className="hover:underline">Send Us Feedback</Link></li>
              <li><Link href="#" className="hover:underline">STUDENT DISCOUNT</Link></li>

            </ul>
          </div>
  
          {/* Column 2 */}
          <div>
            <h3 className="text-sm font-semibold mb-4">GET HELP</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="#" className="hover:underline">Order Status</Link></li>
              <li><Link href="#" className="hover:underline">Delivery</Link></li>
              <li><Link href="#" className="hover:underline">Returns</Link></li>
              <li><Link href="#" className="hover:underline">Payment Options</Link></li>
              <li><Link href="#" className="hover:underline">Contact Us on Nike.com</Link></li>
              <li><Link href="#" className="hover:underline">Contact Us on All Other Inquiries</Link></li>
            </ul>
          </div>
  
          {/* Column 3 */}
          <div>
            <h3 className="text-sm font-semibold mb-4">ABOUT NIKE</h3>
            <ul className="space-y-2 text-sm  text-gray-400">
              <li><Link href="#" className="hover:underline">News</Link></li>
              <li><Link href="#" className="hover:underline">Careers</Link></li>
              <li><Link href="#" className="hover:underline">Investors</Link></li>
              <li><Link href="#" className="hover:underline">Sustainability</Link></li>
            </ul>
          </div>
  
          {/* Column 4 (Social Media Icons) */}
          <div className="flex justify-start lg:justify-end items-start gap-4 text-black">
            <div className='w-[30px] h-[30px] bg-gray-600 rounded-full flex justify-center items-center'><FaTwitter /></div>
            <div className='w-[30px] h-[30px] bg-gray-600 rounded-full flex justify-center items-center'><FaFacebookF /></div>
            <div className='w-[30px] h-[30px] bg-gray-600 rounded-full flex justify-center items-center'><TfiYoutube /></div>
            <div className='w-[30px] h-[30px] bg-gray-600 rounded-full flex justify-center items-center'><ImInstagram /></div>
          </div> 
        </div>
  
        {/* Bottom Section */}
        <div className="mt-8 flex flex-wrap justify-between items-center text-xs text-gray-400">
          {/* Country and Copyright */}
          <div className="flex mb-4 md:mb-0 gap-2">
          <FaLocationDot />
            <p>India</p>
            <p>© 2023 Nike, Inc. All Rights Reserved</p>
          </div>
  
          {/* Links */}
          <div className="flex flex-wrap gap-4">
            <Link href="#" className="hover:underline">Guides</Link>
            <Link href="#" className="hover:underline">Terms of Sale</Link>
            <Link href="#" className="hover:underline">Terms of Use</Link>
            <Link href="#" className="hover:underline">Nike Privacy Policy</Link>
          </div>
        </div>
          </div>
  

       
      </footer>
  )
}

export default Footer